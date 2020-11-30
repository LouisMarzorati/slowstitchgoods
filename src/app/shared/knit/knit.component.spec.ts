import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitComponent } from './knit.component';

describe('KnitComponent', () => {
  let component: KnitComponent;
  let fixture: ComponentFixture<KnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
