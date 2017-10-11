import { Component } from '@angular/core';
import { Animal } from './animals';
import { Sector } from './sector';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgModule} from '@angular/core'; 
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent {
	
	AnimalList: any[];

	sectors = [];
   	sector: Sector = new Sector('Unknow', 'Unknow'); 
   	newAnimal: Animal = new Animal('','','', this.sector[0]);

	constructor() { 

		this.sectors = [  
      		new Sector ('Water-animals', 'Water'),
      		new Sector ('Fawl','Kages'),
      		new Sector ('Predators', 'Kages'),
      		new Sector ('Mammal', 'Kages')	
    	];


		this.AnimalList = [

			new Animal('macka', 'Lulu', '1976-02-12', this.sectors[2]),

			new Animal('konj', 'Spirit', '1990-07-02', this.sectors[3]),

			new Animal('slon', 'Kika', "", this.sectors[3]),

			new Animal('zmija','Su', '2010-05-09', this.sectors[2]),

			new Animal('ptica', 'Po', "", this.sectors[1]),

		];
	}

	isNotDateOfBirth:string = 'Nepoznat';

	deleteAnimal(x){
    	this.AnimalList.splice(x, 1);
	}

	MoveToTopAnimal(x){
		let change = this.AnimalList[x];
    	this.AnimalList[x] = this.AnimalList[0];
    	this.AnimalList[0] = change;
	}

	addAnimal() {
    	this.AnimalList.push(this.newAnimal);
    	this.newAnimal = new Animal('','','', this.sector[0]);
  	}

  	showAnimalsBySector(sector) {	
		const animalsList=[];		
		this.AnimalList.forEach(function(animal) {
			if(animal.sector && animal.sector.name === sector.name) 
				animalsList.push(animal.Name + '-' + animal.Species); 
		});		
		alert(animalsList.toString());
	}

}



	