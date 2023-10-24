import { Component, Input } from '@angular/core';

// Icon
import GABShareIcon from './gab-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'gabshare-btn',
  templateUrl: './gabshare-btn.component.html',
  styleUrls: ['./gabshare-btn.component.css'],
})
export class GABShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  gabIcon = GABShareIcon;

  shareOnGab() {
    const generatedLink = `https://gab.com/compose${generateQueryParams({
      text: this.title,
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
