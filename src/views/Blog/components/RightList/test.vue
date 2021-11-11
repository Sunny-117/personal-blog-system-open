<template>
<RightList :list="list" @selected="handleSelect"></RightList>
</template>

<script>
import RightList from "./";
export default {
  components: {
    RightList,
  },
  methods:{
      handleSelect(item) {
          console.log(item);
      }
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: false },
        { name: "b", isSelected: false },
        {
          name: "c",
          isSelected: true,
          children: [
            { name: "c-1", isSelected: false },
            {
              name: "c-2",
              isSelected: false,
              children: [
                { name: "c-2-1", isSelected: false },
                { name: "c-2-2", isSelected: false },
                { name: "c-2-3", isSelected: false },
              ],
            },
            { name: "c-3", isSelected: false },
            { name: "c-4", isSelected: false },
          ],
        },
        { name: "d", isSelected: false },
      ],
    };
  },
};
</script>

<style>
</style>