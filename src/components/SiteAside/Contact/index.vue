<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github"></Icon>
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`" target="_blank">
        <div class="icon">
          <Icon type="mail"></Icon>
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        target="_blank"
      >
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="qq二维码" />
      </div>
    </li>
    <li>
      <a href="#">
        <div class="icon weixin">
          <Icon type="weixin"></Icon>
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="微信二维码" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/color.less";
.contact-container {
  color: @gray;
  padding: 20px;
  list-style: none;
  li {
    width: 100%;
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    padding: 5px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-items: center;
      color: @gray;
      .icon {
        width: 30px;
        font-size: 22px;
      }
      .weixin {
        font-size: 26px;
        text-indent: -3px;
      }
      span {
        font-size: 16px;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: 34px;
      background-color: @white;
      height: 150px;
      width: 150px;
      padding: 10px;
      border-radius: 5px;
      transform: scaleY(0);
      transition: 0.8s;
      transform-origin: center bottom;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
        width: 8px;
        height: 8px;
        background-color: @white;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>