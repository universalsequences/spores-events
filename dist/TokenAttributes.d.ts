interface RemixAttributes {
    [key: string]: string | number;
}
interface AttributeField {
    trait_type: string;
    value: string;
    traitType: string;
    traitValue: string;
}
declare type RawRemixAttributes = AttributeField[];
export declare const getAttributeValue: (attributes: RawRemixAttributes, attributeType: string) => string | number;
export declare const getTokenAttributes: (attributes: RawRemixAttributes) => RemixAttributes;
export {};
