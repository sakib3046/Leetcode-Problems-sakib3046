var nums1 = [2,2,3,0,0,0];
var m = 3;
var nums2 = [1,5,6];
var n = 3;
var merge = function(nums1, m, nums2, n) {
   
    arrayLen= m+n-1; 
    while (m>0 && n>0) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[arrayLen]=nums1[m-1]
            m=m-1
        }
        else{
            nums1[arrayLen]=nums2[n-1]
            n=n-1
        }
        arrayLen-=1
    }
    while (n>0) {
        nums1[arrayLen]=nums2[n-1]
            n=n-1
            arrayLen-=1
    }
};
merge(nums1,m,nums2,n)
console.log(nums1);
