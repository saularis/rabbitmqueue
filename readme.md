# RabbitMQueue
Simple queueing package for task queueing using rabbitmq

## Prerequisite
Install and start rabbitmq. Here's the link to download and installation [guide](https://www.rabbitmq.com/download.html).

## Installation
```properties
npm i rabbitmqueue
```

## Queue Daemon
Create a js file on the root directory of your project. Let's call it `rmq.js`.
```js
const rabbitmqueue = require('rabbitmqueue');

const consumers = {
    'default': function (data) {
        console.dir(data);
    }
};

rabbitmqueue.init("amqp://localhost", consumers);
```
Here `consumers` is an object containing queue names as key and job handling function as value.

We initialize the daemon using `init` where you must pass rabbitmq connection string and consumer object.

### Start Daemon
```properties
node rmq.js
```
>We can use PM2 on production.

## Producer in action
Here's how to push messages to queue.
```js
const rabbitmqueue = require('rabbitmqueue');

const producer = rabbitmqueue.producer("amqp://localhost", ['default']);

producer.produce('default', {
    'key1': 'value1',
    'key2': 'value2'
});
```


