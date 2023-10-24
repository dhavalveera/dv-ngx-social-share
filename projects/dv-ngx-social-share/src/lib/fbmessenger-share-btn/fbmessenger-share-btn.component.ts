import { Component, Input } from '@angular/core';

// Icon
import FBMessangerIcon from './fb-messenger-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'fbmessenger-share-btn',
  templateUrl: './fbmessenger-share-btn.component.html',
  styleUrls: ['./fbmessenger-share-btn.component.css'],
})
export class FBMessengerShareBtnComponent {
  @Input() url: string = '';
  @Input() appId?: string | undefined;
  @Input() redirectUri?: string | undefined;
  @Input() to?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  fbMessengerIcon = FBMessangerIcon;

  shareOnFBMessenger() {
    const generatedLink = `https://www.facebook.com/dialog/send${generateQueryParams(
      {
        link: this.url,
        redirect_uri: this.redirectUri || this.url,
        app_id: this.appId,
        to: this.to,
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
