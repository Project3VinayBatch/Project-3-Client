import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  constructor(private initiativeService: InitiativeService) {}

  iconList = [
    // array of icon class list based on type
    { type: 'xlsx', icon: 'fa fa-file-excel-o' },
    { type: 'pdf', icon: 'fa fa-file-pdf-o' },
    { type: 'txt', icon: 'fa fa-file-text' },
    { type: 'jpg', icon: 'fa fa-file-image-o' },
  ];

  getFileExtension(filename) {
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
  }

  clickEvent() {
    alert('Button clicked');
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
}
