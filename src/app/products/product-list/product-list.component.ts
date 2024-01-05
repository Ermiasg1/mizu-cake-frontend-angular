import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(private productService: ProductService){}
  products: Product[]=[];
  productsAsAny: any;

  ngOnInit(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response;      
      console.log(response);
    })

    this.productService.getProductAsAny().subscribe(response=>{
      this.productsAsAny= response;
      console.log(this.productsAsAny);
    })



  }

}
