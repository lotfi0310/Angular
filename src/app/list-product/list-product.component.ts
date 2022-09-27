import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product'; 
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title : string; 
  public list: Product[]; 

  constructor() {

   }

  ngOnInit(): void {
    this.title='MyStore app';
    this.list=[
      {
      id:12, 
      name:'Tshirt',
      price:100,
      nbrLike:23,
      picture:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=2060&fit=crop&crop=faces',
      quantity:50,
      description:'niceTshirt'
    }
    ,
   {
    id:12, 
    name:'Tshirt',
    price:100,
    nbrLike:23,
    picture:'https://www.blueisland.tn/10477-large_default/t-shirt-avec-serigraphieml.jpg',
    quantity:50,
    description:'niceTshirt'
   },

   {
    id:12, 
    name:'Tshirt',
    price:99,
    nbrLike:23,
    picture:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=2060&fit=crop&crop=faces',
    quantity:2,
    description:'niceTshirt'
  }
      ]
  }

   incrementsLike(product:Product):void {
    let i=this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++; 
    }
  }
  buyProduct(product:Product):void{
  let i=this.list.indexOf(product); 
  if(i!=-1){
    this.list[i].quantity--; 
  }
  }
}
