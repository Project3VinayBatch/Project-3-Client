import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class Test3Component implements OnInit, OnDestroy {
  @ViewChild('takeInput', { static: false }) //this is for the file upload
  inputClear: ElementRef;
  selectedFile: File;
  public user: User;
  public initiative: Initiative;
  //public initiative1:InitiativeDTO;
  userinfo: string = "82408367";
  initId: string = sessionStorage.getItem("id");
  public isButtonVisible: boolean = true;

  currentInitiative:Initiative;
  subscription:Subscription;

  //CONSTRUCTOR
  constructor(
    private initiativeService: InitiativeService,
    private service: SpecificService
  ) {
    this.user = new User();
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
    console.log("test");
    this.subscription = this.initiativeService.currentInitiative
    .subscribe(currentInitiative => {
      console.log("initiative from api");
      console.log(currentInitiative);
      // currentInitiative.members[0]= {
      //       id: 2,
      //       username: "testboi",
      //       role: "ADMIN",
      //       initiatives: [],
      //       files: []
      // }
      this.currentInitiative = currentInitiative
      console.log(currentInitiative);
    });



    // this.selectedFile = null;
    // this.displayFileNames();
    // this.getMembers();
    // {
    //   this.service.getMembers(this.initId).subscribe((res1) => {
    //     this.initiative = res1;
    //     console.log(res1);
    //   });
    // }
  }

  clickEvent() {
    alert('Button clicked');
  }

  makeAdmin(user:User){
    console.log("clicked");
    this.currentInitiative.pointOfContactId = user.id;
    this.service.setPoC(this.initiative).subscribe(res => {
      console.log(res);
    });
  }
  upload() {
    console.log(this.selectedFile);
    this.initiativeService
      .postFile(this.selectedFile, sessionStorage.getItem('username'), this.currentInitiative.initiativeId) //switch 1 for current initiative
      .subscribe((res) => {
        console.log(res);
        this.inputClear.nativeElement.value = '';
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
    this.service.addMembers(this.userinfo+"/"+this.currentInitiative.initiativeId).subscribe((res) => {
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
    this.initiativeService.currentInitiative.subscribe(res => {
      this.currentInitiative = res;
    });
    console.log(this.currentInitiative);
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
