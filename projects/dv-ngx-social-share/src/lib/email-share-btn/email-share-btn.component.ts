import { Component, Input } from '@angular/core';

// Icon
import EmailIcon from './email-share-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'email-share-btn',
  templateUrl: './email-share-btn.component.html',
  styleUrls: ['./email-share-btn.component.css'],
})
export class EmailShareBtnComponent {
  @Input()
  url!: string;
  @Input() subject: string | undefined | any;
  @Input() body: string | undefined | any;
  @Input() separator: string | undefined | any = ' :: ';
  @Input() openInNewTab: boolean = false;
  @Input() imgStyle: { [klass: string]: any } = defaultImgConfig;

  emailIcon = EmailIcon;

  shareOnEmail() {
    const generatedLink = `mailto:${generateQueryParams({
      subject: this.subject,
      body: this.body ? this.body + this.separator + this.url : this.url,
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
