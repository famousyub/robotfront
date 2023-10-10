import { Component, OnInit, ViewChild } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Transaction} from '../../../model/transaction';
import{MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { PlanificationerviceService } from 'src/app/services/planificationervice.service';
import { Planification } from 'src/app/models/planification';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactionList: any;
  dataSource: MatTableDataSource<Planification> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'status', 'date'];
  reservations:any;
  users_id:number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: PlanificationerviceService) { }

  ngOnInit() {
    this.findAllTransactions();

  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  allreservations(id:number){
     this.adminService.getAllrobots().subscribe(res=>{
       console.table(res);
       this.reservations =res;
     })
  }

  findAllTransactions(){
    this.adminService.getAllrobots().subscribe((data : Planification[]) => {

      console.table(data);
      this.transactionList = data;
      this.dataSource.data = data;
    });
  }

}
