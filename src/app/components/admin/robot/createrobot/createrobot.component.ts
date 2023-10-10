import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robots } from 'src/app/model/product';
import { Robot } from 'src/app/models/robot';
import { RobotserviceService } from 'src/app/services/robotservice.service';

@Component({
  selector: 'app-createrobot',
  templateUrl: './createrobot.component.html',
  styleUrls: ['./createrobot.component.css']
})
export class CreaterobotComponent implements OnInit {

  constructor(private robotsService: RobotserviceService,private router: Router) { }

  ngOnInit() {
  }

  addRobot(description: string, emplacement: string) {
    const newRobot = { description, emplacement } as Robot;
    this.robotsService.createRobot2(newRobot).subscribe(() => {
      this.router.navigate(['/robots']);
    });
  }

}
