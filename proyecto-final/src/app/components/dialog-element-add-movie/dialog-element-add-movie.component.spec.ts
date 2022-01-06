import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementAddMovieComponent } from './dialog-element-add-movie.component';

describe('DialogElementAddMovieComponent', () => {
  let component: DialogElementAddMovieComponent;
  let fixture: ComponentFixture<DialogElementAddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementAddMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogElementAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
