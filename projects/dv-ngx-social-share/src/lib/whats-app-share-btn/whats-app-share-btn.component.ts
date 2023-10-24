import { Component, Input } from '@angular/core';

// Icon
import WhatsAppShareIcon from './whats-app-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
  isMobileOrTablet,
} from '../../utils';

@Component({
  selector: 'whatsapp-share-btn',
  templateUrl: './whats-app-share-btn.component.html',
  styleUrls: ['./whats-app-share-btn.component.css'],
})
export class WhatsAppShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() separator?: string = ' :: ';
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  whatsAppIcon = WhatsAppShareIcon;

  shareOnWhatsApp() {
    const generatedLink = `https://${
      isMobileOrTablet() ? 'api' : 'web'
    }.whatsapp.com/send${generateQueryParams({
      text: this.title ? this.title + this.separator + this.url : this.url,
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
