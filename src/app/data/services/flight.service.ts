import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {IFlight} from '../../models/flight.model'
import {BASIC_API_URL} from '../constants/BASIC_API_URL'
import {ActivatedRoute} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  public data: IFlight[] | IFlight = []

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
  getFlights() {
    return this.http.get<IFlight[]>(`${BASIC_API_URL}/flights`)
  }
  getFlightById(id: number) {
    return this.http.get<IFlight[]>(`${BASIC_API_URL}/flights?id=${id}`)
  }
}
