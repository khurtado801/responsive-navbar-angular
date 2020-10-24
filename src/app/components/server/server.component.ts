// NOTE: Decorators are a TypeScript feature which allows you to enhance your classes

import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    // NOTE: Declare serverId variable and assign it a value of 10
    serverId = 10;
    // NOTE: declare serverStatus string variable and assign it a value of 'offline'
    serverStatus = 'offline';

    // NOTE: Constructor to set server status to random number between 0 and 1

    // NOTE: Define method to get server status
    // tslint:disable-next-line:typedef
    getServerStatus() {
    // NOTE: Return current instance of serverStatus
        return this.serverStatus;
    }
}
