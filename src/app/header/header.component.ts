import { AuthService } from './../services/auth.service';
//import * as firebase from 'firebase';
import {Response} from '@angular/http';
import { DataStorageService } from './../services/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private storage: DataStorageService, private auth: AuthService) {


  }

  onSaveData() {
    this.storage.storeRecipes()
      .subscribe(
      (response: Response) => console.log(response)
      );
  }

  fetchData() {
    this.storage.getRecipes()
  }
  onLogout() {
    this.auth.onLogout();
  }
}
