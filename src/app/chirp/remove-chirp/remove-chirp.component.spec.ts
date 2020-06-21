import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveChirpComponent } from './remove-chirp.component';

describe('RemoveChirpComponent', () => {
  let component: RemoveChirpComponent;
  let fixture: ComponentFixture<RemoveChirpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveChirpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveChirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
