import { Component, input, output } from '@angular/core';
import { Link } from '../link.model';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.html',
})
export class LinkCard {
  readonly link = input.required<Link>();
  readonly remove = output<string>();
}
