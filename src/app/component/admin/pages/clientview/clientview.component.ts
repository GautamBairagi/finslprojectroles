import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
import { SweetalertssService } from 'src/app/sweetalertss.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css'],
  providers: [DatePipe]
})
export class ClientviewComponent {

//   activePopoverIndex: number | null = null;

//   togglePopover(index: number): void {
//     // Toggle the popover for the clicked index
//     this.activePopoverIndex = this.activePopoverIndex === index ? null : index;
//   }

//   // loginForm!:FormGroup;
//   updateForm!: FormGroup;
//   constructor(
//     private service: AllService,
//     private router: Router,
//     private fb: FormBuilder,
//     private swet: SweetalertssService,
//     private datePipe: DatePipe
//   ) {
//     const userIdString = localStorage.getItem('userId');
//     this.userId = userIdString ? parseInt(userIdString, 10) : null;


//     this.updateForm = this.fb.group({
//       email: [''],
//       first_name: [''],
//       last_name: ['',],
//       date_of_birth: ['',],
//       date_of_joining: ['',],
//       designation: ['',],
//       phone: [''],
//     })
//   }

//   getFormattedDate(): string {
//     return this.datePipe.transform(this.userByIdData.date_of_birth, 'date') || '';
//   }

//   userId: any
//   ck: boolean = false;

//   dataSend: any

//   ngOnInit(): void {
//     this.getusersdatas();


//   }
//   getusersData: any = []
//   getusersdatas() {
//     this.service.getclientsdata().subscribe({
//       next: (res: any) => {
//         this.getusersData = res;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }

//   addClient() {
//     this.router.navigate(['/Admin/Addclient'])
//   }

//   userprofile() {
//     this.router.navigate(['/Admin/Clientdetails'])
//   }


//   id: any;
//   userByIdData: any = [];
//   ById(data: any) {
//     this.id = data
//     console.log("user id", this.id)
//     this.service.getuserById(data).subscribe((res: any) => {
//       this.userByIdData = res[0];
//       // this.userprofile()
//       this.service.setclientData(this.userByIdData);
//       console.log("policy by id", this.userByIdData)
//     })
//   }



//   client_idss: any;
//   userByIdDatas: any = [];
//   ByIds(data: any) {
//     this.id = data
//     console.log("user id", this.id)
//     this.service.getuserById(data).subscribe((res: any) => {
//       this.userByIdDatas = [res[0]];
//       this.client_idss = res[0].id
//       localStorage.setItem('clientdetails', JSON.stringify(this.userByIdDatas));
//       localStorage.setItem('clientid', JSON.stringify(data));
//       // Store the data in the service

//           this.userprofile()
          
//           this.service.setclientData(this.userByIdDatas);
//           console.log("policy by id", this.userByIdDatas)
//         })
//       }
    
//       updateusers() {
//         this.service.userupdatedss(this.id, this.userByIdData).subscribe((res: any) => {
//           console.log(' updated successfully', res);
//           this.swet.SucessToast(`Updated Successfully`);
//           window.location.reload()
//         }, (error) => {
//           console.error('Error updating user', error);
//         });
//       }



    
//       updatestatuser() {
//         this.service.Userstatusupdatess(this.id, this.userByIdData).subscribe((res: any) => {
//           console.log('status updated successfully', res);
//           this.swet.SucessToast(`Action Updated Successfully`);
//           window.location.reload()
//         }, (error) => {
//           console.error('Error updating user', error);
//         });
//       }


   



      
  
//   // Convert the active value to the corresponding status string
//   getStatus(active: number): string {
//     switch (active) {
//       case 1:
//         return "1"; // Admit
//       case 2:
//         return "2"; // Discharge
//       case 0:
//       default:
//         return "0"; // Inactive
//     }
//   }

// ByIdData:any=[];
// roomDetails(data: any) {
//   this.id = data;
//   console.log("dataaaaa", this.id);
//   this.service.getRoomDtls(data).subscribe((res: any) => {
//     this.ByIdData = res;
//     this.service.setRoomData(this.ByIdData);
//         this.router.navigate(['/Admin/room-details']);
//   });
// }


// groupidchnagedata:any=[];
//   groupidchnage(data: any) {
//     this.id = data
//     console.log("user id", this.id)
//     this.service.getuserById(data).subscribe((res: any) => {
//       this.groupidchnagedata = res[0];
//       // this.userprofile()
//       console.log("groupidchnage by id", this.groupidchnagedata)
//     })
//   }

//   // groupidchnagebyuserside() {
//   //   this.service.groupidchangeByids(this.id, this.groupidchnagedata).subscribe((res: any) => {
//   //     console.log(' updated successfully', res);
//   //     this.swet.SucessToast(`Updated Successfully`);
//   //   }, (error) => {
//   //     console.error('Error updating user', error);
//   //   });
//   // }



//   changeGroupId(groupId: number, userId: number) {
//     const updatedData = { group_id: groupId };
  
//     this.service.groupidchangeByids(userId, updatedData).subscribe(
//       (res: any) => {
//         console.log(`Group ID updated successfully for user ${userId}`, res);
//         this.swet.SucessToast(`User's group changed successfully to ${groupId === 1 ? 'Admin' : groupId === 2 ? 'User' : 'Client'}`);
//         this.groupidchnagedata.group_id = groupId; // Update local data if necessary
//       },
//       (error) => {
//         console.error('Error updating group ID', error);
//       }
//     );
//   }
  

  



// getStatusText(active: number): string {
//   switch (active) {
//     case 1: // Admit
//       return 'btn-success'; // Green
//     case 2: // Discharge
//       return 'btn-danger'; // Red
//     case 0: // Inactive
//     default:
//       return 'btn-warning'; // Orange
//   }
// }






activePopoverIndex: number | null = null;

togglePopover(index: number): void {
  // Toggle the popover for the clicked index
  this.activePopoverIndex = this.activePopoverIndex === index ? null : index;
}

  // loginForm!:FormGroup;
  updateForm!:FormGroup;
  password!:FormGroup;
  constructor(
    private service:AllService,
    private router:Router,
    private fb: FormBuilder,
    private swet :SweetalertssService,
    private datePipe: DatePipe
  ){
    const userIdString = localStorage.getItem('userId');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
  
  
    this.updateForm = this.fb.group({
      email: [''],
      first_name :['' ],
      last_name :['', ],
      date_of_birth :['', ],
      date_of_joining :['', ],
      designation :['', ],
      phone :[''],
    })


    this.password = this.fb.group({
      password: [''],
    })


  }

  getFormattedDate(): string {
    return this.datePipe.transform(this.userByIdData.date_of_birth, 'date') || '';
  }
  
  userId:any
  ck: boolean = false;
  
  dataSend: any
  
    ngOnInit(): void {
      this.getusersdatas();
  
  
    }
    getusersData:any= []
    getusersdatas() {
      this.service.getclientsdata().subscribe({
        next: (res: any) => {
          this.getusersData = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

  addClient(){
    this.router.navigate(['/Admin/Addclient'])
  }
  
  userprofile(){
    this.router.navigate(['/Admin/Clientdetails'])
  }

  
  id:any;
  userByIdData:any=[];
    ById(data: any) {
      this.id = data
      console.log("user id", this.id)
      this.service.getuserById(data).subscribe((res: any) => {
        this.userByIdData = res[0];
        // this.userprofile()
        this.service.setclientData(this.userByIdData);
        console.log("policy by id", this.userByIdData)
      })
    }


        
    client_idss:any;
    userByIdDatas:any=[];
    ByIds(data: any) {
      this.id = data
      console.log("user id", this.id)
      this.service.getuserById(data).subscribe((res: any) => {
        this.userByIdDatas = [res[0]];
        this.client_idss=res[0].id
        localStorage.setItem('clientdetails', JSON.stringify(this.userByIdDatas));
        localStorage.setItem('clientid', JSON.stringify(data));

        this.userprofile()
        
        this.service.setclientData(this.userByIdDatas);
        console.log("policy by id", this.userByIdDatas)
      })
    }
  
    updateusers() {
      this.service.userupdatedss(this.id, this.userByIdData).subscribe((res: any) => {
        console.log(' updated successfully', res);
        this.swet.SucessToast(`Updated Successfully`);
        window.location.reload()
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


  
    updatestatuser() {
      this.service.Userstatusupdatess(this.id, this.userByIdData).subscribe((res: any) => {
        console.log('status updated successfully', res);
        this.swet.SucessToast(`Action Updated Successfully`);
        window.location.reload()
      }, (error) => {
        console.error('Error updating user', error);
      });
    }


 



    

// Convert the active value to the corresponding status string
getStatus(active: number): string {
switch (active) {
  case 1:
    return "1"; // Admit
  case 2:
    return "2"; // Discharge
  case 0:
  default:
    return "0"; // Inactive
}
}

// Handle status updates
updateStatus(user: any, newStatus: string) {
const id = user.id;
const updatedStatus = parseInt(newStatus, 10);

this.dataSend = {
  active: updatedStatus,
};

this.service.clientstatusupdates(id, this.dataSend).subscribe(
  (res: any) => {
    if (res) {
      this.getusersdatas(); // Refresh user data
      console.log("uop",this.getusersdatas())
      const statusText = this.getStatusText(updatedStatus);
      this.swet.SucessToast(`Status updated to ${statusText} successfully!`);
    }
  },
  (err: any) => {
    console.error(err);
  }
);
}

// Convert the active number to a status label for toast messages
// getStatusText(active: number): string {
//   switch (active) {
//     case 1:
//       return "Admit";
//     case 2:
//       return "Discharge";
//     case 0:
//     default:
//       return "Inactive";
//   }
// }



getStatusText(active: number): string {
switch (active) {
  case 1: // Admit
    return 'btn-success'; // Green
  case 2: // Discharge
    return 'btn-danger'; // Red
  case 0: // Inactive
  default:
    return 'btn-warning'; // Orange
}
}

ByIdData:any=[];
roomDetails(data: any) {
this.id = data;
console.log("dataaaaa", this.id);
this.service.getRoomDtls(data).subscribe((res: any) => {
  this.ByIdData = res;
  this.service.setRoomData(this.ByIdData);
      this.router.navigate(['/Admin/room-details']);
});
}


groupidchnagedata:any=[];
groupidchnage(data: any) {
  this.id = data
  console.log("user id", this.id)
  this.service.getuserById(data).subscribe((res: any) => {
    this.groupidchnagedata =  res[0];
    // this.userprofile()
    console.log("groupidchnage by id", this.groupidchnagedata)
  })
}

// groupidchnagebyuserside() {
//   this.service.groupidchangeByids(this.id, this.groupidchnagedata).subscribe((res: any) => {
//     console.log(' updated successfully', res);
//     this.swet.SucessToast(`Updated Successfully`);
//   }, (error) => {
//     console.error('Error updating user', error);
//   });
// }



changeGroupId(groupId: number, userId: number) {
  const updatedData = { group_id: groupId };

  this.service.groupidchangeByids(userId, updatedData).subscribe(
    (res: any) => {
      console.log(`Group ID updated successfully for user ${userId}`, res);
      this.swet.SucessToast(`User's group changed successfully to ${groupId === 1 ? 'Admin' : groupId === 2 ? 'User' : 'Client'}`);
      this.groupidchnagedata.group_id = groupId; // Update local data if necessary
    },
    (error) => {
      console.error('Error updating group ID', error);
    }
  );
}




  userByIdDatass:any=[];
    ByIdssss(data: any) {
      this.id = data
      console.log("user id", this.id)
      this.service.getuserById(data).subscribe((res: any) => {
        this.userByIdDatass = res[0];
        // this.userprofile()
       
      })
    }




// editpasswordsss() {
//   this.service.editpasswordss(this.id, this.userByIdData).subscribe((res: any) => {
//     console.log(' updated successfully', res);
//     this.swet.SucessToast(`Updated Successfully`);
//     window.location.reload()
//   }, (error) => {
//     console.error('Error updating user', error);
//   });
// }

editpasswordsss() {
  const updatedData = {
      email: this.userByIdDatass.email,
      password: this.userByIdDatass.password,
  };
  this.service.editpasswordss(this.id, updatedData).subscribe(
      (res: any) => {
          console.log('Updated successfully', res);
          this.swet.SucessToast('Updated Successfully');
          window.location.reload();
      },
      (error) => {
          console.error('Error updating user', error);
      }
  );
}





    
}
