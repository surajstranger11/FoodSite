import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';

describe('Recipe.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });
});
