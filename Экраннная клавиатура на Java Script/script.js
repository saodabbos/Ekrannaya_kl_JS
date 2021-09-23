    'use strict';
    let inp = document.querySelector('#inp');
    let elems = document.querySelectorAll('.elem');
    let esc = document.querySelector('#esc');
    let back = document.querySelector('#back');
    let caps = document.querySelector('#caps');
    let probel = document.querySelector('#probel');
    for(let elem of elems){
        elem.addEventListener('click',function(){
            inp.value += elem.innerHTML;
        })
    };
    esc.addEventListener('click',function(){
        inp.value = null;
    });
    back.addEventListener('click',function(){
        let str = String(inp.value);
        let arr = str.split('');
        arr.pop();
        inp.value = arr.join('');
    });
    caps.addEventListener('click',function(){
        for(let elem of elems){
            if(elem.innerHTML == elem.innerHTML.toUpperCase()){
                elem.innerHTML = elem.innerHTML.toLowerCase();
            }
            else{
                elem.innerHTML = elem.innerHTML.toUpperCase();
            }
        }
    });
    probel.addEventListener('click',function(){
        inp.value += ' ';
    })