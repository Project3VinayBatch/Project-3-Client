import { Component, OnInit } from '@angular/core';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  selectedFile: File;
  constructor(private initiativeService: InitiativeService) {}

  ngOnInit(): void {
    this.selectedFile = null;
    this.s3DownloadFile();
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
      });
  }
  getFile(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
}
