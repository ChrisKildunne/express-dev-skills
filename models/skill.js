const skills = [
    {id: 125223, skill: 'Proficient at HTML', done: true},
    {id: 127904, skill: 'Proficient at CSS', done: true},
    {id: 139608, skill: 'Proficient at JS', done: true},
    {id: 134623, skill: 'Proficient at Express JS', done: false}
  ];

  function getAll(){
    return skills;
  }

  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id ===id)
  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill=>skill.id===id);
    skills.splice(idx,1);
  }
  function update(id, updatedSkill){
    id= parseInt(id);
    const skill= skills.find(skill=>skill.id===id);
    Object.assign(skill,updatedSkill)
  }
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };