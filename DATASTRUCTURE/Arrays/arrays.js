/**
 * Simulation of Array datastructure using DOM
 */
window.onload = ()=>{

    //array to store array elements
    let arr = [];
    let arrDv = [];//array to store divs
    class ArrayClass
    {
        constructor()
        {
         
        }

        createElement()
        {
            let div = document.createElement('div');
           
            div.setAttribute('class','div');

            let txt = document.getElementById('text').value;

            let txtNode = document.createTextNode(txt);

            div.appendChild(txtNode);

            //display elements-div
            let mainDv = document.getElementById('elements');

            let nodeDv = document.getElementById('nodes');

            nodeDv.appendChild(div);
            mainDv.style.display = 'block';

            arr.push(div.innerHTML);
            arrDv.push(div);
        }

        //when add button clicked
        addBtn()
        {
            let add = document.getElementById('submit');
            add.addEventListener('click',()=>
            {
                this.createElement();
                // console.log(arr);
            });
        }

        //when sort-asc button clicked
        sortAsc()
        {
            document.getElementById('sort-asc').addEventListener('click',()=>{

                for(let i = 0; i < arr.length; i++)
                {
                    for(let j = 0; j < arr.length; j++)
                    {
                        if(Number.parseFloat(arr[j]) >= Number.parseFloat(arr[j + 1])){
                            let temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;

                            arrDv[j].innerHTML = arr[j];
                            arrDv[j+1].innerHTML = temp;
                            // console.log(arr);
                        }
                    }
                }
            });
        }

        //when sort-desc button clicked
        sortDesc()
        {
            document.getElementById('sort-desc').addEventListener('click',()=>{

                for(let i = 0; i < arr.length; i++)
                {
                    for(let j = 0; j < arr.length; j++)
                    {
                        if(Number.parseFloat(arr[j]) <= Number.parseFloat(arr[j + 1])){
                            let temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;

                            arrDv[j].innerHTML = arr[j];
                            arrDv[j+1].innerHTML = temp;
                            // console.log(arr);
                        }
                    }
                }
            });
        }
    }

    let obj = new ArrayClass();
    obj.addBtn();
    obj.sortAsc();
    obj.sortDesc();
}