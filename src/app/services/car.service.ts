import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { carDetailDtoResponseModel } from '../models/dtos/carDetailDtoResponseModel';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44332/api/Cars/getbyquery?';
  addUrl: string;
  sendUrl: string;

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(): Observable<carDetailDtoResponseModel> {
    let newPath = this.apiUrl + 'getcarsdetails';
    return this.httpClient.get<carDetailDtoResponseModel>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsQuery(
    colorId: number,
    brandId: number
  ): Observable<ListResponseModel<Car>> {
    if (colorId) {
      this.addUrl = this.addUrl + 'colorId=' + colorId + '&';
    }
    if (brandId) {
      this.addUrl = this.addUrl + 'brandId=' + brandId + '&';
    }
    // return this.httpClient.get<ListResponseModel<Car>>(newPath);
    let sendUrl = this.apiUrl + this.addUrl
    return this.httpClient.get<ListResponseModel<Car>>(sendUrl);
  }
}
