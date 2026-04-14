import React from 'react';
import WbSunny from '@mui/icons-material/WbSunny';
import WbCloudy from '@mui/icons-material/WbCloudy';
import Cloud from '@mui/icons-material/Cloud';
import Foggy from '@mui/icons-material/Foggy';
import Grain from '@mui/icons-material/Grain';
import AcUnit from '@mui/icons-material/AcUnit';
import WaterDrop from '@mui/icons-material/WaterDrop';
import Umbrella from '@mui/icons-material/Umbrella';
import Thunderstorm from '@mui/icons-material/Thunderstorm';
import { SvgIconProps } from '@mui/material';

const iconMap: Record<number, React.ElementType<SvgIconProps>> = {
    0:  WbSunny,      // Clear sky
    1:  WbSunny,      // Mainly clear
    2:  WbCloudy,     // Partly cloudy
    3:  Cloud,        // Overcast
    45: Foggy,        // Fog
    48: Foggy,        // Rime fog
    51: Grain,        // Drizzle: light
    53: Grain,        // Drizzle: moderate
    55: Grain,        // Drizzle: dense
    56: AcUnit,       // Freezing drizzle: light
    57: AcUnit,       // Freezing drizzle: dense
    61: WaterDrop,    // Rain: slight
    63: WaterDrop,    // Rain: moderate
    65: WaterDrop,    // Rain: heavy
    66: AcUnit,       // Freezing rain: light
    67: AcUnit,       // Freezing rain: heavy
    71: AcUnit,       // Snow: slight
    73: AcUnit,       // Snow: moderate
    75: AcUnit,       // Snow: heavy
    77: AcUnit,       // Snow grains
    80: Umbrella,     // Rain showers: slight
    81: Umbrella,     // Rain showers: moderate
    82: Umbrella,     // Rain showers: violent
    85: AcUnit,       // Snow showers: slight
    86: AcUnit,       // Snow showers: heavy
    95: Thunderstorm, // Thunderstorm: slight or moderate
    96: Thunderstorm, // Thunderstorm with slight hail
    99: Thunderstorm, // Thunderstorm with heavy hail
};

export const WeatherIcon = ({ code, ...props }: SvgIconProps & { code?: number }) => {
    const Icon = (code !== undefined ? iconMap[code] : null) ?? WbSunny;
    return <Icon {...props} />;
};
