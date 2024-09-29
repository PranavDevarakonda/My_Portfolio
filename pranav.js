const radius = [1, 2, 3];
const logic = function (radius){
    return Math.PI * radius * radius;
}
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < 4; i++){
        output.push(logic(radius[i]))
    }
    console.log(output)
    return output;
}

calculate();