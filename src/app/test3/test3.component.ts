import { Component, OnInit } from '@angular/core';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';
import { User } from '../model/user';
import { SpecificService } from '../services/specific.service';
import { InitiativeService } from '../services/initiative.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  public user: User;
  public initiative: Initiative;
  public initiative1: InitiativeDTO;
  userinfo: String = "/5/17";
  initId: String = "5";
  public isButtonVisible: boolean = true;

  constructor(private service: SpecificService) {
    this.user = new User();
    this.initiative = new Initiative;


  }

  ngOnInit(): void {
    this.getMembers(); {
      this.service.getMembers(this.initId).subscribe(res1 => {
        this.initiative = res1;
        console.log(res1);
      })
    }
    // this.selectedFile = null; //may need to add in selectedFIle
    // this.s3DownloadFile();
  }



  clickEvent() {
    alert("Button clicked")
  }

  addMembers(): void {
    this.service.addMembers(this.userinfo).subscribe(res => {
      this.user = res;
      console.log(res);
      if (res == null) {
        console.log("what the! it worked!");
        this.isButtonVisible = false;
      }
      else {
        console.log("this wont work");
        this.isButtonVisible = true;
      }
    })


  }
    getFile($event){
      //not sure what went in here?
    }
upload(){

}
  getMembers(): void { }
  //   this.service.getMembers(this.initId).subscribe(res => {
  //     this.user = res;
  //     console.log(res);
  //   })  
  // }
}