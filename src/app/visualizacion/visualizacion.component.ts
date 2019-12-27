import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css']
})
export class VisualizacionComponent implements OnInit {

  public tipo: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.url.subscribe(url => {
      const t = `${url[1]}`;
      this.tipo = t === 'pasantias' || t === 'pasantes' ? t : null;
      // console.log(t);
    });
  }

}
