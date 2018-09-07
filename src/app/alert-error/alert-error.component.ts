import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss']
})
export class AlertErrorComponent implements OnInit {

  @Input()
  content;
  
  constructor() { }

  ngOnInit() {
  }

}
