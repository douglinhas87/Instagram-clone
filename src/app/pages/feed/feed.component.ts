import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts = [
    {
      user: 'douglinhaass_',
      image: 'https://pbs.twimg.com/media/GfwXpZIWIAA9RcQ?format=jpg&name=large',
      description: 'Eu amo minha namorada',
      liked: false,
      likes: 172
    },
    {
      user: 'ea.duque',
      image: 'https://pbs.twimg.com/media/GOY0_LKWMAAvCJ8?format=jpg&name=large',
      description: 'Eu e meu pAUrceiro fazendo bagunça',
      liked: false,
      likes: 98
    }
  ];

  ngOnInit(): void {
    const isLogged = localStorage.getItem('auth');
    if (!isLogged) {
      window.location.href = '/';
    }
  }

  logout(): void {
    localStorage.removeItem('auth');
    window.location.href = '/';
  }

  toggleLike(post: any): void {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
  }
}
