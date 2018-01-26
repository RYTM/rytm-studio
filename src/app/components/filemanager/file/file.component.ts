import { Component, OnInit, Input } from '@angular/core';
const fs = require("fs")
const userHome = require("user-home")

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file;
  subfiles: object[] = []
  getSubdirectory: boolean = false;
  openSublist: boolean = false

  constructor() { }

  getFolderStructure(folder) {
    fs.readdir(folder, (err, files) => {
      if(err) throw err
      files.map(file => {
        fs.stat(folder + file, (err, stats) => {
          if(err) throw err
          if(stats.isDirectory()) {
            this.subfiles.push({name: file, directory: true, path: folder + file + "/"})
          } else {
            this.subfiles.push({name: file, directory: false, path: folder + file})
          }
        })
      })
    })
  }

  getSubdirectories() {
    this.getSubdirectory = true
    this.openSublist = !this.openSublist
  }

  getListHeight() {
    if(this.openSublist) {
      return "block"
    } else {
      return "none"
    }
  }

  ngOnInit() {
    this.file.directory ? this.getFolderStructure(this.file.path) : null
  }

}
