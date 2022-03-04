import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  isEmpty(val: any): boolean {
    if (
      val === null ||
      val === 'null' ||
      val === undefined ||
      val === 'undefined' ||
      val === '' ||
      val <= 0
    ) {
      return true;
    }
    return false;
  }

  getQueryStringFromObject(obj: any): any {
    const str: string[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (!this.isEmpty(obj[p])) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
      }
    }
    return str.join('&');
  }

  postApi(endPoint: string, data: any): any {
    const options = { headers: this.headers };
    return this.http.post(
      `${environment.SERVER_URL}/${endPoint}`,
      data,
      options
    );
  }

  getApi(endPoint: string, queryParam?: any): any {
    let url;
    if (
      queryParam &&
      typeof queryParam == 'object' &&
      Object.keys(queryParam).length
    ) {
      const queryParamString = this.getQueryStringFromObject(queryParam);
      url = queryParamString ? `${endPoint}?${queryParamString}` : endPoint;
    } else {
      url = endPoint;
    }
    return this.http.get(`${environment.SERVER_URL}/${url}`, {
      headers: this.headers,
    });
  }
}
