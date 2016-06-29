read image
====

##サンプル
https://kiritani05.github.io/readimage/public/

## 使用方法
- スクリプトを読み込む
jqueryを使ってます

```
<script src="js/lib/jquery.js"></script>
<script src="js/lib/readimage.js"></script>
```
- オプションを指定
```
var opts = {
  targetElement: $(".readimage"),
  targetImageUrl: [
    '../images/image04.jpg',
    '../images/image05.jpg',
    '../images/image06.jpg'
  ]
}
new Readimage(opts);

```
- 以上
