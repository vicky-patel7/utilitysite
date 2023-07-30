export const angleUnitOptions = {
    degrees : 'degrees',
    radians : 'radians',
    gradians : 'gradians',
    minutes : 'minutes',
    seconds : 'seconds',
};

const angleUnits = {
    degrees : {
        radians : 0.0174533,
        gradians : 1.11111,
        minutes : 60,
        seconds : 3600,
    },
    radians : {
        degrees : 57.2958,
        gradians : 63.6619,
        minutes : 3437.75,
        seconds : 206265,
    },
    gradians : {
        degrees : 0.9,
        radians : 0.01570796,
        minutes : 54,
        seconds : 3240,
    },
    minutes : {
        degrees : 0.0166667,
        radians : 0.000290888,
        gradians : 0.0185185,
        seconds : 60,
    },
    seconds : {
        degrees : 0.0002778,
        radians : 0.000004848,
        gradians : 0.0003086,
        minutes : 0.0166667,
    }

};

export const convertAngle = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (angleUnits[sourceUnit] && angleUnits[sourceUnit][targetUnit]) {
        return value * angleUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (angleUnits[targetUnit] && angleUnits[targetUnit][sourceUnit]) {
        return value / angleUnits[targetUnit][sourceUnit];
    }

    throw new Error('Conversion not supported.');
};