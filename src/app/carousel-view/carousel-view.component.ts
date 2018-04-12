import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselViewComponent implements OnInit {

  images: Array<string>;

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
  }

  ngOnInit() {
   

  

}
}
