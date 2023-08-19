import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList:any[]=[];
  
  constructor(private coursesService:CoursesService,private router:Router){}
  ngOnInit(): void {
      this.getAllCourses();
  }

  getAllCourses(){
    this.coursesService.getAllCourses().subscribe((res:any)=>{
      this.coursesList=res.data;
    })
  }
  courseDetail:any;
  getCourseDetails(course:any){
   this.router.navigate(['/courses/'+course.id])
  }
}
