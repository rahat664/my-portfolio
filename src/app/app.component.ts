import {Component, OnInit} from '@angular/core';
import {AuthorService} from "./Service/author.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  images = [
    { src: "https://rb.gy/ohx0bd" },
    { src: "https://rb.gy/gggxy8" },
    { src: "https://rb.gy/z2a0fy" },
    { src: "https://rb.gy/nsefjh" },
    { src: "https://rb.gy/dssu2a" }
  ];
  constructor(private authorService: AuthorService) {
  }
  ngOnInit(): void {
    this.authorService.getAuthor()
      .subscribe( author => {
        console.log(author.name)
      })
  }
}
