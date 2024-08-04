const mydate = function(){
    return Date();
};

const add = (a,b)=>{return a + b};
const sub = function(a,b){return a - b};

module.exports =  {mydate, add} ;
module.exports.sub1 = sub;