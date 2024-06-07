<template>
  <div class="flex !m-40 gap-1 justify-center">
    <div class="flex flex-col gap-0">
      <input class="border border-black !py-1 !px-10" v-model="searchQuery" @input="fetchData"
             type="text"/>
      <div v-for="item in data" class="border border-black !py-1 !px-10" v-if="searchQuery">
        <ul>
          <li class="border border-b">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <button class="border border-black py-1 w-40 h-10 rounded-md !px-5">Search</button>
  </div>
</template>
<script setup>
import {useAjax} from "~/composables/useAjax.js";
import {ref} from 'vue';
import { useRequestStore } from "./store/request.store";
const store=useRequestStore();
let data=ref([])
const searchQuery = ref('');
const fetchData = async () => {
 const res=await useAjax(searchQuery.value,true)
};
data= computed(() => {
  return store.searchRes.filter((item) => {
    return item.toLowerCase().startsWith(searchQuery.value.toLowerCase());
  });
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.main-box {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.pclass{
  display: block;
  font-size:24px;
}

.button {
  height: 30px;
  width: 100px;
  background-color: burlywood;
  border-radius: 10px;
}

.content-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:solid black 1px;
  height:500px;
  width:500px
}
</style>