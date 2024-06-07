<template>
  <li
    v-for="item of props.data"
    :key="item.id"
  >
    <p>{{item.username}}</p>
    <p>{{item.comment}}</p>
    <a href="javascript:;">回复</a>
    <div>
      <p>
        <textarea v-model="item.commentText"></textarea>
      </p>
      <p>
        <button>提交回复</button>
      </p>
    </div>
  </li>
</template>

<script setup>
import {toRaw, watch} from "vue";

 const props = defineProps({
   data:Array
 })
 console.log(toRaw(props.data))
</script>



<style scoped lang="scss">

</style>