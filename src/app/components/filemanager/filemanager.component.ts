import { Component, OnInit, Renderer2 } from '@angular/core';
const userHome = require('user-home')
const fs = require("fs")

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss'],
})
export class FilemanagerComponent implements OnInit {
  initialFiles = []
  constructor(private renderer: Renderer2) { }

  getFolderStructure(folder) {
    fs.readdir(folder, (err, files) => {
      if(err) throw err
      files.map(file => {
        fs.stat(folder + file, (err, stats) => {
          if(err) throw err
          if(stats.isDirectory()) {
            this.initialFiles.push({name: file, directory: true, path: folder + file + "/"})
          } else {
            this.initialFiles.push({name: file, directory: false, path: folder + file})
          }
        })
      })
    })
  }

  ngOnInit() {
    this.getFolderStructure(`${userHome}/Documents/`)
  }

}