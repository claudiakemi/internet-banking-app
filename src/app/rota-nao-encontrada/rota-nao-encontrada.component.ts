import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rota-nao-encontrada',
  templateUrl: './rota-nao-encontrada.component.html',
  styleUrls: ['./rota-nao-encontrada.component.css']
})
export class RotaNaoEncontradaComponent implements OnInit {

  data = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
