import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-servers',
    //   selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
    styleUrls: [ './servers.component.css' ]
} )
export class ServersComponent implements OnInit {
    // NOTE: Property named allowNewServer to hold boolean value
    allowNewServer = false;
    // NOTE: The value of this property will be output to template
    serverCreationStatus = 'No server was created!';
    //   NOTE: Initialize the property  serverName to the string value Testserver
    serverName = ' Testserver';
    userName = '';
    //   NOTE: Boolean for creating new user
    allowCreateUser = false;

    serverCreated = false;

    constructor() {
        setTimeout( () => {
            this.allowNewServer = true;
        }, 2000 );
    }

    ngOnInit(): void {}

    // NOTE: Event binding method triggered from within template
    onCreateServer = () => {
        this.serverCreated = true;
        //   NOTE: this.serverName is set equal to the input event target value
        this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
    }

    // NOTE: Method to update server name, receives 'event' as argument and will be of type 'Event'
    onUpdateServerName = ( event: Event ) => {
        // NOTE: On 'event' we have 'target' and on 'target' we have 'value', type assertion
        this.serverName = ( event.target as HTMLInputElement ).value;
    }
}
