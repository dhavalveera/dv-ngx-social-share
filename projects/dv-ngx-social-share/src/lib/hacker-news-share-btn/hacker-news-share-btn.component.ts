import { Component, Input } from '@angular/core';

// Icon
import HackerNewsShareIcon from './hacker-news-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'hacker-news-share-btn',
  templateUrl: './hacker-news-share-btn.component.html',
  styleUrls: ['./hacker-news-share-btn.component.css'],
})
export class HackerNewsShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  hackerNewsIcon = HackerNewsShareIcon;

  shareOnHackerNews() {
    const generatedLink = `http://news.ycombinator.com/submitlink${generateQueryParams(
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
