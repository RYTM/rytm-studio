import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.scss']
})
export class ArrangementComponent implements OnInit {
  @ViewChild('arrangement') arrangement
  @ViewChild('svg') svg

  arrangementWidth: number
  arrangementChannelWidth: string
  svgViewBox: string
  svgChannelViewBox: string
  svgX: number = 10
  beatLines: object[] = []
  cursorInArrangement: boolean = false

  constructor() { }

  createBeatLinesObject(count) {
    for (let i = 0; i < count; i++) {
      const rect = {
        y: "0",
        height: "1px",
        width: "1px",
        class: "rs-beat-line--step"
      }

      if (i % 4 === 0 && i != 0) {
        rect.class += " rs-beat-line--beat"
      }

      if (i % 16 === 0 && i != 0) {
        rect.class += " rs-beat-line--measure"
        rect.width = "2px"
      }
      this.beatLines.push(rect)
    }
  }

  setCursorInArrangement(state: boolean) {
    this.cursorInArrangement = state
  }

  zoomArrangement(e) {
    const scrollSensitivity = 0.2
    let scrollCounter = 0
    if(this.cursorInArrangement) {
      if(e.ctrlKey) {
        const evt = window.event || e;
        const scroll = evt.detail ? evt.detail * scrollSensitivity : (evt.wheelDeltaY / 120) * scrollSensitivity;
      
        let newX = this.svgX += scroll
        newX < 100 && newX > 5 ? this.svgX = newX : null
        newX > 100 ? this.svgX = 100 : null
        newX < 5 ? this.svgX = 5 : null
      }
    }
  }

  ngOnInit() {
    this.arrangementWidth = this.arrangement.nativeElement.clientWidth
    this.svgViewBox = `0 0 ${this.arrangementWidth} 1`
    this.svgChannelViewBox = `0 0 ${this.arrangementWidth / 16} 1`
    this.arrangementChannelWidth = `${this.arrangementWidth}px`
    this.createBeatLinesObject(this.arrangementWidth / 10)



  }

  ngAfterViewInit() {
    
  }

}
