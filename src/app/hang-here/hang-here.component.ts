import { Component, OnInit } from '@angular/core';
import { MdCardContent } from '@angular/material';
@Component({
  selector: 'app-hang-here',
  templateUrl: './hang-here.component.html',
  styleUrls: ['./hang-here.component.css']
})
export class HangHereComponent implements OnInit {

	email="503r.vijay@gmail.com";
	div;
	parentDiv;
	constructor(){
		setTimeout(()=>{
			this.hangMeHere();
		},1000);
	}
	hangMeHere(){
		this.parentDiv= document.getElementsByTagName('app-hang-here')[0];
		console.log(this.parentDiv);
	    this.div= document.createElement('md-card-content');
	    this.div.align="center";
	    this.div.innerHTML='<g:hangout render="createhangout" invites="[{ id : \''+this.email+'\', invite_type : \'EMAIL\' }]"> </g:hangout>';
	    this.parentDiv.appendChild(this.div);
	}
  ngOnInit() {
  }

}
