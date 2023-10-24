import { Component, Input } from '@angular/core';

// Icon
import LiveJournalShareIcon from './live-journal-icon';

// CONSTANTS
import { defaultImgConfig } from '../../constants';

// Utils
import {
  CustomWindow,
  generateQueryParams,
  getCenterPosition,
} from '../../utils';

@Component({
  selector: 'live-journal-share-btn',
  templateUrl: './live-journal-share-btn.component.html',
  styleUrls: ['./live-journal-share-btn.component.css'],
})
export class LiveJournalShareBtnComponent {
  @Input() url: string = '';
  @Input() title?: string | undefined;
  @Input() openInNewTab?: boolean = false;
  @Input() imgStyle?: { [klass: string]: any } = defaultImgConfig;

  liveJournalIcon = LiveJournalShareIcon;

  shareOnLiveJournal() {
    const generatedLink = `https://www.livejournal.com/update.bml${generateQueryParams(
      {
        subject: this.title,
        event: this.url,
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
