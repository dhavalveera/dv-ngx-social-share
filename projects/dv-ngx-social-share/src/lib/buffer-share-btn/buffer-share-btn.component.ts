import { Component, Input } from '@angular/core';

// Icon
import BufferIcon from './buffer-share-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'lib-buffer-share-btn',
  templateUrl: './buffer-share-btn.component.html',
  styleUrls: ['./buffer-share-btn.component.css'],
})
export class BufferShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  bufferIcon = BufferIcon;

  shareOnBuffer() {
    const generatedLink = generateQueryParams({
      text: this.title,
      url: this.url,
    });

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
