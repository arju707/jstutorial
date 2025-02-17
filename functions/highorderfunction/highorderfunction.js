function exicuteTask(task, callback) {
    console.log('inside the execute function');
    


    console.log(`task:${task}`);



    callback();
    
    console.log('executed after teh call back function inside the main function');
    callback();
    



}


function hai() {
    console.log('inside the hai function');
    
    console.log('this task');

}
exicuteTask("cleen the room", hai)