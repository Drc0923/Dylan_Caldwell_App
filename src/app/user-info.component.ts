import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from './user-info.model';

@Injectable()
@Component( {
selector: 'app-user-info',
templateUrl: './user-info.component.html',
  }
)

export class UserInfoComponent implements OnInit {
  myInfo: userInfo | undefined
  constructor(private http: HttpClient) {
   }

   getUserInfo() {
     return this.http.get<userInfo>('https://airbnb-app-4478a-default-rtdb.firebaseio.com/my-info.json');
   }

   showUserInfo() {
      this.getUserInfo().subscribe((data) => {
        console.log(data);
        this.myInfo = data;
      })
   }

  ngOnInit(): void {
    console.log("Sending a request to the server");
    this.getUserInfo();
    console.log("Registering showUserInfo as a subscriber");
    this.showUserInfo();
  }
  }

