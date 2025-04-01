import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'courses',
  imports: [NgForOf],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: string[];

  // Dependency Injection
  // when this component is created, angular injects an instance CoursesService into the constructor
  constructor(service: CoursesService) {
    // we can use the CoursesService instance to call getCourses() function for data
    this.courses = service.getCourses();
  }
}
