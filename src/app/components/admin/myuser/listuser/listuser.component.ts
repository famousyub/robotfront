
import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AdminuserService } from '../adminuser.service';
import { User } from 'src/app/model/user';
import { Reguser } from '../reguser';


declare var $: any;
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  robots: any;
  constructor(private robotService:AdminuserService ) { }

  ngOnInit() {
    this.allrobots();
    this.findAllProducts();
  }

  allrobots(){
    this.robotService.getUsers().subscribe(robots => {
      this.robots = robots;
    });
  }



  productList: any;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['id',"username", 'email', 'name','password'];

  selectedProduct: Reguser=new Reguser(); 
  errorMessage: string;
  infoMessage: string;

  selectedrobot :Reguser;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



 users: any;

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllProducts(){
    this.robotService.getUsers().subscribe((data:User[])  => {
      console.table(data)
      this.productList = data;

      this.dataSource.data = data;
    });
  }
   

  findusersroobts(id:number){

      this.robotService.mrobots(id).subscribe(res=>{

          console.table(res);
          this.users = res;
          localStorage.setItem("datareobot" , JSON.stringify(res));
      })
  }
  createNewProductRequest(){
    this.selectedProduct = new Reguser();
    $('#productModal').modal('show');
  }

  editProductRequest(product: Reguser){
    this.selectedProduct = new Reguser();
    $('#productModal').modal('show');
  }

  saveProduct(){
    if(!this.selectedProduct.id){
      this.createProduct();
    }else{
      this.updateProduct();
    }
  }

  createProduct(){
    this.robotService.addUsers(this.selectedProduct).subscribe((data :Reguser) => {
      this.productList.push(data);
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updateProduct(){
    this.robotService.addUsers(this.selectedProduct).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      this.productList[itemIndex] = this.selectedProduct;
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deleteProductRequest(product: Reguser){
    this.selectedProduct = product;
    $('#deleteModal').modal('show');
  }
/*
  deleteProduct(){
    this.robotService.deleteRobot(this.selectedProduct.id).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      if(itemIndex !== -1){
        this.productList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#deleteModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }*/
}
