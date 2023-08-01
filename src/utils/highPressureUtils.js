export const highPressureUnitOptions = {
    bar: 'bar',
    kilopascal: 'kilopascal',
    megapascal: 'megapascal',
    atmosphere: 'atmosphere',
    milliOfMercury: 'milliOfMercury',
    kgForcePerCmSq: 'kgForcePerCmSq',
    poundPerSqInch: 'poundPerSqInch',
};

const highPressureUtils = {
    bar: {
        poundPerSqInch: 14.50326,
        kilopascal: 100,
        megapascal: 0.1,
        kgForcePerCmSq: 1.01968,
        milliOfMercury: 750.0188,
        atmosphere: 0.987167,
    },
    poundPerSqInch: {
        bar: 0.06895,
        kilopascal: 6.895,
        megapascal: 0.006895,
        kgForcePerCmSq: 0.070307,
        milliOfMercury: 51.71379,
        atmosphere: 0.068065
    },
    kilopascal: {
        bar: 0.01,
        poundPerSqInch: 0.145038,
        megapascal: 0.001,
        kgForcePerCmSq: 0.010197,
        milliOfMercury: 7.50019,
        atmosphere: 0.009871,
    },
    megapascal: {
        bar: 10,
        poundPerSqInch: 145.038,
        kilopascal: 1000,
        kgForcePerCmSq: 10.1972,
        milliOfMercury: 7500.19,
        atmosphere: 9.8716,
    },
    kgForcePerCmSq: {
        bar: 0.980665,
        poundPerSqInch: 14.0981,
        kilopascal: 98.0665,
        megapascal: 0.0980665,
        milliOfMercury: 735.561,
        atmosphere: 0.967841,
    },
    milliOfMercury: {
        bar: 0.00133322,
        poundPerSqInch: 0.0193368,
        kilopascal: 0.133322,
        megapascal: 0.000133322,
        kgForcePerCmSq: 0.00135951,
        atmosphere: 0.00131579,
    },
    atmosphere: {
        bar: 1.01325,
        poundPerSqInch: 14.6959,
        kilopascal: 101.325,
        megapascal: 0.101325,
        kgForcePerCmSq: 1.03323,
        milliOfMercury: 760.002,
    },
};

export const convertHighPressure = (sourceUnit, targetUnit, sourceValue) => {
    if (sourceUnit === targetUnit) {
        return sourceValue;
    }
    if (highPressureUtils[sourceUnit] && highPressureUtils[sourceUnit][targetUnit]) {
        return sourceValue * highPressureUtils[sourceUnit][targetUnit];
    }
    if (highPressureUtils[targetUnit] && highPressureUtils[targetUnit][sourceUnit]) {
        return sourceValue / highPressureUtils[targetUnit][sourceUnit];
    }
    throw new Error("Conversion failed");
};