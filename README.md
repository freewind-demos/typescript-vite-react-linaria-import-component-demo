TypeScript Vite React "linaria" zero-css-runtime Demo
=================================

linaria可以在build阶段将css in js抽取出来变成单独的css文件，以达到若干好处。

对于不同的bundle工具，需要有对应的插件。比如在vite下需要`@wyw-in-js/vite`

使用vite开发模式时，会单独请求相应的css文件；build成最终文件时，会分别生成js/css文件，并在html文件中自动引用它们。

所以只要配置好工具，在通常使用下并不会与emotion有什么区别。我现在好奇的是，如果引入另一个由linaria build的react component，是否需要单独引入相应的css。晚点再写一个demo试试


```
npm install
npm run demo
```

It will open page on browser automatically.
