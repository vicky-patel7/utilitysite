import React from 'react'
import { Button, FormControl, Stack, TextField} from '@mui/material'

const Feedback = ({closeModal}) => {
    const handleSubmit = () => {
        
    }
  return (
    <Stack sx={{
        height: '100vh',
        width: '100vh',
        backgroundColor : 'rgba(200, 200, 200)',
        position : 'fixed',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }}>
        <Stack spacing={1} sx={{
            display: 'flex',
            flexDirection : 'column',
            backgroundColor : 'rgba(255, 255, 255)',
            position : 'fixed',
            padding : '10px',

        }}>
            <Stack sx={{
                display: 'flex',
                justifyContent : 'flex-end',
                cursor : 'pointer',

            }}>
                <Button onClick={() => closeModal(false)}> X </Button>
            </Stack>
            <FormControl>
                <TextField label = 'Email'></TextField>
                <TextField label = 'Message' rows= {8} placeholder='Enter Your Message Here...'></TextField>
            </FormControl>
            <Stack sx={{
                display: 'flex',
                justifyContent : 'flex-start',

            }}>
                <Button onClick={() => closeModal(false)}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Stack>
    </Stack>,
    document.getElementById('feedback')
  )
}

export default Feedback
