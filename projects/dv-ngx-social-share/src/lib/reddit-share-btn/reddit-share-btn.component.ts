import { Component, Input } from '@angular/core';

// Icon
import RedditShareIcon from './reddit-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'reddit-share-btn',
  templateUrl: './reddit-share-btn.component.html',
  styleUrls: ['./reddit-share-btn.component.css'],
})
export class RedditShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  redditIcon = RedditShareIcon;

  shareOnReddit() {
    const generatedLink = `https://www.reddit.com/submit${generateQueryParams({
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
