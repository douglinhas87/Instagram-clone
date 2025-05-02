import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
    this.saveThemePreference();
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-mode');
  }

  private saveThemePreference() {
    if (this.isDarkMode()) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  loadThemePreference(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
