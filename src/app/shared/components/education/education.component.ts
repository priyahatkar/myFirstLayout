import { Component, OnInit } from '@angular/core';
import { educArray } from '../../const/skills';
import { Ieducation } from '../../model/skillsInterFace';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public eArray : Ieducation[] = educArray;
  constructor() { }

  ngOnInit(): void {
  }

}
