var bookpages = ['hablu','bolod','gada','battery','peracitamol','gymansium'];
var name = ['rakib','rahat','siful','shoag','shomon'];
var secondName = name[2];
console.log(secondName);
var index = name.indexOf('rahat');
// index number check out
var batteryindex = bookpages.indexOf('gada');
console.log(batteryindex);
index = name.indexOf('faisal');
console.log(index);
// new add array;
bookpages[1] = 'bondhu';
bookpages[2] = 'gandu';
console.log(bookpages); 
bookpages.push("sabbir","rahat");
console.log(bookpages);
bookpages.pop();//remove property
console.log(bookpages);
var remove = bookpages.pop.call(bookpages);
console.log(remove);
