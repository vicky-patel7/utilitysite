export const timeUnitOptions = {
    //milliseconds: 'milliseconds',
    //nanoseconds: 'nanoseconds',
    //microseconds: 'microseconds',
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    //months: 'months',
    years: 'years',
};

const timeUnits = {
    // milliseconds: {
        //nanoseconds: ,
        //microseconds: ,
        // seconds: ,
        // minutes: ,
        // hours: ,
        // days: ,
        // weeks: ,
        // months: ,
        // years: ,
    // },
    // nanoseconds: {
    //     milliseconds: ,
    //     microseconds: ,
    //     seconds: ,
    //     minutes: ,
    //     hours: ,
    //     days: ,
    //     weeks: ,
    //     months: ,
    //     years: ,
    // },
    // microseconds: {
    //     nanoseconds: ,
    //     milliseconds: ,
    //     seconds: ,
    //     minutes: ,
    //     hours: ,
    //     days: ,
    //     weeks: ,
    //     months: ,
    //     years: ,
    // },
    seconds: {
        //nanoseconds: ,
        //microseconds: ,
        //milliseconds: ,
        minutes: 0.01667,
        hours: 0.00028,
        days: 0.00001,
        weeks: 0.000002,
        //months: ,
        years: 0.0000003,
    },
    minutes: {
        // nanoseconds: ,
        // microseconds: ,
        seconds: 60,
        //milliseconds: ,
        hours: 0.01667,
        days: 0.00069,
        weeks: 0.000099,
        // months: ,
        years: 0.000002,
    },
    hours: {
        // nanoseconds: ,
        // microseconds: ,
        seconds: 3600,
        minutes: 60,
        //milliseconds: ,
        days: 0.04167,
        weeks: 0.005952,
        // months: ,
        years: 0.000114,
    },
    days : {
        seconds : 86400,
        minutes : 1440,
        hours : 24,
        weeks : 0.142857,
        years : 0.00274,
    },
    weeks: {
        //nanoseconds: ,
        //microseconds: ,
        seconds: 604800,
        minutes: 10080,
        hours: 168,
        days: 7,
        // milliseconds: ,
        // months: ,
        years: 0.019165,
    },
    // months: {
        // nanoseconds: ,
        // microseconds: ,
        // seconds: ,
        // minutes: ,
        // hours: ,
        // days: ,
        // weeks: ,
        // milliseconds: ,
        // years: ,
    // },
    years: {
        // nanoseconds: ,
        // microseconds: ,
        seconds: 31536000,
        minutes: 525600,
        hours: 8760,
        days: 365,
        weeks: 52,
        // months: 12,
        // milliseconds: ,
    },
};

export const convertTime = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (timeUnits[sourceUnit] && timeUnits[sourceUnit][targetUnit]) {
        return value * timeUnits[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (timeUnits[targetUnit] && timeUnits[targetUnit][sourceUnit]) {
        return value / timeUnits[targetUnit][sourceUnit];
    }
    throw new Error('Conversion not supported.');
};