import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import dataBackground from "../../../Data/Image_Background.json"
import ListProduct from '../../../Data/Product.json';
interface dataBr {
  id: number,
  url: string
}
interface Categorys{
  idMenuProducts: string;
  nameMenuProducts: string;
  listProduct: {
    idProduct: number;
    typeProducts: string;
    nameProduct: string;
    moeny: string;
    urlImg: string
  }[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  imgUrl: dataBr[] = [];
  Products: Categorys[] = [];

  currentUrl: string = '';

  currentIndex = 0;

  ngOnInit() {
    this.imgUrl = dataBackground;
    this.Products = ListProduct;

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
