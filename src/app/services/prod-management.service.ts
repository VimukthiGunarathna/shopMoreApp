import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdManagementService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.url}/getAllProducts`, { headers: this.headers });
  }

  public getAllCartonPrice(): Observable<any> {
    return this.http.get(`${this.url}getAllCartonPrice/`, { headers: this.headers })
  }

  public getAllProductPricing(): Observable<any> {
    return this.http.get(`${this.url}getAllPricing`, { headers: this.headers });
  }
  public getProductPricing(item): Observable<any> {
    return this.http.post(`${this.url}getPricing`,item, { headers: this.headers });
  }
}