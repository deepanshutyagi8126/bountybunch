import { Component, OnInit } from '@angular/core';
declare function scrollstrip():any;
declare function scrolltop():any;
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 scrollstrip();
 scrolltop();
  }

}
