import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/dtos/rentalDto';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  rentaldtos:RentalDto[]=[];

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentaldtos=response.data
    })
  }

}
