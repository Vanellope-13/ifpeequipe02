import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PericlesComponent } from './pericles.component';

describe('PericlesComponent', () => {
  let component: PericlesComponent;
  let fixture: ComponentFixture<PericlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PericlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PericlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
