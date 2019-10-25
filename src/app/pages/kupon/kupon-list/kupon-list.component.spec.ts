import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuponListComponent } from './kupon-list.component';

describe('KuponListComponent', () => {
  let component: KuponListComponent;
  let fixture: ComponentFixture<KuponListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuponListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuponListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
