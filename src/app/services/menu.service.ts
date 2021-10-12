import { paths } from './../config/paths';
import { HttpClient } from '@angular/common/http';
import { IMenu } from './../interfaces/IMenu';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiService<IMenu>{

  constructor(public http: HttpClient) {
    super(paths.menu.menu,http);
   }
}
