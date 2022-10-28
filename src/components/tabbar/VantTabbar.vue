<script setup lang="ts">
import {reactive} from "vue";

defineProps({
  activeBar: String
})

const tabbarItemList = reactive([
  {
    name: 'home',
    normalIcon: '/static/tabbar/home-normal.png',
    activeIcon: '/static/tabbar/home-acitve.png',
    tabbarName: '首页',
    path: '/pages/home/index'
  },
  {
    name: 'today',
    normalIcon: '/static/tabbar/today-normal.png',
    activeIcon: '/static/tabbar/today-active.png',
    tabbarName: '今日必抢',
    path: '/pages/today/index'
  },
  {
    name: 'community',
    normalIcon: '/static/tabbar/community-normal.png',
    activeIcon: '/static/tabbar/community-active.png',
    tabbarName: '社区',
    path: '/pages/community/index'
  },
  {
    name: 'discount',
    normalIcon: '/static/tabbar/discount-normal.png',
    activeIcon: '/static/tabbar/discount-active.png',
    tabbarName: '找优惠',
    path: '/pages/discount/index'
  },
  {
    name: 'mine',
    normalIcon: '/static/tabbar/mine-normal.png',
    activeIcon: '/static/tabbar/mine-active.png',
    tabbarName: '我的',
    path: '/pages/mine/index'
  }
])
const onChangeTabbar = (event: any) => {
  const current = event.detail
  uni.switchTab({
    url: `/pages/${current}/index`
  })
}
</script>

<template>
  <view>
    {{activeBar}}
    <vant-tabbar :active="activeBar" @change="onChangeTabbar">
<!--      <van-tabbar-item v-for="(item, index) in tabbarItemList" :key="index" :name="item.name">-->
<!--        <image slot="icon" :src="item.normalIcon" mode="contain"></image>-->
<!--        <image slot="icon-active" :src="item.activeIcon" mode="contain"></image>-->
<!--        {{ item.tabbarName }}-->
<!--      </van-tabbar-item>-->
      <van-tabbar-item name="home">
        <image slot="icon" src="https://img.yzcdn.cn/vant/user-inactive.png" mode="contain"></image>
        <image slot="icon-active" src="https://img.yzcdn.cn/vant/user-active.png" mode="contain"></image>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
    </vant-tabbar>
  </view>
</template>

<style scoped>

</style>