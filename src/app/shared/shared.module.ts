import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.components';
// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ModalAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     // Angular material
     MatButtonModule,
     MatCardModule,
     MatDialogModule,
     MatIconModule,
     MatInputModule,
 
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
