var posts=["p/HexoBlog02/","p/HexoBlog01/","p/HelloWorld/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };