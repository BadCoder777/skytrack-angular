import { Component } from '@angular/core'
import {IFlight} from '../../models/flight.model'
import {FlightService} from '../../data/services/flight.service'
import {FlightCard} from '../flight-card/flight-card'

@Component({
  selector: 'app-flight-card-list',
  templateUrl: './flight-card-list.html',
  imports: [
    FlightCard
  ],
  styleUrl: './flight-card-list.scss'
})
export class FlightCardList {
  
  public flights:IFlight[] = []
  
  constructor(private flightService: FlightService) {
    this.flightService.getFlights().subscribe(data => this.flights = data)
  }
  
}