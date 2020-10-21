import { Component, OnInit, HostListener } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee = [];
  public openModal:boolean=false;
  public modalWidth :number = window.innerWidth/2;
  public modalHeight:number = window.innerHeight/2;
  lat: number = 43.653908;
  lng: number = -79.384293;
  markers= [{
    lat: parseInt("43.653908"),
    long: parseInt("-79.384293")
},{
  lat: parseInt("43.653908"),
  long: parseInt("-69.384293")
}];
  constructor(private _employeeService:EmployeeServiceService) { }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.modalWidth = window.innerWidth/3;
    this.modalHeight = window.innerHeight;
  }
  ngOnInit(): void {
  }
  openModel()
  {
    this.openModal = true;

  }

}
