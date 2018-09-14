function triangle(){
    var sides = []
    
    sides.push(parseInt(prompt("enter first side")));
    sides.push(parseInt(prompt("enter second side")));
    sides.push(parseInt(prompt("enter third side")));
    
    var first = sides[0];
    var second = sides[1];
    var third = sides[2];
    
    /* console.log(sides); */
    if (first===second  &&  second===third && first===third){
    alert("equilateral")
    }
    
    else if (first===second  &&  first!==third || first===third  &&  first!==second || second===third  &&  second!==first){
    alert("isosceles")
    }
    
    else if(first!==second && second!==third && first!==third){
    alert("scalene")
    }
    else {
    alert("NOT a triangle")
    }
    }