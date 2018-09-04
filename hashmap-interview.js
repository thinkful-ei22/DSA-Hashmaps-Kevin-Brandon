'use strict';

const HashMap = require('./hashmap');

function isPalindrome(string){

  let stringHashMap = new HashMap();
  let odd = 0;

  for (let i = 0; i < string.length; i++){
    try {
      let charCount = stringHashMap.get(string[i]);
      charCount ++;
      if (charCount % 2 ===0){
        odd --;
      }
      else {
        odd++;
      }
      stringHashMap.set(string[i], charCount);
    } catch {
      stringHashMap.set(string[i], 1)
      odd++;
    }
  }

  if ((string.length % 2 === 0 && odd === 0) || (string.length % 2 === 1 && odd === 1)){
    return true;
  }
  else {
    return false;
  }
 
}


function main (){
  const lor = new HashMap();
  lor.set('Hobbit', 'Bilbo'); 
  lor.set('Hobbit', 'Frodo'); 
  lor.set('Wizard', 'Gandalf'); 
  lor.set('Human', 'Aragon'); 
  lor.set('Elf', 'Legolas'); 
  lor.set('Maiar', 'The Necromancer'); 
  lor.set('Maiar', 'Sauron'); 
  lor.set('RingBearer', 'Gollum'); 
  lor.set('LadyOfLight', 'Galadriel'); 
  lor.set('HalfElf', 'Arwen'); 
  lor.set('Ent', 'Treebeard');

  console.log(lor.get('Hobbit'));

  // console.log(lor);

  console.log(isPalindrome('acecarr'));
}

main();