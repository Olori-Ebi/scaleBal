const A=[6,2];
const B=[0,2,4];
let result1 = [],
    result2 = [],
    res = [];
    for(let i=0; i<B.length; i++) {
      Arr1 = A[0]+B[i];
      result1.push(Arr1);   
    }
    for(let j=0; j<B.length; j++) {
      Arr2 = A[1]+B[j];
      result2.push(Arr2);   
    }
    for(let k=0; k<result1.length; k++) {
      for(let l=0; l<result2.length; l++) {
        for(let i=0; i<A.length; i++){
          if (result1[k]==result2[l]) {
          originalRes = result2[l]-A[i];
          res.push(originalRes)
          } else {
            console.log('no balance combo available')
          }
        }
      }
    }
    console.log(res)
