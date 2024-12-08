import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CseserviceService {
  constructor() {}

  courses = ['MNST', 'DEVOPS', 'PYTHON'];
}
