import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkCard } from './links/link-card/link-card';
import { Link } from './links/link.model';

@Component({
  imports: [RouterOutlet, LinkCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shortlink-web');

  protected readonly link = signal<Link>({
    id: 1,
    code: 'gw42r8',
    url: 'https://nestjs.com',
    createdAt: '2026-09-29T10:00:00.000Z',
    lastClickedAt: null,
    userId: 1,
    _count: { clicks: 3 },
  });

  protected onRemove(code: string): void {
    console.log('remove', code);
  }
}
