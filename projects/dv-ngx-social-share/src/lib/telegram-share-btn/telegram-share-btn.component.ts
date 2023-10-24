import { Component, Input } from '@angular/core';

// Icon
import TelegramShareIcon from './telegram-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'telegram-share-btn',
  templateUrl: './telegram-share-btn.component.html',
  styleUrls: ['./telegram-share-btn.component.css'],
})
export class TelegramShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  telegramIcon = TelegramShareIcon;

  shareOnTelegram() {
    const generatedLink = `https://t.me/share/url${generateQueryParams({
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
