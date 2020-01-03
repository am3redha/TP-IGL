import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./Components/login/login.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { EnseignantComponent } from "./Components/enseignant/enseignant.component";
import { HttpClientModule } from "@angular/common/http";
import { UiEtudiantComponent } from "./Components/ui-etudiant/ui-etudiant.component";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
import { UiFeedbackComponent } from "./Components/ui-feedback/ui-feedback.component";
import { StudentFormComponent } from "./Components/student-form/student-form.component";
import { UiAdministrationComponent } from "./Components/ui-administration/ui-administration.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiEtudiantComponent,
    EnseignantComponent,
    NavbarComponent,
    NotFoundComponent,
    UiFeedbackComponent,
    StudentFormComponent,
    UiAdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
