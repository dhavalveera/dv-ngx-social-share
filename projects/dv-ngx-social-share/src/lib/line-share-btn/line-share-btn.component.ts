import { Component, Input } from '@angular/core';

// Icon
import LineShareIcon from './line-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'line-share-btn',
  templateUrl: './line-share-btn.component.html',
  styleUrls: ['./line-share-btn.component.css'],
})
export class LineShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  lineIcon = LineShareIcon;

  shareOnLine() {
    const generatedLink = `https://social-plugins.line.me/lineit/share${generateQueryParams(
      {
        text: this.title,
        url: this.url,
      }
    )}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
