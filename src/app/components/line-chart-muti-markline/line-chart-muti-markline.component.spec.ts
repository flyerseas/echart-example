import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartMutiMarklineComponent } from './line-chart-muti-markline.component';

describe('LineChartMutiMarklineComponent', () => {
  let component: LineChartMutiMarklineComponent;
  let fixture: ComponentFixture<LineChartMutiMarklineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartMutiMarklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartMutiMarklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
