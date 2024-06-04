import {computed, ref} from 'vue'
export function useTargetIndex (initialIndex){
    const targetIndex = ref(initialIndex)

    function setTargetIndex (newIndex){
        targetIndex.value = Number(newIndex)
    }

    return [targetIndex, setTargetIndex]
}

export function useComputedData(data,targetIndex){
    const leftTitle = computed(()=>data[targetIndex.value].title)

    const leftListData = computed(()=>{
        const {data:currentData} = data[targetIndex.value]

        return currentData.filter(item)
    })
    return {
        leftTitle
    }
}