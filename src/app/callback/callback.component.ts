import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      console.log(p);
      this.authService.fetchToken(p.code, p.state).subscribe((data) => {
        this.authService.updateToken(data.accessToken);
        console.log(data);
        this.router.navigate(['all-initiative']);
      });
    });

  }

}
