import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitterTextComponent } from './remitter-text.component';

describe('RemitterTextComponent', () => {
  let component: RemitterTextComponent;
  let fixture: ComponentFixture<RemitterTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemitterTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
