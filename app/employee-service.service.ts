import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees()
  {
    return [
      {"id":1,"name":"abcd"},
      {"id":2,"name":"aaa"},
      {"id":3,"name":"aaaaa"}
    ];
  }
}
