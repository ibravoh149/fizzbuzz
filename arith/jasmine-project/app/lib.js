module.exports={
  aritGeo :function (arr) {

    var ratio = arr[1] / arr[0];  //ratios for geometric progression
    var difference = arr[1] - arr[0]; //difference for arithmetic progression 
    var i = 0;
    var ap = true;  
    var gp = true;

    for (; i < arr.length - 1; i++) {
        if( arr[i + 1] - arr[i] !== difference ) {
          //tho its first check is has already been done before in the expression for difference variable
          ap = false;
        }
        if (arr[i + 1] / ratio !== arr[i])  { 
          // first check has been done  " " " ratio
            gp = false;
      }
    }

    if (arr.constructor === Array && arr.length === 0) {
        return 0;
    }
    else if (ap === true) {
        return 'Arithmetic';
    }
    else if (gp === true) {
        return 'Geometric';
    }
    else {
        return -1;
    }
  }
}