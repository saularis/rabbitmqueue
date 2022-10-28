const {RMQueue} = require('./src/RMQueue');

const init = (url, consumers) => {
    const rmqueue = new RMQueue(url, consumers);
    rmqueue.consume();
};

const producer = (url, consumers) => {
    return new RMQueue(url, consumers);
};

module.exports = {
    init,
    producer
};