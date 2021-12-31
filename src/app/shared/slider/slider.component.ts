import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromArray} from "rxjs/internal/observable/fromArray";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slides') slides: ElementRef;
  @ViewChild('containerDots') containerDots: ElementRef;
  children;
  totalChildren: number;
  activeIndex;
  constructor() { }

  ngAfterViewInit(): void {
     this.children = this.slides.nativeElement.children;
     this.totalChildren = this.children.length;
     this.activeIndex = 0;
     this.makeActive(this.activeIndex)
    }


  ngOnInit(): void {
    const interval = setInterval(() => {
  this.nextSlide();
    },5000)
  }

  nextSlide() {
    if (this.activeIndex < this.totalChildren-1) {
      this.makeInactive(this.activeIndex);
      this.activeIndex++;
      this.makeActive(this.activeIndex);
    } else if (this.activeIndex === this.totalChildren-1) {
      this.makeInactive(this.activeIndex);
      this.activeIndex = 0;
      this.makeActive(this.activeIndex)
    }
  }

  prevSlide() {
    if (this.activeIndex > 0) {
      this.makeInactive(this.activeIndex);
      --this.activeIndex;
      this.makeActive(this.activeIndex);
    } else if (this.activeIndex === 0) {
      this.makeInactive(this.activeIndex);
      this.activeIndex = this.totalChildren-1;
      this.makeActive(this.activeIndex)
    }
  }

  private makeActive(activeIndex) {
    this.children[activeIndex].classList.add('active');
  }
  private makeInactive(activeIndex) {
    this.children[activeIndex].classList.remove('active');
  }
}
