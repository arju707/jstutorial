function createTaskManager(){


        let tasks=[]
    return {

        addTask:function(task){
            tasks.push(task)
            console.log("task added ",task)
        },

        getTasks:function(task){
            return tasks;
        }


    }
}

let taskManager=createTaskManager();

taskManager.addTask("complete js")
taskManager.addTask("do tasks");
taskManager.addTask("clear Mern")

console.log("current task",taskManager.getTasks())