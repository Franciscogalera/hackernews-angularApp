import { Component } from '@angular/core';
import { HackerNewsService } from './app.service';

@Component({
  selector: 'hacker-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HackerNewsComponent {
  title = 'hackerNewsApp';
  news = {};

  constructor(private hackerNewsService: HackerNewsService){
    this.hackerNewsService.getNews().subscribe(data => this.news = data);
  }
}
