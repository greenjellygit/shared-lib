import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jel-layout-lib',
  template: `
    <p class="test">
      layout-lib works!!!
    </p>
  `,
  styleUrls: ['./layout-lib.component.scss']
})
export class LayoutLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
