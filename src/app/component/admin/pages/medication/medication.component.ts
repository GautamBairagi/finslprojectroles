import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent {

  constructor(
    private service:AllService,
    private route: Router
  ){}

  allData :any[] = []
  ngOnInit(): void {
    this.getmedicinesusers();
    
  }

  getmedicinesUser:any=[];
  getmedicinesusers(): void {
    this.service.getmedicines().subscribe({
      next: (res: any) => {
        this.getmedicinesUser = res;  
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}

