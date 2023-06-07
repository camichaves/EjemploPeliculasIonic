import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPeliculasPage } from './info-peliculas.page';

describe('InfoPeliculasPage', () => {
  let component: InfoPeliculasPage;
  let fixture: ComponentFixture<InfoPeliculasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
