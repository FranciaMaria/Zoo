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

   	sector: Sector = new Sector('', '');

   	newAnimal: Animal = new Animal('','','', this.sector);

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

	isNotdateOfBirth:string = 'Nepoznat';

	deleteAnimal(index){

    	this.AnimalList.splice(index, 1);
	}

	MoveToTopAnimal(index){

		let change = this.AnimalList[index];

    	this.AnimalList[index] = this.AnimalList[0];

    	this.AnimalList[0] = change;
	}

	addAnimal() {

    	this.AnimalList.push(this.newAnimal);

    	this.sectors.push(this.sector);

    	this.sector = new Sector('', '');

    	this.newAnimal = new Animal('','','', this.sector);
   	
  	}

  	showAnimalsBySector(sector) {	

		const animalsList=[];		

		this.AnimalList.forEach(animal => {

			if(animal.sector && animal.sector.name === sector.name) 

				animalsList.push(animal.name + '-' + animal.species); 
		});		

		alert(animalsList.toString());
	}

}



	