import { AfterViewInit, Component, OnInit } from '@angular/core';
import ListProduct from '../../../Data/Product.json';
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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  Products: Categorys[] = [];
  p: number = 1;
  GetId: string | null = null;
  selectedMenuData: any[] = [];
  selectedTypeData: any[] = [];

  constructor(){}
  ClickAll(){
    if(this.Products.length > 0 ){
      this.selectedMenuData = [];

      for(let category of this.Products){
        const productList = category.listProduct;
  
        for(let productItem of productList){
            this.selectedMenuData.push(productItem);
        }
      }
    }
  }

  // =======================
  onChage(event: any){
    const se = event.target?.value;
    
    if(se !== undefined){
      this.GetId = se;
      this.update();
    }
  }
  onChagee(event: any){
    const se = event.target?.value;
    
    if(se !== undefined){
      this.GetType(se);
    }
  }
  // ========================

  // ========================
  ngOnInit() {
    this.Products = ListProduct;

    if(this.GetId === null){
      for(let list of this.Products){
        const category = list.listProduct;

        for(let item of category){
          this.selectedMenuData.push(item);
        }
      }
    } 
  }

  ngAfterViewInit() {
      if(this.GetId !== null){
        const tsData = this.GetData(this.GetId);
        this.selectedMenuData = tsData;
      }
  }
  // ==========================

  // ==========================
  update() {
    if(this.GetId !== null){

      if(this.GetId == 'all'){
        this.selectedMenuData = [];

        for(let category of this.Products){
          const productList = category.listProduct;
    
          for(let productItem of productList){
              this.selectedMenuData.push(productItem);
          }
        }
      } else{
        const tsData = this.GetData(this.GetId);
        this.selectedMenuData = tsData;
        this.selectedTypeData = this.selectedMenuData;
      }
    }
  }
  // ==========================

  // ==========================
  GetData(id: string){
    const result = this.Products.find(item => item.idMenuProducts == id);
    return result ? result.listProduct : [];
  }

  GetType(id: string){
    this.selectedMenuData = [];

    if(id !== 'null'){
      for(let category of this.Products){
        const productList = category.listProduct;
  
        for(let productItem of productList){
          if(productItem.typeProducts === id){
            this.selectedMenuData.push(productItem);
          }
        }
      }
    } else{
      for(let category of this.Products){
        const productList = category.listProduct;
  
        for(let productItem of productList){
          this.selectedMenuData.push(productItem);
        }
      }
    }
  }

}

