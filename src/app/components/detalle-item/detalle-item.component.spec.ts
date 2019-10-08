import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { DetalleItemComponent } from './detalle-item.component';

describe('DetalleItemComponent', () => {
  let component: DetalleItemComponent;
  let fixture: ComponentFixture<DetalleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
