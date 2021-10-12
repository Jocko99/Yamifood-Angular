import { SOCIAL } from './../../config/social';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public social: any[] = SOCIAL;

  ngOnInit(): void {
  }

}
