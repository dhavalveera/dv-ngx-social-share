import { Component, Input } from '@angular/core';

// Icon
import PocketShareIcon from './pocket-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'pocket-share-btn',
  templateUrl: './pocket-share-btn.component.html',
  styleUrls: ['./pocket-share-btn.component.css'],
})
export class PocketShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  pocketIcon = PocketShareIcon;

  shareOnPocket() {
    const generatedLink = `https://getpocket.com/save${generateQueryParams({
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
