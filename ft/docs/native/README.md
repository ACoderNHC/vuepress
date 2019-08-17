# js 调用原生方法

### 基本用法

```js
/**
 * 推荐先判断是否有native方法存在
 */
if (dsBridge.hasNativeMethod('abcTime.msgCloseWindow')) {
            dsBridge.call('abcTime.msgCloseWindow', null);
        }

```

## getUserInfo

获取用户信息

### 
```js
   var  userInfo = JSON.parse(dsBridge.call('abcTime.shopGetUserInfo', obj))
```
## shopAddOrderV2

调用原生下单或支付。带order_no即为支付

### 
```js
@param arg arg description
    let orderNo = dic["order_no"]  int
    let uid = dic["uid"]) string
    let payId = dic["pay_id"]) int
    let skuId = dic["sku_id"]) int
    let giftSkuId = dic["gift_sku_id"]) int
    let productType = dic["product_type"] int
 @param completionHandler completionHandler   json :  {code: 0-支付成功/1支付失败,msg:{"order_no": "", "errorMsg":""}}

 
   dsBridge.call('abcTime.shopAddOrderV2', obj)
```


## pageLoaded
弹窗告诉native设置标题栏菜单项目，每次弹窗页面的js记载立即调用


### 
```js
/**
 * 弹窗告诉native设置标题栏菜单项目，每次弹窗页面的js记载立即调用
 * @param 
 *  hasNativeBar //是否有顶栏
 * menuType:0 //标题栏菜单项目 0：默认没有
 */
     dsBridge.call('abcTime.pageLoaded', {
    hasNativeBar:false,
    menuType:0
  })
```


## courseLoaded
 课件图片等资源加载完毕调用----用于告诉原生课件资源已经加载完成了。
 obj 课件加载完毕回调事件 

### 
```js
   var  userInfo = JSON.parse(dsBridge.call('abcTime.shopGetUserInfo', obj))
```

## pageError
  上报错误接口

### 
```js
   /**
     * 上报错误接口
     * @param
     *  code: 错误码
     *  errMsg: 错误信息，用于App端显示给用户，为''空字符时不显示错误，只做错误上报
     *  msg: 错误的详细信息，可以是出错的文件、行号、堆栈等信息，以便定位问题
     */
    dsBridge.call('abcTime.pageError', {
        code: 1001,
        errMsg: '网络连接失败',
        msg: '详细错误信息'
    });
```
## clearWebViewCache
  清理缓存
 

### 
```js
   /**
       @param obj {"need_clear": true/false}
     */
    dsBridge.call('abcTime.need_clear', {"need_clear": true});
```

## startRecord
  开始录音
 

### 
```js
/**
 * 开始录音
 * @param data {"read_content":"ball","read_type":"sentence","tid":138,"timeout":8}
 * @param handler
 * @return
 */
startRecord(Object data, CompletionHandler handler)
{"read_content":"ball","read_type":"sentence","tid":138,"timeout":8}
```
## stopRecord
  停止录音
 

### 
```js
/**
 *
 * @param data  {"id":"1541671330606T"}
 * @param handler
 * @return
 */
stopRecord(Object data, CompletionHandler handler)
```

## cancelRecord
  终止录音
 

### 
```js
/**
 *
 * @param data  {"id":"1541671330606T"}
 * @param handler
 * @return
 */
cancelRecord(Object data, CompletionHandler handler)
```
## shareStudyReport
  学习报告分享数据


### 
```js
/**
 *
  *title
*description
*thumb
*webUrl
*type // type: 1-图片, 2-网页, 默认网页
*channel //channel:1 - 朋友圈  2- message， 默认dialog
*base64Img  这个是用来传截图的
 */
  dsBridge.call('abcTime.shareStudyReport', {
    title
    description
    thumb
    webUrl
    type // type: 1-图片, 2-网页, 默认网页
    channel //channel:1 - 朋友圈  2- message， 默认dialog
    base64Img  这个是用来传截图的
    });
```

