import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent {

	AnimalList:Array<Object> = [

		{
 			vrsta: 'macka',
 			ime: 'Lulu',
 			datumRodjenja: '1976-02-12'
		},

		{
 			vrsta: 'konj',
 			ime: 'Spirit',
 			datumRodjenja: '1990-07-02'
		},

		{
 			vrsta: 'slon',
 			ime: 'Kika',
 			datumRodjenja: 'Nepoznat'
		},

		{
 			vrsta: 'zmija',
 			ime: 'Su',
 			datumRodjenja: '2010-05-09'
		},

		{
 			vrsta: 'ptica',
 			ime: 'Po',
 			datumRodjenja: 'Nepoznat'
		}

	];

}