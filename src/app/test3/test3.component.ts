import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
// import { String } from 'aws-sdk/clients/appstream';
import { Files } from '../model/files';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';
import { Role, User } from '../model/user';
import { InitiativeService } from '../services/initiative.service';
import { SpecificService } from '../services/specific.service';
import { UserService } from '../services/user.service';

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
  public isButtonVisible: boolean = true;
  public isContact:boolean; //displays make PoC btn
  public isAdmin:Boolean;

  currentInitiative: Initiative;
  subscription: Subscription;
  currentUser: User;
  poC: string;
  //CONSTRUCTOR
  constructor(
    private initiativeService: InitiativeService,
    private service: SpecificService,
    private userService: UserService,
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
    console.log('test');
    this.subscription = this.initiativeService.currentInitiative.subscribe(
      (currentInitiative) => {
        console.log('initiative from api');
        console.log(currentInitiative);
        this.currentInitiative = currentInitiative;
        if (currentInitiative.pointOfContact != null){
          this.isContact = true;
        }
        else{this.isContact = true;}
        console.log("isContact: "+this.isContact);
        console.log("isAdmin: "+this.isAdmin);
        // console.log(this.currentInitiative);
      }
      
    );
    this.selectedFile = null;
    this.displayFileNames();
    this.getMembers();
    this.service
      .getMembers(String(this.currentInitiative.initiativeId))
      .subscribe((res1) => {
        this.currentInitiative = res1;
        console.log(this.currentInitiative.members);
        if (
          this.currentInitiative.members.length == 0 ||
          this.currentInitiative.members == null
        ) {
          this.poC = 'No Point of Contact';
          console.log(this.currentInitiative.members);
        } else {
          for (var i = 0; i < this.currentInitiative.members.length; i++) {
            if (
              this.currentInitiative.members[i].id ==
              this.currentInitiative.pointOfContact
            ) {
              console.log("break");
              this.poC = this.currentInitiative.members[i].username;
              break;
            }
            this.poC = 'No Point of Contact';
          }
        }
      });
    this.initiativeService.getUser().subscribe((res) => {
      this.currentUser = res;
      //no error handling...
    });
    this.userService.getUserFromApi().subscribe(
      res =>
      {
        console.log(res);
        this.currentUser = res;
        console.log(this.currentUser);
        if (res.role == Role.ADMIN) {// do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option1");
        }
        else if (res.role == Role.USER) {// this needs to be here 
          this.isAdmin =false;
          console.log("option2");
        }
        else if (res.role == "ADMIN") { // do not delete this, will not catch admin without
          this.isAdmin = true;
          console.log("option5");
        }
        else if (res.role == "USER") {
          this.isAdmin = false;
          console.log("option6");
        }
        
        if(this.isAdmin==true){
          return true;
       }
        //if admin, set isAmin = true;
      }
      

      //do not refresh in oninit...
    );
  }

  showPoC() {
    console.log(this.currentInitiative.members);
  }
  clickEvent() {
    alert('Button clicked');
  }

  makePoC(user: User) {
    let intiiDTO = new InitiativeDTO(
      this.currentInitiative.createdBy,
      this.currentInitiative.title,
      this.currentInitiative.description,
      user.id
    );
    // this.currentInitiative.members = new Set<User>();
    console.log(intiiDTO);
    this.service.setPoC(intiiDTO).subscribe((res) => {
      this.currentInitiative = res;
      console.log(res);
      for (var i = 0; i < this.currentInitiative.members.length; i++) {
        if (
          this.currentInitiative.members[i].id ==
          this.currentInitiative.pointOfContact
        ) {
          this.poC = this.currentInitiative.members[i].username;
          break;
        }
        this.poC = 'No Point of Contact';
      }
    });
  }
  upload() {
    this.initiativeService
      .postFile(
        this.selectedFile,
        this.currentUser.username,
        this.currentInitiative.initiativeId
      ) //switch 1 for current initiative
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
    this.initiativeService
      .getFile(this.currentInitiative.initiativeId)
      .subscribe((res) => {
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
    this.service
      .addMembers(
        this.currentUser.id + '/' + this.currentInitiative.initiativeId
      )
      .subscribe((res) => {
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
    this.initiativeService.currentInitiative.subscribe((res) => {
      console.log(res);
      this.currentInitiative.members = res.members;
    });
    console.log(this.currentInitiative);
  }

  // setActive():void{
  //   this.service.
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
