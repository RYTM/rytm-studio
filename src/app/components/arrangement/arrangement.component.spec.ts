import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementComponent } from './arrangement.component';

describe('ArrangementComponent', () => {
  let component: ArrangementComponent;
  let fixture: ComponentFixture<ArrangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it(`should have as title 'App works !'`, async(() => {
    fixture = TestBed.createComponent(ArrangementComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App works !');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(ArrangementComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('App works !');
  }));
});
