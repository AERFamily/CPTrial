import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {
    
   }
  SlideOptions = { items: 1, dots: true, nav: false };
  CarouselOptions = { items: 3, dots: true, nav: false }; 
  ngOnInit(): void {
  }

}

