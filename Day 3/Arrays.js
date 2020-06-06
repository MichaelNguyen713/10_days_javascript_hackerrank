/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // C1
    var sorted_array = nums.sort(function (a,b) {return b - a;});
    for (var i = 0; i < sorted_array.length; i++){
        if (sorted_array[i] !== sorted_array[i + 1]){
            return sorted_array[i + 1];
            break;
        } else {
            continue;
        }
    }
    // C2
    // var sorted_array = nums.sort(function (a,b) {return a - b;});
    // var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
    //     return index === self.indexOf(elem);
    // })
    // return unique_sorted_array[unique_sorted_array.length - 2];
}