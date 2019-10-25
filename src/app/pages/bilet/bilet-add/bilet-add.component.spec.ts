import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiletAddComponent } from './bilet-add.component';

describe('BiletAddComponent', () => {
  let component: BiletAddComponent;
  let fixture: ComponentFixture<BiletAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiletAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiletAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
