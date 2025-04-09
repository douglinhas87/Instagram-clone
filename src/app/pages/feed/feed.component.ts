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
      likes: 172,
      comments: ['Lindo casal ❤️']
    },
    {
      user: 'ea.duque',
      image: 'https://pbs.twimg.com/media/GOY0_LKWMAAvCJ8?format=jpg&name=large',
      description: 'Eu e meu pAUrceiro fazendo bagunça',
      liked: false,
      comments: []
    }
  ];

  stories = [
    { user: 'ana_lu', avatar: 'https://i.pravatar.cc/150?img=1' },
    { user: 'joao_dev', avatar: 'https://i.pravatar.cc/150?img=2' },
    { user: 'bia.gamer', avatar: 'https://i.pravatar.cc/150?img=3' },
    { user: 'matheus88', avatar: 'https://i.pravatar.cc/150?img=4' },
    { user: 'carolzinha', avatar: 'https://i.pravatar.cc/150?img=5' },
    { user: 'douglasferraz', avatar: 'https://i.pravatar.cc/150?img=6' },
    { user: 'leticiarebeka', avatar: 'https://i.pravatar.cc/150?img=7' },
    { user: 'analu.gabriel', avatar: 'https://i.pravatar.cc/150?img=8' }
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

  addComment(post: any, commentInput: HTMLInputElement): void {
    const comment = commentInput.value.trim();
    if (comment) {
      post.comments.push(comment);
      commentInput.value = '';
    }
  }
}
