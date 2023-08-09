import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import {
    CompoundInterest, SimpleInterest, Temperature, Area, Length, Volume, Time, Angle, Weight, Density, HighPressure, LowPressure,
    Speed,
    Torque,
    Currency,
} from './convertors/index';
import CurrentTemp from './CurrentTemp';

const HomePage = () => {
    return (
        <Stack className='side-form' spacing={1} sx={{
            display: 'flex',
            flexDirection: 'row',
            margin: '20px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
        }}>
            <Stack className='sidebar' direction='column' spacing={1} sx={{
                marginTop: '20px',
                marginRight: '20px',
                padding: '10px',
                width: '20%',
                height: '100vh',
                rowGap : '2px',
            }}>
                <Link className='link' to='/'>Temperature</Link>
                <Link className='link' to='/simple'>Simple Interest</Link>
                <Link className='link' to='/compound'>Compound Interest</Link>
                <Link className='link' to='/length'>Length</Link>
                <Link className='link' to='/area'>Area</Link>
                <Link className='link' to='/volume'>Volume</Link>
                <Link className='link' to='/time'>Time</Link>
                <Link className='link' to='/angle'>Angle</Link>
                <Link className='link' to='/weight'>Weight</Link>
                <Link className='link' to='/density' >Density</Link>
                <Link className='link' to='/highpressure' >High Pressure</Link>
                <Link className='link' to='/lowpressure' >Low Pressure</Link>
                <Link className='link' to='/speed' >Speed</Link>
                <Link className='link' to='/torque' >Torque</Link>
                <Link className='link' to='/currency' >Currency</Link>
            </Stack>
            <Stack sx={{
                width: '55%',
                height: '100vh',
                padding: '10px',
            }}>
                <Routes>
                    <Route path='/' element={<Temperature />} />
                    <Route path='/simple' element={<SimpleInterest />} />
                    <Route path='/compound' element={<CompoundInterest />} />
                    <Route path='/length' element={<Length />} />
                    <Route path='/area' element={<Area />} />
                    <Route path='/volume' element={<Volume />} />
                    <Route path='/angle' element={<Angle />} />
                    <Route path='/time' element={<Time />} />
                    <Route path='/weight' element={<Weight />} />
                    <Route path='/density' element={<Density />} />
                    <Route path='/highpressure' element={<HighPressure />} />
                    <Route path='/lowpressure' element={<LowPressure />} />
                    <Route path='/speed' element={<Speed />} />
                    <Route path='/torque' element={<Torque />} />
                    <Route path='/currency' element={<Currency />} />
                </Routes>
            </Stack>
            <Stack sx={{
                width: '25%',
            }}>
                <CurrentTemp />
            </Stack>
        </Stack>
    )
}

export default HomePage
