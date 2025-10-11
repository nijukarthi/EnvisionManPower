import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTable } from './category-table';

describe('CategoryTable', () => {
  let component: CategoryTable;
  let fixture: ComponentFixture<CategoryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
