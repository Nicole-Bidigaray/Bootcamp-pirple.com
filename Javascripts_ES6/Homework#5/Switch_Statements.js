/**
 * 
 * 
 * Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together.
 * 
 */

 let val1;
 let val2;
 let output;
 const labels = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "second",
    "minute",
    "hour",
    "day"
 ];
 
function timeAdder(value1, label1, value2, label2) {
    verifyAllParamIsPresent(value1, label1, value2, label2);
    verifyIfParamIsValid(value1, value2);
    verifyPresentInLabel(label1, label2);
    if(output) return output;   

    switch (true) {
        case value1 > 1 && label1 == 'minute':
            return 'Verify if parameter is singular or plural';
        case value1 > 1 && label1 == 'hour':
            return 'Verify if parameter is singular or plural';
        case value1 == 1 && label1 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        case value1 == 1 && label1 == 'minutes':
            return 'Verify if parameter is singular or plural';
        case value2 > 1 && label2 == 'minute':
            return 'Verify if parameter is singular or plural';
        case value2 > 1 && label2 == 'hour':
            return 'Verify if parameter is singular or plural';
        case value2 == 1 && label2 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        case value2 == 1 && label2 == 'minutes':
            return 'Verify if parameter is singular or plural';
        case value1 == 1 && label1 == 'seconds':
            return 'Verify if parameter is singular or plural';
        case value1 > 1 && label1 == 'second':
            return 'Verify if parameter is singular or plural';      
    }
    
    timeLabelEquals(label1, label2);
   
    if(label1 == 'hours' || label1 == 'hour' &&  label2 == 'minutes'  || label1 == 'minute'  ) {
        result = value1 * 60 + value2;
        resArray = [result, label2];
        return resArray;
    }
    if(label1 == 'hour' || label1 == 'hours' &&  label2 == 'hours' || label1 == 'hours'  ) {
        result = value1 * 60 + value2;
        resArray = [result, label1];
        return resArray;
    }

    if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'hour' || label2 == 'hours' ) {
        result = value2 * 60 + value1;
        resArray = [result, label2];
        return resArray;
    }
    if(label1 == 'second' || label1 == 'seconds' &&  label2 == 'minute' || label2 == 'minutes' ) {
        result = value1 * 60 + value2;
        resArray = [result, label1];
        return resArray;
    }1
    if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'second' || label2 == 'seconds' ) {
        result = value2 * 60 + value1;
        resArray = [result, label2];
        return resArray;
    }

    return output;
           
}

function verifyAllParamIsPresent(value1,value2,label1,label2) {
    if(!value1 || !value2 || !label1 || !label2){
        output = 'Should be four parameters';
    }
}

function verifyIfParamIsValid(value1,value2) {
    if(value1 < 0 || value2 < 0 ) {
        output = 'The value should be a positive number';
    }
}

function verifyPresentInLabel(label1, label2) {
    const lab1 = labels.includes(label1);
    const lab2 = labels.includes(label2);
    if( !lab1 | !lab2 ){
        output = 'The value should be seconds, minutes, hours, days, second, minute, hour, day';
    }
};

function timeLabelEquals(value1, label1, value2, label2) {
    let result;
    let resArray = [];

    if(label1 == label2 ) {
        result = value1 + value2;
        resArray = [result, label1];
        output = resArray;

    }

}

 // const timeAdd = timeAdder(1,'hour', 3, 'minutes');

 // const timeAdd = timeAdder(2,'hours', 3, 'minutes');
const timeAdd = timeAdder(1,'minutes', 3, 'minutes');
//   const timeAdd = timeAdder(3,'minutes', 3, 'xxxx');

console.log(timeAdd);