import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
import { SweetalertssService } from 'src/app/sweetalertss.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [DatePipe]
})
export class UsersComponent implements OnInit  {


  onSearch(): void {
    this.currentPage = 1; 
    this.loadUsers();
  }
userprofile(){
  this.router.navigate(['/Admin/Userdetails'])
}

id:any;
userByIdData:any=[];
  ById(data: any) {
    this.id = data
    console.log("user id", this.id)
    this.service.getuserById(data).subscribe((res: any) => {
      this.userByIdData = res[0];
      this.service.setUserData(this.userByIdData);
      console.log("policy by id", this.userByIdData)
    })
  }


  userByIdDatas:any=[];
  ByIds(data: any) {
    this.id = data
    console.log("user id", this.id)
    this.service.getuserById(data).subscribe((res: any) => {
      this.userprofile()
      this.userByIdData= [res[0]];
      this.service.setUserData(this.userByIdData);
      console.log("policy by id", this.userByIdData)
    })
  }


  updateusers() {
    this.service.userupdatedss(this.id, this.userByIdData).subscribe((res: any) => {
      console.log('Nurse updated successfully', res);
      this.swet.SucessToast(`Alottement Updated Successfully`);
      // window.location.reload()
    }, (error) => {
      console.error('Error updating user', error);
    });
  }


  url: any; // For the current preview


onSelectFile(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result;
      this.userByIdData.profile = reader.result; // Update the model
    };

    // File type and size validation
    const validFileTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
    if (!validFileTypes.includes(file.type)) {
      alert('Invalid file type. Please select an image or a valid document.');
      return;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert('File size exceeds 2MB.');
      return;
    }
  }
}





updateForm!: FormGroup;
userId: any;
getusersData: any[] = [];
searchQuery: string = '';
currentPage: number = 1;
totalItems: number = 0;
sortDirection: string = 'DESC';
sortBy: string = 'first_name'; 

rowsPerPage: number = 10; 

constructor(
  private service: AllService,
  private router: Router,
  private fb: FormBuilder,
  private swet: SweetalertssService,
  private datePipe: DatePipe
) {
  const userIdString = localStorage.getItem('userId');
  this.userId = userIdString ? parseInt(userIdString, 10) : null;

  this.updateForm = this.fb.group({
    email: [''],
    first_name: [''],
    last_name: [''],
    date_of_birth: [''],
    date_of_joining: [''],
    designation: [''],
    phone: [''],
  });
}

getFormattedDate(): string {
  return this.datePipe.transform(this.userByIdData.date_of_birth, 'date') || '';
}

ngOnInit(): void {
  // this.getusersdatas();
  this.loadUsers();
}



loadUsers(): void {
  const limit = this.rowsPerPage; 
  // const limit = 10;
  const offset = (this.currentPage - 1) * limit;
  this.service.Usersdatasfilter(this.sortBy, this.sortDirection, limit, offset, this.searchQuery)
    .subscribe((res: any) => {
      this.getusersData = res; // Update the correct variable
      console.log(" this.getusersData", this.getusersData)
      this.totalItems = res.total; 
      console.log(" this.getusersData",this.totalItems)

    });
}
// Handle sorting
onSortChange(sortBy: string): void {
  this.sortBy = sortBy;
  this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
  this.loadUsers();
}


onPageChange(page: number): void {
  if (page < 1 || page > Math.ceil(this.totalItems / this.rowsPerPage)) {
    return;
  }
  this.currentPage = page;
  this.loadUsers();
}

onRowsPerPageChange(): void {
  this.currentPage = 1; // Reset to first page
  this.loadUsers();
}

getPaginationButtons(): number[] {
  const totalPages = Math.ceil(this.totalItems / this.rowsPerPage);
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return pages;
}



getStartIndex(): number {
  return (this.currentPage - 1) * this.rowsPerPage + 1;
}

getEndIndex(): number {
  return Math.min(this.currentPage * this.rowsPerPage, this.totalItems);
}

onclick(){
  this.router.navigate(['/Admin/addusers'])
}
dataSend: any
toggleVerified(data: any) {
  var id = data.id;
  this.dataSend = {
    active: !data.active 
  };
  this.service.Userstatusupdatess(id, this.dataSend).subscribe(res => {
    if (res) {
      this.loadUsers();
      const accountStatus = res.active;
      const doctorName = res.name;
      if (accountStatus) {
        this.swet.SucessToast(` Action done Successfully`);
      } else {
        this.swet.SucessToast(` Done Action Sccessfully`);
      }
    }
  });
}

activePopoverIndex: number | null = null;
togglePopover(index: number): void {
  this.activePopoverIndex = this.activePopoverIndex === index ? null : index;
}
chnagegroupidbyusers:any=[];
  chnagegroupidbyuser(data: any) {
    this.id = data
    console.log("user id", this.id)
    this.service.getuserById(data).subscribe((res: any) => {
      this.chnagegroupidbyusers = res[0];
      console.log("chnagegroupidbyusers by id", this.chnagegroupidbyusers)
    })
  }
  changeGroupId(groupId: number, userId: number) {
    if (userId === 1) {
      console.warn(`Attempted to change group for user ID 1, which is not allowed.`);
      return;
    }
      const updatedData = { group_id: groupId };
    this.service.groupidchangeByids(userId, updatedData).subscribe(
      (res: any) => {
        console.log(`Group ID updated successfully for user ${userId}`, res);
        this.swet.SucessToast(
          `User's group changed successfully to ${
            groupId === 1 ? 'Admin' : groupId === 2 ? 'User' : 'Client'
          }`
        );
        this.chnagegroupidbyusers.group_id = groupId; // Update local data if necessary
      },
      (error) => {
        console.error('Error updating group ID', error);
      }
    );
  }

}


 
