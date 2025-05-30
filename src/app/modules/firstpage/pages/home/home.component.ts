import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
