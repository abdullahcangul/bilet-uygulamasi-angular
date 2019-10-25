import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiletDetailComponent } from './bilet-detail.component';

describe('BiletDetailComponent', () => {
  let component: BiletDetailComponent;
  let fixture: ComponentFixture<BiletDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiletDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiletDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
