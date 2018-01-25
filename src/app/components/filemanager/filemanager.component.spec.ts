import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilemanagerComponent } from './filemanager.component';

describe('FilemanagerComponent', () => {
  let component: FilemanagerComponent;
  let fixture: ComponentFixture<FilemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it(`should have as title 'App works !'`, async(() => {
    fixture = TestBed.createComponent(FilemanagerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App works !');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(FilemanagerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('App works !');
  }));
});
