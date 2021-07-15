import { Component, OnInit } from '@angular/core';
declare function value():any;
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    value();
  }

}
