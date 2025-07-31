<script setup lang="ts">

</script>

<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i>在线服务</dd>
          <dd><i class="iconfont icon-question"></i>问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i>公众号</dd>
          <dd><i class="iconfont icon-weibo"></i>微博</dd>
        </dl>
        <dl>
          <dt>下载AP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg"/></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a herf="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>热线服务</dt>
          <dd class="hotline">123-123-123 <small>周一至周五 8:00~18:00</small></dd>
        </dl>
      </div>
      <!-- 其他 -->
      <div class="extra">
        <div class="container">
          <!-- 口号 -->
          <div class="slogan">
            <a href="javascript:;">
              <i class="iconfont icon-footer01"></i>
              <span>价格亲民</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer02"></i>
              <span>物流快捷</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer03"></i>
              <span>品质新鲜</span>
            </a>
          </div>
          <!-- 版权信息 -->
          <div class="copyright">
            <p>
              <a href="javascript:;">关于我们</a>
              <a href="javascript:;">帮助中心</a>
              <a href="javascript:;">售后服务</a>
              <a href="javascript:;">配送与验收</a>
              <a href="javascript:;">商务合作</a>
              <a href="javascript:;">搜索推荐</a>
              <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight @ 小兔鲜</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;

      &:first-child {
        padding-left: 0
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }

      dt {
        line-height: 1;
        font-size: 18px;
      }

      dd {
        margin: 36px 12px 0 0;
        float: left;
        width: 92px;
        height: 92px;
        padding-top: 10px;
        border: 1px solid #ededed;

        .iconfont {
          font-size: 36px;
          display: block;
          color: #666;
        }

        &:hover {
          .iconfont {
            color: $xtxColor;
          }
        }

        &:last-child {
          margin-right: 0;
        }

        .qrcode {
          width: 92px;
          height: 92px;
          padding: 7px;
          border: 1px solid #ededed;
        }

        .download {
          padding-top: 5px;
          font-size: 14px;
          width: auto;
          height: auto;
          border: none;

          span {
            display: block;
          }

          a {
            display: block;
            line-height: 1;
            padding: 10px 25px;
            margin-top: 5px;
            color: #fff;
            border-radius: 2px;
            background: $xtxColor;
          }
        }

        .hotline {
          padding-top:20px;
          // TODO

        }
      }
    }
  }
}

</style>
