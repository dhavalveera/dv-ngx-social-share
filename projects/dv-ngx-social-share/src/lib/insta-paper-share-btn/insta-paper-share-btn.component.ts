import { Component, Input } from '@angular/core';

// Icon
import InstaPaperShareIcon from './insta-paper-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'insta-paper-share-btn',
  templateUrl: './insta-paper-share-btn.component.html',
  styleUrls: ['./insta-paper-share-btn.component.css'],
})
export class InstaPaperShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() description?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  instaPaperIcon = InstaPaperShareIcon;

  shareOnInstaPaper() {
    const generatedLink = `http://www.instapaper.com/hello2${generateQueryParams(
      {
        title: this.title,
        url: this.url,
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
