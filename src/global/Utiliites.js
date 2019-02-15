/*

//------------- Ex one way-----------

export function cube(x) {
    return x * x * x;
}
export const foo = Math.PI + Math.SQRT2;*/

//-------- OR  another way same result  -------

function cube(x){
    return x * x * x;
}

const foo = Math.PI + Math.SQRT2;
var graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('From graph draw function');
    }
}

export {
    cube,
    foo,
    graph
}