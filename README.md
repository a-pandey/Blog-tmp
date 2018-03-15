# Blogging website made with HTML and CSS (Beta)
[spanit.xyz](http://spanit.xyz) is an experimental static site made using HTML, SASS and jQuery to host a portfolio & blog.

### Features
- Styled with SASS
- PWA features like app-shell caching

### To get started
1. Clone repo `https://github.com/a-pandey/spanit.xyz.git`
2. Download [Koala](http://koala-app.com/) to convert SASS to CSS(knowledge of SASS is not compulsory).
3. Launch Koala and add cloned repo to the list.
4. Use a local server like [Chrome Developer Server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) or just open `index.html` file from the repo's root in your browser.

### Things you can do for now
- **Create a new post** : To create a post, simply copy the template directory in `/blog/` into `/blog/posts/`. Now, rename the newly copied template folder to your post's title eg. `creating-blog-site-for-the-first-time`. Now open `index.html` inside this directory and add your content. Once you are finished, add an entry in `/blog/article-entry.js`. That's it! Blog will update the article list in `https://yoursite.com/blog/`

- **Change theme color of your site** : Currently the theme color of the site is `#FCA12B` but you can change this by going in `/src/styles/scss/_lib.scss` and change the variable `$prime-color` to your own favorite color.

### :heavy_exclamation_mark: Experimental project
This project was started with a motive to create a static blogging website, however this site is not a complete failure, you can actually use it to make your own blog but one biggest problem is that, it is quite difficult to create posts using HTML templates! Also, it is difficult to update the template on each blog post.

### LICENSE
[MIT](https://github.com/a-pandey/spanit.xyz/blob/master/LICENSE)