import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChirpComponent } from './add-chirp.component';

describe('AddChirpComponent', () => {
  let component: AddChirpComponent;
  let fixture: ComponentFixture<AddChirpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChirpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
