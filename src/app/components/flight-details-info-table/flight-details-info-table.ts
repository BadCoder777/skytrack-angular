import {Component, inject, Input, OnInit} from '@angular/core'
import {AsyncPipe, NgClass} from '@angular/common'
import {IFlight} from '../../models/flight.model'

@Component({
  selector: 'app-flight-details-info-table',
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './flight-details-info-table.html',
  styleUrl: './flight-details-info-table.scss'
})
export class FlightDetailsInfoTable {
  
  @Input() flight!: IFlight
  @Input() basicBlockStyles!: string
  
  constructor() {}
  
}
