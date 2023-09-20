var isValidSerialization = function(preorder) {
    const arr = preorder.split(',');
    let i = 0;

    function callDFS() {
        if(i >= arr.length) return false;
        
        if(arr[i] === '#') {
            i = i+1;
            return true;
        };

        i= i+1;
        return callDFS() && callDFS();
    }

    return callDFS() && i == arr.length;
};