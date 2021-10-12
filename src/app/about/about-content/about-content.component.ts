import { reduct } from './../../animations/reduction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css'],
  animations:[
    reduct
  ]
})
export class AboutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
