// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
// function getFirstName(obj){
//     return obj.firstName
// }
// function isAdmin(user){
//      if(user.isAdmin){
//         return true
//      }else {
//         return false
//      }
// }
function isAdmin(user){
if(user === "firstName" && user === "lastName" === admin){

}
return admin
}

function getEmail(user){
//     let firstName = user.first[0];
//     let lastName = user.last;
//     let email = firstName + lastName + ".prsvr@gmail.com" 
return email[user.firstName[0].toLowerCase() + user.lastName.toLowerCase] + ".prsvr@gmail.com"
}
function getPlaylistLength(playlist){
    return playlist["songs"].length 
}

function getHardestHomework(arr){
    for(let i = 0; i < getHardestHomework.length; i++){
          console.log(getHardestHomework[i])
    }
}

function createPhonebook(){ 
        for (i = 0; i < phoneBook.length; i++) {
            if (phoneBook[i].number.equals(num)) {
                if (phoneBook[i].firstName.equals(fName) || fName.equals("")) {
                    return phoneBook[i];
                }
            }
        }
    
        return null;
    
    }



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};