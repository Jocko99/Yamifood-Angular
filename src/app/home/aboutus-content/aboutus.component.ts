import { reduct } from './../../animations/reduction';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations :[
    reduct
  ]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
