import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products :any ;
  filter : string = '';
  cart: IProduct[] =[];
  constructor() {
    this.products = [
      {
        id: 1,
        description: "A delicious cheesecake with a rich, creamy texture and a classic graham cracker crust.",
        name: "Cheesecake",
        imageName: "cheesecake.png",
        category: "cheesecake",
        price: 25.5,
        discount: 0.1,
      },
      {
        id: 2,
        description: "A traditional apple pie with a flaky crust and a sweet apple cinnamon filling.",
        name: "Apple Pie",
        imageName: "apple-pie.png",
        category: "fruitpies",
        price: 20.0,
        discount: 0,
      },
      {
        id: 3,
        description: "A tart and sweet cherry pie with a golden crust and a juicy cherry filling.",
        name: "Cherry Pie",
        imageName: "cherry-pie.png",
        category: "fruitpies",
        price: 22.0,
        discount: 0.05,
      },
      {
        id: 4,
        description: "A tangy cranberry pie with a buttery crust and a slightly tart cranberry filling.",
        name: "Cranberry Pie",
        imageName: "cranberry-pie.png",
        category: "fruitpies",
        price: 24.5,
        discount: 0.1,
      },
      {
        id: 5,
        description: "A classic chocolate cheesecake with a rich, smooth chocolate filling and a chocolate cookie crust.",
        name: "Chocolate Cheesecake",
        imageName: "chocolate-cheesecake.png",
        category: "cheesecake",
        price: 28.0,
        discount: 0,
      },
      {
        id: 6,
        description: "A decadent pecan pie with a buttery crust and a sweet, nutty filling.",
        name: "Pecan Pie",
        imageName: "pecan-pie.png",
        category: "nut-based-pies",
        price: 26.5,
        discount: 0.15,
      },
      {
        id: 7,
        description: "A light and fluffy lemon meringue pie with a tart lemon filling and a golden meringue topping.",
        name: "Lemon Meringue Pie",
        imageName: "lemon-meringue-pie.png",
        category: "fruitpies",
        price: 23.0,
        discount: 0.05,
      },
      {
        id: 8,
        description: "A rich and creamy pumpkin pie with a flaky crust and a spiced pumpkin filling.",
        name: "Pumpkin Pie",
        imageName: "pumpkin-pie.png",
        category: "fruitpies",
        price: 21.5,
        discount: 0.1,
      },
      {
        id: 9,
        description: "A light and fruity blueberry pie with a golden crust and a sweet blueberry filling.",
        name: "Blueberry Pie",
        imageName: "blueberry-pie.png",
        category: "fruitpies",
        price: 22.5,
        discount: 0.05,
      },
      {
        id: 10,
        description: "A traditional key lime pie with a zesty lime filling and a graham cracker crust.",
        name: "Key Lime Pie",
        imageName: "key-lime-pie.png",
        category: "fruitpies",
        price: 24.0,
        discount: 0.1,
      },
      {
        id: 11,
        description: "A rich and gooey caramel apple pie with a spiced filling and buttery crust.",
        name: "Caramel Apple Pie",
        imageName: "caramel-apple-pie.png",
        category: "specialty pies",
        price: 26.0,
        discount: 0.1,
      },
      {
        id: 12,
        description: "A sweet and tart rhubarb pie with a perfectly golden crust.",
        name: "Rhubarb Pie",
        imageName: "rhubarb-pie.png",
        category: "specialty pies",
        price: 21.0,
        discount: 0.05,
      },
      {
        id: 13,
        description: "A savory and sweet pecan pie with a crispy top and buttery base.",
        name: "Savory Pecan Pie",
        imageName: "savory-pecan-pie.png",
        category: "nut-based-pies",
        price: 29.0,
        discount: 0.15,
      },
      {
        id: 14,
        description: "A classic peach pie made with fresh peaches and a hint of cinnamon.",
        name: "Peach Pie",
        imageName: "peach-pie.webp",
        category: "fruitpies",
        price: 20.5,
        discount: 0.1,
      },
      {
        id: 15,
        description: "A creamy coconut pie with a golden crust and a tropical coconut filling.",
        name: "Coconut Pie",
        imageName: "coconut-pie.png",
        category: "specialty pies",
        price: 24.5,
        discount: 0.05,
      }
      

    ];
  }
  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: any) => product.category === this.filter);
  }
  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/imagerendu/cakes/'+ product.imageName;
  }
  addToCart(product:IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
