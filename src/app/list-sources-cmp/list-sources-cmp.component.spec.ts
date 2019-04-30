import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSourcesCmpComponent } from './list-sources-cmp.component';

describe('ListSourcesCmpComponent', () => {
  let component: ListSourcesCmpComponent;
  let fixture: ComponentFixture<ListSourcesCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSourcesCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSourcesCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
