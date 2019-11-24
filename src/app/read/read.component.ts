import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials: Tutorial[];

  constructor(private store: Store<AppState>) {
    store.select('tutorial').subscribe(val => this.tutorials = val);
  }

  ngOnInit() {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
