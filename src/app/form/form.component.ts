import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = new User
  usersList: User[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.getAllUsers()
  }

  cadastrar() {
    this.userService.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp; 
      this.router.navigate(['/user'])
      this.getAllUsers()
      Swal.fire('Registered!', 'The user typed was save with successfully!', 'success')
    });
  }
  
  getAllUsers() {
    this.userService.getAllUsers().subscribe((resp: any) => {
      this.usersList = resp
    });
  }
}
