import users from "./users.js";

//Завдання 1
//Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Завдання 2
//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//Завдання 3
//Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Завдання 4
//Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

//Завдання 5
//Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

//Завдання 6
//Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

//Завдання 7
//Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => users.reduce((sum, user) => sum + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

//Завдання 8
//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => users
.filter(user => user.friends.some(friend => friend === friendName))
.map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//Завдання 9
//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => users
.sort((a, b) => a.friends.length - b.friends.length)
.map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Завдання 10
//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => users
.flatMap(user => user.skills)
.filter((value, index, users) => users.indexOf(value) === index)
.sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]