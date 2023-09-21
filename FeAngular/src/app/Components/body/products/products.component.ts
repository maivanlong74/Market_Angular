import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  p: number = 1;
  GetId: string | null = null;
  selectedMenuData: any[] = [];

  constructor(){}

  ClickGetId(id: string){
    this.GetId = id;
    this.update();
  }

  onChage(event: any){
    const se = event.target?.value;
    
    if(se !== undefined){
      this.ClickGetId(se);
    }
  }

  ngOnInit() {
      if(this.GetId === null){
        this.GetId = this.Products.length > 0 ? this.Products[0].idMenuProducts : null;
        this.update();
      } 
  }

  ngAfterViewInit() {
      if(this.GetId !== null){
        const tsData = this.GetData(this.GetId);
        this.selectedMenuData = tsData;
      }
  }
  
  update() {
    if(this.GetId !== null){
      const tsData = this.GetData(this.GetId);
      this.selectedMenuData = tsData;
      console.log("selectedMenuData", this.selectedMenuData)
    }
}

  GetData(id: string){
    const result = this.Products.find(item => item.idMenuProducts == id);
    return result ? result.listProduct : [];
  }

  Products = [
    {
      idMenuProducts: 'dt',
      nameMenuProducts: 'Đồ điện tử',
      listProduct: [
        {
          idProduct: 1,
          typeProducts: 'Computer',
          nameProduct: 'Laptop Apple MacBook Air M1 2020',
          moeny: '22.000.000 vnd',
          urlImg: 'https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          idProduct: 2,
          typeProducts: 'Watch',
          nameProduct: 'Đồng hồ MVW 42 mm Nam ML069-02',
          moeny: '790.000 vnd',
          urlImg: 'https://cdn.tgdd.vn/Products/Images/7264/279661/mvw-ml069-02-nam-1.jpg'
        },
        {
          idProduct: 3,
          typeProducts: 'Phone',
          nameProduct: 'Điện thoại Samsung Galaxy A04 (3GB/32GB)',
          moeny: '22.000.000 vnd', 
          urlImg: 'https://tse2.mm.bing.net/th?id=OIP.MowHG7vrBKRCHvD_jDqgbwHaI0&pid=Api&P=0&h=220'
        },
        {
          idProduct: 4,
          typeProducts: 'Accessory',
          nameProduct: 'Pin sạc dự phòng 7.500 mAh 10.5W AVA+ LA Y68',
          moeny: '22.000.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/57/241167/ava-plus-y68-vang-1-org.jpg'
        },
        {
          idProduct: 5,
          typeProducts: 'Phone',
          nameProduct: 'Điện thoại iPhone 11 64GB',
          moeny: '22.000.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg'
        },
        {
          idProduct: 6,
          typeProducts: 'Television',
          nameProduct: 'Smart Tivi NanoCell LG 4K 55 inch 55NANO76SQA',
          moeny: '11.000.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-1-2.jpg'
        },
      ]      
    },

    {
      idMenuProducts: 'ts',
      nameMenuProducts: 'Đồ trang sức',
      listProduct: [
        {
          idProduct: 1,
          typeProducts: 'Silver',
          nameProduct: 'N DEER HORN',
          moeny: '490.000 vnd',
          urlImg: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/dsc6911-1-copy.jpg?v=1599426772157'
        },
        {
          idProduct: 2,
          typeProducts: 'Silver',
          nameProduct: 'ANK MULTI DANGLE DROP GEM',
          moeny: '390.000 vnd',
          urlImg: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-cropped-resized-bi-2110-2-070-20651-1.jpg?v=1641927240487'
        },
        {
          idProduct: 2,
          typeProducts: 'Silver',
          nameProduct: 'R MIDI KIMCO OXIDIZE',
          moeny: '390.000 vnd',
          urlImg: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-cropvi-2303-4-006-1.jpg?v=1686816307717'
        },
        {
          idProduct: 3,
          typeProducts: 'Gold',
          nameProduct: 'Lắc tay Vàng 18K PNJ 0000Y002414',
          moeny: '9.390.000 vnd',
          urlImg: 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/182/sp-GL0000Y002414-lac-tay-vang-18k-pnj-1.png'
        },
        {
          idProduct: 4,
          typeProducts: 'Gold',
          nameProduct: 'Hạt Charm Vàng 10K PNJ',
          moeny: '2.472.000 vnd',
          urlImg: 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/179/sp-gi0000y000312-hat-charm-vang-10k-pnj-hello-kitty-01.png'
        },
        {
          idProduct: 5,
          typeProducts: 'Diamond',
          nameProduct: 'Bông tai Kim cương Vàng trắng 14K PNJ DDDDW001700',
          moeny: '78.253.000 vnd',
          urlImg: 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/86/gbddddw001700-bong-tai-kim-cuong-vang-trang-14k-pnj-01.png'
        },
      ]
    },

    {
      idMenuProducts: 'gd',
      nameMenuProducts: 'Đồ gia dụng',
      listProduct: [
        {
          idProduct: 1,
          typeProducts: 'Cooker',
          nameProduct: 'Nồi cơm nắp gài Delites 1.8 lít NCG1805',
          moeny: '450.000 vnd',
          urlImg: 'https://cdn.tgdd.vn/Products/Images/1922/152969/delites-ncg1805-1-org.jpg'
        },
        {
          idProduct: 2,
          typeProducts: 'Aqua',
          nameProduct: 'Máy nước nóng trực tiếp Ariston 4500W AURES PREMIUM 4.5',
          moeny: '1.999.000 vnd',
          urlImg: 'https://cdn.tgdd.vn/Products/Images/1962/286050/may-nuoc-nong-truc-tiep-ariston-4500w-aures-premium-45-1-1.jpg'
        },
        {
          idProduct: 3,
          typeProducts: 'Aqua',
          nameProduct: 'Máy lọc nước RO nóng nguội lạnh Hòa Phát HWBS3A 1021 10 lõi',
          moeny: '6.190.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/3385/309368/may-loc-nuoc-ro-nong-nguoi-lanh-hoa-phat-hwbs3a-1021-10-loi-1.jpg'
        },
        {
          idProduct: 4,
          typeProducts: 'Fridge',
          nameProduct: 'Tủ lạnh Aqua 130 lít AQR-T150FA(BS)',
          moeny: '4.000.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/1943/236609/aqua-aqr-t150fa-bs-1-org.jpg'
        },
        {
          idProduct: 5,
          typeProducts: 'Kitchen',
          nameProduct: 'Bếp từ đôi lắp âm BlueStone ICB-6821',
          moeny: '4.000.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/1982/255612/doi-bluestone-icb-6821-2.jpg'
        },
        {
          idProduct: 6,
          typeProducts: 'Mopping',
          nameProduct: 'Robot hút bụi lau nhà Lydsto G4',
          moeny: '2.900.000 vnd', 
          urlImg: 'https://cdn.tgdd.vn/Products/Images/10139/308263/robot-hut-bui-lau-nha-lydsto-g4-1.jpg'
        },
      ]
    },
  ]
}

