import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandButton } from './rand-button';

describe('RandButton', () => {
  let component: RandButton;
  let fixture: ComponentFixture<RandButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandButton],
    }).compileComponents();

    fixture = TestBed.createComponent(RandButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
