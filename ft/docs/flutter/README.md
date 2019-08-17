# Flutter 大佬专用测试



#### 基本用法

```js
     dsBridge.register('getShareInfo', function () {
                    return {
                        title: "我和宝宝正在学习常青藤名校外教课程，好的课程值得推荐",
                        description: "3-6岁宝宝英语启蒙必备课程 ，超50万家庭验证，助力宝宝成长，快来一起学习吧！",
                        thumb:"https://courses.abctime-me.com/abcTime-h5/wechat/icon.png",
                        webUrl:webUrl,
                    }
                }) 
```

## getShareInfo

注册分享信息的函数

### 
```js
       dsBridge.register('getShareInfo', function () {
                    return {
                        title: "我和宝宝正在学习常青藤名校外教课程，好的课程值得推荐",
                        description: "3-6岁宝宝英语启蒙必备课程 ，超50万家庭验证，助力宝宝成长，快来一起学习吧！",
                        thumb:"https://courses.abctime-me.com/abcTime-h5/wechat/icon.png",
                        webUrl:webUrl,
                    }
                }) 
```



## courseLoaded
### 课件图片等资源加载完毕调用----用于告诉原生课件资源已经加载完成了。
### obj 课件加载完毕回调事件 

### 
```js
   var  userInfo = JSON.parse(dsBridge.call('abcTime.shopGetUserInfo', obj))
```

## courseLoaded
### 课件图片等资源加载完毕调用----用于告诉原生课件资源已经加载完成了。
### obj 课件加载完毕回调事件 

### 
```js
   var  userInfo = JSON.parse(dsBridge.call('abcTime.shopGetUserInfo', obj))
```


