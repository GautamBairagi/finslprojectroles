import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';
interface Permission {
  name: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}
@Component({
  selector: 'app-user-group-permission',
  templateUrl: './user-group-permission.component.html',
  styleUrls: ['./user-group-permission.component.css']
})
export class UserGroupPermissionComponent  implements OnInit{
id: any;
ByIdsideMenu: any = [];
ByIdsubMenu: any = [];
sideMenuById(data: any) {
  this.id = data;
  this.service.SidebarByIDs(data).subscribe((res: any) => {
    this.ByIdsideMenu = res;
  });
}
sideData: any[] = [];
// ByIdsideMenu: any = [];
// id: any;

constructor(private service: AllService) {}
ngOnInit(): void {
  this.getsidebarsdata();
}
getsidebarsdata(): void {
  this.service.getsidebarmenu().subscribe({
    next: (res) => {
      this.sideData = res;
    },
    error: (err) => {
      console.error('Error fetching sidebar data:', err);
    }
  });
}
updatePermissions(module: any, role: string, event: any): void {
  const updatedValue = event.target.checked ? 1 : 0;
  const updatePayload = { ...this.ByIdsideMenu };
  updatePayload[role] = updatedValue;
  this.service.sidebarpermissionByids(this.id, updatePayload).subscribe({
    next: (res) => {
      console.log('Permissions updated successfully:', res);
      this.getsidebarsdata();
      window.location.reload();
    },
    error: (err) => {
      console.error('Error updating permissions:', err);
    }
  });
}
}
