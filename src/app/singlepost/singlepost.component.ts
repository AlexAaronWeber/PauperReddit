import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../redditpost';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
@Input() post: Child = {} as Child
  constructor() { }

  ngOnInit(): void {
  }

}
