const rabbitmqueue = require('rabbitmqueue');

const consumers = {
    'default': function (data) {
        console.dir(data);
    }
};

rabbitmqueue.init("amqp://localhost", consumers);