<style lang="less" scoped>
  .feed-container {
    padding: 16px 0 ;
    .feed-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      padding: 4px 0;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.1);
        -webkit-transform: scale(1, 0.5);
        -ms-transform: scale(1, 0.5);
        -o-transform: scale(1, 0.5);
        transform: scale(1, 0.5);
      }
      .feed-count {
        padding: 0 16px;
      }
      .top-search {
        padding: 0 16px;
        display: flex;
        align-items: center;
        a {
          display: block;
          width: 25px;
          height: 25px;
          background:url('./../images/search-icon@3x.png') no-repeat;
          background-size: 25px 25px;
          text-indent: -9999px;
          overflow: hidden; 
        }
      }
      h2 {
        font-size: 20px;
        color: #2d2d2d;
      }
      p {
        color: #909196;
        font-size: 13px;
      }
    }

    .select-tabs-wapper {
      height: 55px;
      padding: 13px 16px;
      position: relative;
      margin: 0 0 16px;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.1);
        -webkit-transform: scale(1, 0.5);
        -ms-transform: scale(1, 0.5);
        -o-transform: scale(1, 0.5);
        transform: scale(1, 0.5);
      }
      .select-tabs {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        height: 28px;
        line-height: 26px;
        border-radius: 3px;
        border:#efefef 1px solid;
        .select-tab-item {
          width: 33.333%;
          text-align: center;
          border-right: #efefef 1px solid;
          font-size: 14px;
          &:last-child {
            border-right: none;
          }
          &.active {
            color: #fff;
            border:#2d2d2d 1px solid;
            background: #2d2d2d;
            border-radius: 3px;
          }
        }
      }
    }
    .feed-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 16px;
      box-sizing: content-box;
      .feed-item {
        width: 48%;
        margin: 0 0 16px;
        line-height: 1.5;
        .feed-item-brand {
          font-size: 15px;
          color: #2d2d2d;
        }
        .feed-item-title {
          font-size: 15px;
          color: #2d2d2d;
        }
        .feed-item-image {
          background: #eee;   
          border-radius: 4px;
          border: #ddd 1px solid;
          margin: 0 0 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }

    .feed-item-discount {
      font-size: 10px;
      color: #fff;
      background: #2f2f2f;
      padding: 2px 5px;
      border-radius: 4px;
      margin: 0 5px 0 0;
    }
    .feed-item-actually-price {
      color: #ff5a00;
      font-size: 15px;
      margin: 0 5px 0 0;
      padding: 2px 0;
    }
    .feed-item-original-price {
      color: #8C8C8C;
      text-decoration: line-through;
      font-size: 15px;
      margin: 0 5px 0 0;
      padding: 2px 0;
    }
    
    .collapse-icon {
      background: url('./../images/arrow-up@3x.png') no-repeat;
      background-size: 25px 25px; 
      width: 25px;
      height: 25px;
      &.active {
        background: url('./../images/arrow-down@3x.png') no-repeat;
        background-size: 25px 25px; 
      }
    }

    .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {
      height: 45px;
      line-height: 45px;
      padding-left: 0;
    }
    .ivu-collapse-content>.ivu-collapse-content-box {
      padding-bottom: 0;  
    }
    .ivu-collapse-content {
      padding: 0;
    }
    .ivu-checkbox {
      margin: 0 6px 0 0;
    }
    .ivu-checkbox-wrapper {
      font-size: 13px;
      color: #000;
    }
    .ivu-checkbox-large {
      .ivu-checkbox-checked {
        .ivu-checkbox-inner {
          border-color: #596cfb;
          background-color: #596cfb;
          &:after {
            width: 6px;
            height: 9px;
            top: 6px;
            left: 8px;
          }
        }
      }
      .ivu-checkbox-inner {
        width: 24px;
        height: 24px;
        border-color: #efeff3;
        background-color: #efeff3;
        border-radius: 4px; 
      }
    }

    .ivu-checkbox-focus {
      box-shadow: 0 0 0 rgba(0,0,0,0)
    }

    .feed-category {
      padding: 0 16px;
      .collapse-content {
        max-height: 200px;
        overflow-y: scroll;
        p {
          margin:  0 0 10px 0;
        }
      }
    }

        
    .collapse-title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      .collapse-title {
        font-size: 15px;
        color: #2d2d2d;
        font-weight: bolder;
        &.active {
          font-weight: normal;
        }
      }
      .collapse-icon {

      }
    }

    .category-button {
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      padding: 16px;
      text-align: center;
      z-index: 1;
      background: #fff;
      .clear-types {
        color: #ff3b30;
        font-size: 15px;
      }
      .ivu-btn-primary {
        background-color: #596cfb;
        border-color: #596cfb;
        height: 43px;
        font-size: 15px;
        margin: 0 0 16px;
      }
    }

  }

</style>

<template>

  <div class="feed-container">
    <header class="feed-header">
      <div class="feed-count">
        <h2>最新3折以下</h2>
        <p>100+ 单品</p>
      </div>
      <div class="top-search">
        <a href="">搜索</a>
      </div>
    </header>
    <div class="select-tabs-wapper">
      <div class="select-tabs">
        <div @click="onSelect('category')" class="select-tab-item" :class="{active:selectType === 'category'}">分类</div>
        <div @click="onSelect('sort')" class="select-tab-item" :class="{active:selectType === 'sort'}">排序</div>
        <div @click="onSelect('filter')" class="select-tab-item" :class="{active:selectType === 'filter'}">筛选</div>
      </div>
    </div>
    <div v-if="selectType === ''" class="feed-list">
      <div  v-bind:key="key" v-for="(item, key) in list"  class="feed-item">
        <div class="feed-item-image">
          <img src="./../images/test-image.png" alt="" />
          <i></i>
        </div>
        <p class="feed-item-brand">Marc Jacobs</p>
        <h4 class="feed-item-title">高跟限量版 Ninja high top sneackers </h4>
        <p>
          <span class="feed-item-discount">3折</span>
          <span class="feed-item-actually-price">¥239</span>
          <span class="feed-item-original-price">¥1290</span>
        </p>
      </div>
    </div>

    <div v-if="selectType === 'category'" class="feed-category">
      <Collapse simple>
        <Panel hide-arrow  v-bind:key="key"  v-for="(item, key) in category" :name="String(key)">
            <div @click="onChangeCollapse(item.id)" class="collapse-title-container"><span class="collapse-title" :class="{active: item.selected}">{{item.title}}</span><span class="collapse-icon" :class="{active: item.selected}"></span></div>
            <div  slot="content" class="collapse-content">
              <CheckboxGroup size="large" @on-change="change" v-model="disabledGroup">
                <p><Checkbox label="衣服"></Checkbox></p>
                <p><Checkbox label="上衣"></Checkbox></p>
                <p><Checkbox label="牛仔"></Checkbox></p>
              </CheckboxGroup>
            </div>
        </Panel>
    </Collapse>

    <div class="category-button">
      <Button type="primary" long>确认</Button>
      <p class="clear-types">清空类别</p>
    </div>


    </div>

    <div v-if="selectType === 'sort'" class="feed-sort">

    </div>

    <div v-if="selectType === 'filter'" class="feed-filter">

    </div>

  </div>
</template>

<script>
export default {
    components: {

    },
    data () {
      return {
        selectType: '',
        list: [1,2,3,4,5,6,7,],
        category: [
          { 
            id: 1,
            title: '时尚',
            selected: false
          },
          {
            id: 2,
            title: '服装',
            selected: false
          },
          {
            id: 3,
            title: '美妆',
            selected: false
          },
          {
            id: 4,
            title: '健康',
            selected: false
          }
        ],
        disabledGroup: []
      }
    },
    methods: {
      onSelect(selectType) {
        if (this.selectType !== selectType) {
          this.selectType = selectType;
        } else {
          this.selectType = '';
        }
      },
      onChangeCollapse(val) {
        this.category = this.category.map(item => { 
          if (item.id === val && item.selected) {
            item.selected = false;
          } else if (item.id === val) {
            item.selected = true;
          }
          return item;
        })
      } ,
      change(e) {
        console.log(e)
      }
    }
}
</script>