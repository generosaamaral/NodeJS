function anoBissexto(ano:number):boolean{
        if (ano % 4===0){
        if (ano % 100 === 0){
        if (ano % 400 === 0){
           return true;


        }
          else{
              return false;
          }
        }
          else{
              return true;
          }
        }



}

console.log("ano 2000 "+anoBissexto(2000));
console.log("ano 2004 "+anoBissexto(2004));
console.log("ano 1990 "+anoBissexto(1990));
console.log("ano 1820 "+anoBissexto(1820));
console.log("ano 2020 "+anoBissexto(2020));