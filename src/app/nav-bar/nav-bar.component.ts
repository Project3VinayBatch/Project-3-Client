import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InitiativeService } from '../services/initiative.service';
import { Role } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit{
  isLoggedIn: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

    logout(){
      console.log("testing log out");
     //call authservice!
      this.authService.logout();
    }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService:AuthService,
    
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn()
      
    }
    //need to call isLoggedIn again and set isLoggedIn=true when user logs in...
}
