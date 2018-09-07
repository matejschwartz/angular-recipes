import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  @Input()
  id: number = 25;
  status: string = 'offline';
  
  constructor() {
    this.status = Math.random() > 0.5 ? 'online': 'offline';
  }

  ngOnInit() {
  }

  getColor() {
    return this.status == 'online' ? 'green' : 'red';
  }
}
