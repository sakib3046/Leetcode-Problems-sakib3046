var twoSum = function(nums, target) {
    var indexes ={}
    for (let i = 0; i < nums.length; i++) {
        if (target-nums[i] in indexes) {
            return [ indexes[target-nums[i]] ,i];
        }
        else{
            indexes[nums[i]]=i
        }
        
    }

};
