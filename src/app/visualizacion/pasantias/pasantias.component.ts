import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasantias',
  templateUrl: './pasantias.component.html',
  styleUrls: ['./pasantias.component.css']
})
export class PasantiasComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  perfil() {
    this._router.navigateByUrl('/perfil');
  }

}
