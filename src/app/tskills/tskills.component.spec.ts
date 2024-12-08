import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TskillsComponent } from './tskills.component';

describe('TskillsComponent', () => {
  let component: TskillsComponent;
  let fixture: ComponentFixture<TskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
