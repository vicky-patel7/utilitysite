export const speedUnitOptions = {
    meterPerSecond: 'meterPerSecond',
    meterPerMinute: 'meterPerMinute',
    kmPerHour: 'kmPerHour',
    footPerSecond: 'footPerSecond',
    footPerMinute: 'footPerMinute',
    milesPerHour: 'milesPerHour',
}

const speedUtils = {
    meterPerSecond: {
        meterPerMinute: 60,
        kmPerHour: 3.6,
        footPerSecond: 3.28084,
        footPerMinute: 196.85,
        milesPerHour: 2.23694,
    },
    meterPerMinute: {
        meterPerSecond: 0.0166667,
        kmPerHour: 0.06,
        footPerSecond: 0.0546807,
        footPerMinute: 3.28084,
        milesPerHour: 0.0372823,
    },
    kmPerHour: {
        meterPerSecond: 0.277778,
        meterPerMinute: 16.6667,
        footPerSecond: 0.911344,
        footPerMinute: 54.6807,
        milesPerHour: 0.621371,
    },
    footPerSecond: {
        meterPerSecond: 0.3048,
        meterPerMinute: 18.288,
        kmPerHour: 1.09728,
        footPerMinute: 60,
        milesPerHour: 0.681818,
    },
    footPerMinute: {
        meterPerSecond: 0.00508,
        meterPerMinute: 0.3048,
        kmPerHour: 0.018288,
        footPerSecond: 0.0166667,
        milesPerHour: 0.0113636,
    },
    milesPerHour: {
        meterPerSecond: 0.44704,
        meterPerMinute: 26.8224,
        kmPerHour: 1.60934,
        footPerSecond: 1.46667,
        footPerMinute: 88,
    },
}

export const convertSpeed = (sourceUnit, targetUnit, sourceValue) => {
    if (sourceUnit === targetUnit) {
        return sourceValue;
    }
    if (speedUtils[sourceUnit] && speedUtils[sourceUnit][targetUnit]) {
        return sourceValue * speedUtils[sourceUnit][targetUnit];
    }
    if (speedUtils[targetUnit] && speedUtils[targetUnit][sourceUnit]) {
        return sourceValue / speedUtils[targetUnit][sourceUnit];
    }
    throw new Error('Conversion failed');
}