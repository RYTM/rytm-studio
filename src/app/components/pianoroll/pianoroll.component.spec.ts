import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianorollComponent } from './pianoroll.component';

describe('PianorollComponent', () => {
  let component: PianorollComponent;
  let fixture: ComponentFixture<PianorollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianorollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianorollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it(`should have as title 'App works !'`, async(() => {
    fixture = TestBed.createComponent(PianorollComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App works !');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(PianorollComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('App works !');
  }));
});
