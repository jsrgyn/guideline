// type or interface

interface User {
  // ? = Use quando o atributo for obrigatorio.
  birthYear: number
}

function calculateAgeOfUser(user: User)
{
  return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser({birthYear: 2020})


// Runtime Type Checking
// Static Type Checking