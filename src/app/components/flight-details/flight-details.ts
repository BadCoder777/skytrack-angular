import { Component } from '@angular/core';
import {NgClass} from '@angular/common'
import {FlightDetailsInfoTable} from '../flight-details-info-table/flight-details-info-table'

@Component({
  selector: 'app-flight-details',
  imports: [
    NgClass,
    FlightDetailsInfoTable
  ],
  templateUrl: './flight-details.html',
  styleUrl: './flight-details.scss'
})
export class FlightDetails {}
