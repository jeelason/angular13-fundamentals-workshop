import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course  = {
  id: null,
  title: '',
  description: '',
  percentComplete:0,
  favorite: false
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. render course in a list
  // 2. select a course
  // 3. render a selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 13,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Hardest stuff ever',
      description: 'Learn the JS like a PRO! With Jason',
      percentComplete: 76,
      favorite: true
    }    
  ];
  selectedCourse = emptyCourse;

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    console.log('SAVE COURSE', course)
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  reset() {
    this.selectCourse({...emptyCourse});
  }

}

