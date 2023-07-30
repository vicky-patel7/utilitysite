export const lengthUnitOptions = {
    meter: 'meter',
    centimeter: 'centimeter',
    millimeter: 'millimeter',
    inch: 'inch',
    foot: 'foot',
    decimeter: 'decimeter',
    kilometer: 'kilometer',
    yard: 'yard',
    mile: 'mile',
};
const lengthUnits = {
    meter: {
        centimeter: 100,
        millimeter: 1000,
        inch: 39.3701,
        foot: 3.28084,
        decimeter: 10,
        kilometer: 0.001,
        mile: 0.0006214,
        yard: 1.093,
        // Add more conversions for meter as needed...
    },
    centimeter: {
        meter: 0.01,
        millimeter: 10,
        inch: 0.393701,
        foot: 0.328084,
        decimeter: 0.1,
        kilometer: 0.00001,
        mile: 0.000006214,
        yard: 0.010936,
        // Add more conversions for centimeter as needed...
    },
    millimeter: {
        meter: 0.001,
        centimeter: 0.1,
        inch: 0.03937,
        foot: 0.003281,
        decimeter: 0.1,
        kilometer: 0.000001,
        mile: 0.0000006214,
        yard: 0.0010936,
        // Add more conversions for millimeter as needed...
    },
    kilometer: {
        meter: 1000,
        centimeter: 100000,
        inch: 39370,
        foot: 3281,
        decimeter: 0.1,
        millimeter: 1000000,
        mile: 0.6214,
        yard: 1093.6,
        // Add more conversions for millimeter as needed...
    },
    inch: {
        meter: 0.0254,
        centimeter: 2.54,
        kilometer: 0.0000254,
        foot: 0.08333,
        decimeter: 0.1,
        millimeter: 25.4,
        mile: 0.000015783,
        yard: 0.02778,
        // Add more conversions for millimeter as needed...
    },
    foot: {
        meter: 0.3048,
        centimeter: 30.48,
        kilometer: 0.0003048,
        inch: 12,
        decimeter: 0.1,
        millimeter: 304.8,
        mile: 0.0001894,
        yard: 0.33333
        // Add more conversions for millimeter as needed...
    },
    yard: {
        meter: 0.9144,
        centimeter: 91.44,
        kilometer: 0.0009144,
        inch: 36,
        decimeter: 0.1,
        millimeter: 914.4,
        mile: 0.0005682,
        foot: 3,
        // Add more conversions for millimeter as needed...
    },
    mile: {
        meter: 1609.3,
        centimeter: 160934,
        kilometer: 1.6093,
        inch: 63360,
        decimeter: 0.1,
        millimeter: 1609344,
        yard: 1760,
        foot: 5280,
        // Add more conversions for millimeter as needed...
    },
    // Add more length units and their conversions...
};

export const convertLength = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (lengthUnits[sourceUnit] && lengthUnits[sourceUnit][targetUnit]) {
        return value * lengthUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (lengthUnits[targetUnit] && lengthUnits[targetUnit][sourceUnit]) {
        return value / lengthUnits[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};