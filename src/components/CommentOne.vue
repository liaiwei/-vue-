<template>
  <div>
    <div>
      <p>
        <textarea v-model="state.commentText"></textarea>
      </p>
      <p>
        <button @click="addComment">提交评论</button>
      </p>
    </div>
    <div>
      <ul>
        <comment-comp :data="state.commentTree"></comment-comp>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import useUserInfoStore from '../../src/store/user'
import CommentComp from "./CommentComp.vue";
const userInfoStore = useUserInfoStore();
const state = reactive({
  commentText:"",
  commentTree: getComment('one')
});

const addComment = ()=>{
    const {id, username} = userInfoStore.userInfo;
    const commentInfo = {
      id: new Date().getTime(),
      pid: 0,
      uid:id,
      username,
      comment:state.commentText
    }

    setComment('one',commentInfo);
}


function getComment(field) {
  return JSON.parse(localStorage.getItem(field) || '[]')
}
function setComment(field, comment) {
  const commentList = JSON.parse(localStorage.getItem(field) || '[]');
  commentList.unshift(comment)
  localStorage.setItem(field, JSON.stringify(commentList))
}

</script>


<style scoped lang="scss">

</style>