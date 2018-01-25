import { Component, OnInit } from '@angular/core';
const fs = require("fs")

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {

  constructor() { }

  getFolderStructure(folder) {
    fs.readdir(folder, (err, file) => {
      console.log(file)
      this.getFolderStructure(file)
    })
  }

  ngOnInit() {
    this.getFolderStructure(".")
  }

}
