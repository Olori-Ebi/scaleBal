// UI variables
const scale = document.querySelector('#scale');
const balance = document.querySelector('#balance');
const button = document.querySelector('.btn');

button.addEventListener('click', scaleBal);

function scaleBal(e) {
  let scaleInput = scale.value;
  let balInput = balance.value;
  let aArr = [];
  let bArr = [];
  let result1 = [],
      result2 = [],
      res = [];
  if(scaleInput!=='' && balInput!=='') {
   for(let i=0; i<scaleInput.length; i++){
     if(scaleInput[i]!=',') {
      aArr.push(scaleInput[i])
     };
    };
    //  console.log(aArr)
    for(let j=0; j<balInput.length; j++) {
      if(balInput[j]!=',') {
        bArr.push(balInput[j]);
       };
    };
    // console.log(bArr);

    for(let c=0; c<bArr.length; c++) {
      Arr1 = parseInt(aArr[0])+parseInt(bArr[c]);
      result1.push(Arr1);   
    }
    // console.log(result1)
    for(let d=0; d<bArr.length; d++) {
      Arr2 = parseInt(aArr[1])+parseInt(bArr[d]);
      result2.push(Arr2);   
    }
    // console.log(result2);
    for(let k=0; k<result1.length; k++) {
    for(let l=0; l<result2.length; l++) {
      for(let i=0; i<aArr.length; i++){
         if (result1[k]==result2[l]) {
           originalRes = parseInt(result2[l])-parseInt(aArr[i]);
           res.push(originalRes)
           res.join(',')
          }
        } 
      }
      console.log(res)
    }
  document.querySelector('#result').value = res;
  }
  e.preventDefault();
}
