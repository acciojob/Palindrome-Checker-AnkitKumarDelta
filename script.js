function palindrome(str) {
    const check = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (check.includes(str[i])) {
            str2 += str[i].toLowerCase();   // convert to lowercase
        }
    }

    let l = 0, r = str2.length - 1;
    while (l < r) {
        if (str2[l] !== str2[r]) return false;
        l++;
        r--;
    }

    return true;
}

module.exports = palindrome;
