import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelomanosContactComponent } from './melomanos-contact.component';

describe('MelomanosContactComponent', () => {
  let component: MelomanosContactComponent;
  let fixture: ComponentFixture<MelomanosContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelomanosContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelomanosContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
