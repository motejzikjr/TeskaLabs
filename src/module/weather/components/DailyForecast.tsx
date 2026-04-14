import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { format, parseISO } from 'date-fns';
import { cs } from 'date-fns/locale';
import { DailyForecast as DailyForecastType } from "../types/DailyForecast";
import { WeatherIcon } from "../utils/weatherCodeToIcon";

interface Props {
    forecast: DailyForecastType[];
}

export const DailyForecast = ({ forecast }: Props) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 2 }}>
            {forecast.map((day: DailyForecastType) => (
                <Card key={day.date} sx={{ minWidth: 160 }}>
                    <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                            {day.date ? format(parseISO(day.date), 'EEEE d. MMMM', { locale: cs }) : '—'}
                        </Typography>
                        <WeatherIcon code={day.code} fontSize="large" />
                        <Typography variant="body2">
                            Min: {day.temperatureFrom}°C
                        </Typography>
                        <Typography variant="body2">
                            Max: {day.temperatureTo}°C
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}
