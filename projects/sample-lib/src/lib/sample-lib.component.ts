import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample-lib',
  template: `
    <p>
    <u>
      <i> 
      yes sample-lib works!
      </i>
    </u>
    </p>
  `,
  styles: []
})
export class SampleLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
