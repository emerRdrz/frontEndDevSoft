import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenestransporteComponent } from './ordenestransporte.component';

describe('OrdenestransporteComponent', () => {
  let component: OrdenestransporteComponent;
  let fixture: ComponentFixture<OrdenestransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenestransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenestransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
