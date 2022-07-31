const numbers = [5, 6, 8, 9, 6, 5, 6, 9, 8, 5, 4, 5, 12, 54, 65, 9, 35, 85, 65, 85, 4, 5, 24];

// מחזיר מערך מסונן ע"פ תנאי
// במקרה שלנו הוא יחזיר את כל הערכים הגדולים מ-10
numbers.filter(x => x > 10); // [12, 54, 65, 35, 85, 65, 85, 24]

// מחזיר ערך אחד מתוך המערך ע"פ תנאי
numbers.find(x => x == 5); // 5

// מחזיר את האינדקס של הערך מתוך המערך ע"פ תנאי
numbers.findIndex(x => x == 5); // 0

// מחזיר ערך מצטבר מהמערך
// דוגמה לסיכום
numbers.reduce((previous, curr) => previous += curr, 0); // 519
// דוגמה לכפל
numbers.reduce((previous, curr) => previous *= curr, 1); // 8.372402803215359e+24
// דוגמא למשהו מסובך שאכל לכם את הראש
// הפכנו את המערך לאובייקט
// numbers.reduce((previous, curr, i) => { return { [i]: curr, ...previous } }, {});

// לצורך לולאת for of
// מחזיר מערך של הערך ואינדקס שלו
numbers.entries();
// for (const item of numbers.entries()) {

// }