import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Not created yet';
  serverName:number;
  username:string;
  serverCreated:boolean = false;
  servers = [
    45, 25, 34
  ]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Succesfully created. Name is ' + this.serverName ;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
   this.serverName = event.target.value;
  }
}
