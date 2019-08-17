# js 注册的方法 提供给native调用

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



## stopRecord

返回最终的分数

### 
```js
       dsBridge.register('stopRecord', function () {
                    return {"result":1,"score":97,"code":1,"tid":138}
                }) 
```

## realSendScore

返回实时分数

### 
```js
       dsBridge.register('realSendScore', function () {
                    return {"result":0,"score":1,"tid":138}
                }) 
```