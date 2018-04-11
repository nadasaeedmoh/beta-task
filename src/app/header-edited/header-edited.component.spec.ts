import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEditedComponent } from './header-edited.component';

describe('HeaderEditedComponent', () => {
  let component: HeaderEditedComponent;
  let fixture: ComponentFixture<HeaderEditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
