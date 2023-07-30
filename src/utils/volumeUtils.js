export const volumeUnitOptions = {
    milliliter: 'milliliter',
    liter: 'liter',
    kiloliter: 'kiloliter',
    gallon: 'gallon',
    cubiccentimeter: 'cubiccentimeter',
    cubicmeter : 'cubicmeter',
    barrel : 'barrel',
    cubicinch : 'cubicinch',
    cubicfeet : 'cubicfeet',
}

const volumeUnits = {
    cubicmeter: {
        liter: 1000,
        milliliter: 1000000,
        kiloliter: 1,
        gallon: 264.172,
        barrel: 6.28981,
        cubiccentimeter: 1000000000,
        cubicfeet: 35.3147,
        cubicinch: 61023.7,
        // Add more conversions for cubicMeter as needed...
    },
    liter: {
        cubicmeter: 0.001,
        milliliter: 1000,
        kiloliter: 0.000001,
        gallon: 0.264172,
        barrel: 0.00628981,
        cubiccentimeter: 1000,
        cubicfeet: 0.0353147,
        cubicinch: 61.0237,
        // Add more conversions for liter as needed...
    },
    milliliter: {
        cubicmeter: 0.000001,
        liter: 0.001,
        kiloliter: 0.000000001,
        gallon: 0.000264172,
        barrel: 0.00000628981,
        cubiccentimeter: 1,
        cubicfeet: 0.0000353147,
        cubicinch: 0.0610237,
        // Add more conversions for milliliter as needed...
    },
    kiloliter: {
        cubicmeter: 1000,
        liter: 1000000,
        milliliter: 1000000000,
        gallon: 264.172,
        barrel: 6.28981,
        cubiccentimeter: 1000000000000,
        cubicfeet: 35314.7,
        cubicinch: 61023700,
        // Add more conversions for kiloliter as needed...
    },
    gallon: {
        cubicmeter: 0.00378541,
        liter: 3.78541,
        milliliter: 3785.41,
        kiloliter: 0.00000378541,
        barrel: 0.0238095,
        cubiccentimeter: 3785.41,
        cubicfeet: 0.133681,
        cubicinch: 231,
        // Add more conversions for gallon as needed...
    },
    barrel: {
        cubicmeter: 0.158987,
        liter: 158.987,
        milliliter: 158987,
        kiloliter: 0.000158987,
        gallon: 42,
        cubiccentimeter: 158987,
        cubicfeet: 5.61458,
        cubicinch: 9702,
        // Add more conversions for barrel as needed...
    },
    cubiccentimeter: {
        cubicmeter: 0.000000001,
        liter: 0.001,
        milliliter: 1,
        kiloliter: 0.000000000001,
        gallon: 0.000264172,
        barrel: 0.00000628981,
        cubicfeet: 0.0000353147,
        cubicinch: 0.0610237,
        // Add more conversions for cubicCentimeter as needed...
    },
    cubicfeet: {
        cubicmeter: 0.0283168,
        liter: 28.3168,
        milliliter: 28316.8,
        kiloliter: 0.0000283168,
        gallon: 7.48052,
        barrel: 0.178107,
        cubiccentimeter: 28316.8,
        cubicinch: 1728,
        // Add more conversions for cubicFeet as needed...
    },
    cubicinch: {
        cubicmeter: 0.0000163871,
        liter: 0.0163871,
        milliliter: 16.3871,
        kiloliter: 0.0000000163871,
        gallon: 0.004329,
        barrel: 0.000103079,
        cubiccentimeter: 16.3871,
        cubicfeet: 0.000578704,
        // Add more conversions for cubicInch as needed...
    },
};

export const convertVolume = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (volumeUnits[sourceUnit] && volumeUnits[sourceUnit][targetUnit]) {
        return value * volumeUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (volumeUnits[targetUnit] && volumeUnits[targetUnit][sourceUnit]) {
        return value / volumeUnits[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};