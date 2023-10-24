import { Component, Input } from '@angular/core';

// Icon
import YummlyShareIcon from './yummly-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'yummly-share-btn',
  templateUrl: './yummly-share-btn.component.html',
  styleUrls: ['./yummly-share-btn.component.css'],
})
export class YummlyShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() image?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  yummlyIcon = YummlyShareIcon;

  shareOnYummly() {
    const generatedLink = `https://www.yummly.com/urb/verify${generateQueryParams(
      {
        title: this.title,
        url: this.url,
        urbtype: 'bookmarklet',
        type: 'agg',
        image: this.image,
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
