import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

// SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RulesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
