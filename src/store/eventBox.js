import { defineStore } from "pinia";

export const useEventBoxStore = defineStore(
    'EventBox',
    {
        state: () => ({
            tasks: [
                {
                    title: 'First',
                    ['Pre']: [],
                    ['Ing']: [],
                    ['Fin']: [],
                },
            ],
            taskNum: 0,
            curTaskTitle:'First',
            event: 'Pre',
        }),
        getters: {
            currentTask: (state) => state.tasks[state.taskNum],
            getCurrentTask: (state) => {
                return (taskTitle) => state.tasks.find(task => task.title === taskTitle)
            }
        }
    }
)