import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  switchSidebarTabs(content) {
    const tabs: Element[] = Array.from(document.querySelectorAll('.rs-tab-block__element'))
    const tab: any = event.target
    tabs.map(t => t.classList.remove("rs-tab-block__element--active"))
    tab.classList.add("rs-tab-block__element--active")

    const contentBlock = document.querySelector(".rs-sidebar-content-block")
    const contentBlockChildren = contentBlock.children

    const childrenWidth = [contentBlockChildren[0].clientWidth, contentBlockChildren[0].clientWidth + contentBlockChildren[1].clientWidth, contentBlockChildren[0].clientWidth + contentBlockChildren[1].clientWidth + contentBlockChildren[2].clientWidth]

    contentBlock.style.marginLeft = `-${childrenWidth[content]}px`

    console.log(childrenWidth[content])

  }

  ngOnInit() {

  }

}
