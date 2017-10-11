import { Sector } from './sector';

export class Animal {

  		Species:string; 
  		Name:string; 
  		DateOfBirth:string;
  		sector: Sector;

  		constructor(Species:string, Name:string, DateOfBirth:string, sector: Sector){

  			this.Species = Species;
  			this.Name = Name;
  			this.DateOfBirth = DateOfBirth;
  			this.sector = sector;
  		}
}