import React from 'react';
import { Container } from 'reactstrap';
import { CurrentWeather } from "./weather/components/CurrentWeather";
import { DailyForecast } from "./weather/components/DailyForecast";
import { Charts } from "./weather/components/Charts";
import { useWeather } from "./weather/hooks/useWeather";

export function WeatherScreen() {
    const { weather, isLoading, error, refresh } = useWeather();

    if (isLoading) return <p>Načítám počasí…</p>
    if (error) return <div>Chyba: {error.message}</div>

	return (
		<Container>
            <CurrentWeather current={weather.current} onRefresh={refresh} />
            <DailyForecast forecast={weather.forecast} />
            <Charts forecast={weather.forecast} />
		</Container>
	);
}
