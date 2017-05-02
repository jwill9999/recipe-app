import {Response} from '@angular/http';
import { DataStorageService } from './../services/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private storage: DataStorageService){}

onSaveData(){
  this.storage.storeRecipes()
    .subscribe(
      (response: Response) => console.log(response)
    );
}

fetchData(){
  this.storage.getRecipes()
}
}
