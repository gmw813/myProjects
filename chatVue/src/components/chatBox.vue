<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 15:09:37
 * @LastEditTime: 2021-05-20 09:32:46
-->
<template>
  <div class="chat_box">
    <div
      v-for="(item, index) in msgList"
      :key="index"
      class="userItem"
      :class="item.from.username == me.username ? 'rightuser' : ''"
    >
      <img :src="item.from.userpic" />
      <div class="span">
        <span style="font-size: 10px">{{ item.from.username }}</span>
        <span
          style="
            border: 1px solid #2333;
            margin-top: 3px;
            padding: 5px;
            background: lightgray;
            border-radius: 5px;
          "
          >{{ item.msg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chatUser", "me"],
  data() {
    return {
      msgList: [],
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        try {
          this.msgList = JSON.parse(localStorage.msgList);
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
</script>

<style lang="scss">
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.userItem {
  display: flex;
  align-items: center;
  margin: 10px 5px;
}
.span {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  text-align: start;
}
.rightuser {
  flex-direction: row-reverse;
  .span {
    text-align: end;
  }
}
</style>
