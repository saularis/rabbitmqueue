const rabbitmqueue = require('rabbitmqueue');

const producer = rabbitmqueue.producer("amqp://localhost", ['default']);

producer.produce('default', {
    'key1': 'value1',
    'key2': 'value2'
});