import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pianoroll',
  templateUrl: './pianoroll.component.html',
  styleUrls: ['./pianoroll.component.scss']
})
export class PianorollComponent implements OnInit {
  constructor() {
  }

  resizePianoroll() {
    document.addEventListener("mousemove", this.calculatePianorollSize)
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.calculatePianorollSize)
    })
  }

  calculatePianorollSize() {
    const maxHeight = window.innerHeight - 300
    const minHeight = 35
    const newHeight = window.innerHeight - event.pageY
    const pianoroll = document.querySelector('.rs-pianoroll-block')

    newHeight < maxHeight && newHeight > minHeight ? pianoroll.style.height = `${newHeight}px` : null
    newHeight > maxHeight ? pianoroll.style.height = `${maxHeight}px` : null
    newHeight < minHeight ? pianoroll.style.height = `${minHeight}px` : null
  }

  ngOnInit() {
  }

}