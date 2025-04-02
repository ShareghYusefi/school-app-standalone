import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { NgForOf } from '@angular/common';
import { Course } from '../course';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'courses',
  imports: [NgForOf, CourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: Course[];

  // Dependency Injection
  // when this component is created, angular injects an instance CoursesService into the constructor
  constructor(service: CoursesService) {
    // we can use the CoursesService instance to call getCourses() function for data
    this.courses = service.getCourses();
  }
}
