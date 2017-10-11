import { Sector } from './sector';

export class Animal {

  		species:string; 

  		name:string; 

  		dateOfBirth:string;

  		sector: Sector;

  		constructor(species:string, name:string, dateOfBirth:string, sector: Sector){

  		  this.species = species;

  			this.name = name;

  			this.dateOfBirth = dateOfBirth;
        
  			this.sector = sector;
  		}
}