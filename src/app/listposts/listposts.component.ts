import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Redditpost } from '../redditpost';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  result:Redditpost = {} as Redditpost
  constructor(private redditService:RedditService) { }

  ngOnInit(): void {
    this.redditService.getBlogPosts().subscribe((response:Redditpost)=>{
      this.result = response;
    });
  }

}
