var posts=["2024/08/05/hello-world/","2024/08/05/Hexo博客搭建01-github-pages托管和自定义域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };