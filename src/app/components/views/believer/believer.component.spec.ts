import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieverComponent } from './believer.component';

describe('BelieverComponent', () => {
  let component: BelieverComponent;
  let fixture: ComponentFixture<BelieverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
