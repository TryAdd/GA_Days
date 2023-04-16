const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ]


  function getAll(){
    return todos
  }

  module.exports = {
    // getAllFromDB: getAll //dh alnomral bs l2nh we use ejs bs nktb getAll
    getAll
  }