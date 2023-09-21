/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    
//     students.forEach((v, i) => {
//         item.reduce((v2, j) => {
            
//         })
//     })  
    
    seats.sort((a,b) => a - b);
    students.sort((a,b) => a - b);


    let result = 0;
    
    students.forEach((v,i) => {
        result = result + Math.abs(v - seats[i])
    })
    
    return result
};