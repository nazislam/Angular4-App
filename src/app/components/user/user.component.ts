import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name:string;
    email:string;
    age:number;
    address:Address;
    hobbies:string[];
    posts:Post[];
    isEdit:boolean = false

  constructor(private dataService:DataService) {
    console.log("constructor running ...");
  }

  ngOnInit() {
    console.log("running ...");
    this.name = "John Doe";
    this.email = "test@test.com";
    this.age = 30;
    this.address = {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    };
    this.hobbies = ['Write Code', 'Watch Movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
        // console.log(posts);
        this.posts = posts;
    });
  }

    onClick() {
        this.name = 'Naz-Al Islam';
        this.hobbies.push("New hobby");
    }

    addHobby(hobby) {
        this.hobbies.unshift(hobby);
        return false;
    }

    deleteHobby(hobby) {
        for (let i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] == hobby) {
                this.hobbies.splice(i, 1);
            }
        }
    }

    toggleEdit() {
        this.isEdit = !this.isEdit;
    }

}

interface Address {
    street:string,
    city:string,
    state:string
}

interface Post {
    id:number,
    title:string,
    body:string,
    userId:number
}
