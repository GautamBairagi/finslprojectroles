import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroomnotesComponent } from './addroomnotes.component';

describe('AddroomnotesComponent', () => {
  let component: AddroomnotesComponent;
  let fixture: ComponentFixture<AddroomnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddroomnotesComponent]
    });
    fixture = TestBed.createComponent(AddroomnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
