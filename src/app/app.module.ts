import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MyRouter } from "./demorouter";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MyRouter],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
