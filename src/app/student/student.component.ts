import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(public stud:StudentService){
  }
  chk: boolean = false;
  show(): void{
    if(this.chk == false){
      this.chk = true;
    }
    else{
      this.chk = false;
    }
  }
}
