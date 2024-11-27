
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
import { SweetalertssService } from 'src/app/sweetalertss.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  // loginForm!: FormGroup;
  // timeInputs: number[] = [];
  // constructor(
  //   private router: Router,
  //   private fb: FormBuilder,
  //   private service: AllService,
  //   private swet: SweetalertssService,

  // ) {

  //   const userIdString = localStorage.getItem('userId');
  //   this.userId = userIdString ? parseInt(userIdString, 10) : null;
  //   const clientIdString = localStorage.getItem('clientid');
  //   this.clientid = clientIdString ? parseInt(clientIdString, 10) : null;
  // }
  // userId: any
  // clientid: any
  // ck: boolean = false;
  // allData:any;


  // ngOnInit(): void {
  //   this.getssmilestone()
  //   this.getmedicinesusers()
  //   this.allactiveststusss()
  //   this.units()
  //   // this.timesss()

  //   this.frequencysss()
  //   this.loginForm = this.fb.group({
  //     allotted_to: [this.clientid],
  //     description: ['',],
  //     due_date: ['', Validators.required],
  //     milestone_id: ['',],
  //     name: ['',],
  //     priority: ['',],
  //     project_id: [], 
  //     start_date: ['', [Validators.required, this.noPastDateValidator]],
  //     status: ['',],
  //     task_message: ['',], 
  //     user_id: [this.userId],
  //     medicine_id: new FormControl([],Validators.required),
  //     comment_count: [''],  
  //     frequency: [''],  
  //     unit: [''],  
  //     time:[''],
  //     // time0: [''],
  //   });

  //   const clientData = this.service.getclientData();
  //   this.allData = clientData;
  //   const client_room_number= clientData[0].room_number
  //   console.log("in mildstone client data:", clientData);
  //   console.log("in mildstone client allData:", client_room_number);
  //   this.loginForm.patchValue({ project_id: client_room_number });
  //   this.loginForm.get('start_date')?.valueChanges.subscribe((startDate) => {
  //     this.updateDueDateValidator(startDate);
  //   });

  // }



  // noPastDateValidator(control: any) {
  //   const currentDate = new Date().toISOString().split('T')[0]; 
  //   if (control.value && control.value < currentDate) {
  //     return { noPastDate: true }; 
  //   }
  //   return null; 
  // }

 
  // updateDueDateValidator(startDate: string) {
  //   const dueDateControl = this.loginForm.get('due_date');
  //   if (dueDateControl) {
  //     dueDateControl.setValidators([
  //       Validators.required,
  //       (control) => {
  //         if (control.value && control.value < startDate) {
  //           return { dueDateInvalid: true }; 
  //         }
  //         return null; 
  //       }
  //     ]);
  //     dueDateControl.updateValueAndValidity(); 
  //   }
  // }


  // // submitRoom(){
  // //   const formValue = this.loginForm.value;
  // // const userIds = Array.isArray(formValue.medicine_id) ? formValue.medicine_id : formValue.medicine_id.split(',');
  // // const formData = {
  // //   ...formValue,
  // //   medicine_id: userIds.join(','), 
  // // };
  // //   console.log(formData);
  // //      this.service.postTaskFromRoom(formData).subscribe((response) => {
  // //       console.log('Room created successfully', response);
  // //       this.router.navigate(['/Admin/Clientdetails'])
  // //     });
  // // }
  // cancel() {
  //   this.router.navigate(['/Admin/Clientdetails'])
  // }
  // url: any;
  // onSelectFile(event: any) {
  //   const file = event.target.files?.[0]; // Safely access the file
  //   if (!file) {
  //     console.error("No file selected");
  //     return;
  //   }
  //   console.log("Selected file:", file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.url = reader.result;
  //     console.log("File content as Base64:", this.url);
  //     this.loginForm.patchValue({ profile: this.url }); // Use patchValue to update form control
  //   };
  //   reader.onerror = (error) => {
  //     console.error("Error reading file:", error);
  //   };
  //   reader.readAsDataURL(file);
  // }
  // getmildstonedata:any = [];
  // getssmilestone(): void {
  //   this.service.getmildstonebyclientID(this.clientid).subscribe({
  //     next: (res: any) => {
  //       this.getmildstonedata = res;  
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  // getmedicinesUser:any= []
  // getmedicinesusers(): void {
  //   this.service.getmedicines().subscribe({
  //     next: (res: any) => {
  //       this.getmedicinesUser = res; 
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  selectedUsers: any[] = [];
  toggleSelection(user: any): void {
    const userIdsControl = this.loginForm.get('medicine_id');
    const index = this.selectedUsers.findIndex((u) => u.id === user.id);
    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
    userIdsControl?.setValue(this.selectedUsers.map((u) => u.id));
  }
  isUserSelected(user: any): boolean {
    return this.selectedUsers.some((u) => u.id === user.id);
  }


  allactiveststussss:any=[]
  allactiveststusss(): void {
    this.service.allactiveststuss().subscribe({
      next: (res: any) => {
        this.allactiveststussss = res; 
        console.log( "status",this.allactiveststussss);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  
  frequencyssss:any=[]
  frequencysss(): void {
    this.service.frequencyss().subscribe({
      next: (res: any) => {
        this.frequencyssss = res; 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  unitss:any=[]
  units(): void {
    this.service.uinitsdata().subscribe({
      next: (res: any) => {
        this.unitss = res; 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  // // onFrequencyChange(): void {
  // //   const frequency = this.loginForm.get('frequency')?.value;

  // //   // Parse the frequency to determine the number of time inputs
  // //   const count = frequency.split('-').filter((value: string) => value === '1').length;

  // //   // Clear existing time controls
  // //   this.timeInputs = [];
  // //   Object.keys(this.loginForm.controls).forEach((key) => {
  // //     if (key.startsWith('time')) {
  // //       this.loginForm.removeControl(key);
  // //     }
  // //   });
  // //   for (let i = 0; i < count; i++) {
  // //     this.timeInputs.push(i);
  // //     this.loginForm.addControl(`time${i}`, new FormControl('', Validators.required));
  // //   }
  // // }




  // onFrequencyChange(): void {
  //   const frequency = this.loginForm.get('frequency')?.value;
  
  //   // Parse the frequency to determine the number of time inputs
  //   const count = frequency.split('-').filter((value: string) => value === '1').length;
  
  //   // Clear existing time controls
  //   this.timeInputs = [];
  //   Object.keys(this.loginForm.controls).forEach((key) => {
  //     if (key.startsWith('time')) {
  //       this.loginForm.removeControl(key);
  //     }
  //   });
  
  //   // Add new time controls
  //   for (let i = 0; i < count; i++) {
  //     this.timeInputs.push(i);
  //     this.loginForm.addControl(`time${i}`, new FormControl('', Validators.required));
  //   }
  // }
  
  // // submitForm(): void {
  // //   // Combine timeX values into a single array for the `time` key
  // //   const times = this.timeInputs.map((i) => this.loginForm.get(`time${i}`)?.value);
  
  // //   // Update the `time` field in the form
  // //   this.loginForm.patchValue({ time: times });
  
  // //   if (this.loginForm.valid) {
  // //     console.log(this.loginForm.value);
  // //     // Proceed with form submission
  // //   } else {
  // //     console.log('Form is invalid');
  // //   }
  // // }



  // submitRoom(): void {
  //   const times = this.timeInputs.map((i) => this.loginForm.get(`time${i}`)?.value);
  
  //   this.loginForm.patchValue({ time: times });
  
  //   const formValue = this.loginForm.value;
  
  //   const userIds = Array.isArray(formValue.medicine_id)
  //     ? formValue.medicine_id
  //     : formValue.medicine_id.split(',');
  
  //   const formData = {
  //     ...formValue,
  //     medicine_id: userIds.join(','),
  //   };
  
  //   if (this.loginForm.valid) {
  //     console.log('Submitting form data:', formData);
  //     this.service.postTaskFromRoom(formData).subscribe({
  //       next: (response) => {
  //         console.log('Room created successfully', response);
  //         this.router.navigate(['/Admin/Clientdetails']);
  //       },
  //       error: (err) => {
  //         console.error('Error creating room:', err);
  //       },
  //     });
  //   } else {
  //     console.log('Form is invalid', this.loginForm.errors);
  //   }
  // }
  
  




















  loginForm!: FormGroup;
  timeInputs: number[] = [];
  userId: any;
  clientid: any;
  allData: any;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: AllService,
    private swet: SweetalertssService
  ) {
    const userIdString = localStorage.getItem('userId');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    const clientIdString = localStorage.getItem('clientid');
    this.clientid = clientIdString ? parseInt(clientIdString, 10) : null;
  }

  ngOnInit(): void {
    this.getssmilestone();
    this.getmedicinesusers();
    this.allactiveststusss();
    this.units();
    this.frequencysss();

    this.loginForm = this.fb.group({
      allotted_to: [this.clientid],
      description: [''],
      due_date: ['', Validators.required],
      milestone_id: [''],
      name: [''],
      priority: [''],
      project_id: [],
      start_date: ['', [Validators.required, this.noPastDateValidator]],
      status: [''],
      task_message: [''],
      user_id: [this.userId],
      medicine_id: new FormControl([], Validators.required),
      comment_count: [''],
      frequency: [''],
      unit: [''],
      time: [''],
    });

    // const clientData = this.service.getclientData();
    // this.allData = clientData;
    // const client_room_number = clientData[0]?.room_number;
    // this.loginForm.patchValue({ project_id: client_room_number });

    // this.loginForm.get('start_date')?.valueChanges.subscribe((startDate) => {
    //   this.updateDueDateValidator(startDate);
    // });




        const clientData = this.service.getclientData();
    this.allData = clientData;
    const client_room_number= clientData[0].room_number
    console.log("in mildstone client data:", clientData);
    console.log("in mildstone client allData:", client_room_number);
    this.loginForm.patchValue({ project_id: client_room_number });
    this.loginForm.get('start_date')?.valueChanges.subscribe((startDate) => {
      this.updateDueDateValidator(startDate);
    });
  }

  noPastDateValidator(control: any) {
    const currentDate = new Date().toISOString().split('T')[0]; 
    if (control.value && control.value < currentDate) {
      return { noPastDate: true };
    }
    return null; 
  }

  updateDueDateValidator(startDate: string) {
    const dueDateControl = this.loginForm.get('due_date');
    if (dueDateControl) {
      dueDateControl.setValidators([ 
        Validators.required,
        (control) => {
          if (control.value && control.value < startDate) {
            return { dueDateInvalid: true }; 
          }
          return null;
        }
      ]);
      dueDateControl.updateValueAndValidity();
    }
  }

  onFrequencyChange(): void {
    const frequency = this.loginForm.get('frequency')?.value;
    const count = frequency.split('-').filter((value: string) => value === '1').length;

    this.timeInputs = [];
    Object.keys(this.loginForm.controls).forEach((key) => {
      if (key.startsWith('time')) {
        this.loginForm.removeControl(key);
      }
    });

    for (let i = 0; i < count; i++) {
      this.timeInputs.push(i);
      this.loginForm.addControl(`time${i}`, new FormControl('', Validators.required));
    }
  }

  submitRoom(): void {
    // Combine timeX values into a single string, separating them by commas
    const times = this.timeInputs.map((i) => this.loginForm.get(`time${i}`)?.value).filter(Boolean).join(' , ');
  
    // Log the collected times
    console.log('Collected times:', times);
  
    // Check if times are valid (not an empty string)
    if (!times) {
      console.error('Error: Time values are missing');
      return;
    }
  
    // Ensure that the time field is updated in the form
    this.loginForm.patchValue({ time: times });
  
    // Log the form after patching the time
    console.log('Form after patching time:', this.loginForm.value);
  
    const formValue = this.loginForm.value;
  
    // Remove individual timeX fields from formData (if they exist)
    Object.keys(formValue).forEach(key => {
      if (key.startsWith('time')) {
        delete formValue[key];
      }
    });
  
    // Ensure `medicine_id` is properly formatted as a comma-separated string
    const userIds = Array.isArray(formValue.medicine_id)
      ? formValue.medicine_id
      : formValue.medicine_id.split(',');
  
    // Create the final formData object including the `time` field
    const formData = {
      ...formValue,
      medicine_id: userIds.join(','),
      time: times, // Ensure the time field is added correctly here
    };
  
    // Log the final form data before submission
    console.log('Submitting form data:', formData);
  
    // Submit if the form is valid
    if (this.loginForm.valid) {
      this.service.postTaskFromRoom(formData).subscribe({
        next: (response) => {
          console.log('Room created successfully', response);
          this.swet.SucessToast('Task Added succesfully')

          this.router.navigate(['/Admin/Clientdetails']);
        },
        error: (err) => {
          console.error('Error creating room:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
  
  

  cancel(): void {
    this.router.navigate(['/Admin/Clientdetails']);
  }


  
getmildstonedata:any = [];
  getssmilestone(): void {
    this.service.getmildstonebyclientID(this.clientid).subscribe({
      next: (res: any) => {
        this.getmildstonedata = res;  
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


    getmedicinesUser:any= []
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
