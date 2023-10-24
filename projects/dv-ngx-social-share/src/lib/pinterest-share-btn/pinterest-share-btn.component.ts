import { Component, Input } from '@angular/core';

// Icon
import PinterestShareIcon from './pinterest-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'pinterest-share-btn',
  templateUrl: './pinterest-share-btn.component.html',
  styleUrls: ['./pinterest-share-btn.component.css'],
})
export class PinterestShareBtnComponent {
  @Input() url: string = '';
  @Input() media: string = '';
  @Input() description?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  pinterestIcon = PinterestShareIcon;

  shareOnPinterest() {
    const generatedLink = `https://pinterest.com/pin/create/button${generateQueryParams(
      {
        url: this.url,
        media: this.media,
        description: this.description,
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
