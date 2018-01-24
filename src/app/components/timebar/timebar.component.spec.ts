import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimebarComponent } from './timebar.component';

describe('TimebarComponent', () => {
  let component: TimebarComponent;
  let fixture: ComponentFixture<TimebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it(`should have as title 'App works !'`, async(() => {
    fixture = TestBed.createComponent(TimebarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App works !');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(TimebarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('App works !');
  }));
});
