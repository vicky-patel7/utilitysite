import React from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'

const CompoundInterest = () => {
  const [principle, setPrinciple] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [interest, setCInterest] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  function handleClick() {
    let p = parseFloat(principle);
    let r = parseFloat(rate);
    let t = parseFloat(time); 
    let A = p * (Math.pow((1 + r / 100), t));
    if(!Number.isInteger(A)) {
      A = A.toFixed(2);
    }
    let CI = A - p;
    if(!Number.isInteger(CI)) {
      CI = CI.toFixed(2);
    }
    setAmount(A);
    setCInterest(CI);
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
        }}>Compound Interest Calculator</Typography>
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
        <Typography>Compound Interest : {interest}</Typography>
        <Typography>Principle + Compound Interest : {amount}</Typography>
      </Stack>
    </Stack>
  )
}
export default CompoundInterest
