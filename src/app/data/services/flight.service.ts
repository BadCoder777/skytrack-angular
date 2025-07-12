import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFlight } from '../../models/flight.model';
import { BASIC_API_URL } from '../constants/BASIC_API_URL';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  public data: IFlight[] | IFlight = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getFlights() {
    return this.http.get<IFlight[]>(`${BASIC_API_URL}/flights`);
  }
  getFlightById(id: number) {
    return this.http.get<IFlight[]>(`${BASIC_API_URL}/flights?id=${id}`);
  }
}
