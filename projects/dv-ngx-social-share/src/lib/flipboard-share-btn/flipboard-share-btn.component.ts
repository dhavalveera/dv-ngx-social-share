import { Component, Input } from '@angular/core';

// Icon
import FlipboardShareIcon from './flipboard-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'flipboard-share-btn',
  templateUrl: './flipboard-share-btn.component.html',
  styleUrls: ['./flipboard-share-btn.component.css'],
})
export class FlipboardShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  flipBoardIcon = FlipboardShareIcon;

  shareOnFlipboard() {
    const generatedLink = `https://share.flipboard.com/bookmarklet/popout${generateQueryParams(
      {
        v: 2,
        title: this.title,
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
