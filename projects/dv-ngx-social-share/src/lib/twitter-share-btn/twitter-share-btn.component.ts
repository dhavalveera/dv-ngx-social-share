import { Component, Input } from '@angular/core';

// Icon
import TwitterShareIcon from './twitter-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'twitter-share-btn',
  templateUrl: './twitter-share-btn.component.html',
  styleUrls: ['./twitter-share-btn.component.css'],
})
export class TwitterShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() via?: string | undefined;
  @Input() hashTags?: Array<string> = [];
  @Input() related?: Array<string> = [];
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  twitterIcon = TwitterShareIcon;

  shareOnTwitter() {
    const generatedLink = `https://twitter.com/intent/tweet${generateQueryParams(
      {
        url: this.url,
        text: this.title,
        via: this.via,
        hashTags:
          this.hashTags && this.hashTags.length > 0
            ? this?.hashTags.join(',')
            : undefined,
        related:
          this.related && this.related.length > 0
            ? this?.related.join(',')
            : undefined,
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
