import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = { 
  userName: '', 
  email: '', 
  password: '', 
  role: 'User' 
};


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser(): void {
  this.userService.createUser(this.newUser).subscribe({
    next: (res) => {
      this.loadUsers();   
      this.resetForm();   
    },
    error: (err) => console.error('Error creating user', err)
  });
}
resetForm(): void {
  this.newUser = {
    userName: '',
    email: '',
    password: '',
    role: 'User'
  };
}




  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
