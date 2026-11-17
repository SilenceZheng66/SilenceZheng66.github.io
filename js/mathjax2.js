/* 兼容现有 kramed 输出的 MathJax 2 渲染（math/tex script 标签 + $ 分隔符）。
   Fluid 内置 MathJax 3 已在主题配置中关闭，由此脚本注入 MathJax 2。 */
(function () {
  if (window.MathJax) return;

  var config = document.createElement('script');
  config.type = 'text/x-mathjax-config';
  config.text = [
    'MathJax.Hub.Config({',
    '  tex2jax: {',
    "    inlineMath: [ ['$','$'], ['\\\\(','\\\\)'] ],",
    '    processEscapes: true,',
    "    skipTags: ['script','noscript','style','textarea','pre','code']",
    '  }',
    '});'
  ].join('\n');
  document.head.appendChild(config);

  var mj = document.createElement('script');
  mj.src = 'https://lib.baomitu.com/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  mj.async = true;
  document.head.appendChild(mj);
})();
