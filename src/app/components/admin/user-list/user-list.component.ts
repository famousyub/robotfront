import { Component, OnInit, ViewChild } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {User} from '../../../model/user';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { AdminuserService } from '../myuser/adminuser.service';

declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: Array<User>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'password', 'action'];
  selectedUser: User = new User();
  errorMessage: string;
  infoMessage: string;
  reservations:any;
  show:boolean =false;
  robots :any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService,private robotservice : AdminuserService) { }

  ngOnInit() {
    this.findAllUsers();
    
  }
  getuserReservation(id:number) {
      this.allreservations(id);
      this.show = !this.show;
  }

  allreservations(id:number){
    this.robotservice.mrobots(id).subscribe(res=>{
      console.table(res);
      this.reservations =res;
      this.robots = this.reservations.robots;
      console.table(this.robots);
    })
 }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllUsers(){
    this.adminService.findAllUsers().subscribe(data => {
      console.table(data);
      this.userList = data;
      this.dataSource.data = data;
    });
  }

  editUserRequest(user: User) {
    this.selectedUser = user;
    $("#userModal").modal('show');
  }

  editUser(){
    this.adminService.updateUser(this.selectedUser,this.selectedUser.id).subscribe(data => {
      let itemIndex = this.userList.findIndex(item => item.id == this.selectedUser.id);
      this.userList[itemIndex] = this.selectedUser;
      this.dataSource = new MatTableDataSource(this.userList);
      this.infoMessage = "Mission is completed.";
      $("#userModal").modal('hide');
    },err => {
      if(err.status === 409){
        this.errorMessage = "Username should be unique for each user.";
      }else{
        this.errorMessage = "Unexpected error occurred.";
      }
    });
  }

  deleteUserRequest(user: User) {
    this.selectedUser = user;
    $("#deleteModal").modal('show');
  }

  deleteUser(){
    this.adminService.deleteUser(this.selectedUser).subscribe(data => {
      let itemIndex = this.userList.findIndex(item => item.id == this.selectedUser.id);
      if(itemIndex !== -1){
        this.userList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.userList);
      this.infoMessage = "Mission is completed.";
      $("#deleteModal").modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

}
