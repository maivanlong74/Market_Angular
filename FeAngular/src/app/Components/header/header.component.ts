import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(private spinner: NgxSpinnerService){}
  OpenSpinner(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }
}
