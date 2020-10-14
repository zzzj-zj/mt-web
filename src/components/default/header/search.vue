<template>
  <div class="search">
    <el-row>
      <el-col :span="6">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" />
      </el-col>
      <el-col :span="10">
        <input
          v-model="value"
          @focus="focus"
          @blur="blur"
          @input="input"
          placeholder="搜索商家或地点（直接搜索'火'）"
        />
        <button>
          <span class="el-icon-search"></span>
        </button>
        <div class="new-search">
          <ul v-if="isFocus && value">
            <li v-for="(_item, _index) in searchList" :key="_index">
              <router-link :to="{ path: '/searchList/' + _item }">{{
                _item
              }}</router-link>
            </li>
          </ul>
          <dl class="clearfix" v-if="isFocus && !value">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotSearch" :key="index">
              <router-link :to="{ path: '/searchList/' + item }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <dl class="hot-search">
          <dd v-for="(__item, index) in hotSearch" :key="index">
            <router-link :to="{ path: '/searchList/' + __item }">{{
              __item
            }}</router-link>
          </dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import API from '../../../api/index'
import debounce from '../../../pulic'
export default {
  data () {
    return {
      value: '',
      isSearch: false,
      isFocus: false,
      searchList: []
    }
  },
  computed: {
    ...mapState({
      hotSearch: 'searchHotWords'
    })
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
        this.isSearch = false
      }, 200)
    },
    input () {
      let val = this.value
      let self = this
      console.log(debounce)
      // 防抖优化
      debounce(function () {
        console.log(222)
        API.search().then(res => {
        // 自己过滤搜索关键字，直接搜索‘火’
          self.searchList = res.data.data.list.filter((item, index) => {
            return item.indexOf(val) > -1
          })
        })
      }, 300)()
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@media screen and (min-width: 1190px) {
  .search {
    width: 1190px;
  }
}
@media screen and (max-width: 1190px) {
  .search {
    width: 960px;
  }
}
.search {
  margin: 0 auto;
  padding: 35px 0 80px;
  img {
    width: 126px;
    height: 46px;
  }
  .el-col-10 {
    height: 40px;
    border: 1px solid #13d1be;
    background: #fff;
    border-radius: 4px;
    position: relative;
    input {
      border: none;
      outline: none;
      line-height: 100%;
      box-sizing: border-box;
      display: inline-block !important;
      padding: 10px;
      font-size: 15px;
      height: 100%;
      background: 0 0;
      width: 84%;
      &::-webkit-input-placeholder {
        color: #999;
      }
    }
    button {
      outline: none;
      font-size: 18px;
      width: 16%;
      box-sizing: border-box;
      line-height: 100%;
      height: 100%;
      background: #13d1be;
      border: none;
      float: right;
      color: #fff;
      cursor: pointer;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      span {
        font-weight: bolder;
      }
    }
    .new-search {
      ul,
      dl {
        position: absolute;
        z-index: 4;
        left: 0;
        top: 40px;
        width: 84%;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #999;
        font-size: 12px;
        padding: 0 10px 15px;
        box-sizing: border-box;
      }
      dl {
        dt {
          padding: 10px 0;
        }
        dd {
          float: left;
          margin-right: 8px;
        }
      }
      ul {
        padding: 0;
        li {
          padding: 5px 10px;
          a {
            display: block;
          }
        }
        li:hover {
          cursor: pointer;
          background-color: #eee;
        }
        li:hover a {
          color: #31bbac;
        }
      }
    }
    .hot-search {
      position: relative;
      padding: 10px;
      z-index: 1;
      dd {
        float: left;
        margin-right: 8px;
      }
    }
  }
}
</style>
