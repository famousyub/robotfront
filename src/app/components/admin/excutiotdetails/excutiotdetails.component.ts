import { Component, OnInit } from '@angular/core';
import { Excutiont } from '../excutiont';
import { ExcutiotService } from '../services/excutiot.service';

@Component({
  selector: 'app-excutiotdetails',
  templateUrl: './excutiotdetails.component.html',
  styleUrls: ['./excutiotdetails.component.css']
})
export class ExcutiotdetailsComponent implements OnInit {

  tutorials?: Excutiont[];
  currentTutorial: Excutiont = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: ExcutiotService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Excutiont, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
