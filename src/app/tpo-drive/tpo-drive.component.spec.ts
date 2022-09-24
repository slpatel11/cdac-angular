import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoDriveComponent } from './tpo-drive.component';

describe('TpoDriveComponent', () => {
  let component: TpoDriveComponent;
  let fixture: ComponentFixture<TpoDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpoDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
