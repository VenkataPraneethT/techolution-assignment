import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentsDataService {

  constructor(private http: HttpClient) { }
  studentsData : any;
  ngOnInit() {

  }

  getStudentsDetails(){
      return this.http.get('/students')

  }
}
