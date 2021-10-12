import { reduct } from './../../animations/reduction';
import { IMG_TYPE } from './../../config/img_types';
import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/IMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css'],
  animations:[
    reduct
  ]
})
export class MenuContentComponent implements OnInit {

  constructor(private menu: MenuService) { }

  public items!: IMenu[];
  public filter: any[] = IMG_TYPE;

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.menu.getAll().subscribe(data => {
      this.items = data;
    });
  }

}
