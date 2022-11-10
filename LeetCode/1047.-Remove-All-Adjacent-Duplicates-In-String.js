/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   
    i = 1
    while (i < s.length) {
        if (s[i -1] === s[i]) {
            s = s.slice(0, i-1) + s.slice(i+1)
            i--;
        }
        else i++;
    }
    return s
};
