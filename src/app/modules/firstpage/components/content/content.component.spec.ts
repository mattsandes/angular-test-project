import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { By } from '@angular/platform-browser';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all page post', () => {
    const titleEl = fixture.debugElement.queryAll(By.css('[data-cy="post-title"]'));

    expect(titleEl.length).toBe(3);
  });

  it('should render all post titles', () => {
    const titleEl = fixture.debugElement.queryAll(By.css('[data-cy="post-title"]'));

    expect(titleEl.length).toBe(3);
    expect(titleEl[0].nativeElement.innerHTML).toContain("Undead United: A Haven Beyond the Grave");
  });

  it('should render all post texts', () => {
    const titleEl = fixture.debugElement.queryAll(By.css('[data-cy="post-text"]'));

    expect(titleEl.length).toBe(3);
    expect(titleEl[0].nativeElement.innerHTML.trim()).not.toBe('');
  })
});
