import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  switchSidebarTabs() {
    const tabs: Element[] = Array.from(document.querySelectorAll('.rs-tab-block__element'))
    const tab: any = event.target
    tabs.map(t => t.classList.remove("rs-tab-block__element--active"))
    tab.classList.add("rs-tab-block__element--active")
  }

  ngOnInit() {
  }

}
