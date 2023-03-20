import { defineStore } from "pinia";

export const useEventBoxStore = defineStore(
    'EventBox',
    {
        state: () => ({
            tasks: [
                {
                    title: 'First',
                    ['Pre']: ['one'],
                    ['Ing']: ['two'],
                    ['Fin']: ['three'],
                },
            ],
            taskNum: 0,
            event: 'Pre',
        }),
        getters: {
            currentTask: (state) => state.tasks[state.taskNum],
        }
    }
)