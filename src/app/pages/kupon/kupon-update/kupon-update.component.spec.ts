import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuponUpdateComponent } from './kupon-update.component';

describe('KuponUpdateComponent', () => {
  let component: KuponUpdateComponent;
  let fixture: ComponentFixture<KuponUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuponUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuponUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
