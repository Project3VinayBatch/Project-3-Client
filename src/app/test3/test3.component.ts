import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { String } from 'aws-sdk/clients/appstream';
import { Files } from '../model/files';
import { Initiative } from '../model/initiative';
import { User } from '../model/user';
import { InitiativeService } from '../services/initiative.service';
import { SpecificService } from '../services/specific.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  @ViewChild('takeInput', { static: false }) //this is for the file upload
  inputClear: ElementRef;
  selectedFile: File;
  public user: User;
  public initiative: Initiative;
  //public initiative1:InitiativeDTO;
  userinfo: String = '/5/17';
  initId: String = '4';
  public isButtonVisible: boolean = true;
  constructor(
    private initiativeService: InitiativeService,
    private service: SpecificService
  ) {
    this.user = new User();
    this.initiative = new Initiative();
  }
  documentList: Files[];
  iconList = [
    // array of icon class list based on type
    { type: 'xlsx', icon: 'fa fa-file-excel-o' },
    { type: 'pdf', icon: 'fa fa-file-pdf-o' },
    { type: 'txt', icon: 'fa fa-file-text' },
    { type: 'jpg', icon: 'fa fa-file-image-o' },
  ];

  getFileExtension(filename: String) {
    // this will give you icon class name
    let ext = filename.split('.').pop();
    let obj = this.iconList.filter((row) => {
      if (row.type === ext) {
        return true;
      }
    });
    if (obj.length > 0) {
      let icon = obj[0].icon;
      return icon;
    } else {
      return '';
    }
  }

  ngOnInit(): void {
    this.selectedFile = null;
    this.displayFileNames();
    this.getMembers();
    {
      this.service.getMembers(this.initId).subscribe((res1) => {
        this.initiative = res1;
        console.log(res1);
      });
    }
  }

  clickEvent() {
    alert('Button clicked');
  }

  upload() {
    console.log(this.selectedFile);
    console.log(sessionStorage.getItem('username'));
    this.initiativeService
      .postFile(this.selectedFile, sessionStorage.getItem('username'), 4) //switch 1 for current initiative
      .subscribe((res) => {
        console.log(res);
        //this.inputClear.nativeElement.value = '';
      });
  }
  getFile(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  displayFileNames() {
    this.initiativeService.getFile(4).subscribe((res) => {
      this.documentList = res;
    });
  }
  getMembers(): void {}
  //   this.service.getMembers(this.initId).subscribe(res => {
  //     this.user = res;
  //     console.log(res);
  //   })
  // }

  addMembers(): void {
    this.service.addMembers(this.userinfo).subscribe((res) => {
      this.user = res;
      console.log(res);
      if (res == null) {
        console.log('what the! it worked!');
        this.isButtonVisible = false;
      } else {
        console.log('this wont work');
        this.isButtonVisible = true;
      }
    });
  }
}
