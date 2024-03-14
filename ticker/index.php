<?php
  add_action('before', function() {
    echo '<noscript id="display-posts">' . do_shortcode("[display-posts]") . '</noscript>';
  });
  add_action('wp_head', function() {
?>

<link rel="stylesheet" href="/wp-content/plugins/display-posts-news-ticker/ticker/styles.css" />
<script type="text/javascript" src="https://unpkg.com/@sjaakp/telex/dist/telex.js"></script>
<script type="text/javascript" src="/wp-content/plugins/display-posts-news-ticker/ticker/script.js"></script>

<?php
  });
?>