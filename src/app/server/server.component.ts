import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverID = 10;
    serverStatus = 'Active';

    getServerStatus(){
        return this.serverStatus
    }
}