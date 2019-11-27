import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartMarkpointRedComponent } from './line-chart-markpoint-red.component';

describe('LineChartMarkpointRedComponent', () => {
  let component: LineChartMarkpointRedComponent;
  let fixture: ComponentFixture<LineChartMarkpointRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartMarkpointRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartMarkpointRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
