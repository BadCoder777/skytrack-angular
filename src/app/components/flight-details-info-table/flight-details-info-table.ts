import {Component, inject} from '@angular/core'
import {NgClass} from '@angular/common'
import {IFlight} from '../../models/flight.model'
import {ActivatedRoute} from '@angular/router'
import {FlightService} from '../../data/services/flight.service'

@Component({
  selector: 'app-flight-details-info-table',
  imports: [
    NgClass,
  ],
  templateUrl: './flight-details-info-table.html',
  styleUrl: './flight-details-info-table.scss'
})
export class FlightDetailsInfoTable {
  
  public flightServer: FlightService = inject(FlightService)
  public route = inject(ActivatedRoute)
  public basicBlockStyles = 'p-2 bg-[#282A36] text-white flex justify-between'
  public flight: IFlight | undefined
  
  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightServer.getFlightById(id).subscribe(data => {
      this.flight = data[0];
    });
  }
}
