var posts=["p/HexoBlog01/","p/HexoBlog02/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };