import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientLabelComponent } from './recipient-label.component';

describe('RecipientLabelComponent', () => {
  let component: RecipientLabelComponent;
  let fixture: ComponentFixture<RecipientLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
