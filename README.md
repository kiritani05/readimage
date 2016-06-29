read image
====

##サンプル
https://kiritani05.github.io/readimage/public/

##使用目的
画像を表示する前に読み込みを行います。
display noneのものや、hoverでまだ読み込み前のものなど。
もしくは指定の画像が全て読み込み終わってからイベントを発生したい場合などに使用してください。


## 使用方法
### スクリプトを読み込む
jqueryを使ってます

```
<script src="js/lib/jquery.js"></script>
<script src="js/lib/readimage.js"></script>
```
### オプションを指定
- script
```
var opts = {
  targetElement: $(".readimage"),
  targetImageUrl: [
    '../images/image04.jpg',
    '../images/image05.jpg',
    '../images/image06.jpg'
  ],
  callback: function(){
    $(".alert").fadeIn(1,function(){
      $(this).fadeOut(2500);
    });
  }
}
new Readimage(opts);

```
- html
```
<ul>
  <li class="readimage"><img src="images/image01.jpg"></li>
  <li class="readimage"><img src="images/image02.jpg"></li>
  <li class="readimage"><img src="images/image03.jpg"></li>
</ul>
```
htmlにclass(readimage)を設定して指定&URLを直接指定の2通り使用できます。

#オプション
- targetElement
class追加した要素達です。

- targetImageUrl
直接urlを指定して読み込むリストです。

- callback
読み込み完了後のコールバック関数です。
