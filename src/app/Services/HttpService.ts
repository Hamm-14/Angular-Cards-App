import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Card } from '../../Types/Card';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = 'https://api.magicthegathering.io/v1/cards';
  constructor(private http: HttpClient) {}

  fetchData(page: number): Observable<Card[]> {
    let headers = new HttpHeaders({});
    return this.http
      .get<any>(`${this.apiUrl}?pageSize=20&page=${page}`, {
        headers: headers,
      })
      .pipe(map((data) => data.cards));
  }

  searchCards(cardName: string): Observable<Card[]> {
    let headers = new HttpHeaders({});
    return this.http
      .get<any>(`${this.apiUrl}?name=${cardName}`, {
        headers: headers,
      })
      .pipe(map((data) => data.cards));
  }
}
