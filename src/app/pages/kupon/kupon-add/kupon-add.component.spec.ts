import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuponAddComponent } from './kupon-add.component';

describe('KuponAddComponent', () => {
  let component: KuponAddComponent;
  let fixture: ComponentFixture<KuponAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuponAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuponAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
