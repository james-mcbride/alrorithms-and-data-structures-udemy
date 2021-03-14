//given two strings, check if the second string is an anagram of the first.

function validAnagram(str1, str2){
    //will make sure words are same length first.
    if (str1.length!==str2.length){
        return false;
    }
    //creating objects to store number of occurences of each letter
    let str1Storage={};
    let str2Storage={};

    //will loop through first object and store occurecnes of each letter
    for (let char of str1){
        if (char in str1Storage){
            str1Storage[char]++
        } else{
            str1Storage[char]=1
        }
    }

    //will loop through second object and store occurecnes of each letter
    for (let char of str2){
        if (char in str2Storage){
            str2Storage[char]++
        } else{
            str2Storage[char]=1
        }
    }
    console.log(str1Storage, str2Storage)
    //now will loop through one of the objects, and check to see if the stored values are equal to the second object's
    for (let key in str1Storage){
        if (str1Storage[key]!==str2Storage[key]){
            return false;
        }
    }
    return true;

}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));