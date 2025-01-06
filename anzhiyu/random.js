var posts=["p/HexoBlog02/","p/Hive和Spark常用代码片段/","p/Superset数据看板平台搭建/","p/HexoBlog01/","p/VSCode常用插件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };