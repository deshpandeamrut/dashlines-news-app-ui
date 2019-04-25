import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCmpComponent } from './news-cmp.component';

describe('NewsCmpComponent', () => {
  let component: NewsCmpComponent;
  let fixture: ComponentFixture<NewsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
