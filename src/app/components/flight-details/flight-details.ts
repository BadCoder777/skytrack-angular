import {Component, inject, OnInit} from '@angular/core'
import {NgClass} from '@angular/common'
import {FlightDetailsInfoTable} from '../flight-details-info-table/flight-details-info-table'
import {FlightDetailsGeneralTable} from '../flight-details-general-table/flight-details-general-table'
import {ActivatedRoute} from '@angular/router'
import {FlightService} from '../../data/services/flight.service'
import {BehaviorSubject} from 'rxjs'
import {IFlight} from '../../models/flight.model'

@Component({
  selector: 'app-flight-details',
	imports: [
		NgClass,
		FlightDetailsInfoTable,
		FlightDetailsGeneralTable
	],
  templateUrl: './flight-details.html',
  styleUrl: './flight-details.scss'
})
export class FlightDetails implements OnInit {
	
	public route = inject(ActivatedRoute)
	public flightService = inject(FlightService)
	
	public basicBlockStyles = 'p-2 bg-secondary-bg text-white flex justify-between'
	public flight$ = new BehaviorSubject<IFlight>({} as IFlight);
	public id$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
	
	constructor() {}
	
	ngOnInit() {
		this.route.params.subscribe(params => {
			console.log(params['id']);
			this.id$.next(params['id']);
			console.log(this.id$.value);
			this.flightService.getFlightById(this.id$.value).subscribe(res => this.flight$.next(res[0]));
		});
	}
}
