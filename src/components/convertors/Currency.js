import React, { useState, useEffect } from 'react'
import { Stack, TextField, Typography, MenuItem } from '@mui/material'
import { symbols } from '../../../src/utils/currency'

const currencyArray = Object.entries(symbols).map(([code, name], index) => ({
  id: index + 1,
  code,
  name
}));

const Currency = () => {
  const [sourceUnit, setSourceUnit] = useState('USD');
  const [targetUnit, setTargetUnit] = useState('INR');
  const [sourceValue, setSourceValue] = useState(0);
  const [result, setResult] = useState();
  const host = 'api.frankfurter.app';
  useEffect(() => {
    if(targetUnit === sourceUnit) {
      setResult(sourceValue);
    }
    else if (sourceValue !== null) {
      fetch(`https://${host}/latest?amount=${sourceValue}&from=${sourceUnit}&to=${targetUnit}`)
        .then(resp => resp.json())
        .then((data) => {
          const res = data.rates[targetUnit];
          setResult((prev) => res);
        })
        .catch(error => {
          console.log(error);
        })
    }else {
      console.log('Error fetching the data');
    }
    return () => {

    }
  }, [sourceValue, targetUnit, sourceUnit])

  const handleSourceUnit = (e) => {
    // console.log(e);
    setSourceUnit(e.target.value);
  }
  const handlTargetUnit = (e) => {
    // console.log(e);
    setTargetUnit(e.target.value);
  }
  const handleSourceValue = (e) => {
    // console.log(e);
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
        }}>Currency Conversion</Typography>
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
          {currencyArray.map((unit) => (
            <MenuItem key={unit.id} value={unit.code}>
              {unit.name}
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
          {currencyArray.map((unit) => (
            <MenuItem key={unit.id} value={unit.code}>
              {unit.name}
            </MenuItem>
          ))}
        </TextField>
        {sourceValue ? <Typography variant='h5'>{sourceValue} {sourceUnit} = {result} {targetUnit}</Typography> : ""}
      </Stack>
    </Stack>
  )
}

export default Currency