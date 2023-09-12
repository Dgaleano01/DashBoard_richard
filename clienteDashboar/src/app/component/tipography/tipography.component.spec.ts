import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipographyComponent } from './tipography.component';

describe('TipographyComponent', () => {
  let component: TipographyComponent;
  let fixture: ComponentFixture<TipographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
