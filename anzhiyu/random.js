var posts=["p/HexoBlog01/","p/HexoBlog02/","p/Hive和Spark常用代码片段/","p/Python与Jupyter的常用代码片段/","p/跨平台框架React Native(Expo)学习笔记/","p/VSCode常用插件/","p/Superset数据看板平台搭建/","p/docker教程/","p/免费翻译API/","p/用CNCLIP模型做内容理解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };