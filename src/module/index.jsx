import { Module } from "asab_webui_components";

import { TableScreen } from './TableScreen.jsx';
import { DetailScreen } from './DetailScreen.jsx';
import { WeatherScreen } from "./WeatherScreen";
import { HeaderTemperature } from "./weather/components/HeaderTemperature";

export default class TableApplicationModule extends Module {
	constructor(app, name) {
		super(app, "TableApplicationModule");

		app.Router.addRoute({
			path: "/detail/:id",
			end: false,
			name: 'Detail',
			component: DetailScreen,
		});

		app.Router.addRoute({
			path: "/",
			end: false,
			name: 'Table',
			component: TableScreen,
		});

		app.Router.addRoute({
			path: "/weather",
			end: false,
			name: 'Weather',
			component: WeatherScreen,
		});

		app.Navigation.addItem({
			name: "Table",
			icon: 'bi bi-table',
			url: "/",
		});

		app.Navigation.addItem({
			name: "Weather",
			icon: 'bi bi-table',
			url: "/weather",
		});

		const headerService = app.locateService("HeaderService");
		headerService.addComponent({
			component: HeaderTemperature,
			order: 100,
		});
	}
}
