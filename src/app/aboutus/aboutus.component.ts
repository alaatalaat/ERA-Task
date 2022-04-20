import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  x:string = 'Lorem Ipsum is simply';
  y:string = 'dummy te'
  constructor() { }

  ngOnInit(): void {
  }

}
