import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}storefront/products?filter[sub_product_type]=course&filter[product_type]=digital`);
  }

  getCourseById(productId:number){
    return this.http.get<any>(`${environment.baseURL}storefront/products/`+productId);
  }


}
