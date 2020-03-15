import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarlordService {
  public messageError: string;
  public userData;

  constructor(
    private http: HttpClient
  ) { }

  getStarlord() {
    return this.http.get<any>('http://starlord.hackerearth.com/kickstarter');
  }
}
