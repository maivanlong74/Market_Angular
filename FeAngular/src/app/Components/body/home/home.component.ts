import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  imgUrl = [
    {
      id: 1,
      url: 'https://wallpapertag.com/wallpaper/full/9/a/b/353044-cat-background-1920x1080-for-windows-10.jpg',
    },
    {
      id: 2,
      url: 'https://www.hoiyeumeo.vn/public/upload/images/meo-tabby5a.jpg',
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/originals/11/58/23/11582349014f3645fb7703fa8acaf7d7.jpg',
    },
    {
      id: 4,
      url: 'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
    },
  ]

  currentUrl: string = '';

  currentIndex = 0;

  ngOnInit() {
      this.showNextUrl();

      setInterval(() => {
        this.showNextUrl();
      }, 3000);
  }

  showNextUrl() {
    this.currentUrl = this.imgUrl[this.currentIndex].url;

    this.currentIndex = (this.currentIndex + 1) % this.imgUrl.length;
  }


  constructor(private spinner: NgxSpinnerService){}
  OpenSpinner(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }
}
