import { Component, VERSION } from "@angular/core";
import { MyserviceService } from "./myservice.service";
import { HttpserviceService } from "./httpservice.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  mydata2;
  mydata;
  arr;

  constructor(
    private myser: MyserviceService,
    private httpserv: HttpserviceService
  ) {}

  ngOnInit(): void {
    this.mydata2 = this.myser.showDate();
    this.httpserv.getServerData().subscribe(data => {
      // console.log(data)
      this.arr = Array.from(Object.keys(data), k => data[k]);
    });
  }

  hello() {
    this.mydata2 = this.myser.showDate();
    console.log(this.mydata2);
    this.myser.serData = this.mydata;
  }

  getData() {
    this.httpserv.getServerData().subscribe(data => {
      // console.log(data)
      this.arr = Array.from(Object.keys(data), k => data[k]);
    });
  }

  sendData() {
    this.httpserv.postDataonServer(0, "tstuser", 10101).subscribe(res => {
      console.log(res);
      // this.arr = Array.from(Object.keys(data), k => data[k]);
    });
    console.log("data sent");
  }
}
