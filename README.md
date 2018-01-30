# Blogging website made with HTML and CSS (Beta)
[spanit.xyz](http://spanit.xyz) is a blogging/portfolio site made with HTML and CSS.
jQuery is used to render few common parts of the site so that they update when user
post a new article.

### Features
- Design with SASS
- PWA features like app-shell caching
- Clean Design

### Make your own blogging site with these simple steps
1. Clone repo `https://github.com/a-pandey/spanit.xyz.git`
2. Download [Koala](http://koala-app.com/) to convert SASS to CSS(knowledge of SASS is not compulsory).
3. Launch Koala and add cloned repo to the list.
4. Use a local server like [Chrome Developer Server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) or just open `index.html` file from the repo's root in your browser.

### Things to do with your Blogging Site
- **Create a new post** : To create a post, simply copy the template directory in `/blog/` into `/blog/posts/`. Now, rename the newly copied template folder to your post's title eg. `creating-blog-site-for-the-first-time`. Now open `index.html` inside this directory and add your content. Once you are finished, add an entry in `/blog/article-entry.js`. That's it! Blog will update the article list in `https://yoursite.com/blog/`

- **Change theme color of your site** : Currently the theme color of the site is `#FCA12B` but you can change this by going in `/src/styles/scss/_lib.scss` and change the variable `$prime-color` to your own favorite color.

### LICENSE
[MIT](https://github.com/a-pandey/spanit.xyz/blob/master/LICENSE)