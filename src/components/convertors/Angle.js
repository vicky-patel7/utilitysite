import React, { useState, useEffect } from 'react';
import { Stack, TextField, Typography, MenuItem } from '@mui/material';
import { convertAngle, angleUnitOptions } from '../../utils/angleUtils';

const unitOptions = Object.keys(angleUnitOptions);

const Angle = () => {
  const [sourceUnit, setSourceUnit] = useState('degrees');
  const [targetUnit, setTargetUnit] = useState('degrees');
  const [sourceValue, setSourceValue] = useState();
  const [result, setResult] = useState(0);

  const handleSourceUnit = (e) => {
    setSourceUnit(e.target.value);
  }
  const handleTargetUnit = (e) => {
    setTargetUnit(e.target.value);
  }
  const handleSourceValue = (e) => {
    setSourceValue(e.target.value);
  }
  useEffect(() => {
    try {
      console.log('UseEffect Running')
      setResult(convertAngle(sourceUnit, targetUnit, sourceValue));
    } catch (e) {
      console.log(e.message);
    }
  }, [sourceValue, sourceUnit, targetUnit]);

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
        }}>Angle Conversion</Typography>
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
          onChange={handleTargetUnit}
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

export default Angle