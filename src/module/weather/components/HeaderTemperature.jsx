import React from 'react';
import { format } from 'date-fns';
import { useWeatherStore } from '../stores/weatherStore';

export const HeaderTemperature = () => {
    const currentTemperature = useWeatherStore((state) => state.currentTemperature);
    const lastUpdated = useWeatherStore((state) => state.lastUpdated);

    if (currentTemperature === 0) return null;

    return (
        <span style={{ fontWeight: 'bold' }}>
            {currentTemperature} °C
            {lastUpdated && (
                <span style={{ fontWeight: 'normal', marginLeft: '0.5rem', opacity: 0.7, fontSize: '0.85em' }}>
                    ({format(lastUpdated, 'd.M.yyyy HH:mm:ss')})
                </span>
            )}
        </span>
    );
};
