<template>
  <div class="index">
    <div class="inner clearfix">
      <div class="wrap clearfix">
        <div class="col">
          <mt-catalog :catalogs="$store.state.catalogs" :curCatalog="$store.state.curCatalog"></mt-catalog>
        </div>

        <div class="col clearfix">
          <el-row class="clearfix">
            <mt-mid-catalog></mt-mid-catalog>
          </el-row>
          <el-row class="clearfix">
            <div class="col">
              <mt-mid-left></mt-mid-left>
            </div>
            <div class="col hide">
              <mt-mid-right></mt-mid-right>
            </div>
          </el-row>
        </div>

        <div class="col">
          <mt-user></mt-user>
        </div>
      </div>

      <el-row class="first">
        <mt-recommend :cardObj="$store.state.cardObj"></mt-recommend>
      </el-row>

      <el-row>
        <mt-recommend :desObj="desObj" :cardObj="$store.state.cardObj"></mt-recommend>
      </el-row>
    </div>
  </div>
</template>

<script>
import mtCatalog from '../../components/default/index/catalog'
import mtMidCatalog from '../../components/default/index/midCatalog'
import mtMidLeft from '../../components/default/index/midLeft'
import mtMidRight from '../../components/default/index/midRight'
import mtUser from '../../components/default/index/user'
import mtRecommend from '../../components/default/index/recommend'
import API from '../../api/index'

export default {
  data () {
    return {
      desObj: {
        cur: 'starting',
        class: 'maoyan',
        title: '猫眼电影',
        items: [
          {
            type: 'starting',
            title: '正在热映'
          },
          {
            type: 'will',
            title: '即将上映'
          }
        ]
      }
    }
  },
  created () {
    const { user, city } = this.$route.params
    user && (this.$store.state.user = user)
    city && (this.$store.state.curCity = city)
    API.nav().then(res => {
      this.$store.state.catalogs = res.data.data
      this.$store.state.curCatalog = res.data.data[0]
    })

    API.resultsByKeywords().then(res => {
      this.$store.state.cardObj = res.data.data
    })
  },
  components: {
    mtCatalog,
    mtMidCatalog,
    mtMidLeft,
    mtMidRight,
    mtUser,
    mtRecommend
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.index {
  @media screen and (min-width: 1190px) {
    .inner {
      width: 1200px;
    }
  }
  @media screen and (max-width: 1190px) {
    .inner {
      width: 1050px;
      .col:nth-of-type(2) {
        margin-right: 0 !important;
      }
      .hide {
        display: none;
      }
    }
  }
  .inner {
    margin: 0 auto;
    .wrap {
      height: 475px;
      > .col {
        height: 100%;
      }
      .col {
        float: left;
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        &:nth-of-type(2) {
          position: relative;
          .el-row:first-of-type {
            position: absolute;
            left: 0;
            top: -30px;
          }
        }
      }
    }
    > .el-row:not(.first) {
      margin-top: 50px;
    }
  }
}
</style>
