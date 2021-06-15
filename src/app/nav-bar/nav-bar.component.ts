import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InitiativeService } from '../services/initiative.service';
import { Role, User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnChanges{
  //need to subscribe
  

  isLoggedIn: boolean; //i think if I change this - then it will update automatically
  currentUser: User;
  subscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

    logout(){
      console.log("testing log out");
      this.isLoggedIn = false;
     //call authservice!
      this.authService.logout();
    }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService:AuthService,
    private userService: UserService,
    
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
      this.subscription = this.userService.currentUser //this is an observable
      .subscribe(user=> {this.currentUser = user;
        console.log(user);
      })
    }
    //need to call isLoggedIn again and set isLoggedIn=true when user logs in...
    ngOnChanges(){ //no changes called
      this.isLoggedIn = this.authService.isLoggedIn();
      this.subscription = this.userService.currentUser //this is an observable
      .subscribe(user=> {this.currentUser = user;
        console.log(user);
      })
     // this component needs to update but its not changed...
    }

  }


//need to make the signin / signout a signle