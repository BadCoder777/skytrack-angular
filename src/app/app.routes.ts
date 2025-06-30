import { Routes } from '@angular/router';
import {Home} from './pages/home/home'
import {FlightDetails} from './components/flight-details/flight-details'

export const routes: Routes = [
	{
		path: '',
		component: Home,
		children: [
			{
				path: 'flight-info/:id',
				component: FlightDetails
			}
		]
	}
];
