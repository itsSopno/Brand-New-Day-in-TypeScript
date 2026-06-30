"use strict";
// ==========================================
// TypeScript Loop Practice (লুপ প্র্যাকটিস)
// ==========================================
// এই ফাইলে বিভিন্ন ধরণের Loops-এর ব্যবহার দেখানো হয়েছে।
// JavaScript-এর মতো এখানেও লুপ একই রকম, কিন্তু TypeScript-এ আমরা "Type Safety" (টাইপ সেফটি) পাই।
// 1. Classical "for" Loop (সাধারণ ফর লুপ)
// ----------------------------------------
// এখানে loop counter `i` এর টাইপ `number` নির্ধারণ করা হয়েছে।
console.log("--- 1. Classical for Loop ---");
const limit = 5;
for (let i = 0; i < limit; i++) {
    console.log(`সংখ্যা: ${i}`); // Output: ০ থেকে ৪ পর্যন্ত প্রিন্ট করবে
}
console.log();
// 2. "while" Loop (হোয়াইল লুপ)
// -----------------------------
// শর্ত সত্য হওয়া পর্যন্ত লুপটি চলতে থাকবে।
console.log("--- 2. while Loop ---");
let count = 1;
while (count <= 3) {
    console.log(`কাউন্ট: ${count}`);
    count++;
}
console.log();
// 3. "do-while" Loop (ডু-হোয়াইল লুপ)
// -----------------------------------
// এই লুপটি অন্তত একবার রান করবেই, তারপর শর্ত চেক করবে।
console.log("--- 3. do-while Loop ---");
let checkValue = 10;
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
const fruits = ["Mango", "Banana", "Orange", "Apple"];
for (const fruit of fruits) {
    console.log(`ফল: ${fruit.toUpperCase()}`); // string মেথড `.toUpperCase()` সেফলি ইউজ করা যাচ্ছে
}
console.log();
// 5. "for...in" Loop (ফর...ইন লুপ)
// -------------------------------
// Objects-এর keys (প্রোপার্টি নাম) বের করার জন্য এটি ব্যবহার করা হয়।
// এখানে TypeScript-এর `keyof` কি-ওয়ার্ড ব্যবহার করে টাইপ সেফটি বজায় রাখা হয়েছে।
console.log("--- 5. for...in Loop ---");
const developer = {
    name: "Nabail",
    age: 21,
    city: "Dhaka"
};
// key-এর টাইপ keyof User হতে হবে, যাতে ভুল key অ্যাক্সেস না হয়
for (const key in developer) {
    if (developer.hasOwnProperty(key)) {
        // developer[key as keyof User] দিয়ে আমরা ভ্যালুগুলো সেফলি বের করছি
        console.log(`${key}: ${developer[key]}`);
    }
}
console.log();
// 6. Array.prototype.forEach()
// -----------------------------
// এটি একটি built-in array method যা লুপের মতো কাজ করে।
console.log("--- 6. forEach Method ---");
const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
    console.log(`ইনডেক্স ${index}-এ আছে: ${num}`);
});
