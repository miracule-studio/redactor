import { Component, OnInit, HostBinding } from '@angular/core';
import { Workarea } from './workarea.model'; // <-- import this

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})
export class WorkareaComponent implements OnInit {
	@HostBinding('attr.class') cssClass = 'new';
	@HostBinding('style.width') width = '100px';
	@HostBinding('style.height') styleHeight = '100px';
	@HostBinding('style.border') styleBorder = '1px solid #000';

	workarea: Workarea;


  	constructor() { 
  		this.workarea = new Workarea(
	      '100px',
	      '100px',
	      '1px solid #000', 
	      'new block');
  	}

  	ngOnInit() {
  	}

}
