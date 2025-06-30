import {Component, Input} from '@angular/core'
import {IFlight} from '../../models/flight.model'
import {FlightService} from '../../data/services/flight.service'
import {NgOptimizedImage} from '@angular/common'

@Component({
  selector: 'app-flight-card',
	imports: [
		NgOptimizedImage
	],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.scss'
})
export class FlightCard {
  
  @Input() flight!: IFlight
  
  constructor() {}
  
}
