
//console.log('i am a.js');
define(function(){
    function arr(arr){
        arr.sort(function(a,b){
            return a-b;
        })
        return arr;
    }
    return arr;
});