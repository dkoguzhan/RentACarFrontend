import { ResponseModel } from "../ResponseModel";
import { RentalDto } from "./rentalDto";

export interface RentalDtoResponseModel extends ResponseModel{
    data:RentalDto[]
    
}