import { defineStore } from "pinia";
import {tomorrow} from "@/util/shared";
import {tasks,users} from "@/components/AstronautJSON/users.json"
const storeUser = defineStore('todo',
    {
        state: () => ({
            currentIndex: 0,
            todos: [
                {
                    icon: users,
                    name: '用户',
                    tasks: [
                        {
                            id: 1,
                            title: '用户1',
                            date: new Date(),
                            done: true,
                            deleted: false
                        },
                    ],
                    colors: ['#ff6262', '#ffa947']
                },
                {
                    icon:tasks,
                    name: "任务",
                    tasks: [
                        {
                            id: 3,
                            title: "任务1",
                            date: new Date(),
                            done: true,
                            deleted: false
                        },
                        {
                            id: 4,
                            title: "任务2",
                            date: new Date(),
                            done: true,
                            deleted: false
                        },
                        {
                            id: 5,
                            title: "任务3",
                            date: new Date(),
                            done: false,
                            deleted: false
                        },
                        {
                            id: 6,
                            title: "任务4",
                            date: new Date(),
                            done: false,
                            deleted: false
                        },
                        {
                            id: 7,
                            title: "任务5",
                            date: new Date(),
                            done: false,
                            deleted: false
                        },
                        {
                            id:13,
                            title: "任务6",
                            date: new Date("2019-09-16"),
                            done: false,
                            deleted: false
                        },
                        {
                            title: "任务7",
                            id: 8,
                            date: new Date("2019-09-16"),
                            done: false,
                            deleted: false
                        }
                    ],
                    colors: ["#5b9df9", "#47bfff"]
                },
            ],
            selected: null,
            unselect: null,
            editing: null
        }),
        getters: {
            todayTask(state){
                const tasks:Array<any>=[];
                state.todos.forEach((item) => {
                    item.tasks.forEach(h=>{
                        if (h.date<=tomorrow&&!h.done&&!h.deleted) {
                            tasks.push(h);
                        }
                    })
                })
                return tasks
            }
        },
        actions: {
            selectTodo(selected: any) {
                console.log(selected);
                this.unselect = null;
                this.selected = selected
            },
            unselectTodo() {
                console.log(this.selected);
                this.unselect = this.$state.selected;
                this.selected = null
            },
            deleteTask({task}:any){
                console.log(task)
                task.deleted = true
            }
        }
    })

export default storeUser
