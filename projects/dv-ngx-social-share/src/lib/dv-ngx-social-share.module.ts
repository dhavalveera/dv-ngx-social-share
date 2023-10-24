import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailShareBtnComponent } from './email-share-btn/email-share-btn.component';
import { BufferShareBtnComponent } from './buffer-share-btn/buffer-share-btn.component';

@NgModule({
  declarations: [BufferShareBtnComponent, EmailShareBtnComponent],
  imports: [CommonModule],
  exports: [BufferShareBtnComponent, EmailShareBtnComponent],
})
export class DvNgxSocialShareModule {}
