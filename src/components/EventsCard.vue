<script setup>
import { storeToRefs } from 'pinia';
import { useEventBoxStore } from '../store/eventBox';

import draggable from 'vuedraggable';
import { nanoid } from 'nanoid';

const props = defineProps(['cardTitle']);
const eventBoxStore = useEventBoxStore();
const { tasks, taskNum, curTaskTitle, getCurrentTask, currentTask } =
  storeToRefs(eventBoxStore);

const curEvent = Object.keys(currentTask.value).find(
  (event) => event === props.cardTitle,
);

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
const handleDrag = (e)=>{
  console.log(e);
  console.log(e.newIndex);
  console.log(e.item.__draggable_context.element);
}
</script>

<template>
  <div class="card w-80 h-80 text-black bg-gray-300 m-10">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.cardTitle }}</h2>

      <div class="divider">
        <label class="btn btn-outline" @click="handleAddEvent()">+</label>
      </div>

      <draggable
        :list="getCurrentTask(curTaskTitle)[curEvent]"
        item-key="title"
        animation="300"
        @end="handleDrag"
      >
        <template #item="{ element }">
          <div class="card w-60 bg-base-200 shadow-xl cursor-pointer mt-3" :key="nanoid()">
            <div class="card-body">
              <h2 class="card-title">{{ element.title }}</h2>
              <p>{{ element.content }}</p>
            </div>
          </div>
        </template>
      </draggable>

    </div>
  </div>
</template>
