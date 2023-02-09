import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;
  price = 99.99;

  @ViewChildren("course")
  card: QueryList<CourseCardComponent>;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }

  ngAfterViewInit(): void {
    this.onchange();
    this.card.changes.subscribe();

  }

  onchange(){
    this.courses.push(
      {
        id: 2,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
    }
    )
  }
}
