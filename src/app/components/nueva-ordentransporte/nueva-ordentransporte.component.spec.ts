import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaOrdentransporteComponent } from './nueva-ordentransporte.component';

describe('NuevaOrdentransporteComponent', () => {
  let component: NuevaOrdentransporteComponent;
  let fixture: ComponentFixture<NuevaOrdentransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaOrdentransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaOrdentransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
