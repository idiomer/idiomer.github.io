var posts=["p/HexoBlog01/","p/HelloWorld/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };