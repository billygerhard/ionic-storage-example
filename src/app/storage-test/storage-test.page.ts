import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-storage-test',
  templateUrl: './storage-test.page.html',
  styleUrls: ['./storage-test.page.scss'],
})
export class StorageTestPage implements OnInit {

  constructor(
    private storage:Storage
  ) { }

  ngOnInit() {

  }

  setTestItems(){
    for(let i=0;i<10;i++){
      this.storage.set(`Item${i.toString()}Key`,`Item ${i} Value`)
    }
  }

  setStorage(key,data){
    return this.storage.set(key,data);
  }

  async logKeys(){
    console.log(await this.storage.keys())
  }

  logDriver(){
    console.log( this.storage.driver)
  }

  async clearStorage(){
    return this.storage.clear()
  }

}
