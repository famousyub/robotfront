import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planification } from 'src/app/models/planification';
import { PlanificationerviceService } from 'src/app/services/planificationervice.service';

@Component({
  selector: 'app-createplanification',
  templateUrl: './createplanification.component.html',
  styleUrls: ['./createplanification.component.css']
})
export class CreateplanificationComponent implements OnInit {

  constructor(private router: Router, private planificationService: PlanificationerviceService) {}


  addPlanification(status: string) {
    const newPlanification = { status } as Planification;
    this.planificationService.createRobot(newPlanification).subscribe(() => {
      this.router.navigate(['/planification']);
      window.location.reload();
    });
  }

  ngOnInit() {
  }

}
