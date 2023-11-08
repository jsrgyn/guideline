// type or interface
function calculateAgeOfUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
calculateAgeOfUser({ birthYear: 2020 });
// Runtime Type Checking
// Static Type Checking
