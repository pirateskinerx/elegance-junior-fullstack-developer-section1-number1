function findMissingNumber(arr) {
    // เช็คว่ามีค่าน้อยกว่า 2 หรือไม่
    if (arr.length < 2) {
        return null; 
    }
    
    // เช็คว่าค่าเริ่มต้นหรือค่าสุดท้ายตรงกับค่าที่ควรจะเป็นหรือไม่
    if (arr[0] !== Math.min(...arr) || arr[arr.length - 1] !== Math.max(...arr)) {
        return null;
    }
    
    // คำนวณผลรวมที่ควรจะเป็น
    const first = arr[0]; // ค่าเริ่มต้นของอาเรย์
    const last = arr[arr.length - 1]; // ค่าสุดท้ายของอาเรย์
    const expectedSum = ((last - first + 1) * (first + last)) / 2; // สูตรนี้จะหาผลรวมของอาเรย์ที่มีค่าที่ขาดไป
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // หาผลรวมที่เป็นจริงในอาเรย์
    
    const missingNumber = expectedSum - actualSum; // หาค่าที่ขาดไป
    
    // ตรวจสอบว่าค่าที่ขาดไปอยู่ในช่วงของอาเรย์หรือไม่
    return (arr[0] <= missingNumber && missingNumber <= arr[arr.length - 1]) 
           ? missingNumber  // ถ้าอยู่ในช่วงของอาเรย์ก็จะ return ค่าที่ขาดไป
           : "None"; // ถ้าไม่อยู่ในช่วงของอาเรย์ก็จะ return None
}

// ตัวอย่างการใช้งาน
const testCases = [
    [1, 2, 4, 5, 6],     // return 3
    [10, 11, 12, 14],    // return 13
    [3, 4, 5, 6, 7],     // return None
    [1, 3]               // return 2
];

// ตัวอย่างการทำงาน
testCases.forEach(testCase => {
    const result = findMissingNumber(testCase); // ทำการหาค่าที่ขาดไป
    console.log(`Input: ${testCase}, Missing Number: ${result}`); // แสดงผลลัพธ์
});