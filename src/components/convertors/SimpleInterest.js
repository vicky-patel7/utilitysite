import React from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'


const SimpleInterest = () => {
  const [principle, setPrinciple] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [interest, setInterest] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  function handleClick() {
    let p = parseFloat(principle);
    let r = parseFloat(rate);
    let t = parseFloat(time);
    let si = parseFloat((p * r * t) / 100);
    setInterest(si);
    setAmount(si + p);
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
        }}>Simple Interest Calculator</Typography>
      </Stack>
      <Stack sx={{
        margin: '10px',
        width: '80%',
      }}>
        <TextField type={'number'} variant='standard' label="Principle Amount" value={principle} onChange={(e) => setPrinciple(e.target.value)}></TextField>
        <TextField type={'number'} variant='standard' margin='dense' label="Rate of Interest @ year" value={rate} onChange={(e) => setRate(e.target.value)}></TextField>
        <TextField type={'number'} variant='standard' margin='dense' label="Time in Years" value={time} onChange={(e) => setTime(e.target.value)}></TextField>
        <Button variant='contained' sx={{ marginTop: '10px' }} onClick={handleClick}>Calculate Interest </Button>
      </Stack>
      <Stack>
        <Typography>Simple Interest : {interest}</Typography>
        <Typography>Principle + Simple Interest : {amount}</Typography>
      </Stack>
    </Stack>
  )
}

export default SimpleInterest
