import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from "./auth/register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register,Register],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'auth-gate';
}
