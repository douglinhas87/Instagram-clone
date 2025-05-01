import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  posts: any[] = [];  
  isFollowing: boolean = false;  

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
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const param = params.get('username');
      if (param) {
        this.username = param;
        this.posts = this.allPosts.filter(post => post.user === this.username);
      }
    });
  }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing; 
  }
}
