import { Component, Input } from '@angular/core';

// Icon
import DiggIcon from './dig-share-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'digg-share-btn',
  templateUrl: './digg-share-btn.component.html',
  styleUrls: ['./digg-share-btn.component.css'],
})
export class DiggShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  diggIcon = DiggIcon;

  shareOnDigg() {
    const generatedLink = `http://digg.com/submit${generateQueryParams({
      title: this.title,
      url: this.url,
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
