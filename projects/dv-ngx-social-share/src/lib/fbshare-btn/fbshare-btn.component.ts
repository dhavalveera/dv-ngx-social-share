import { Component, Input } from '@angular/core';

// Icon
import FBShareIcon from './fb-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'fbshare-btn',
  templateUrl: './fbshare-btn.component.html',
  styleUrls: ['./fbshare-btn.component.css'],
})
export class FBShareBtnComponent {
  @Input() url: string = '';
  @Input() quote?: string | undefined;
  @Input() hashTags?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  fbIcon = FBShareIcon;

  shareOnFB() {
    const generatedLink = `https://www.facebook.com/sharer/sharer.php${generateQueryParams(
      {
        u: this.url,
        quote: this.quote,
        hashTags: this.hashTags,
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
