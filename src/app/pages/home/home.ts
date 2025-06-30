import { Component } from '@angular/core';
import {FlightCardList} from '../../components/flight-card-list/flight-card-list'
import {FlightDetails} from '../../components/flight-details/flight-details'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
	imports: [FlightCardList, FlightDetails, RouterOutlet],
  templateUrl: './home.html',
  styleUrls: ['./home.sass']
})
export class Home {}
