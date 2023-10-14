import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Excution } from 'src/app/models/excution';
import { ExcutionerviceService } from 'src/app/services/excutionervice.service';

@Component({
  selector: 'app-createexcution',
  templateUrl: './createexcution.component.html',
  styleUrls: ['./createexcution.component.css']
})
export class CreateexcutionComponent implements OnInit {

  constructor(private router: Router, private planificationService: ExcutionerviceService) {}


   log : string  ="" ;

  addPlanification(log: string) {
    const newPlanification = { log } as Excution;
    this.planificationService.createExcution(newPlanification).subscribe(() => {
      console.log(log);
      this.router.navigate(['/planification']);
   
      window.location.reload();
    });
  }

  ngOnInit() {
  }

}
