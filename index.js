// const fi = (function() {
//   return {
//     libraryMethod: function() {
//       return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
//     },

//     each: function(collection,fn) {
//       this.collection=collection
//       fn(this.collection.forEach(el => fn(el)))
//       }

//     },

//     map: function(collection,fn){
//       this.collection =collection;
//       fn(this.collection){
//         let sum=[];
//         for (let i=0;i<this.collection.length;i++){
//           sum.push(this.collection[i]);
//         }
//         return sum;
//       }
//     },

//     reduce: function() {

//     },

//     functions: function() {

//     },


//   }
// })()

// fi.libraryMethod()

class Driver {
    constructor(name,strDate){
        this.name=name;
        this.strDate=strDate;
    }
    startDate(){
        let date= new Date(this.strDate)
        return date
    }
    yearsExperienceFromBeginningOf(year){
        
        return Math.abs(this.startDate().getFullYear() - year)

    }

}


class Route {
    constructor(beginningLocation,endingLocation ){
        this.bLoc={
            horizontal :beginningLocation.horizontal,
            vertical:beginningLocation.vertical
        };
        this.eLoc={
            horizontal:endingLocation.horizontal,
            vertical:endingLocation.vertical
        };
    }
    blocksTravelled (){
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ]; 
        // let a = eastWest.indexOf(this.bLoc.horizontal)
        let begLocNo=Math.abs(eastWest.indexOf(this.bLoc.horizontal)-eastWest.indexOf(this.eLoc.horizontal))+Math.abs(this.bLoc.vertical-this.eLoc.vertical)
        return begLocNo
    }

    estimatedTime (15){
        if (value){
            return Math.floor(this.blocksTravelled()/2)
        }else{
            return this.blocksTravelled()/3
        }

    }

}


