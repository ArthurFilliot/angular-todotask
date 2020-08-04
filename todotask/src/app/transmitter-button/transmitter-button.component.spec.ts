import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitterButtonComponent } from './transmitter-button.component';

describe('TransmitterButtonComponent', () => {
  let component: TransmitterButtonComponent;
  let fixture: ComponentFixture<TransmitterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
