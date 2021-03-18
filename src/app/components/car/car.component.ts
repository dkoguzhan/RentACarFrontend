import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/dtos/carDetailDto';
import { ListResponseModel } from 'src/app/models/ListResponseModel';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  cardtos:CarDetailDto[]=[];
  dataLoaded=false;
  public routeurl:object

  queryUrl:string = "https://localhost:44332/api/Cars/getbyquery?"
  addUrl:string
  public sendUrl:string

  constructor(private carService:CarService ,
    private activatedRoute :ActivatedRoute,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
this.activatedRoute.queryParams.subscribe(params=>{
  if (params["colorId"]) {
    this.addUrl = this.addUrl + 'colorId=' + params["colorId"] + '&';
  }
  if (params["brandId"]) {
    this.addUrl = this.addUrl + 'brandId=' + params["brandId"] + '&';
  }
  this.sendUrl = this.queryUrl + this.addUrl
  console.log(this.sendUrl)
  this.getCarsQuery()
  this.addUrl=""


})}

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cardtos=response.data;
    })
  }
  getCarsByCategory(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsQuery(){
    this.httpClient.get<ListResponseModel<Car>>(this.sendUrl).subscribe((response)=>{
      this.cars= response.data
      this.dataLoaded = true;
    });
    
  }
}
