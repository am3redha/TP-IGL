import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Administration } from "../models/Administration";
import { Etudiant } from "../models/Etudiant";
import { Router } from "@angular/router";

var user = user => {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password);
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}
  id: string;
  currentuser: string;
  public checkLogin() {
    if (!this.id) {
      this.router.navigate([""]);
    }
  }

  public getUser(email: string, pwd: string, userType: number): string {
    let i = 0;
    let nontrouv = true;
    if (userType === 1) {
      this.http
        .get("http://localhost:3000/login/admin")
        .subscribe((users: Administration[]) => {
          while (i < users.length && nontrouv) {
            if (
              users[i].user.email === email &&
              users[i].user.password === pwd
            ) {
              nontrouv = false;
            } else {
              i++;
            }
          }
          if (nontrouv) {
            this.currentuser = "";
            return "";
          } else {
            this.currentuser = users[i].nom + " " + users[i].prenom;
            this.id = users[i]._id;
            return users[i]._id;
          }
        });
    }
    if (userType === 2) {
      this.http
        .get("http://localhost:3000/login/student")
        .subscribe((users: Etudiant[]) => {
          while (i < users.length && nontrouv) {
            if (
              users[i].compte.email === email &&
              users[i].compte.password === pwd
            ) {
              nontrouv = false;
            } else {
              i++;
            }
          }
          if (nontrouv) {
            this.currentuser = "";
            return "";
          } else {
            this.id = users[i]._id;
            this.currentuser = users[i].nom + " " + users[i].prenom;
            return users[i]._id;
          }
        });
    }
    return this.id;
  }
}
