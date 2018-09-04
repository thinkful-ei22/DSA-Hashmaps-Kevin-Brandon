const HashMap = require('./hashmap');

function main (){
  const lor = new HashMap();
  lor.set('Hobbit1', 'Bilbo'); 
  lor.set('Hobbit2', 'Frodo'); 
  lor.set('Wizard', 'Gandalf'); 
  lor.set('Human', 'Aragon'); 
  lor.set('Elf', 'Legolas'); 
  lor.set('Maiar', 'The Necromancer'); 
  lor.set('Maiar', 'Sauron'); 
  lor.set('RingBearer', 'Gollum'); 
  lor.set('LadyOfLight', 'Galadriel'); 
  lor.set('HalfElf', 'Arwen'); 
  lor.set('Ent', 'Treebeard');
  console.log(lor.get('Hobbit1'));
}

main();