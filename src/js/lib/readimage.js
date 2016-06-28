export default class Readimage {
  constructor(opts) {
    this.targetElement = opts.targetElement; //ターゲットエレメント
    this.targetImageUrl = opts.targetImageUrl;
    this.ALLNUM = this.targetElement.length + this.targetImageUrl.length;
    this.CNT = 0 ;
    this.loadElemmentImage();
    this.loadUrlImage();
  }

  loadElemmentImage() {
    var _this = this;
    _this.targetElement.each(function(key, target) {
      var target_img = $(target).find("img")[0];
      _this.loadimage(target_img);
    });
  }

  loadUrlImage() {
    var _this = this;
    if(!this.targetImageUrl.length) return false;
    $.each(_this.targetImageUrl, function() {
      var target_img = $("<img>").attr("src",this)[0]
      _this.loadimage(target_img);
    });
  }

  loadimage(target_img) {
    var _this = this;
    target_img.orginSrc = target_img.src;
    target_img.src = "";
    $(target_img).bind("load", function() {
      _this.counter();
    });
    target_img.src = target_img.orginSrc;
  }

  counter() {
      this.CNT++;
      if (this.CNT >= this.ALLNUM) {
        console.log("読み込み完了");
      }
  }
}
