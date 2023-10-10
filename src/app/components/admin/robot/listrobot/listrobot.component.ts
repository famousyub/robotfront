import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { RobotserviceService } from 'src/app/services/robotservice.service';
import { Robot } from 'src/app/models/robot';
import { Robots } from 'src/app/model/product';

declare var $: any;
@Component({
  selector: 'app-listrobot',
  templateUrl: './listrobot.component.html',
  styleUrls: ['./listrobot.component.css']
})
export class ListrobotComponent implements OnInit {

  robots: any;
  constructor(private robotService:RobotserviceService,private adminService: RobotserviceService ) { }

  ngOnInit() {
    this.allrobots();
    this.findAllProducts();
  }

  allrobots(){
    this.robotService.getAllrobots().subscribe(robots => {
      this.robots = robots;
    });
  }



  productList: any;
  dataSource: MatTableDataSource<Robots> = new MatTableDataSource();
  displayedColumns: string[] = ['id',"nom", 'description', 'emplacement','action'];

  selectedProduct: Robots=new Robots(); 
  errorMessage: string;
  infoMessage: string;

  selectedrobot :Robot;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;





  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllProducts(){
    this.adminService.getAllrobots().subscribe((data:Robots[])  => {
      console.table(data)
      this.productList = data;

      this.dataSource.data = data;
    });
  }

  createNewProductRequest(){
    this.selectedProduct = new Robots();
    $('#productModal').modal('show');
  }

  editProductRequest(product: Robot){
    this.selectedProduct = new Robots();
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
    this.adminService.createRobot(this.selectedProduct).subscribe((data :Robot) => {
      this.productList.push(data);
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updateProduct(){
    this.adminService.createRobot(this.selectedProduct).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      this.productList[itemIndex] = this.selectedProduct;
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deleteProductRequest(product: Robots){
    this.selectedProduct = product;
    $('#deleteModal').modal('show');
  }

  deleteProduct(){
    this.adminService.deleteRobot(this.selectedProduct.id).subscribe(data => {
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
  }
}

  

