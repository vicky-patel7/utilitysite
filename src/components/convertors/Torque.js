import React, { useState, useEffect } from 'react'
import { Stack, TextField, Typography, MenuItem } from '@mui/material'
import { convertTorque, torqueUnitOptions } from '../../../src/utils/torqueUtils'

const unitOptions = Object.keys(torqueUnitOptions);

const Torque = () => {
  const [sourceUnit, setSourceUnit] = useState('newtonMeter');
  const [targetUnit, setTargetUnit] = useState('newtonMeter');
  const [sourceValue, setSourceValue] = useState();
  const [result, setResult] = useState(0);
  
  useEffect(() => {
    try {
      setResult(convertTorque(sourceUnit, targetUnit, sourceValue));
    }catch (e) {
      console.log(e.message);
    }
  }, [sourceValue, targetUnit, sourceUnit])
  
  const handleSourceUnit = (e) => {
    setSourceUnit(e.target.value);
  }
  const handlTargetUnit = (e) => {
    setTargetUnit(e.target.value);
  }
  const handleSourceValue = (e) => {
    setSourceValue(e.target.value);
  }

  return (
    <Stack sx={{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Stack sx={{
        backgroundColor: '#304C89',
        width: '100%',
        alignItems: 'center',
        height: '40px',
        padding: '4px'
      }}>
        <Typography variant='h5' sx={{
          backgroundColor: '#304C89',
          color: 'white'
        }}>Torque Conversion</Typography>
      </Stack>
      <Stack spacing={1} sx={{
        margin: '10px',
        width: '80%',
      }}>
        <TextField
          label="Enter the Value here..."
          variant="outlined"
          value={sourceValue}
          onChange={handleSourceValue}
          type="number"
          placeholder='0'
        />

        <TextField
          select
          label="Source Unit"
          value={sourceUnit}
          variant="outlined"
          onChange={handleSourceUnit}
        >
          {unitOptions.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Target Unit"
          value={targetUnit}
          variant="outlined"
          onChange={handlTargetUnit}
        >
          {unitOptions.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </TextField>

        {sourceValue ? <Typography variant='h5'>{sourceValue} {sourceUnit} = {result} {targetUnit}</Typography> : ""}

      </Stack>
    </Stack>
  )
}

export default Torque;
