"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenAttributes = exports.getAttributeValue = void 0;
const getAttributeValue = (attributes, attributeType) => {
    let obj = attributes.find(x => x.trait_type === attributeType || x.traitType === attributeType);
    if (!obj) {
        return 0;
    }
    let value = obj.value;
    let parsed = parseFloat(value);
    if (!isNaN(parsed)) {
        return parsed;
    }
    return value;
};
exports.getAttributeValue = getAttributeValue;
const getTokenAttributes = (attributes) => {
    if (!attributes) {
        return {};
    }
    let keys = attributes.map(x => x.trait_type || x.traitType);
    let obj = {};
    for (let key of keys) {
        obj[key] = (0, exports.getAttributeValue)(attributes, key);
    }
    return obj;
};
exports.getTokenAttributes = getTokenAttributes;
