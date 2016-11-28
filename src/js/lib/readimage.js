export default class Readimage {
  constructor(opts) {
    this.targetElement = opts.targetElement;
    this.targetImageUrl = opts.targetImageUrl;
    var elNum = this.targetElement ? this.targetElement.length : 0;
    var imgNum = this.targetImageUrl ? this.targetImageUrl.length : 0;
    this.ALLNUM = elNum + imgNum;
    this.CNT = 0 ;
    this.loadElemmentImage();
    this.loadUrlImage();
    this.callback = opts.callback;
  }

  loadElemmentImage() {
    var _this = this;
    if(!this.targetElement){ return true; }
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
        this.callback();
      }
  }
}
