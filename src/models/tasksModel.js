const array = [{
    nome: 'alisson',
    idade: 22
},
{
    nome:'sara',
    idade: 24
}]

const getAll =  () =>{
    const [tasks] = array;
    return tasks;
}

const createTask = (task)=>{
    const {title} = task;
    return title;
};

module.exports = {
    getAll,
    createTask,
};