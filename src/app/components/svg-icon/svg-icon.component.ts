import { Component, Input, OnChanges } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'svg-icon',
  standalone: true,
  template: `
    <div
      class="svg-icon"
      [style.width.px]="width"
      [style.height.px]="height"
      [style.color]="color"
      (mouseenter)="isHover = true"
      (mouseleave)="isHover = false"
      [style.color]="isHover ? hoverColor : color"
      [innerHTML]="svgContent"
    ></div>
  `,
})
export class SvgIconComponent implements OnChanges {
  @Input() src = ''
  @Input() width = 24
  @Input() height = 24
  @Input() color = '#ffffff'
  @Input() hoverColor = '#ffffff'

  svgContent: SafeHtml = ''
  isHover = false

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges() {
    if (this.src) {
      this.http.get(this.src, { responseType: 'text' }).subscribe(rawSvg => {
        let svg = rawSvg

        // Remove fills para usar currentColor
        svg = svg.replace(/fill="[^"]*"/g, '')
        // Adiciona fill: currentColor no svg inline
        svg = svg.replace('<svg', '<svg style="fill: currentColor"')

        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg)
      })
    }
  }
}
