<template>
  <div>
    <div>
      <Selector
      :data="options"
      @select-change="setTargetIndex"
      />
    </div>
    <div class="transfer">
      <div
          class="box left-list"
          @dragover.prevent
          @drop="removeRightListData([draggedItem])"
      >
        <ListTitle :title="leftTitle"/>
        <div class="">
          <ListItem
              :data="leftListData "
              leftOrRight="left"
              @check-box-click=" "
              @drag-item="setDraggedItem"
          />
        </div>
      </div>
      <ButtonGroup
      @left-button-click="removeRightListData(checkedData.right)"
      @right-button-click="addRightListData(checkedData.left)"
      :left-button-disabled="transferButtonDisabled.left"
      :right-button-disabled="transferButtonDisabled.right"
      />
      <div
          class="box right-list"
          @dragover.prevent
          @drop="addRightListData([draggedItem])"
      >
          <h1 class="list-title">{{rightTitle}}</h1>
          <div>
            <ListItem
                :data="rightListData "
                leftOrRight="right"
                @check-box-click="setCheckedData"
                @drag-item="setDraggedItem"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Selector from "./components/Selector.vue";
import ListTitle from "./components/ListTitle.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import ListItem from "./components/ListItem.vue";
import propsDefinition from './extends/props'
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDraggedItem
} from "./extends/hooks";
import {set} from "lodash/object";

const props = defineProps(propsDefinition)
const options = props.data.map(({title})=>title)
const [targetIndex,setTargetIndex] = useTargetIndex(0);

const [checkedData,addCheckedData,removeCheckedData] = useCheckedData()

const [
  rightListData,
  addRightListData,
  removeRightListData
] = useRightListData([],checkedData)

const {
  leftTitle,
  leftListData,
  transferButtonDisabled
} = useComputedData(props.data, targetIndex, rightListData,checkedData)

const [draggedItem,setDraggedItem] = useDraggedItem()
const setCheckedData = (checked, leftOrRight, item)=>{
  checked
  ? addCheckedData(leftOrRight,item)
  : removeCheckedData(leftOrRight,item.id)

}
</script>

<style scoped lang="scss">
.transfer{
  display: flex;
  flex-direction: row;
  width: 360px;
  height:300px;
  border: 1px solid #ddd;

  .box{
    width: 120px;
    height: 100%;


  }
}


</style>