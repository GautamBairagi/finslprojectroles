import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent  implements OnInit{
  constructor(
    private service:AllService
  ){}
  files: File[] = [];
  onDragOver(event: DragEvent) {
    event.preventDefault(); 
  }
  onDrop(event: DragEvent) {
    event.preventDefault(); 
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.handleFileInput(event.dataTransfer.files);
    }
  }
  handleFileInput(fileList: FileList) {
    Array.from(fileList).forEach((file) => {
      this.files.push(file);
    });
  }
  onFileDropped(event: any) {
    console.log('CDK Drop List event:', event);
  }
  mainId:any;
  allData:any[] = []
  getbydatasss:any=[];
  ngOnInit(): void {
    const userData = this.service.getUserData();
    this.allData = userData
    this.mainId = userData[0].id
    console.log(" user id:", this.mainId);
    this.taskbyuseridsss()

  }


  taskbyuseridsss(): void {
    console.log(",this.mainId", this.mainId)
    this.service.taskbyuseridss(this.mainId).subscribe((res: any) => {
      this.getbydatasss = res[0];
      console.log("getusertaskby res", this.getbydatasss)
    });
  }


}
