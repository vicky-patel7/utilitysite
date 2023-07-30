import React from 'react'
import HomePage from './components/HomePage';
import { Typography, Stack } from '@mui/material'
import './App.css';
const App = () => {
  return (
    <Stack className='app-main'>
        <Typography variant='h2' sx={{
          backgroundColor: '#304C89',
          color : '#CDC392',
          padding : '7px',
          margin : '0px',
          fontSize : '2.3rem',
        }}>
            Convertor & Calculator
        </Typography>
        <Stack className='app-main' sx={{
          width : '100%',
          padding : '10px',
          marginRight : '10px',
        }}>
            <HomePage />
        </Stack>
    </Stack>
  )
}

export default App
