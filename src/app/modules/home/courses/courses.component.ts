import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  constructor(private courseService:CoursesService){}

  ngOnInit(): void {
      this.getAllCourses()
  }
  coursesList:any[]=[]
  getAllCourses(){
    this.courseService.getAllCourses().subscribe((res:any)=>{
      this.coursesList=res.data;
    })
  }
}
