import { ResponseModel } from "../ResponseModel";
import { CarDetailDto } from "./carDetailDto";


export interface carDetailDtoResponseModel extends ResponseModel{
    data:CarDetailDto[]
    
}