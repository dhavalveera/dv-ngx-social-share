import { Component, Input } from '@angular/core';

// Icon
import LinkedInShareIcon from './linkedin-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'linked-in-share-btn',
  templateUrl: './linked-in-share-btn.component.html',
  styleUrls: ['./linked-in-share-btn.component.css'],
})
export class LinkedInShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() summary?: string | undefined;
  @Input() source?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  linkedInIcon = LinkedInShareIcon;

  shareOnLinkedIn() {
    const generatedLink = `https://linkedin.com/sharing/share-offsite${generateQueryParams(
      {
        url: this.url,
        mini: 'true',
        title: this.title,
        summary: this.summary,
        source: this.source,
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
