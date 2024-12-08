import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PskillsComponent } from './pskills.component';

describe('PskillsComponent', () => {
  let component: PskillsComponent;
  let fixture: ComponentFixture<PskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
