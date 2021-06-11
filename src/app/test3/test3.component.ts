import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Initiative } from '../model/initiative';
import { InitiativeService } from '../services/initiative.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  @ViewChild('takeInput', { static: false }) //this is for the file upload
  inputClear: ElementRef;
  selectedFile: File;
  //
  initiative: Initiative = new Initiative();
  isButtonVisible: boolean = false; 
  //
  constructor(private initiativeService: InitiativeService) {}

  ngOnInit(): void {
    this.selectedFile = null;
  }



  clickEvent() {
    alert("Button clicked")
  }
  upload() {
    console.log(this.selectedFile);
    this.initiativeService
      .postFile(this.selectedFile, 'ale', 4)
      .subscribe((res) => {
        console.log(res);
        this.inputClear.nativeElement.value = '';
      });
  }
  getFile(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  displayFileNames() {}
  getMembers(): void { }
  //   this.service.getMembers(this.initId).subscribe(res => {
  //     this.user = res;
  //     console.log(res);
  //   })  
  // }
}