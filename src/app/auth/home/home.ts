import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe({
      next: (res) => {
        this.user = res?.user || res?.data || res || null;
      },
      error: (err) => {
        console.error(err);
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      },
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => {
        console.error(err);
        this.router.navigate(['/login']);
      },
    });
  }
}
