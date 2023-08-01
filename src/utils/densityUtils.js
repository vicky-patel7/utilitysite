export const densityUnitOptions = {
    gramPerMilliliter: 'gramPerMilliliter',
    kgPerMetercube: 'kgPerMetercube',
    poundPerFootcube: 'poundPerFootcube',
    poundPerInchcube: 'poundPerInchcube',
}

const densityUtils = {
    gramPerMilliliter: {
        kgPerMetercube: 1000,
        poundPerFootcube: 62.4272,
        poundPerInchcube: 0.0361273,
    },
    kgPerMetercube: {
        gramPerMilliliter: 0.001,
        poundPerFootcube: 0.0624272,
        poundPerInchcube: 0.0000361273,
    },
    poundPerFootcube: {
        gramPerMilliliter: 16.0185,
        kgPerMetercube: 16.0185,
        poundPerInchcube: 0.000578704,
    },
    poundPerInchcube: {
        gramPerMilliliter: 27679.9,
        kgPerMetercube: 27679.9,
        poundPerFootcube: 1728,
    },
}

export const convertDensity = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (densityUtils[sourceUnit] && densityUtils[sourceUnit][targetUnit]) {
        return value * densityUtils[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (densityUtils[targetUnit] && densityUtils[targetUnit][sourceUnit]) {
        return value / densityUtils[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};