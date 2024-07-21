import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarImoveisComponent } from "../pages/consultar-imoveis/consultar-imoveis.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [CommonModule, ConsultarImoveisComponent,],
  selector: 'app-user-app-entry',
  template: `<app-consultar-imoveis></app-consultar-imoveis>`,
})
export class RemoteEntryComponent {}
