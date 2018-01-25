import { Component, OnInit } from '@angular/core';
const userHome = require('user-home')
const fs = require("fs")

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {
  initialFiles = []
  constructor() { }

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

  getSubDirectories(folder) {
    console.log(event.path[1])
    const target = event.path[1]
    const subList = document.createElement("ul")
    subList.classList.add("rs-filemanager-list-block")

    fs.readdir(folder, (err, files) => {
      if(err) throw err

      files.map(file => {
        const listElement = document.createElement("li")
        listElement.classList.add("rs-filemanager-list-element")

        fs.stat(folder + file, (err, stats) => {
          if(err) throw err

          if(stats.isDirectory()) {
            listElement.innerHTML = `
            <span class="rs-list-element__folder" (click)="getSubDirectories(${folder + file}/)">
              ${file}
            </span>`
            subList.appendChild(listElement)
          } else {
            listElement.innerHTML = `
            <span class="rs-list-element__file">
              ${file}
            </span>`
            subList.appendChild(listElement)
          }
        })
      })

    })
    target.appendChild(subList)
  }

  ngOnInit() {
    this.getFolderStructure(`${userHome}/Documents/`)
  }

}
