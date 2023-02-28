
interface RemixAttributes  {
    [key: string]: string | number
}

interface AttributeField {
    trait_type: string;
    value: string;
    traitType: string;
    traitValue: string;
}

type RawRemixAttributes = AttributeField[];

export const getAttributeValue = (attributes: RawRemixAttributes, attributeType: string): string | number => {
    let obj = attributes.find(x => x.trait_type === attributeType || x.traitType === attributeType);
    if (!obj) {
        return 0;
    }

    let value = obj!.value; 
    let parsed = parseFloat(value);
    if (!isNaN(parsed)) {
        return parsed;
    }
    return value;
};

export const getTokenAttributes = (attributes: RawRemixAttributes): RemixAttributes => {
    if (!attributes) {
        return {};
    }
    let keys = attributes.map(x => x.trait_type || x.traitType);
    let obj: RemixAttributes = {};
    for (let key of keys) {
        obj[key] = getAttributeValue(attributes, key);
    }
    return obj;
};

