import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = new User

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
  }

  cadastrar() {
    this.userService.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp; 
      this.router.navigate(['/user'])
      alert("User registered successfuly!")
    });
  }

}
