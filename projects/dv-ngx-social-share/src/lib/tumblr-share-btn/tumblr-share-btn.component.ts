import { Component, Input } from '@angular/core';

// Icon
import TumblrShareIcon from './tumblr-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'tumblr-share-btn',
  templateUrl: './tumblr-share-btn.component.html',
  styleUrls: ['./tumblr-share-btn.component.css'],
})
export class TumblrShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() caption?: string | undefined;
  @Input() tags?: string[] | undefined;
  @Input() postTypes?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  tumblrIcon = TumblrShareIcon;

  shareOnTumblr() {
    const generatedLink = `https://www.tumblr.com/widgets/share/tool${generateQueryParams(
      {
        url: this.url,
        text: this.title,
        caption: this.caption,
        tags: this.tags,
        postTypes: this.postTypes,
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
