const isObject = (variable) =>{
    return (
        typeof variable === 'object' &&
        !Array.isArray(variable) &&
        variable !== null &&
        !(variable instanceof Date) &&
        !(variable instanceof RegExp) &&
        !(variable instanceof Error)
    );
};

const isArray = (variable) => {
    return Array.isArray(variable);
};

const getObjectKeys = (object) => {
    if(!isObject(object)){
        return [];
    }
    return Object.keys(object);
};

module.exports = {
    isObject,
    isArray,
    getObjectKeys
};