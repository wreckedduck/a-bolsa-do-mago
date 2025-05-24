import { Component, Input } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  imports: [SvgIconComponent]
})
export class CollapseComponent {
  @Input() title: string = ''
  @Input() isOpen: boolean = false

  toggle() {
    this.isOpen = !this.isOpen
  }
}