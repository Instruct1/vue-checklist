<script setup>
import { storeToRefs } from 'pinia';
import { useEventBoxStore } from '../store/eventBox';

const props = defineProps(['cardTitle']);
const eventBoxStore = useEventBoxStore();
const { curTaskTitle, getCurrentTask, currentTask } =
  storeToRefs(eventBoxStore);

const curEvent = Object.keys(currentTask.value).find(
  (event) => event === props.cardTitle,
);
const eventItem = currentTask.value[curEvent];

const handleAddEvent = () => {
  const title = prompt('输入标题');
  if (!title) return;
  const content = prompt('输入内容');

  eventBoxStore.$patch((state) => {
    state.event = curEvent;
    //第x个task下名字为y的event卡片添加内容
    state.tasks[state.taskNum][state.event].push({ title, content });
  });
};
</script>

<template>
  <div class="card w-80 h-80 text-black bg-gray-300 m-10">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.cardTitle }}</h2>

      <div class="divider">
        <label class="btn btn-outline" @click="handleAddEvent()">+</label>
      </div>

      <div v-for="cardEvent in eventItem" :key="cardEvent">
        {{ cardEvent }}
      </div>

      <div>
        {{ getCurrentTask(curTaskTitle) }}
      </div>

      <div class="card w-60 bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p class="">content</p>
        </div>
      </div>
    </div>
  </div>
</template>
