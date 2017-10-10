import { Component } from '@angular/core';
import { Animal } from './animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent {

	AnimalList:Array<Object> = [

		new Animal('macka', 'Lulu', '1976-02-12'),

		new Animal('konj', 'Spirit', '1990-07-02'),

		new Animal('slon', 'Kika', ""),

		new Animal('zmija','Su', '2010-05-09'),

		new Animal('ptica', 'Po', ""),

	];

	isDateOfBirth:string = 'Nepoznat';


	deleteAnimal(x){
    	this.AnimalList.splice(x, 1);
	}

	

}