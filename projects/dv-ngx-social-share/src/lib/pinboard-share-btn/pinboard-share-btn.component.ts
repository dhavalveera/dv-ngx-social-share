import { Component, Input } from '@angular/core';

// Icon
import PinboardShareIcon from './pinboard-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'pinboard-share-btn',
  templateUrl: './pinboard-share-btn.component.html',
  styleUrls: ['./pinboard-share-btn.component.css'],
})
export class PinboardShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() description?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  pinBoardIcon = PinboardShareIcon;

  shareOnPinBoard() {
    const generatedLink = `https://pinboard.in/add${generateQueryParams({
      url: this.url,
      title: this.title,
      description: this.description,
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
