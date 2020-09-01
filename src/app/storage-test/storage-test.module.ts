import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorageTestPageRoutingModule } from './storage-test-routing.module';

import { StorageTestPage } from './storage-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorageTestPageRoutingModule
  ],
  declarations: [StorageTestPage]
})
export class StorageTestPageModule {}
