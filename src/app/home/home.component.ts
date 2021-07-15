import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare function country():any;
declare function hidee():any;
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    center:true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  customOptions3: OwlOptions = {
    loop: true,
    margin:40,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    smartSpeed: 6000,
    nav:false,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 5
      }
    },
  }
  rating1: number;
  rating2: number;
  rating3: number;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rating3 = 4;
    this.rating2 = 3;
    this.rating1 = 2;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    country();
    hidee();
  }

}
