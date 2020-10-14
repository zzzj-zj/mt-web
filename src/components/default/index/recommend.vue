<template>
  <div class="recommend">
    <el-row :class="desObj.class">
      <dl>
        <dt>{{ desObj.title }}</dt>
        <dd
          v-for="(item, i) in desObj.items"
          :key="i"
          :class="item.type === desObj.cur ? 'active' : ''"
          @mouseenter="changeToActive(item.type)"
        >{{ item.title }}</dd>
      </dl>
    </el-row>

    <el-row class="card-wrapper">
      <el-card
        shadow="hover"
        :body-style="{ padding: 0 }"
        v-for="(card, index) in cardObj[desObj.cur]"
        :key="index"
      >
        <router-link :to="{ name: 'index' }">
          <img :src="card.image">
          <h3>{{ card.title }}</h3>
          <p>{{ card.subTitle }}</p>
          <p class="clearfix">
            <span class="price" v-if="card.price">
              ￥
              <span class="money">{{ card.price }}</span>
            </span>
            <span class="old-price" v-if="card.oldPrice">{{ card.oldPrice }}</span>
            <span class="market-info">{{ card.address }}</span>
          </p>
        </router-link>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    desObj: {
      type: Object,
      default () {
        return {
          class: 'gediao',
          title: '有格调',
          cur: 'all',
          items: [
            {
              type: 'all',
              title: '全部'
            },
            {
              type: 'food',
              title: '约会聚餐'
            },
            {
              type: 'spa',
              title: '丽人SPA'
            }
          ]
        }
      }
    },
    cardObj: {
      type: Object,
      default () {
        return {
          all: [
            {
              image:
                'https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '木北造型',
              address: '崇文门新世界店',
              subTitle: '木北造型（崇文门新世界店）',
              price: 398
            },
            {
              image:
                'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c',
              title: 'COSTA COFFEE（东方新天地店）',
              address: '东方新天地',
              subTitle: '玫瑰黑巧茶拿铁1份',
              price: 11
            },
            {
              image:
                'http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c',
              title: '祈年八号中餐厅',
              address: '崇文门新世界',
              subTitle: '单人点心自助午餐',
              price: 98
            }
          ],
          food: [
            {
              image:
                'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c',
              title: 'COSTA COFFEE（东方新天地店）',
              address: '东方新天地',
              subTitle: '玫瑰黑巧茶拿铁1份',
              price: 11
            },
            {
              image:
                'http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c',
              title: '祈年八号中餐厅',
              address: '崇文门新世界',
              subTitle: '单人点心自助午餐',
              price: 98
            }
          ],
          spa: [
            {
              image:
                'https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '木北造型',
              address: '崇文门新世界店',
              subTitle: '木北造型（崇文门新世界店）',
              price: 398
            }
          ],
          movie: [],
          travel: []
        }
      }
    }
  },
  methods: {
    changeToActive (type) {
      this.desObj.cur = type
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@media screen and (min-width: 1190px) {
  .recommend {
    width: 1200px;
  }
}
@media screen and (max-width: 1190px) {
  .recommend {
    width: 1050px;
  }
}
.recommend {
  margin: 0 auto;
  .el-row:first-of-type {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    &.gediao {
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(
        to right,
        rgb(194, 176, 142) 3%,
        rgb(190, 164, 116) 100%
      );
    }
    &.maoyan {
      background: linear-gradient(
          to right,
          rgb(250, 60, 104) 2%,
          rgb(254, 70, 77) 97%
        )
        rgb(250, 60, 104);
    }
    dl {
      width: 100%;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
      dt {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
        font-family: MFShangHei-Regular !important;
      }
      * {
        float: left;
        padding: 0 5px;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
      }
      dd {
        position: relative;
      }
      dd.active::after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  .card-wrapper {
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    .el-card {
      width: 33.33%;
      border: none;
      padding: 10px;
      box-sizing: border-box;
      &:hover {
        background: #f4f4f4;
        transition: background-color 0.5s;
        border-radius: 4px;
        box-shadow: none;
      }
      a {
        display: inline-block;
        img {
          width: 100%;
          height: 208px;
        }
        h3 {
          font-size: 16px;
          color: #222;
          font-weight: 500;
        }
        h3,
        p:not(:last-of-type) {
          padding: 5px 0;
        }
        p:not(:last-of-type) {
          margin-bottom: 5px;
        }
        p {
          color: #999;
          height: 20px;
          line-height: 20px;
          .price {
            color: #be9e4d;
            .money {
              font-size: 22px;
            }
          }
          .old-price {
            text-decoration: line-through;
          }
          .market-info {
            float: right;
          }
        }
      }
    }
  }
}
</style>
