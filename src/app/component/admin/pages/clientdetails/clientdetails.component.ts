import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
import { SweetalertssService } from 'src/app/sweetalertss.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {
  constructor(
    private service: AllService,
    private route: Router,
    private fb: FormBuilder,
    private swet: SweetalertssService,
    private router: Router
  ) {

    const userIdString = localStorage.getItem('userId');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
  }
  userId: any

  faceSheetForm!: FormGroup;
  allData: any[] = []
  clientDataid: any;
  ngOnInit(): void {
    this.getuserstaskdatas();
    this.getTasksOFUsers()
    this.getmedicinesusers()
    this.getssmilestone()
    this.getnotess()


    const clientData = this.service.getclientData();
    this.allData = clientData
    this.clientDataid = clientData[0].id
    console.log("Received client data:", clientData);
    console.log("Received client id:", this.clientDataid);

    this.faceSheetForm = this.fb.group({

      facility_name: ['',],
      // user_id: [this.userId],
      name: ['',],
      dob: ['',],
      client_id: [this.clientDataid],
      gender: [],
      // uci: `test${Date.now()}@gmail.com`,
      uci: [],
      room_number: [],
      bed_number: [],
      insurance_id: [],
      other_insurance: [],
      state_benefits: [],
      placement_date: [],
      previous_address: [],
      weight: [],
      height: [],
      eye_color: [],
      hair_color: [],
      diagnosis: [],
      diet: [],
      food_restrictions: [],
      medical_needs: [],
      medication_name: [],
      dosage: [],
      frequency: [],
      prescribing_md: [],
      allergies: [],
      physician: [],
      dentist: [],
      psychiatrist: [],
      pharmacy: [],
      dangerous_propensities: [],
    });
  }



  addpostfacesheets() {
    if (this.faceSheetForm.invalid) {
      // this.ck = true;
      return;
    } else {
      console.log("Patient data", this.faceSheetForm.value);

      this.service.postfacesheets(this.faceSheetForm.value).subscribe({
        next: (res) => {
          console.log("res", res)
          this.swet.SucessToast('faceSheetForm Added succesfully')
          this.router.navigate(['/Admin/Clientdetails'])
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }





  getusertaskdataData: any = []
  routinelength: any
  getuserstaskdatas(): void {
    this.service.getroutines().subscribe({
      next: (res: any) => {
        this.getusertaskdataData = res;
        this.routinelength = res.length;

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  tasklength: any;
  getTasksOFUserss: any = []
  getTasksOFUsers(): void {
    this.service.getTasksOFRoom().subscribe({
      next: (res: any) => {
        this.getTasksOFUserss = res;
        this.tasklength = res.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  getmedicinesUser: any = []
  medeslength: any;
  getmedicinesusers(): void {
    this.service.getmedicines().subscribe({
      next: (res: any) => {
        this.getmedicinesUser = res;
        this.medeslength = res.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  onclick() {
    this.route.navigate(['/Admin/addusers'])
  }


  mildstonelength: any
  getmildstonedata: any = [];
  getssmilestone(): void {
    this.service.gertmilestoness().subscribe({
      next: (res: any) => {
        this.getmildstonedata = res;
        this.mildstonelength = res.length;


      },
      error: (err) => {
        console.log(err);
      },
    });
  }




  getnotessdatalength: any
  getnotessdata: any = [];
  getnotess(): void {
    this.service.getnotes().subscribe({
      next: (res: any) => {
        this.getnotessdata = res;
        this.getnotessdatalength = res.length;


      },
      error: (err) => {
        console.log(err);
      },
    });
  }





  openRoutineTab() {
    const tabButton = document.getElementById('nav-home-tab');
    if (tabButton) {
      tabButton.click();
    }
  }

  openmedsTab() {
    const tabButton = document.getElementById('nav-contact-tab');
    if (tabButton) {
      tabButton.click();
    }
  } opentaskTab() {
    const tabButton = document.getElementById('nav-profile-tab');
    if (tabButton) {
      tabButton.click();
    }
  } openmildstoneTab() {
    const tabButton = document.getElementById('nav-mildstone-tab');
    if (tabButton) {
      tabButton.click();
    }
  }





}
