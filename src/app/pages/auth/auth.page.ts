import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {supabase} from "src/app/supabase.client"
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class AuthPage {
  constructor(private router:Router) { }
  email = "";
  password = "";
  error = "";
  async login() {
    const { error } = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });
    if (error) {
      this.error = error.message;
    } else {
      this.router.navigate(['/home']);
    }
  }
  async register() {
  const { error } = await supabase.auth.signUp({
    email: this.email,
    password: this.password
  });
  if (error) {
    this.error = error.message;
  } else {
    alert("Registro exitoso, por favor verifica tu correo electrónico.");
  }
}

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      this.error = error.message;
    } else {
      this.error = "";
    }
  }

}