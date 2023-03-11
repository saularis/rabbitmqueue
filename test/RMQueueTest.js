const sinon = require('sinon');
const assert = require('assert');
const {RMQueue} = require('../src/RMQueue');

sinon.stub(RMQueue.prototype, 'connect').callsFake(() => {
    return new Promise((resolve, reject) => {
        resolve({
            connection: {
                close: () => {}
            },
            channel: {
                assertQueue: sinon.stub().returns(true),
                close: () => {}
            }
        });
    });
});

describe('RMQueue', function() {
    describe('Connect', function() {
        it('throw error if url is not provided', async() => {
            try {
                let rmqueue = new RMQueue('', []);
                let error = null;
                await rmqueue.connect();
            } catch (err) {
                error = err;
            }
            assert.equal(error.message, 'URL is required.');
        });

        it('throw error if queues is not provided', async() => {
            let error = null;
            try {
                let rmqueue = new RMQueue('amqp://localhost', null);
                await rmqueue.connect();
            } catch (err) {
                error = err;
            }
            assert.equal(error.message, 'Queues is required.');
        });

        it('throw error if queues is not an object or array', async() => {
            let error = null;
            try {
                let rmqueue = new RMQueue('amqp://localhost', 'test');
                await rmqueue.connect();
            } catch (err) {
                error = err;
            }
            assert.equal(error.message, 'Queues must be an object or array.');
        });

        it('should return an object with connection and channel properties', async() => {
            let rmqueue = new RMQueue('amqp://localhost', []);
            let returns = {};
            await rmqueue.connect()
                .then((result) => {
                    returns = result;
                })
                .finally(() => {
                    rmqueue.closeConnection();
                });
            assert.equal(true, returns.hasOwnProperty('connection'));
            assert.equal(true, returns.hasOwnProperty('channel'));
        });

        it('should match the queue parameter provided', async () =>{
            let queueNames = ['test'];
            let rmqueue = new RMQueue('amqp://localhost', queueNames);
            assert.equal(queueNames, rmqueue.queues);
        });

        it('should match the url parameter provided', async () =>{
            let url = 'amqp://localhost';
            let rmqueue = new RMQueue(url, []);
            assert.equal(url, rmqueue.url);
        });

        it('should start the connection', async () => {
            let rmqueue = new RMQueue('amqp://localhost', []);
            let result = await rmqueue.connect();
            assert.equal(true, result.connection.hasOwnProperty('close'));
            assert.equal(true, result.channel.hasOwnProperty('assertQueue'));
            assert.equal(true, result.channel.hasOwnProperty('close'));
            rmqueue.closeConnection();
        });

        it('getQueueNames should return an array of queue names', async () => {
            let queueNames = ['test'];
            let rmqueue = new RMQueue('amqp://localhost', queueNames);
            assert.equal(queueNames, rmqueue.getQueueNames());
        });

        it('getQueueNames should return object keys if object is provided', async () => {
            let queueNames = {
                test: () => {}
            };
            let rmqueue = new RMQueue('amqp://localhost', queueNames);
            assert.deepStrictEqual(['test'], rmqueue.getQueueNames());
        });

        
    });
});