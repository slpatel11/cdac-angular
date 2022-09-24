import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoViewDetailComponent } from './tpo-view-detail.component';

describe('TpoViewDetailComponent', () => {
  let component: TpoViewDetailComponent;
  let fixture: ComponentFixture<TpoViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoViewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpoViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
