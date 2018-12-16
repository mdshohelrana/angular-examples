import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  isSelected = false;
  constructor() { }

  ngOnInit() {
  }
  onChangeInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.isSelected = true;
  }

}
