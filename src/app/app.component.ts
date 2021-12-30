import {Component, OnInit} from '@angular/core';
import {AuthorService} from "./Service/author.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  constructor(private authorService: AuthorService) {
  }
  ngOnInit(): void {
    this.authorService.getAuthor()
      .subscribe( author => {
        console.log(author.name)
      })
  }
}
