import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const isLogged = localStorage.getItem('auth');
    if (!isLogged) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/']);
  }
}
