import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  courseId:any;
  constructor(private coursesService:CoursesService,private activatedRoute:ActivatedRoute){
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
      this.getCourseById();
  }
  courseDetails:any;
  getCourseById(){
    this.coursesService.getCourseById(this.courseId).subscribe((res:any)=>{
      this.courseDetails=res.data
    })
  }

}
