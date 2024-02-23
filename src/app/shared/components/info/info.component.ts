import { Component, OnInit } from '@angular/core';
import { skillsArr } from '../../const/skills';
import { Iskills } from '../../model/skillsInterFace';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public skillsArray : Iskills[] = skillsArr;
  color: ThemePalette = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
