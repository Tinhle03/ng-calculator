import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';

  toshow = ''

  currvalue = ''

  writetoinput(value:string){
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue
  }
  equals(){
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  clear(){
    this.currvalue=''
    this.toshow = this.currvalue
  }

  back(){
    this.currvalue = this.currvalue.slice(0,-1)
    this.toshow = this.currvalue
    if(this.toshow == ''){this.toshow = ''}
  }

  calcvalue(solve: any){
    if(solve.chatAt(0) == '0'){
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve)
  }
}
