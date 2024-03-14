(function() {
  var mod = {
    has: function(value) {
      return typeof value !== "undefined" && value !== null && value !== "";
    },
    start: function(node, header) {
      node.setAttribute("display-posts-set", 1);
      mod.div = document.createElement("div");
      mod.div.setAttribute("id", "display-posts-news-ticker");
      mod.header = header;
      // add anywhere you want
      document.querySelector("#page_wrapper .top-headers-wrapper").appendChild(mod.div);
      var div = document.createElement("div");
      div.innerHTML = node.innerHTML;
      var messages = [];
      var nodes = div.querySelectorAll("ul li");
      for (var i=0; i<=nodes.length-1; i++) {
        var node = nodes[i];
        messages.push(node.innerHTML);
      }
      var ticker = Telex.widget("display-posts-news-ticker", {speed: 50, direction: "reverse", pauseOnHover: true}, messages);
    },
    check: function() {
      document.addEventListener("DOMContentLoaded", function() {
        var header = document.querySelector("body .top-headers-wrapper");
        if (mod.has(header) && mod.has(header.nextSibling)) {
          var node = document.querySelector("noscript#display-posts");
          if (mod.has(node) && !node.hasAttribute("display-posts-set")) mod.start(node, header);
        }
      });
    }
  };
  mod.check();
  return mod;
})();