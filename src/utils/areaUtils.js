export const areaUnitOptions = {
    squaremeter: 'sqauremeter',
    squarekilometer: 'squarekilometer',
    hectare: 'hectare',
    squaremile: 'squaremile',
    squareyard: 'squareyard',
    squarefoot: 'squarefoot',
    acre: 'acre',
    squareinch: 'squareinch',
    squarecentimeter: 'squarecentimeter',
};
const areaUnits = {
    squaremeter: {
        squarecentimeter: 10000,
        squarekilometer: 0.000001,
        squareinch: 1550.0031000062,
        squarefoot: 10.76391041671,
        squaremile: 0.00000038610215854781,
        squareyard: 1.1959900463011,
        acre: 0.00024710538146717,
        hectare: 0.0001,
    },
    squarekilometer: {
        squarecentimeter: 10000000000,
        squaremeter: 1000000,
        squareinch: 1550003100.0062,
        squarefoot: 10763910.41671,
        squaremile: 0.38610215854781,
        squareyard: 1195990.0463011,
        acre: 247.10538146717,
        hectare: 100,
    },
    hectare: {
        squarecentimeter: 100000000,
        squaremeter: 10000,
        squareinch: 15500031.000062,
        squarefoot: 107639.1041671,
        squaremile: 0.0038610215854781,
        squareyard: 11959.900463011,
        acre: 2.4710538146717,
        squarekilometer: 0.01,
    },
    squaremile: {
        squarecentimeter: 25899881103,
        squaremeter: 2589988.1103,
        squareinch: 4014489599.9442,
        squarefoot: 27878399.999612,
        hectare: 258.99881103,
        squareyard: 3097599.9999569,
        acre: 639.9999999911,
        squarekilometer: 2.5899881103,
    },
    squareyard: {
        squarecentimeter: 8361.2736,
        squaremeter: 0.83612736,
        squareinch: 1296,
        squarefoot: 9,
        hectare: 0.000083612736,
        squaremile: 0.00000032283057851688,
        acre: 0.00020661157024793,
        squarekilometer: 0.00000083612736,
    },
    squarefoot: {
        squarecentimeter: 929.0304,
        squaremeter: 0.09290304,
        squareinch: 144,
        squareyard: 0.11111111111111,
        hectare: 0.000009290304,
        squaremile: 0.000000035870064279654,
        acre: 0.000022956841138659,
        squarekilometer: 0.00000009290304,
    },
    acre: {
        squarecentimeter: 40468564.224,
        squaremeter: 4046.8564224,
        squareinch: 6272640,
        squareyard: 4840,
        hectare: 0.40468564224,
        squaremile: 0.0015625000000217,
        squarefoot: 43560,
        squarekilometer: 0.0040468564224,
    },
    squareinch: {
        squarecentimeter: 6.4516,
        squaremeter: 0.00064516,
        acre: 0.00000015942250790736,
        squareyard: 0.0007716049382716,
        hectare: 0.000000064516,
        squaremile: 0.00000000024909766860871,
        squarefoot: 0.0069444444444444,
        squarekilometer: 0.00000000064516,
    },
    squarecentimeter: {
        squareinch: 0.15500031000062,
        squaremeter: 0.0001,
        acre: 0.000000024710538146717,
        squareyard: 0.00011959900463011,
        hectare: 0.00000001,
        squaremile: 0.000000000038610215854781,
        squarefoot: 0.001076391041671,
        squarekilometer: 0.0000000001,
    },
};

export const convertArea = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (areaUnits[sourceUnit] && areaUnits[sourceUnit][targetUnit]) {
        return value * areaUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (areaUnits[targetUnit] && areaUnits[targetUnit][sourceUnit]) {
        return value / areaUnits[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};



// To use this Area Conversion Table, please consider to have a look at the examples bellow,

//Value in the cell of 4 th row and 3 rd column of the area conversion table is 10000. This means 1 hectare = 10000 square meter.
//Value in the cell of 10 th row and 7 th column of the area conversion table is 43560. This means 1 acre = 43560 square feet.
// Note: All area conversion factors are not exact and some of them are rounded to limit the number of digits. Also the area conversion factor for same area unit may vary based on the country, customery and context of use.