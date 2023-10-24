import { Component, Input } from '@angular/core';

// Icon
import VKShareIcon from './vk-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'vkshare-btn',
  templateUrl: './vkshare-btn.component.html',
  styleUrls: ['./vkshare-btn.component.css'],
})
export class VKShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() image?: string | undefined;
  @Input() noParse?: boolean = false;
  @Input() noVkLinks?: boolean = false;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  vkIcon = VKShareIcon;

  shareOnVK() {
    const generatedLink = `https://vk.com/share.php${generateQueryParams({
      url: this.url,
      title: this.title,
      image: this.image,
      noparse: this.noParse ? 1 : 0,
      no_vk_links: this.noVkLinks ? 1 : 0,
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
