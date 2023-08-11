import React from 'react'
import HomePage from './components/HomePage';
import { Typography, Stack, Button } from '@mui/material'
import './App.css';
const App = () => {
  return (
    <Stack className='app-main'>
      <Stack spacing={1} sx={{
        backgroundColor: '#304C89',
        color: '#CDC392',
        padding: '7px',
        margin: '0px',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'
      }}>
        <Stack>
          <Typography variant='h4' >
            Convertor & Calculator
          </Typography>
        </Stack>
        <Stack sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          alignItems: 'center',
        }}>
          <Button variant='contained' color='success'>Feedback</Button>
          <Button variant='contained' color='secondary'>Login</Button>
        </Stack>
      </Stack>
      
      <Stack>
        <HomePage />
      </Stack>
    </Stack>
  )
}

export default App
