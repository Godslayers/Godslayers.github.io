import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  public currentTime: Date = new Date();
  public message: string = "傲来雾，花果香，定海一棒万妖朝。东海外，水帘中，齐天比高仙折腰。";
  public msg: string = "";
  public active:number = 0;

  constructor() {
    window.setInterval(()=>{this.currentTime=new Date()}
    , 1000);
    var index = 0;
    var length = this.message.length + 1;

    window.setInterval(()=>{
      this.msg += this.message.charAt(index++);
      if (index == length) {
        index = 0;
        this.msg = "";
      }
      // console.log(this.msg.length)
    }, 300);
  }

}