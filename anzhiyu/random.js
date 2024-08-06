var posts=["p/HexoBlog01/","p/HelloWorld/","p/HexoBlog02/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };