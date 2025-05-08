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
      description: 'Eu amo minha namorada 💖',
      liked: false,
      likes: 172,
      verified: false,
      comments: [{ username: 'eudinha_18', text: 'Amo vcs ❤️' }]
    },
    {
      user: 'ea.duque',
      avatar: 'assets/avatars/duque.jpg',
      image: 'https://pbs.twimg.com/media/GOY0_LKWMAAvCJ8?format=jpg&name=large',
      description: 'Eu e meu pAUrceiro fazendo bagunça',
      liked: false,
      likes: 93,
      verified: false,
      comments: [{ username: 'douglinhaass_', text: 'Dois marginais safados' }]
    },
    {
      user: 'bmw',
      avatar: 'assets/avatars/bmw.jpg',
      image: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/04/23174828/bmw_m5_competition_251-scaled.jpeg',
      description: 'Nothing beats this view. And nothing beats the drive.',
      liked: false,
      likes: 201,
      verified: true,
      comments: []
    },
    {
      user: 'sportrecife',
      avatar: 'assets/avatars/SCR.jpg',
      image: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2018/06/dsc-0721.jpg',
      description: 'Sport, o Brasil é teu!',
      liked: false,
      likes: 302,
      verified: true,
      comments: [
        { username: 'leticiarebeka', text: 'Chegando lá na Ilha do Retiro 🎶' },
        { username: 'douglinhaass_', text: 'SPORT CLUB DO RECIFE' }
      ]
    },
    {
      user: 'apple',
      avatar: 'assets/avatars/apple.jpg',
      image: 'https://t2.tudocdn.net/726532?w=1920&h=1440',
      description: 'iPhone 16 Pro e iPhone 16 Pro Max 📱', 
      liked: false,
      likes: 302,
      verified: true,
      comments: []
    }

  ];

  posts: any[] = [];
  stories = [
    { user: 'sportrecife', avatar: 'assets/avatars/SCR.jpg', verified: true, closeFriends: false },
    { user: 'ea.duque', avatar: 'assets/avatars/duque.jpg', verified: false, closeFriends: false },
    { user: 'luizcarloslzn', avatar: 'assets/avatars/luiz.jpg', verified: false, closeFriends: false },
    { user: 'elisiafelix', avatar: 'assets/avatars/elisia.jpg', verified: false, closeFriends: false },
    { user: 'clarasiq...', avatar: 'assets/avatars/clara.jpg', verified: false, closeFriends: false },
    { user: 'douglinha...', avatar: 'assets/avatars/douglinhas.jpg', verified: false, closeFriends: true },
    { user: 'apple', avatar: 'assets/avatars/apple.jpg', verified: true, closeFriends: false },
    { user: 'bmw', avatar: 'assets/avatars/bmw.jpg', verified: true, closeFriends: false }
  ];
  
  private postIndex = 0;
  private postsPerLoad = 2;

  ngOnInit(): void {
    const isLogged = localStorage.getItem('auth');
    if (!isLogged) {
      window.location.href = '/';
    }

    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
      console.log("Dark mode ativado ao carregar a página!");
      document.body.classList.add('dark-mode');
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
      const newComment = { username: 'douglinhaass_', text: comment };
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

    if (body.classList.contains('dark-mode')) {
      console.log("Modo escuro ativado!");
    } else {
      console.log("Modo claro ativado!");
    }

    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled ? 'true' : 'false');
    console.log("Estado do Dark Mode salvo no localStorage:", darkModeEnabled ? 'true' : 'false');
  }
}
