import { Component, AfterViewChecked } from '@angular/core';
import { RouterModule } from '@angular/router';
import { icons, createIcons } from 'lucide';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewChecked {

  ngAfterViewChecked() {
    // Sempre recria os ícones para evitar ícone oculto
    createIcons({
      icons,
      attrs: {
        width: '24',
        height: '24',
      },
      nameAttr: 'name',
    });
  }
}
