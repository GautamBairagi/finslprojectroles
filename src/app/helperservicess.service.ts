import { Injectable, OnInit } from '@angular/core';
import { AllService } from './Api/all.service';
import { empty } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelperservicessService   {
  getss: any
  constructor(private allser:AllService) {
    const gopup_ids =  this.allser.getgroupid()
    // const group_names =  this.allser.getgroupname()
    // console.log("gopup_ids", gopup_ids);
    // console.log("group_names", group_names);
    this.getss = gopup_ids
    
  }



  
  
gautam:any;

lol() {
  if (!this.gautam) {
    this.gautam = this.getss;
  }
}



 is_admin() {

  this.lol();
    if (this.gautam == 1) {
    
      return true;
    }
    else {
      return false
    }
  }
  is_client() {
    this.lol();
    if (this.gautam == 3) {
      return true;
    }
    else {
      return false
    }
  }

  is_user() {
    this.lol();
    if (this.gautam == 2) {
      return true;
    }
    else {
      return false
    }
  }


// private groupId: number | null = null;

//   constructor(private allser: AllService) {
//    // Load group ID during initialization
//   }
//   ngOnInit(): void {
//     this.loadGroupId();
//   }



//   private loadGroupId(): void {
//     const groupIdStr = localStorage.getItem('group_id');
//     this.groupId = groupIdStr ? parseInt(groupIdStr, 10) : null;
//     console.log("group_id  gett HelperservicessService",this.groupId);
   
//   }

//   is_admin(): boolean {
//     return this.groupId === 1;
//   }

//   is_client(): boolean {
//     return this.groupId === 3;
//   }

//   is_user(): boolean {
//     return this.groupId === 2;
//   }

//   // Optionally, add a method to refresh group ID if needed
//   refreshGroupId(): void {
//     this.loadGroupId();
//   }

}
