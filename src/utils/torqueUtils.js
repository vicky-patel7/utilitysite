export const torqueUnitOptions = {
    newtonMeter: 'newtonMeter',
    kgForceMeter: 'kgForceMeter',
    footPound: 'footPound',
    inchPound: 'inchPound',
}


const torqueUtils = {
    newtonMeter: {
        kgForceMeter: 0.101972,
        footPound: 0.737562,
        inchPound: 8.85075,
    },
    kgForceMeter: {
        newtonMeter: 9.80665,
        footPound: 7.23301,
        inchPound: 86.7962,
    },
    footPound: {
        newtonMeter: 1.35582,
        kgForceMeter: 0.138255,
        inchPound: 12,
    },
    inchPound: {
        newtonMeter: 0.112985,
        kgForceMeter: 0.0115212,
        footPound: 0.0833333,
    },
}


export const convertTorque = (sourceUnit, targetUnit, value) => {
    if (sourceUnit === targetUnit) {
        return value;
    }
    if (torqueUtils[sourceUnit] && torqueUtils[sourceUnit][targetUnit]) {
        return value * torqueUtils[sourceUnit][targetUnit];
    }
    // If conversion is not defined, try the reverse conversion
    if (torqueUtils[targetUnit] && torqueUtils[targetUnit][sourceUnit]) {
        return value / torqueUtils[targetUnit][sourceUnit];
    }

    throw new Error('Conversion failed.');
};