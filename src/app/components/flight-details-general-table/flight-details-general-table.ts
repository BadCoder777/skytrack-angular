import { Component } from '@angular/core';
import {IFlight} from '../../models/flight.model'
import {FlightService} from '../../data/services/flight.service'

@Component({
  selector: 'app-flight-details-general-table',
  imports: [],
  templateUrl: './flight-details-general-table.html',
  styleUrl: './flight-details-general-table.scss'
})
export class FlightDetailsGeneralTable {
  
  public flight: IFlight | undefined
  
  constructor(private flightService: FlightService) {}
  
}
