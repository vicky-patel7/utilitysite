import React, { useState } from 'react'
import { Typography, Stack, TextField } from '@mui/material'

const Temperature = () => {
  const [cel, setCel] = useState(0);
  const [fah, setfah] = useState(32);
  const [kel, setkel] = useState(273);

  const onChangeHandlerCelcius = (e) => {
    setCel(parseFloat(e.target.value));
    let celsius = e.target.value;
    let fahrenheit = (celsius * (9 / 5.0)) + 32;
    if (!Number.isInteger(fahrenheit)) {
      fahrenheit = fahrenheit.toFixed(4);
    }
    let kelvin = parseFloat(celsius) + 273;
    setfah(fahrenheit);
    setkel(kelvin);
  }

  const onChangeHandlerFah = (e) => {
    setfah(parseFloat(e.target.value));
    let fahrenheit = e.target.value;
    let celsius = (fahrenheit - 32) * (5 / 9.0);
    if (!Number.isInteger(celsius)) {
      celsius = celsius.toFixed(4);
    }
    let kelvin = parseFloat(celsius) + 273;
    setCel(celsius);
    setkel(kelvin);
  }
  const onChangeHandlerKelvin = (e) => {
    setkel(parseFloat(e.target.value));
    let kelv = e.target.value;
    let celsius = kelv - 273;
    let fahrenheit = (celsius * (9 / 5.0)) + 32;
    setfah(fahrenheit);
    setCel(celsius)
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
        }}>Temperature Conversion</Typography>
      </Stack>
      <Stack sx={{
        margin: '10px',
        width: '80%',
      }}>
        <TextField type = {'number'} variant='standard' label="Temperature in Celcius" value={cel} onChange={onChangeHandlerCelcius}></TextField>
        <TextField type = {'number'} variant='standard' margin='dense' label="Temperature in Fahrenheit" value={fah} onChange={onChangeHandlerFah}></TextField>
        <TextField type = {'number'} variant='standard' margin='dense' label="Temperature in Kelvin" value={kel} onChange={onChangeHandlerKelvin}></TextField>
      </Stack>
    </Stack>
  )
}

export default Temperature
