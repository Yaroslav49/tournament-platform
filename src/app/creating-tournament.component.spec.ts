import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreatingTournamentComponent } from './creating-tournament.component';

describe('CreatingTournamentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CreatingTournamentComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreatingTournamentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tournamentPlatform'`, () => {
    const fixture = TestBed.createComponent(CreatingTournamentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tournamentPlatform');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CreatingTournamentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('tournamentPlatform app is running!');
  });
});
