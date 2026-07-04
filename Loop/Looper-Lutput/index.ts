// ==========================================
// TypeScript Loop Practice (লুপ প্র্যাকটিস)
// ==========================================
// এই ফাইলে বিভিন্ন ধরণের Loops-এর ব্যবহার দেখানো হয়েছে।
// JavaScript-এর মতো এখানেও লুপ একই রকম, কিন্তু TypeScript-এ আমরা "Type Safety" (টাইপ সেফটি) পাই।

// 1. Classical "for" Loop (সাধারণ ফর লুপ)
// ----------------------------------------
// এখানে loop counter `i` এর টাইপ `number` নির্ধারণ করা হয়েছে।
console.log("--- 1. Classical for Loop ---");
const limit: number = 5;
for (let i: number = 0; i < limit; i++) {
    console.log(`সংখ্যা: ${i}`); // Output: ০ থেকে ৪ পর্যন্ত প্রিন্ট করবে
}
console.log();

// 2. "while" Loop (হোয়াইল লুপ)
// -----------------------------
// শর্ত সত্য হওয়া পর্যন্ত লুপটি চলতে থাকবে।
console.log("--- 2. while Loop ---");
let count: number = 1;
while (count <= 3) {
    console.log(`কাউন্ট: ${count}`);
    count++;
}
console.log();

// 3. "do-while" Loop (ডু-হোয়াইল লুপ)
// -----------------------------------
// এই লুপটি অন্তত একবার রান করবেই, তারপর শর্ত চেক করবে।
console.log("--- 3. do-while Loop ---");
let checkValue: number = 10;
do {
    console.log(`কমপক্ষে একবার চলবে। মান: ${checkValue}`);
    checkValue++;
} while (checkValue < 10); // শর্ত মিথ্যা হলে আর চলবে না
console.log();

// 4. "for...of" Loop (ফর...অফ লুপ)
// -------------------------------
// Arrays (অ্যারে) বা Iterables এর প্রতিটি উপাদান সরাসরি পাওয়ার জন্য এটি ব্যবহার করা হয়।
// TypeScript জানে যে `fruits` একটি `string[]` (strings of array), তাই লুপের ভেতরের `fruit` ভেরিয়েবলটির টাইপ অটোমেটিকালি `string` হবে।
console.log("--- 4. for...of Loop ---");
const fruits: string[] = ["Mango", "Banana", "Orange", "Apple"];
for (const fruit of fruits) {
    console.log(`ফল: ${fruit.toUpperCase()}`); // string মেথড `.toUpperCase()` সেফলি ইউজ করা যাচ্ছে
}
console.log();

// 5. "for...in" Loop (ফর...ইন লুপ)
// -------------------------------
// Objects-এর keys (প্রোপার্টি নাম) বের করার জন্য এটি ব্যবহার করা হয়।
// এখানে TypeScript-এর `keyof` কি-ওয়ার্ড ব্যবহার করে টাইপ সেফটি বজায় রাখা হয়েছে।
console.log("--- 5. for...in Loop ---");
interface User {
    name: string;
    age: number;
    city: string;
}

const developer: User = {
    name: "Nabail",
    age: 21,
    city: "Dhaka"
};

// key-এর টাইপ keyof User হতে হবে, যাতে ভুল key অ্যাক্সেস না হয়
for (const key in developer) {
    if (developer.hasOwnProperty(key)) {
        // developer[key as keyof User] দিয়ে আমরা ভ্যালুগুলো সেফলি বের করছি
        console.log(`${key}: ${developer[key as keyof User]}`);
    }
}
console.log();

// 6. Array.prototype.forEach()
// -----------------------------
// এটি একটি built-in array method যা লুপের মতো কাজ করে।
console.log("--- 6. forEach Method ---");
const numbers: number[] = [10, 20, 30];
numbers.forEach((num: number, index: number) => {
    console.log(`ইনডেক্স ${index}-এ আছে: ${num}`);
});


// My Practice Zone 

// Page Number : 103 - 112 
// Chapter 7 - Loop ( TypeScript)

// pagenumber = 105 , 
// Problem Number 1 : 

console.log("--- Problem 1 : Print name of your favourite 5  ---");
const favouriteSubjects: string[] = ["Math", "Dgitital Electronics", "Physics", "Application development using Python"]
for(const subject of favouriteSubjects){
    console.log(`My favourite Subject is : ${subject}`)

}

// Problem Number 2 
console.log("--- Problem 2 : Print name of your 5x favourite food --- ")
const favouriteFood:string[] = ["Rice", "Fish","Chicken","Beef"]
for(const food of favouriteFood){
    console.log(`my favourite food is : ${food}`)
}

// Problem Number 3  
console.log("--- Problem 3 : Print your family members birthday ---")
const familyMembersBirthday : string[] = ['Father : 28-08-1975', 'Mother : 3 - 06 - 2026 ', 'Sister : 12 - 01 - 2013']
for(const birthday of familyMembersBirthday){
    console.log(`${birthday}`)
}

// Problem Number 4  
console.log("--- Problem 4 ; Print name of your favourite players ---")
const favouritePlayers : string[] = ['Muller', 'Ronaldo','Mbappe', 'Kroos', 'Musiala']
for(const player of favouritePlayers){
    console.log(`${player}`)
}

// Problem Number 5  
console.log("--- Problem 5 : Print your exam dates by using for loop ---")
const examDates : string[] = ['Math : 12-06-2028' , 'Physics : 15-06-2028', 'Chemistry : 18-06-2028', 'English : 20-06-2028']
for(const dates of examDates){
    console.log(`${dates}`)
}

// Page Number 105- 109 

// Problem Number 1  
console.log("--- Problem Number 1 , console something 10 time by using while loop ---")
let i : number = 1
while(i <= 10){
    console.log("I will practice programming daily for 5 hours")
    i++
}

// Problem Number 2 
console.log("--- Problem Number 2 , print 1 to 10 number by using while loop ---")
let j : number = 1 
while(j <= 10){
    console.log(`${j}`)
    j++
}

// Problem Number 3 
console.log("--- Problem Number 3 , print 50 to 100 number by using while loop ---")
let k : number = 50
while(k <= 100){
    console.log(`${k}`)
    k++
}

// Problem Number 4 
console.log("--- Problem Number 4 , print 1 to 10 number and multiply them by 3 by using while loop ---")
let l : number = 1
while(l<=10){
    console.log(`${l * 3}`)
    l ++
}

// Problem Number 5 
console.log("--- Problem Number 5 , print 100 to 111 number by using while loop and devide them by 5 --- ")
let d : number = 100
while(d <= 111){
    console.log(`${d / 5}`)
    d ++
}
// Page Number 109 - 112 
// Problem Number 6  

console.log("--- Problem Number 6 , print 5 to 50 number by using while loop and print total numnber ---")
let m : number = 5 
let total : number = 0 
while(m<=50){
    total += m 
    m++
}
console.log(`Total number is : ${total}`)

// Problem Number 7 
console.log("--- Problem Number 7 , use roll number 1 to 50 in school and print total number of student by using while loop ---")
let s : number = 1 
let totalStudent : number = 0 
while(s <= 50){
    totalStudent += s 
    s++
}
console.log(`Total number of student is : ${totalStudent}`)

// Problem Number 8 
console.log("--- Problem Number 8 , print 20 t0 50 student roll number by using while and print their total number ---")
let r : number = 20 
let totalRollNumber : number = 0 
while(r <= 50){
    totalRollNumber += r
    console.log(`current roll number after adding : ${r} : ${totalRollNumber}`)
    r++
}
console.log(`Total roll Number of student is : ${totalRollNumber}`)

// Page Number 112 - 114
// Problem of Classic for Loop 
// Problem Number 1 
console.log("--- Problem Number 1 , print 150 to 170 number by using classical for loop ---")
const limit1 : number = 170 
for(let i : number = 150 ; i <= limit1 ; i ++){
    console.log(`${i}`)
}
console.log()
// Problem Number 2 
console.log("--- Problem Number2 , make a list of roll number 31 to 58 and print total number of them by using classical for loop ---")
let totalRoll : number = 0 
for(let i : number = 31 ; i <= 58 ; i ++){
    totalRoll += i
}
console.log(`Total roll numbers from 31 to 58 is : ${totalRoll}`)

// Problem Number 3 
console.log("--- Problem Number 3 , use 25 to 50 number and print total number of them by using classical for loop ---")
let totalNumber : number = 0 
for(let i : number = 25 ; i <= 50 ; i ++){
    totalNumber += i 
}
console.log(`Total numbers from 25 to 50 is : ${totalNumber}`)