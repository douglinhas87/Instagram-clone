import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})

export class SuggestionsComponent {
  suggestions = [
    {
      username: 'santacruzfc',
      name: 'Seguido(a) por serie_D e outr...',
      profileImage: 'assets/suggestions/santacruz.jpg',
      isFollowing: false
    },
    {
      username: 'uacsaufrpe',
      name: 'Seguido(a) por douglinhaass_ e...',
      profileImage: 'assets/suggestions/uacsa.jpg',
      isFollowing: false
    },
    {
      username: 'iepiedade',
      name: 'Seguido(a) por eudinha_18 e outr...',
      profileImage: 'assets/suggestions/ieq.jpg',
      isFollowing: false
    },
    {
      username: 'boeing',
      name: 'Seguido(a) por alexfcaval e outr...',
      profileImage: 'assets/suggestions/boeing.jpg',
      isFollowing: false
    },
    {
      username: 'therollingstones',
      name: 'Seguido(a) por douglinhaass_ e...',
      profileImage: 'assets/suggestions/therollingstones.jpg',
      isFollowing: false
    }
  ];

  toggleFollow(user: any) {
    user.isFollowing = !user.isFollowing;
    console.log(user.isFollowing ? `Seguindo ${user.username}` : `Deixou de seguir ${user.username}`);
  }

  seeAll() {
    console.log('Ver todas as sugestões');
  }
}
