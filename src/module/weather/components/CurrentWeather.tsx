import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { format, parseISO } from 'date-fns';
import { CurrentWeather as CurrentWeatherType } from "../types/CurrentWeather";

interface Props {
    current: CurrentWeatherType;
    onRefresh: () => void;
}

export const CurrentWeather = ({ current, onRefresh }: Props) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant="body2">
                        Čas: {current.time ? format(parseISO(current.time), 'dd.MM.yyyy HH:mm') : '—'}
                    </Typography>
                    <Typography variant="body2">
                        Aktuální teplota: {current.temperature}°C
                    </Typography>
                    <Typography variant="body2">
                        Rychlost větru: {current.windSpeed} km/h
                    </Typography>
                    <Button
                        variant="outlined"
                        startIcon={<RefreshIcon />}
                        onClick={onRefresh}
                        sx={{ mt: 1 }}
                    >
                        Obnovit
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}
