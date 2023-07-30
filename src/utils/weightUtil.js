export const weightUnitOptions = {
    kilogram : 'kilogram',
    gram : 'gram',
    milligram : 'milligram',
    tonne : 'tonne',
    pound : 'pound',
    ounce : 'ounce',
    carat : 'carat',
    stone : 'stone',
}

const weightUnits = {
    kilogram: {
        gram: 1000,
        milligram: 1000000,
        tonne: 0.001,
        pound: 2.20462,
        ounce: 35.27396,
        carat: 5000,
        stone: 0.157473,
        // Add more conversions for kilogram as needed...
    },
    gram: {
        kilogram: 0.001,
        milligram: 1000,
        tonne: 0.000001,
        pound: 0.00220462,
        ounce: 0.03527396,
        carat: 5,
        stone: 0.000157473,
        // Add more conversions for gram as needed...
    },
    milligram: {
        kilogram: 0.000001,
        gram: 0.001,
        tonne: 0.000000001,
        pound: 0.00000220462,
        ounce: 0.00003527396,
        carat: 0.005,
        stone: 0.000000157473,
        // Add more conversions for milligram as needed...
    },
    tonne: {
        kilogram: 1000,
        gram: 1000000,
        milligram: 1000000000,
        pound: 2204.62,
        ounce: 35273.96,
        carat: 5000000,
        stone: 157.473,
        // Add more conversions for tonne as needed...
    },
    pound: {
        kilogram: 0.453592,
        gram: 453.592,
        milligram: 453592,
        tonne: 0.000453592,
        ounce: 16,
        carat: 2267.96,
        stone: 0.0714286,
        // Add more conversions for pound as needed...
    },
    ounce: {
        kilogram: 0.0283495,
        gram: 28.3495,
        milligram: 28349.5,
        tonne: 0.0000283495,
        pound: 0.0625,
        carat: 141.748,
        stone: 0.00446429,
        // Add more conversions for ounce as needed...
    },
    carat: {
        kilogram: 0.0002,
        gram: 0.2,
        milligram: 200,
        tonne: 0.0000002,
        pound: 0.000440925,
        ounce: 0.00705479,
        stone: 0.00003125,
        // Add more conversions for carat as needed...
    },
    stone: {
        kilogram: 6.35029,
        gram: 6350.29,
        milligram: 6350290,
        tonne: 0.00635029,
        pound: 14,
        ounce: 224,
        carat: 31751.5,
        // Add more conversions for stone as needed...
    },
}

export const convertWeight = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (weightUnits[sourceUnit] && weightUnits[sourceUnit][targetUnit]) {
        return value * weightUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (weightUnits[targetUnit] && weightUnits[targetUnit][sourceUnit]) {
        return value / weightUnits[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};