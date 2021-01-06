import { Component, OnInit } from "@angular/core";
import { MyserviceService } from "../myservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private myser: MyserviceService) {}

  mydatal;
  ngOnInit() {
    this.mydatal = this.myser.serData;
  }
}
