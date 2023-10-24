import { Component, Input } from '@angular/core';

// Icon
import TrelloShareIcon from './trello-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'trello-share-btn',
  templateUrl: './trello-share-btn.component.html',
  styleUrls: ['./trello-share-btn.component.css'],
})
export class TrelloShareBtnComponent {
  @Input() url: string = '';
  @Input() desc?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  trelloIcon = TrelloShareIcon;

  shareOnTrello() {
    const generatedLink = `https://trello.com/add-card${generateQueryParams({
      desc: this.desc,
      url: this.url,
      mode: 'popup',
    })}`;

    const windowConfig = {
      width: 600,
      height: 600,
      ...getCenterPosition(1200, 1200),
    };

    CustomWindow(generatedLink, windowConfig, this.openInNewTab);
  }
}
