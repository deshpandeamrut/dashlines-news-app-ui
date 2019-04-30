import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCmpComponent } from './source-cmp.component';

describe('SourceCmpComponent', () => {
  let component: SourceCmpComponent;
  let fixture: ComponentFixture<SourceCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
