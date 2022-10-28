<template>
  <view class="content">
    <view style="margin-top: 200px"></view>
    <van-row gutter="20">
      <van-col span="12">
        <van-button type="primary" block @click="getCookie"
          >点击获取cookie</van-button
        >
      </van-col>
      <van-col span="12">
        <van-button type="danger" block @click="clearCookie"
          >点击清空cookie</van-button
        >
      </van-col>
    </van-row>
  </view>
</template>

<script setup lang="ts">
const getCookie = () => {
  console.log("getCookie");
  uni.navigateTo({
    url: "../webview/index",
  });
};

const clearCookie = () => {
  try {
    uni.removeStorageSync("jd_cookie");
    uni.showToast({
      title: "清空cookie成功",
      duration: 2000,
    });
  } catch (e) {
    uni.showToast({
      title: "清空cookie失败",
      duration: 2000,
    });
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
