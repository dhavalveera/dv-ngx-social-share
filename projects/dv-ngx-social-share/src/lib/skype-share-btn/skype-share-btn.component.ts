import { Component, Input } from '@angular/core';

// Icon
import SkypeShareIcon from './skype-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'skype-share-btn',
  templateUrl: './skype-share-btn.component.html',
  styleUrls: ['./skype-share-btn.component.css'],
})
export class SkypeShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  skypeIcon = SkypeShareIcon;

  shareOnSkype() {
    const generatedLink = `https://web.skype.com/share${generateQueryParams({
      text: this.title,
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
