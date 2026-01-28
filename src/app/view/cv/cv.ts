import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
  imports: [RouterLink, TranslatePipe],
})
export class CvView {}
