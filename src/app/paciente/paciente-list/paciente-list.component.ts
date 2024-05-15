import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../Paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Paciente[] = [];
  menoresDeEdad: number = 2;
  pacienteSelected!: Paciente;
  selected: Boolean = false;


  constructor(private pacienteService: PacienteService) { }

  getPacientes() {
    this.pacienteService.getPacientes().subscribe(pacientes => this.pacientes = pacientes);
  }
  
  setNumeroPacientes() {
    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.menoresDeEdad = pacientes.filter(paciente => paciente.edad < 18).length;
    });
  }

  onClick(paciente: Paciente) {
    this.pacienteSelected = paciente;
    this.selected = true;
  }

  ngOnInit() {
    this.getPacientes();
    this.setNumeroPacientes();
  }
}
