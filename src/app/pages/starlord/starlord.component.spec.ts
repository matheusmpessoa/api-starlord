import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlordComponent } from './starlord.component';

describe('StarlordComponent', () => {
  let component: StarlordComponent;
  let fixture: ComponentFixture<StarlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
