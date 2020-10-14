<template>
  <div class="catalog">
    <dl class="menu">
      <dt>全部分类</dt>
      <dd
        v-for="(item, i) in catalogs"
        :key="i"
        @mouseenter="showDes(item)"
        @mouseleave="hideDes(true)"
      >
        <i :class="['home-category-iconfont', 'hc-icon-' + item.type]"></i>
        <router-link :to="{ name: 'index' }">{{ item.name }}</router-link>
        <span class="nav-right-arrow"></span>
      </dd>
    </dl>

    <dl
      class="show-des"
      :style="{ display: menuEnter || desEnter ? 'block' : 'none' }"
      @mouseenter="showDes(false)"
      @mouseleave="hideDes(false)"
    >
      <div v-for="(_itm, _indx) in curCatalog" :key="_indx">
        <div>
          <dt>{{ _itm.title }}</dt>
          <dd>
            更多
            <span class="nav-right-arrow"></span>
          </dd>
        </div>
        <dd v-for="(_item, _index) in _itm.items" :key="_index">
          <router-link :to="{ name: 'index' }">{{ _item }}</router-link>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['catalogs', 'curCatalog'],
  data () {
    return {
      menuEnter: false,
      desEnter: false,
      cur: null
    }
  },
  methods: {
    showDes (item) {
      if (item) {
        this.$store.state.curCatalog = item.items
        this.menuEnter = true
      } else {
        this.desEnter = true
      }
    },
    hideDes (item) {
      if (item) {
        this.menuEnter = false
      } else {
        this.desEnter = false
      }
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.catalog {
  width: 240px;
  height: 100%;
  position: relative;
  margin-top: -50px;
  background: linear-gradient(
    -90deg,
    rgba(2, 181, 157, 0.85) 2%,
    rgba(22, 146, 183, 0.85) 100%
  );
  color: #fff;
  .menu {
    dt {
      font-size: 16px;
      font-weight: 400;
      padding: 0 10px;
      margin-left: 15px;
      padding: 20px 0;
    }
    dd {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      position: relative;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        & .home-category-iconfont::before {
          opacity: 1;
        }
      }
      i {
        margin-right: 5px;
      }
      a {
        color: #fff;
      }
      .nav-right-arrow {
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
  .show-des {
    position: absolute;
    left: 240px;
    top: 60px;
    z-index: 3;
    padding: 20px;
    background-color: #fff;
    width: 350px;
    height: 376px;
    > div {
      padding: 10px 0;
      > div {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        dt {
          font-size: 16px;
          color: #000;
          float: left;
          cursor: pointer;
        }
        dd {
          float: right;
          color: #999;
          cursor: pointer;
          .nav-right-arrow {
            border-color: #999;
          }
        }
      }
      > dd {
        padding: 10px 8px;
        display: inline-block;
      }
    }
  }
}
</style>
