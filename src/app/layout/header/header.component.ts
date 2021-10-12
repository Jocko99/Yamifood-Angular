import { INavigation } from './../../interfaces/INavigation';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  public navigation!: INavigation[];

  ngOnInit(): void {
    this.getNavigation();
  }

  getNavigation(): void{
    this.navigationService.getAll().subscribe(data => {
      this.navigation = data;
    });
  }
}
