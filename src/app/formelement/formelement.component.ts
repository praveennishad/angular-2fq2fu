import { Component } from '@angular/core';

@Component({
  selector: 'my-formelement',
  templateUrl: './formelement.component.html',
})
export class FormelementComponent {
  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
  }
}
