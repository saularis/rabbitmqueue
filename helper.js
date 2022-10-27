const isObject = (variable) =>{
    return (
        typeof variable === 'object' &&
        !Array.isArray(variable) &&
        variable !== null
    );
};

const isArray = (variable) => {
    return Array.isArray(variable);
};

const getObjectKeys = (object) => {
    return Object.keys(object);
};

module.exports = {
    isObject,
    isArray,
    getObjectKeys
};