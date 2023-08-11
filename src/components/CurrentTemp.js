import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';


const months = [
    "JAN", "FEB", "MAR",
    "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP",
    "OCT", "NOV", "DEC"
];

const days = [
    "SUN", "MON", "TUE",
    "WED", "THU", "FRI", "SAT"
];

const currentDate = new Date();
const month = currentDate.getMonth();
const date = currentDate.getDate();
const hours = currentDate.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
const hr = hours % 12 || 12;
const min = currentDate.getMinutes();
const day = currentDate.getDay();


const CurrentTemp = () => {

    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(false);


    useEffect(() => {
        const fetchWeatherLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        fetchWeatherData(lat, lon);
                    },
                    error => {
                        console.log(error);
                        setLoading(false);
                        setLocation(true);
                    }
                );
            }
        }
        fetchWeatherLocation();
    }, [])

    const fetchWeatherData = (lat, lon) => {
        const host = 'http://api.weatherapi.com/v1/current.json';
        const url = `${host}?key=${process.env.REACT_APP_KEY_WEATHER}&q=${lat},${lon}`;
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((jsonData) => {
                setWeather(jsonData);
                setLoading(false);
                setLocation(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setLocation(false);
            });
    };
    console.log(weather);
    return (
        <Stack spacing={1} sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            height: '40%',
            borderRadius: '4px',
            background: '#a5bbdd',
            boxShadow: '0 0.1rem 2rem rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            transform: 'translate3d(0, 0, 0)',
        }}>

            {loading ? (
                <Typography>Loading the data</Typography>
            ) : (
                <>
                    {location ? (
                        <Typography>Location Denied</Typography>
                    ) : (
                        <>
                            <Stack className='wave one'></Stack>
                            <Stack className='wave two'></Stack>
                            <Stack className='wave three'></Stack>

                            <Stack sx={{
                                height: '40%',
                                justifyContent: 'center',
                            }}>
                                <img className='img-icon' src={`${weather.current.condition.icon}`} alt='Weaher Mood' />
                            </Stack>
                            <Stack sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '4px',
                            }}>
                                <Typography variant='h5'><PlaceIcon /> {weather.location.name} | {weather.location.region.substring(0, 2).toUpperCase()}</Typography>
                                <Typography variant='p'>{days[day]} | {date} {months[month]} | {hr} : {min} {ampm}</Typography>
                                <Typography variant='h5'><DeviceThermostatIcon /> {weather.current.temp_c} <span>&#8451;</span> |  {weather.current.temp_f} <span>&#8457;</span></Typography>
                                <Typography variant='p'>Min | Max</Typography>
                            </Stack>
                        </>
                    )}
                </>
            )}
        </Stack>
    )
}

export default CurrentTemp
