import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.scss"],
})
export class RequestComponent implements OnInit {
  constructor(private http: HttpClient,private reouter:Router) {}
  request:any[]=[];
  requestdetails:any[]=[];
  token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2MTMxOTgzLCJqdGkiOiJhODkyNjRlNDM4NjM0MWViYTMxZWE5ZTAyNjI5YzhjNSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.rUDCaff48WlJz-RFoT-LE0taWpaOftNYh2El9alFbK0";
  ngOnInit() {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    let data = {
      day: "Saturday",
      date: "2020-08-01",
    };
    this.http.post<{data:any[]}>(
      "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/tablelist/requests",
      data,{headers:header}
    ).subscribe(re=>{
      this.request=re.data;
      console.log(this.request);
    })
    };
    groupdetails(details:string){
      console.log(details);
this.reouter.navigate(["table-page/request-group-details"])
    }
  }