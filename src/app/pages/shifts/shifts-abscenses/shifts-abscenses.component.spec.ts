import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsAbscensesComponent } from './shifts-abscenses.component';

describe('ShiftsAbscensesComponent', () => {
  let component: ShiftsAbscensesComponent;
  let fixture: ComponentFixture<ShiftsAbscensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsAbscensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsAbscensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
