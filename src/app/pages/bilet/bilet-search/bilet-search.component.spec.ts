import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiletSearchComponent } from './bilet-search.component';

describe('BiletSearchComponent', () => {
  let component: BiletSearchComponent;
  let fixture: ComponentFixture<BiletSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiletSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiletSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
