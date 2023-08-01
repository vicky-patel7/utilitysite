export const lowPressureUnitOptions = {
    meterOfWater: 'meterOfWater',
    footOfWater: 'footOfWater',
    cmOfMercury: 'cmOfMercury',
    inchesOfMercury: 'inchesOfMercury',
    inchesOfWater: 'inchesOfWater',
    pascal: 'pascal',
}

const lowPressureUtils = {
    meterOfWater: {
        footOfWater: 3.28084,
        cmOfMercury: 1333.22,
        inchesOfMercury: 39.3701,
        inchesOfWater: 393.701,
        pascal: 9806.65,
    },
    footOfWater: {
        meterOfWater: 0.3048,
        cmOfMercury: 12.0,
        inchesOfMercury: 0.4335275,
        inchesOfWater: 12.0,
        pascal: 2989.07,
    },
    cmOfMercury: {
        meterOfWater: 0.00075006375541921,
        footOfWater: 0.08333333333333333,
        inchesOfMercury: 0.029529983071445357,
        inchesOfWater: 0.2952998307144536,
        pascal: 7.500637554192099,
    },
    inchesOfMercury: {
        meterOfWater: 0.0254,
        footOfWater: 0.0735559,
        cmOfMercury: 33.8639,
        inchesOfWater: 10.0,
        pascal: 249.088,
    },
    inchesOfWater: {
        meterOfWater: 0.002539997464007961,
        footOfWater: 0.008333333333333333,
        cmOfMercury: 3.3863881578947367,
        inchesOfMercury: 0.1,
        pascal: 24.908,
    },
    pascal: {
        meterOfWater: 0.000101972,
        footOfWater: 0.000334552,
        cmOfMercury: 0.133322,
        inchesOfMercury: 0.00401463,
        inchesOfWater: 0.0401467,
    },
}

export const convertLowPressure = (sourceUnit, targetUnit, sourceValue) => {
    if(sourceUnit === targetUnit) {
        return sourceValue;
    }
    if(lowPressureUtils[sourceUnit] && lowPressureUtils[sourceUnit][targetUnit]) {
        return sourceValue * lowPressureUtils[sourceUnit][targetUnit];
    }
    if(lowPressureUtils[targetUnit] && lowPressureUtils[targetUnit][sourceUnit]) {
        return sourceValue / lowPressureUtils[targetUnit][sourceUnit];
    }
    throw new Error("Conversion failed");
}