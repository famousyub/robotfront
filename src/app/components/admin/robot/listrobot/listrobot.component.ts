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

  robots: Robot[];
  robotst: any[] ;
  constructor(private robotService:RobotserviceService,private adminService: RobotserviceService ) { }

  ngOnInit() {
    this.allrobots();
    this.findAllProducts();
    this.checkadmin();
  }

  id:number ;
  myuser : boolean =false;

  allrobots(){
    this.robotService.getAllrobots().subscribe((robots:any[]) => {
      this.robotst = robots;
     const   user_id  = Number(localStorage.getItem("user_id"));

     console.log(user_id);
     console.log(this.myuser);
      if(this.myuser==true){

          this.robotst.forEach(element => {
           
            console.log(element);
            if(element.user === user_id ){
         
               this.robots.push(element);

            }
            
          });
      }

     
    });
  }


  checkadmin(){
    if(Number(localStorage.getItem("admin")) !=1 ){
      this.myuser = true;
    }
  }

  productList: any;
  dataSource: MatTableDataSource<Robots> = new MatTableDataSource();
  displayedColumns: string[] = ['id',"nom", 'description', 'emplacement','excution','planification','user','action'];

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
   
    this.id= product.id;
    alert(this.id);
    console.table(this.id);
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



    alert(this.id);
    console.table(this.id);
    this.selectedProduct.id = this.id ;
    this.adminService.updateRobot(this.id,this.selectedProduct).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      this.productList[itemIndex] = this.selectedProduct;
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
      window.location.reload();
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

  

