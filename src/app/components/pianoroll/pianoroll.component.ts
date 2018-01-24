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
    document.querySelector('.rs-pianoroll-block').style.height = `${window.innerHeight - event.pageY}px`
  }

  ngOnInit() {
  }

}