const amqplib = require('amqplib');
const { 
    isArray, 
    isObject,
    getObjectKeys 
} = require('./helper');

class RMQueue
{
    constructor(url, queues){
        this.url = url;
        this.queues = queues;
        this.connection = null;

        if(!this.url){
            throw new Error("URL is required.");
        }

        if (!this.queues) {
            throw new Error("Queues is required.");
        }
        
        if(!isObject(this.queues) && !isArray(this.queues)){
            throw new Error("Queues must be an object or array.");
        }
    }

    async connect(){
        this.connection = await amqplib.connect(this.url);
        let channel    = await this.connection.createChannel();
        let queues = this.getQueueNames();
        
        for(let queue in queues){
            await channel.assertQueue(queue);
        }

        return {
            connection: this.connection,
            channel: channel
        };
    }

    async consume(){
        let { channel } = await this.connect();
        let queues = this.queues;
        for(let queue in queues){
            await channel.consume(queue, async (data) => {
                let content = Buffer.from(data.content).toString();
                await queues[queue](JSON.parse(content));
                await channel.ack(data);
            });
        }
    }

    async produce(queue, data){
        let { connection, channel } = await this.connect();
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        await channel.close();
        await connection.close();
    }

    getQueueNames(){
        if(isArray(this.queues)){
            return this.queues;
        }

        if(isObject(this.queues)){
            return getObjectKeys(this.queues);
        }

        throw new Error("Invalid queue type. Must be object or array.");
    }

    async closeConnection(){
        await this.connection.close();
    }
}

module.exports = {
    RMQueue,
};
  