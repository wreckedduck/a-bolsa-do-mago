import { Component } from '@angular/core'
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component'
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SvgIconComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  svgUrl = 'assets/icons/email/filled.svg'
}
