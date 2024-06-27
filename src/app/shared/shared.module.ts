import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

// Import other modules as needed

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    CardModule,
    
    // Import other Angular modules here
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Export the same modules and declared components/directives/pipes here
  ]
})
export class SharedModule { }
