import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-students-dashboard',
  templateUrl: './students-dashboard.component.html',
  styleUrls: ['./students-dashboard.component.css']
})
export class StudentsDashboardComponent implements OnInit {

  constructor(private studentsData: StudentsDataService) { }
  studentsResults: any = []
  ngOnInit() {
    // console.log(this.studentsData.getStudentsDetails());

    this.studentsData.getStudentsDetails()
       .subscribe(res => {
         // console.log(res[0]);

            _.each(res , (student) => {
              console.log(student);
                // var studentData = JSON.stringify(student);
                // console.log(student["rollNumber"])
                var studentDa = {
                  name:"",
                  rollNumber:"",
                  totalMarks:0,
                  status:"",
                  isTopper:false
                };
                // student.name[0] = student.name[0].toUpperCase();
                studentDa["name"] = student.name;
                studentDa["name"] = studentDa["name"].charAt(0).toUpperCase() + studentDa["name"].slice(1);
                studentDa["rollNumber"] = student["rollNumber"];
                // console.log(studentDa)

                _.each(student["marks"], (mark) => {
                    // console.log(mark, "mark")
                    if(parseInt(mark) < 20){
                      studentDa["status"] = "Fail";
                    }
                    studentDa["totalMarks"] += parseInt(mark);
                })



                if(studentDa["status"] == ""){
                  studentDa["status"] = "Pass";
                }

                this.studentsResults.push(studentDa);
            })
            this.studentsResults.sort(function(a,b){
              return b["totalMarks"] - a["totalMarks"];
            })
            this.studentsResults[0].status = "Topper";
            this.studentsResults.sort(function(a,b){
              if (a.name < b.name)
                 return -1;
              if (a.name > b.name)
                 return 1;
               return 0;
            })
            // console.log(this.studentsResults)

       });

  }

}
