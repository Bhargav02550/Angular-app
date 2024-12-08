import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students = [
    {
      name:"Bhargav",
      id:584,
      branch:"CSE",
      city:"KKD"
    },
    {
      name:"Sathwik",
      id:"5E0",
      branch:"CSE",
      city:"PETA",
    },
    {
      name:"Chaitu",
      id:"579",
      branch:"CSe",
      city:"VJY",
    },
    {
      name:"Hemanth",
      id:"5C1",
      branch:"CSE",
      city:"KKD",
    }
  ]
}
