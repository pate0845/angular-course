import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit,AfterContentInit{
  ngAfterContentInit(): void {
    console.log(this.image)
  }
  ngAfterViewInit(): void {
    // console.log(this.image)
  }
  @Input() course:Course;
  @Input() cardIndex:Course;

  @Output('courseSelected')
  courses=new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent,{read:ElementRef})
  image:QueryList<CourseImageComponent>;


  @Input('noImageTpl')
  noImageTpl:TemplateRef<any>;

  onCourseViewed(){
    console.log("CArd Component");
    this.courses.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    return {
      'beginner':this.course.category == 'BEGINNER',
    }
  }

  cardStyles(){
    return {'background-image':'url('+this.course.iconUrl+')'}
  }

}
