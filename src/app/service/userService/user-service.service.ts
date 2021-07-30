import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpService: HttpServiceService ) { }

  url = environment.baseUrl
  
  signupUser = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/registration`, data)
  }

  loginUser = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/login`, data)
  }

  customerDetails(data:any){
    console.log("data in user service",data);
    return this.httpService.put(`${this.url}bookstore_user​/edit_user`, data)
  }
}
