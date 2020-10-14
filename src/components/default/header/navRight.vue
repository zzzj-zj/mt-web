<template>
  <ul class="nav-right clearfix">
    <li
      v-for="(item, index) in navList"
      :key="index"
      :style="{ backgroundColor: item.subNav && item.subNav.show ? '#fff' : '' }"
      @mouseenter="showSub(item)"
      @mouseleave="hideSub(item)"
    >
      <router-link :to="{ name: 'index' }" :class="item.subNav ? 'has-sub' : ''">{{ item.navName }}</router-link>

      <div
        class="sub-list"
        v-if="item.subNav && index < navList.length - 1"
        :class="item.subNav.show ? 'show-sub' : ''"
      >
        <router-link
          v-for="(_item, _index) in item.subNav.subNavList"
          :key="_index"
          :to="{ name: 'index' }"
        >{{ _item }}</router-link>
      </div>

      <div
        class="last-sub-list"
        :class="item.subNav.show ? 'show-last-sub' : ''"
        v-if="item.subNav && index === navList.length - 1"
        :style="{ display: item.subNav.show ? '' : 'none' }"
      >
        <dl
          class="last-sub-list-item clearfix"
          v-for="(__item, __index) in item.subNav.subNavList"
          :key="__index"
        >
          <dt>{{ __item.type }}</dt>
          <template v-if="__index < item.subNav.subNavList.length - 1">
            <div v-for="(catalog, i) in __item.listArr" :key="i">
              <dd v-for="(content, _i) in catalog" :key="_i">
                <router-link :to="{ name: 'index' }">{{ content }}</router-link>
              </dd>
            </div>
          </template>

          <template v-else>
            <div v-for="(__catalog, __i) in __item.listArr" :key="__i">
              <dd v-for="(src, $i) in __catalog" :key="$i">
                <router-link :to="{ name: 'index' }">
                  <img :src="src">
                </router-link>
              </dd>
            </div>
          </template>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          navName: '我的美团',
          subNav: {
            show: false,
            subNavList: ['我的订单', '我的收藏', '抵用券', '账户设置']
          }
        },
        {
          navName: '手机APP'
        },
        {
          navName: '商家中心',
          subNav: {
            show: false,
            subNavList: [
              '登录商家中心',
              '美团智能收银',
              '我想合作',
              '手机免费开店',
              '餐饮代理商招募',
              '商家申请开票',
              '免费合作美团排队'
            ]
          }
        },
        {
          navName: '网站导航',
          subNav: {
            show: false,
            subNavList: [
              {
                type: '酒店旅游',
                listArr: [
                  ['国际机票', '经济型酒店', '公寓', '青年旅社', '农家院'],
                  ['火车票', '主题酒店', '豪华酒店', '度假酒店'],
                  ['榛果民宿', '商务酒店', '客栈', '别墅']
                ]
              },
              {
                type: '吃美食',
                listArr: [
                  ['烤鱼', '烧烤', '火锅'],
                  ['特色小吃', '自助餐', '代金券']
                ]
              },
              {
                type: '看电影',
                listArr: [
                  [
                    '热映电影',
                    '热门电影',
                    '热映电影口碑榜',
                    '最受期待电影',
                    '国内票房榜',
                    '北美票房榜',
                    '电影排行榜'
                  ]
                ]
              },
              {
                type: '手机应用',
                listArr: [
                  [
                    '//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png',
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
                    '//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png'
                  ],
                  [
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'
                  ]
                ]
              }
            ]
          }
        }
      ]
    }
  },
  methods: {
    showSub (item) {
      if (!item.subNav) return
      item.subNav.show = true
    },

    hideSub (item) {
      if (!item.subNav) return
      item.subNav.show = false
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.nav-right {
  float: right;
  li {
    float: left;
    margin: 0 7px;
    padding: 0 8px;
    position: relative;
    &:last-of-type {
      position: static;
    }
    .has-sub {
      cursor: auto;
    }
    .sub-list,
    .last-sub-list {
      position: absolute;
      background-color: #fff;
      z-index: 6;
      right: 0;
      top: 40px;
      padding: 0 8px 5px;
      display: none;
      flex-direction: column;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
    }
    .show-sub {
      display: flex;
      line-height: 2.6;
    }
    .show-last-sub {
      line-height: 2.6;
      left: 0;
      right: 7px;
      padding: 36px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .last-sub-list-item {
        text-align: center;
        dt {
          margin-bottom: 26px;
          font-size: 14px;
          color: #31bbac;
        }
        &:not(:last-of-type) {
          &:nth-of-type(2) {
            > div {
              &:not(:last-of-type) {
                margin-right: 60px;
              }
            }
          }
          > div {
            float: left;
            &:not(:last-of-type) {
              margin-right: 20px;
            }
          }
        }
        &:last-of-type {
          > div {
            display: flex;
            justify-content: center;
            dd:not(:last-of-type) {
              margin-right: 20px;
            }
            img {
              width: 60px;
              height: 60px;
            }
          }
        }
      }
    }
  }
}
</style>
