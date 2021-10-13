/**
*Linked List Module:
*This module contains the functionality of
*-->Singly Linked List
*-->Double Linked list
*-->Circular Singly Linked List
*-->Circular Double Linked List
*
*
*Functionality:
*-->Insert node at the beginning of list
*-->Insert node at the end of list
*-->Insert node before a given node
*-->Insert node after a given node
*-->return list size
*-->Find node in the list
*-->delete a given node
*-->delete entire list
*-->Sorting the list in ascending order
*-->Sorting list in descending order
*-->Find smallest node in the list
*-->Find largest node in the list

 */

class Node
{
    constructor(element)
    {
        this.element = element;
        this.next = undefined;
        this.prev = undefined;
    }
}

export class LinkedList
{
    constructor()
    {
        this.head = undefined;
    }

    //insert node at the end of  the list
    insertNodeEnd(val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = undefined;
        }

        else
        {
            let ptr = this.head;

            while(ptr.next !== undefined)
            {
                ptr = ptr.next;
            }

            ptr.next = this.node;
            ptr = this.node;
        }
    }

    //insert nodes at the beginning of the list
    insertNodeBeg(val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = undefined;
        }

        else
        {
            this.node.next = this.head;
            this.head = this.node;
        }
    }

    //insert node at before a given node/point
    insertBefore(point,val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = undefined;
        }

        else
        {
            let ptr = this.head;
            let nextPtr = ptr.next;

            while(nextPtr.next !== undefined && nextPtr.element !== point)
            {
                ptr = nextPtr;
                nextPtr = nextPtr.next;
            }

            ptr.next = this.node;
            this.node.next = nextPtr;
            ptr = this.node;
        }
    }

    //insert node after a given node
    insertAfter(point,val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = undefined;
        }

        else
        {
            let ptr = this.head;
            let nextPtr = ptr;

            while(ptr.next !== undefined && ptr.element !== point)
            {
                ptr = nextPtr;
                nextPtr = nextPtr.next;
            }

            ptr.next = this.node;
            this.node.next = nextPtr;
            ptr = this.node;
        }
    }

    //search for element at the list and return true if found else false
    find(val)
    {
        if( this.head === undefined) return undefined;

        else
        {
            var ptr = this.head;

            while(ptr !== undefined && ptr.element !== val) ptr = ptr.next;

            if(ptr === undefined) return false;//we reached at the end of list without finding our value

            else return true;//value found
        }
    }
    //return the size of the list
    size()
    {
        let counter = 0;

        if(this.head === undefined)
        {
            counter = 0;
        }

        else
        {
            let p = this.head;
            while(p !== undefined)
            {
                counter++;
                p = p.next;
            }
        }

        return counter;
    }
    //print list elements
    printNodes()
    {
        let arr = [];
        if(this.head === undefined) return;

        else
        {
            while(this.head !== undefined)
            {
                arr.push(this.head.element);
                this.head = this.head.next;
            }

            console.log(arr);
        }
    }
}

export class DoubleLinkedList
{
    constructor()
    {
        this.head = undefined;
    }

    //insert node at the beginning
    insertBeg(val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = this.node.prev = undefined;
        }

        else
        {
            this.node.next = this.head;
            this.head.prev = this.node;
            this.head = this.node;
        }
    }

    //insert node at the end
    insertEnd(val)
    {
        this.node = new Node(val);

        if( this.head === undefined)
        {
            this.head = this.node;
            this.node.next = this.node.prev = undefined;
        }

        else
        {
            let ptr = this.head;

            while(ptr.next !== undefined) ptr = ptr.next;

            ptr.next = this.node;
            this.node.prev = ptr;
            ptr = this.node;

            //for debugging purpose
            //console.log(ptr,' ',ptr.next,' ',this.node,' ',this.node.prev);
        }
    }

    //insert node after a given node
    insertAfter(point,val)
    {
        this.node = new Node(val);

        if(this.head === undefined)
        {
            this.head = this.node;
            this.node.next = this.node.prev = undefined;
        }

        else
        {
            let ptr = this.head;
            let nextPtr = ptr;

            while(ptr.next !== undefined && ptr.element !== point)
            {
                ptr = nextPtr;
                nextPtr = nextPtr.next;
            }

            ptr.next = this.node;
            this.node.prev = ptr;
            this.node.next = nextPtr;
            nextPtr.prev = this.node;
            ptr = this.node;
        }
    }
     //return the size of the list
     size()
     {
         let counter = 0;
 
         if(this.head === undefined)
         {
             counter = 0;
         }
 
         else
         {
             let p = this.head;
             while(p !== undefined)
             {
                 counter++;
                 p = p.next;
             }
         }
 
         return counter;
     }
     //print list elements
     printNodes()
     {
         let arr = [];
         if(this.head === undefined) return;
 
         else
         {
             while(this.head !== undefined)
             {
                 arr.push(this.head.element);
                 this.head = this.head.next;
             }
 
             console.log(arr);
         }
     }
}