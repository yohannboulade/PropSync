import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'PropSync';
  sidebarActive!: boolean;

  ngOnInit() {
    
    if (window.innerWidth < 1024) {
      this.sidebarActive = false;
    }else{
      this.sidebarActive = true;
    }
  }

  onDeploy() {
    if(this.sidebarActive == true){
      this.sidebarActive = false;
    }else{
      this.sidebarActive = true;
    }    
  }
}

