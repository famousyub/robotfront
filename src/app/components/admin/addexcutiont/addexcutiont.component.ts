import { Component, OnInit } from '@angular/core';
import { ExcutiotService } from '../services/excutiot.service';
import { Excutiont } from '../excutiont';

@Component({
  selector: 'app-addexcutiont',
  templateUrl: './addexcutiont.component.html',
  styleUrls: ['./addexcutiont.component.css']
})
export class AddexcutiontComponent {

  tutorial: Excutiont = {
    title: '',
    log: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: ExcutiotService) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.log
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      log: '',
      published: false
    };
  }

}
