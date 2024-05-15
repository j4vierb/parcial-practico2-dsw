import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './Paciente';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
private apiEndpoint = environment.baseUrl + '/pacients.json';

constructor(private http: HttpClient) { }

getPacientes(): Observable<Paciente[]> {
  return this.http.get<Paciente[]>(this.apiEndpoint);
}

}
