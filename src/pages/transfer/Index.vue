<template>
  <Transfer
      :data="data"
      right-title="已选择机型"
  />
</template>


<script setup>
const data = [
  {
    title:'华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'p40 pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'p50',
        disabled: false
      },
      {
        id: 4,
        phone_name: 'Mate XS 2',
        disabled: false
      },

    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 5,
        phone_name: '小米10',
        disabled: true
      },
      {
        id: 6,
        phone_name: '小米11',
        disabled: false
      },
      {
        id: 7,
        phone_name: '红米',
        disabled: false
      },
      {
        id: 8,
        phone_name: '红米2',
        disabled: false
      },

    ]
  },
  {
    title: 'iphone',
    data: [
      {
        id: 9,
        phone_name: 'iphone 10',
        disabled: false
      },
      {
        id: 10,
        phone_name: 'iphone 11',
        disabled: false
      },
      {
        id: 11,
        phone_name: 'iphone 12',
        disabled: true
      },
      {
        id: 12,
        phone_name: 'iphone 14',
        disabled: false
      },
    ]
  }
]
</script>


<style lang="scss" scoped></style>