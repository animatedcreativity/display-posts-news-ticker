# display-posts-news-ticker

WordPress plugin to display WordPress posts in a nice news ticker.

- display-posts plugin is required to be installed from here: https://wordpress.org/plugins/display-posts-shortcode/

- Telex JS newsticker is used from here (no need to download or install): https://wordpress.org/plugins/display-posts-shortcode/

Change `do_shortcode("[display-posts]")` in index.php if required.
Change `document.querySelector("#page_wrapper .top-headers-wrapper").appendChild(mod.div);` in script.js if required.