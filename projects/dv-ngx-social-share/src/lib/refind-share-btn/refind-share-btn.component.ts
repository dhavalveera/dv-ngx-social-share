import { Component, Input } from '@angular/core';

// Icon
import RefindShareIcon from './refind-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'refind-share-btn',
  templateUrl: './refind-share-btn.component.html',
  styleUrls: ['./refind-share-btn.component.css'],
})
export class RefindShareBtnComponent {
  @Input() url: string = '';
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  refindIcon = RefindShareIcon;

  shareOnRefind() {
    const generatedLink = `https://refind.com${generateQueryParams({
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
