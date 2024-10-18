var posts=["p/HexoBlog02/","p/HexoBlog01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };