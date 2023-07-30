import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import {CompoundInterest, SimpleInterest, Temperature, Area, Length, Volume, Time, Angle, Weight} from './convertors/index';

const HomePage = () => {
    return (
        <Stack className='side-form' spacing={1} sx={{
            display: 'flex',
            flexDirection : 'row',
            margin : '20px',
            justifyContent : 'space-evenly',
            alignItems : 'center',
            width : '100%',
        }}>
            <Stack className='sidebar' direction='column' spacing={1} sx={{
                marginTop : '20px',
                marginRight : '20px',
                padding : '10px',
                width : '25%',
                height : '100vh'
            }}>
                <Stack className='link-item'>
                    <Link to='/'>Temperature</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/simple'>Simple Interest</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/compound'>Compound Interest</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/length'>Length</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/area'>Area</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/volume'>Volume</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/time'>Time</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/angle'>Angle</Link>
                </Stack>
                <Stack className='link-item'>
                    <Link to='/weight'>Weight</Link>
                </Stack>
            </Stack>
            <Stack sx={{
                width : '50%',
                height : '100vh',
                padding : '10px',
            }}>
                <Routes>
                    <Route path='/' element = {<Temperature/>}/>
                    <Route path='/simple' element = {<SimpleInterest/>}/>
                    <Route path='/compound' element = {<CompoundInterest/>}/>
                    <Route path='/length' element = {<Length/>}/>
                    <Route path='/area' element = {<Area/>}/>
                    <Route path='/volume' element = {<Volume/>}/>
                    <Route path='/angle' element = {<Angle/>}/>
                    <Route path='/time' element = {<Time/>}/>
                    <Route path='/weight' element = {<Weight/>}/>
                </Routes>
            </Stack>
            <Stack sx={{
                width : '25%',
            }}>

            </Stack>
        </Stack>
    )
}

export default HomePage
