<script setup>
import { storeToRefs } from 'pinia';
import { useEventBoxStore } from '../store/eventBox';

import Target from './Target.vue';

const eventBoxStore = useEventBoxStore();
const { tasks, currentTask } = storeToRefs(eventBoxStore);

const handleCurTask = (index) => {
  eventBoxStore.$state.taskNum = index;
};

const handleAddTask = () => {
  const taskTitle = prompt('新建任务');
  if (!taskTitle) return;
  //记得处理task重名问题
  eventBoxStore.$patch((state) => {
    state.tasks.push({
      title: taskTitle,
      ['Pre']: [],
      ['Ing']: [],
      ['Fin']: [],
    });
  });
};
</script>

<template>
  <div class="flex flex-col border-opacity-50 m-5">
    <!--目标区-->
    <Target />
    <label class="btn" @click="handleAddTask">+</label>

    <div class="divider"></div>
    <!--任务区-->
    <div
      v-for="(task, index) in tasks"
      :class="
        currentTask.title === task.title
          ? 'grid h-20 card rounded-box place-items-center mb-3 cursor-pointer bg-orange-300'
          : 'grid h-20 card rounded-box place-items-center mb-3 cursor-pointer bg-base-300'
      "
      @click="handleCurTask(index)"
      :key="task.title"
    >
      {{ task.title }}
    </div>
  </div>
</template>
