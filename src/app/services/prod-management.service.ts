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
  public url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.url}` + 'all-products');
  }
}