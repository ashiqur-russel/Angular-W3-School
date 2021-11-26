import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Initaial state of the Application
  newMemberName='';
  members:string[]=[];
  errorMessage='';
  numberOfTeams:number | ""= "";

  //function for change input state
  onInput(member:string){
    this.newMemberName=member;
  }

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams=Number(value);
  }

  //funtion for add member to array after clicking button
  addMember(){
    if(!this.newMemberName){
      this.errorMessage="Name cam't be empty!";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName='';
  }

  generateTeam(){
    

  }
 }
