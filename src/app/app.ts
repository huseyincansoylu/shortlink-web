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

  protected readonly links = signal<Link[]>([
    {
      id: 1,
      code: 'gw42r8',
      url: 'https://nestjs.com',
      createdAt: '2026-09-29T10:00:00.000Z',
      lastClickedAt: '2026-09-29T12:30:00.000Z',
      userId: 1,
      _count: { clicks: 3 },
    },
    {
      id: 2,
      code: 'k9x2mq',
      url: 'https://angular.dev',
      createdAt: '2026-09-28T09:00:00.000Z',
      lastClickedAt: null,
      userId: 1,
      _count: { clicks: 0 },
    },
    {
      id: 3,
      code: 'p7t4zc',
      url: 'https://tailwindcss.com',
      createdAt: '2026-09-27T15:45:00.000Z',
      lastClickedAt: '2026-09-28T08:10:00.000Z',
      userId: 2,
      _count: { clicks: 12 },
    },
  ]);

  protected onRemove(code: string): void {
    this.links.update((links) => links.filter((l) => l.code !== code));
  }
}
