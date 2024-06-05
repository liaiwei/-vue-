<template>
  <div
      v-for="item in data"
      :key="item.id"
      :class="['list-item',item.disabled?'disabled':'']"
      :draggable="!item.disabled"
      @dragstart="dragItem(item)"
  >
    <input
        type="checkbox"
        :disabled="item.disabled"
        :id="'_checkbox_'+item.id"
        @click="checkBoxClick($event.target.checked,leftOrRight,item)"
    >
    <label :for="'_checkbox_'+item.id">{{item.phone_name}}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    type:Array,
    default:()=>{}
  },
  leftOrRight:{
    type:String,
    validator(value){
      return ['left','right'].includes(value)
    }
  }
})

const emit = defineEmits(['checkBoxClick','dragItem'])

const checkBoxClick = (checked, leftOrRight ,item)=>{
  emit('checkBoxClick',checked,leftOrRight,item)
}
const dragItem = (item)=>{
  emit('dragItem',item)
}

</script>



<style scoped lang="scss">

.list-item{
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: #666;
  &.disabled{
    opacity: .6;
  }
}
</style>