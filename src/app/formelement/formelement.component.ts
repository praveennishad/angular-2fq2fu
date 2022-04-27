import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'my-formelement',
  templateUrl: './formelement.component.html',
})
export class FormelementComponent implements OnChanges {
  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
  }
  ngOnChanges() {
    console.log('OnInit Life Cycle Hook');
  }
}
