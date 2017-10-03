import { Component} from '@angular/core';
import { Workarea } from '../workarea/workarea.model'; // <-- import this

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	workareas: Workarea[]; // <-- component property

    constructor() { 
      	this.workareas = [
	      	//new Workarea('200px', '200px', '1px solid #000', 'new block'),
	    ];
    }

    addWorkarea(width, height, border, text) {
    	console.log(`Adding article title: ${width} and link: ${height}`);
    	this.workareas.push(new Workarea(width, height, border, text));
    	width = '';
    	height = '';
    	return false;
  	}



}
