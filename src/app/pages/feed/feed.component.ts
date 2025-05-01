import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  allPosts = [
    {
      user: 'douglinhaass_',
      avatar: 'assets/avatars/douglinhas.jpg',
      image: 'https://pbs.twimg.com/media/GfwXpZIWIAA9RcQ?format=jpg&name=large',
      description: 'Eu amo minha namorada',
      liked: false,
      likes: 172,
      comments: [{ username: 'douglinhaass_', text: 'Lindo casal ❤️' }]
    },
    {
      user: 'ea.duque',
      avatar: 'assets/avatars/duque.jpg',
      image: 'https://pbs.twimg.com/media/GOY0_LKWMAAvCJ8?format=jpg&name=large',
      description: 'Eu e meu pAUrceiro fazendo bagunça',
      liked: false,
      likes: 93,
      comments: []
    },
    {
      user: 'clarasiqueiraaa_',
      avatar: 'assets/avatars/clara.jpg',
      image: 'https://pbs.twimg.com/media/GdQG5wlW0AA61Uw?format=jpg&name=large',
      description: 'Meu solzinho 🌞',
      liked: false,
      likes: 201,
      comments: [
        { username: 'clarasiqueiraaa_', text: 'Maravilhosa!' },
        { username: 'leticiarebeka', text: 'Princesa ❤️' }
      ]
    },
    {
      user: 'leticiarebeka',
      avatar: 'assets/avatars/leticia.jpg',
      image: 'https://pbs.twimg.com/media/Fz_YGLAXsAAb9-H?format=jpg&name=large',
      description: 'Amo o Porto!',
      liked: false,
      likes: 302,
      comments: [
        { username: 'leticiarebeka', text: '🇵🇹' },
        { username: 'douglinhaass_', text: 'Top demais!' }
      ]
    }
  ];

  posts: any[] = [];
  stories = [
    { user: 'sportrecife', avatar: 'assets/avatars/SCR.jpg' },
    { user: 'ea.duque', avatar: 'assets/avatars/duque.jpg' },
    { user: 'luizcarloslzn', avatar: 'assets/avatars/luiz.jpg' },
    { user: 'elisiafelix', avatar: 'assets/avatars/elisia.jpg' },
    { user: 'clarasiqueiraaa_', avatar: 'assets/avatars/clara.jpg' },
    { user: 'douglinhaass_', avatar: 'assets/avatars/douglinhas.jpg' },
    { user: 'leticiarebeka', avatar: 'assets/avatars/leticia.jpg' },
    { user: 'bmw', avatar: 'assets/avatars/bmw.jpg' },
  ];

  private postIndex = 0;
  private postsPerLoad = 2;

  ngOnInit(): void {
    const isLogged = localStorage.getItem('auth');
    if (!isLogged) {
      window.location.href = '/';
    }

    this.loadMorePosts();
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
      const newComment = { username: 'douglinhaass_', text: comment };  // Aqui você deve adicionar o nome de usuário do comentarista
      post.comments.push(newComment);
      commentInput.value = '';
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 100;

    if (scrollPosition >= threshold) {
      this.loadMorePosts();
    }
  }

  loadMorePosts(): void {
    const nextPosts = this.allPosts.slice(this.postIndex, this.postIndex + this.postsPerLoad);
    this.posts.push(...nextPosts);
    this.postIndex += this.postsPerLoad;
  }

  toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}
