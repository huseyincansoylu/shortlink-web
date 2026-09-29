import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkCard } from './link-card';

describe('LinkCard', () => {
  let component: LinkCard;
  let fixture: ComponentFixture<LinkCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('link', {
      id: 1,
      code: 'abc123',
      url: 'https://example.com',
      createdAt: '2026-09-29T10:00:00.000Z',
      lastClickedAt: null,
      userId: 1,
      _count: { clicks: 0 },
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
