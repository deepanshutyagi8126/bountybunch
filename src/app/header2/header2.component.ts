import { Component, OnInit } from '@angular/core';
declare function scrollall():any;
declare var $:any;

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollall();
  }

}
