import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaColaborativaPage } from './lista-colaborativa.page';

describe('ListaColaborativaPage', () => {
  let component: ListaColaborativaPage;
  let fixture: ComponentFixture<ListaColaborativaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaColaborativaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
