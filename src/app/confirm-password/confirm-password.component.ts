import { Component, OnInit } from '@angular/core';
declare function password():any;
@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     password();
  }

}
