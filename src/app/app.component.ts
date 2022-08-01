import { Component } from '@angular/core';
import { StudentDataService } from './services/student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test3';
  students:any;
  constructor(private studentData:StudentDataService){
    this.studentData.studentsInfo().subscribe((data)=>{
      this.students=data;
     });
  };
  
  saveStudentData(data :any){
      console.warn(data);
       this.studentData.saveStudentinfo(data).subscribe((result)=>{
           console.warn(result);
       })
  }
  status:any;
  deleteStudentData(student:any){
    
    this.studentData.deleteStudentInfo(student.id).subscribe(result =>{
       this.students=this.students.filter((item:any)=>item.id!==student.id)
  
    })

  }
  
 
    

}
