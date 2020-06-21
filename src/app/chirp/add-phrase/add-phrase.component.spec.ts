import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhraseComponent } from './add-phrase.component';

describe('AddPhraseComponent', () => {
  let component: AddPhraseComponent;
  let fixture: ComponentFixture<AddPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
