import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoworderPage } from './showorder.page';

describe('ShoworderPage', () => {
  let component: ShoworderPage;
  let fixture: ComponentFixture<ShoworderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoworderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
