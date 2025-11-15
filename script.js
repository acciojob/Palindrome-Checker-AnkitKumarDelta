function palindrome(str) {
    // keep only alphanumeric characters and convert to lowercase
    let cleaned = "";
    for (let ch of str) {
        if (/[a-zA-Z0-9]/.test(ch)) {
            cleaned += ch.toLowerCase();
        }
    }

    // two-pointer check
    let l = 0, r = cleaned.length - 1;
    while (l < r) {
        if (cleaned[l] !== cleaned[r]) return false;
        l++;
        r--;
    }
    return true;
}

module.exports = palindrome;
