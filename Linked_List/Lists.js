import { LinkedList,DoubleLinkedList } from "./List_mod.js";

let d = new DoubleLinkedList();
d.insertBeg(10);
d.insertBeg(20);
d.insertBeg(30);
console.log(d.size());
//d.printNodes();
d.insertEnd(40);

d.insertAfter(20,50);
//d.printNodes();

let l = new LinkedList();
l.insertNodeBeg(40);
l.insertNodeEnd(50);
l.insertNodeEnd(60);
l.insertNodeBeg(30);
l.insertNodeBeg(20);
l.insertNodeBeg(10);
console.log(l.find(20));
l.printNodes();