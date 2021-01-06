import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MyRouter } from "./demorouter";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { MyserviceService } from "./myservice.service";
import { HttpserviceService } from "./httpservice.service";

@NgModule({
  imports: [BrowserModule, FormsModule, MyRouter, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [MyserviceService, HttpserviceService]
})
export class AppModule {}
