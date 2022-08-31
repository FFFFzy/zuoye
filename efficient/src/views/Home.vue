// 结构
<template>
  <div class="home-box">
    <div class="top">
      <!-- 头部左侧 -->
      <div class="todo-box">
        <div class="todo-head">
          <span style="font-size: 18px">待办事项</span> <span style="color: #39f; font-size: 14px">查看更多</span>
        </div>
        <div class="todo-cnt">
          <div class="todo-item" v-for="item in 4" :key="item">
            <p class="item-msg">
              <span style="margin-right: 10px">[待办事项]</span> 您申请的报销还未审批,请及时查看,防止过期
            </p>
            <p>2020年8月</p>
          </div>
          <div class="todo-foot" v-if="false">暂无代办事</div>
        </div>
      </div>
      <!-- 头部右侧 -->
      <div class="date-box">
        <el-calendar> </el-calendar>
      </div>
    </div>
    <div class="mid">
      <!-- 中间左侧 -->
      <div class="staff-data">
        <div class="staff-head">员工数据</div>
        <div class="staff-cnt">
          <div class="staff-items">
            <div class="staff-item">
              <p>员工总数</p>
              <p>2000人</p>
            </div>
            <div class="staff-item" style="border-left: 1px solid #ccc; border-right: 1px solid #ccc">
              <p>正式员工</p>
              <p>1000人</p>
            </div>
            <div class="staff-item">
              <p>实习生</p>
              <p>15人</p>
            </div>
          </div>
          <div class="staff-items">
            <div class="staff-item">
              <p>本月待入职</p>
              <p>15人</p>
            </div>
            <div class="staff-item" style="border-left: 1px solid #ccc; border-right: 1px solid #ccc">
              <p>本月待离职</p>
              <p>13人</p>
            </div>
            <div class="staff-item">
              <p>本月待转正</p>
              <p>3人</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间右侧 -->
      <div class="staff-map">
        <div class="map-head">员工地区分布</div>
        <div class="map-cnt"><areaChart></areaChart></div>
      </div>
    </div>
    <div class="bottom">
      <p style="font-size: 18px; padding-left: 70px; margin-top: 10px">员工生日</p>
      <birthdayChat></birthdayChat>
    </div>
  </div>
</template>

// 行为
<script>
import areaChart from '../components/areaChart.vue'
import birthdayChat from '../components/birthdayChart'
export default {
  components: {
    areaChart,
    birthdayChat
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

// 样式
<style scoped lang="scss">
::v-deep .el-calendar__body {
  padding: 0;
}

::v-deep .el-calendar-table .el-calendar-day {
  height: 30px;
}

.home-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 110px);

  .mid {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .staff-map {
      width: 49%;
      border: 1px solid #ccc;

      .map-head {
        width: 100%;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        font-size: 18px;
      }

      .map-cnt {
        border-top: 1px solid #ccc;
      }
    }

    .staff-data {
      width: 49%;
      border: 1px solid #ccc;

      .staff-head {
        width: 100%;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        font-size: 18px;
      }

      .staff-cnt {
        width: 100%;
        border-top: 1px solid #ccc;

        .staff-items {
          display: flex;
          width: 100%;
          padding: 20px 30px;
          margin: 15px 0;

          .staff-item {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }

  .bottom {
    width: 100%;
    min-height: 250px;
    border: 1px solid #ccc;
    overflow: hidden;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .date-box {
      width: 30%;
    }

    .todo-box {
      width: 68%;
      border: 1px solid #ccc;
      min-height: 280px;

      .todo-cnt {
        width: 100%;
        height: calc(100% - 60px);
      }

      .todo-head {
        display: flex;
        justify-content: space-between;
        padding: 18px 20px;
        align-items: center;
        border-bottom: 1px solid #ccc;
      }

      .todo-item {
        color: #6c6c6c;
        display: flex;
        justify-content: space-between;
        padding: 17px 20px;
        border-bottom: 1px solid #ccc;
        align-items: center;

        .item-msg {
          width: 80%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .todo-item:nth-child(4) {
        border-bottom: none;
      }

      div:nth-child(1) p {
        animation: shake 1s;
      }
      /** 动画 */
      @keyframes shake {
        0% {
          transform: scale(100%);
        }
        10% {
          transform: scale(90%);
        }
        20% {
          transform: scale(90%);
        }
        30% {
          transform: scale(105%) rotate(3deg);
        }
        40% {
          transform: scale(105%) rotate(-3deg);
        }
        50% {
          transform: scale(105%) rotate(3deg);
        }
        60% {
          transform: scale(105%) rotate(-3deg);
        }
        70% {
          transform: scale(105%) rotate(3deg);
        }
        80% {
          transform: scale(105%) rotate(-3deg);
        }
        90% {
          transform: scale(105%) rotate(3deg);
        }
        100% {
          transform: scale(100%) rotate(0);
        }
      }

      .todo-foot {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
