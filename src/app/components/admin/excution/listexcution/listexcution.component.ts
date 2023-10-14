import { Component, OnInit,ViewChild } from '@angular/core';
import { Excution } from 'src/app/models/excution';
import { ExcutionerviceService } from 'src/app/services/excutionervice.service';
import{MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: 'app-listexcution',
  templateUrl: './listexcution.component.html',
  styleUrls: ['./listexcution.component.css']
})
export class ListexcutionComponent implements OnInit {

  transactionList: any;
  dataSource: MatTableDataSource<Excution> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'log','logger', 'date'];
  reservations:any;
  users_id:number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: ExcutionerviceService) { }

  ngOnInit() {
    this.findAllTransactions();

  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  allreservations(id:number){
     this.adminService.getAllexcuion().subscribe(res=>{
       console.table(res);
       this.reservations =res;
     })
  }

  findAllTransactions(){
    this.adminService.getAllexcuionall().subscribe((data : Excution[]) => {

      console.table(data);
      this.transactionList = data;
      this.dataSource.data = data;
    });
  }

}
