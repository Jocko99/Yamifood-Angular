import { paths } from './../config/paths';
import { HttpClient } from '@angular/common/http';
import { INavigation } from './../interfaces/INavigation';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends ApiService<INavigation>{

  constructor(public http: HttpClient) {
    super(paths.navigation, http);
   }
}
