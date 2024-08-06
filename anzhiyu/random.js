var posts=["p/HelloWorld/","p/HexoBlog01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };