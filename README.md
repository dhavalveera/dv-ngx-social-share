<!-- prettier-ignore-start -->
# dv-ngx-social-share

---

Social media share buttons for your next Angular apps.

# 🎁 Features

---

- Zero dependencies
- Share buttons for your Angular app
  - Buffer
  - Digg
  - Email
  - Facebook Messanger
  - Facebook
  - FlipboardShare
  - GAB
  - HackerNews
  - Instapaper
  - Line
  - LinkedIn
  - LiveJournal
  - Pinterest
  - Pocket
  - Reddit
  - Refind
  - Skype
  - Telegram
  - Trello
  - Tumblr
  - Twitter
  - VK
  - WhatsApp
  - Yummly

# Alternative
---

for Reactjs, Nextjs, Click [here](https://www.npmjs.com/package/dv-social-share)

---

# ⚙ Install

---

dv-ngx-social-share is available on npm. It can be installed with the either following command:

```cmd
npm install dv-ngx-social-share --save
```

or

```cmd
yarn add dv-ngx-social-share --save
```

# 💡 Usage

---

`app.module.ts`
```ts
// other import lines
import { DvNgxSocialShareModule } from 'dv-ngx-social-share';

@NgModule({
  declarations: [AppComponent],
  imports: [
            // other imports,
            DvNgxSocialShareModule // => you need to add this line in order to use Social Share Buttons
        ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```


## BufferShare

#### 👨‍💻 Code


```html
<buffer-share-btn url="https://google.com" [openInNewTab]="true" [imgStyle]="{ width: '64px' }"></buffer-share-btn>
```

#### 📖 BufferShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | the Title to be shared.                                                                                                       | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |

---

## DiggShare

#### 👨‍💻 Code


```html
<digg-share-btn url="https://google.com"></digg-share-btn>
```

#### 📖 DiggShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | the Title to be shared.                                                                                                       | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |


---

## EmailShare

#### 👨‍💻 Code


```html
<email-share-btn url="https://google.com" [openInNewTab]="true" [imgStyle]="{ width: '64px' }"
  ></email-share-btn>
```

#### 📖 EmailShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| subject      | string  |         | A subject to be shared.                                                                                                       | ❌       |
| body         | string  |         | Body to be shared.                                                                                                            | ❌       |
| separator    | string  | ::      |                                                                                                                               | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## FBMessangerShare

#### 👨‍💻 Code


```html
<fbmessenger-share-btn url="https://google.com"></fbmessenger-share-btn>
```

#### 📖 FBMessangerShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| appId        | string  |         | Facebook application id.                                                                                                      | ✅       |
| redirectUri  | string  |         | The URL to redirect to after sharing (default: the shared url).                                                               | ❌       |
| to           | string  |         | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients.                   | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## FBShare

#### 👨‍💻 Code


```html
<fbshare-btn url="https://dv-ngx-social-share.vercel.app" quote="dv-ngx-social-share is a social share buttons for your Angular apps." hashTag="#dvsocialshare"></fbshare-btn>
```

#### 📖 FBShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| quote        | string  |         | A quote to be shared.                                                                                                         | ❌       |
| hashTag      | string  |         | Hashtag to be shared.                                                                                                         | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## FlipboardShare

#### 👨‍💻 Code


```html
<flipboard-share-btn url="https://google.com"></flipboard-share-btn>
```

#### 📖 FlipboardShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | the Title to be shared.                                                                                                       | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## GABShare

#### 👨‍💻 Code


```html
<gabshare-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></gabshare-btn>
```

#### 📖 GABShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## HackerNewsShare

#### 👨‍💻 Code


```html
<hacker-news-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></hacker-news-share-btn>
```

#### 📖 HackerNewsShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## InstapaperShare

#### 👨‍💻 Code


```html
<insta-paper-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></insta-paper-share-btn>
```

#### 📖 InstapaperShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| description  | string  |         | Description to be shared.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## LineShare

#### 👨‍💻 Code


```html
<line-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></line-share-btn>
```

#### 📖 LineShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## LinkedInShare

#### 👨‍💻 Code


```html
<linked-in-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></linked-in-share-btn>
```

#### 📖 LinkedInShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| summary      | string  |         | Summary of the shared page.                                                                                                   | ❌       |
| source       | string  |         | Source of the shared page.                                                                                                    | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## LiveJournalShare

#### 👨‍💻 Code


```html
<live-journal-share-btn url="https://dv-ngx-social-share.vercel.app" title="Dhaval Vira"></live-journal-share-btn>
```

#### 📖 LiveJournalShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the page to be shared.                                                                                             | ✅       |
| title        | string  |         | the Title to be shared.                                                                                                       | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## PinboardShare

#### 👨‍💻 Code


```html
<pinboard-share-btn url="https://dv-ngx-social-share.vercel.app" title="Dhaval Vira" descriptin="descriptino to be shared"></pinboard-share-btn>
```

#### 📖 PinboardShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| title        | string  |         | The Title of the Page to be shared.                                                                                           | ✅       |
| description  | string  |         | The description to be shared.                                                                                                 | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## PinterestShare

#### 👨‍💻 Code


```html
<pinterest-share-btn url="https://dv-ngx-social-share.vercel.app" media="https://dv-ngx-social-share.vercel.app/image.svg"></pinterest-share-btn>
```

#### 📖 PinterestShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| media        | string  |         | The image URL that will be pinned.                                                                                            | ✅       |
| description  | string  |         | The description of the shared media.                                                                                          | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## PocketShare

#### 👨‍💻 Code


```html
<pocket-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></pocket-share-btn>
```

#### 📖 PocketShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## RedditShare

#### 👨‍💻 Code


```html
<reddit-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></reddit-share-btn>
```

#### 📖 RedditShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## RefindShare

#### 👨‍💻 Code


```html
<refind-share-btn url="https://dv-ngx-social-share.vercel.app"></refind-share-btn>
```

#### 📖 RefindShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## SkypeShare

#### 👨‍💻 Code


```html
<skype-share-btn url="https://dv-ngx-social-share.vercel.app" title='Dhaval"></skype-share-btn>
```

#### 📖 SkypeShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| title | string |    | The title to be shared.                                                                              | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## TelegramShare

#### 👨‍💻 Code


```html
<telegram-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></telegram-share-btn>
```

#### 📖 TelegramShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| title        | string  |         | Title of the shared page.                                                                                                     | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## TrelloShare

#### 👨‍💻 Code


```html
<trello-share-btn url="https://dv-ngx-social-share.vercel.app" desc="dv-ngx-social-share is a social share buttons for your Angular apps."></trello-share-btn>
```

#### 📖 TrelloShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the to be page.                                                                                                    | ✅       |
| desc         | string  |         | Description of the shared page.                                                                                               | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## TumblrShare

#### 👨‍💻 Code


```html
<tumblr-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></tumblr-share-btn>
```

#### 📖 TumblrShareBtn Props

| Props        | Type    | Default           | Description                                                                                                                   | Required |
| :----------- | :------ | :---------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |                   | The URL of the shared page to be shared.                                                                                      | ✅       |
| title        | string  |                   | The title of the shared page.                                                                                                 | ❌       |
| tags         | Array   |                   |                                                                                                                               | ❌       |
| caption      | string  |                   | The description of the shared page.                                                                                           | ❌       |
| posttype     | string  | <code>link</code> |                                                                                                                               | ❌       |
| openInNewTab | boolean | false             | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## TwitterShare

#### 👨‍💻 Code


```html
<twitter-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></twitter-share-btn>
```

#### 📖 TwitterShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared page to be shared.                                                                                      | ✅       |
| title        | string  |         | The title of the shared page.                                                                                                 | ❌       |
| via          | string  |         |                                                                                                                               | ❌       |
| hashtags     | array   |         |                                                                                                                               | ❌       |
| related      | array   |         |                                                                                                                               | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## VKShare

#### 👨‍💻 Code


```html
<vkshare-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></vkshare-btn>
```

#### 📖 VKShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared pageto be shared.                                                                                       | ✅       |
| title        | string  |         | The title of the shared page.                                                                                                 | ❌       |
| image        | string  |         | An absolute link to the image that will be shared.                                                                            | ❌       |
| noParse      | boolean |         | If true is passed, VK will not retrieve URL information.                                                                      | ❌       |
| noVkLinks    | boolean |         | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices.                  | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## WhatsAppShare

#### 👨‍💻 Code


```html
<whats-app-share-btn url="https://dv-ngx-social-share.vercel.app" title="dv-ngx-social-share is a social share buttons for your Angular apps."></whats-app-share-btn>
```

#### 📖 WhatsAppShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared page to be shared.                                                                                      | ✅       |
| title        | string  |         | The title of the shared page.                                                                                                 | ❌       |
| separator    | string  |         |                                                                                                                               | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## YummlyShare

#### 👨‍💻 Code


```html
<yummly-share-btn 
    url="https://dv-ngx-social-share.vercel.app" 
    title="dv-ngx-social-share is a social share buttons for your Angular apps." 
    image='url-of-image' 
></yummly-share-btn>
```

#### 📖 YummlyShareBtn Props

| Props        | Type    | Default | Description                                                                                                                   | Required |
| :----------- | :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| url          | string  |         | The URL of the shared page to be shared.                                                                                      | ✅       |
| title        | string  |         | The title of the shared page.                                                                                                 | ❌       |
| image    | string  |         | The Link of the Image to be shared along.                                                                                                                           | ❌       |
| openInNewTab | boolean | false   | Open share window in a new tab if set to `true`.                                                                              | ❌       |
| imgStyle    | object  |         | Angular [ngStyle] way for stying for the Image | ❌       |
---

## 💖 Wrap Up

If you think any of the `dv-ngx-social-share` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this
repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `dv-ngx-social-share` by forking and sending a pull request!

Your contributions are welcome.

How to contribute:

- Fork the `dv-ngx-social-share` Repo
- Create a New Branch from `main`
- Push the Code in your branc and
- Open pull request with improvements & more information on it
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- prettier-ignore-end -->
