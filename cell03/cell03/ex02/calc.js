// 1. แจ้งเตือนทุกๆ 30 วินาทีตามเงื่อนไข
setInterval(function() {
    alert('Please, use me...');
}, 30000);

// 2. ฟังก์ชันหลักสำหรับคำนวณเมื่อกดปุ่ม 'Try me!'
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    const leftInput = document.getElementById('leftNum').value;
    const rightInput = document.getElementById('rightNum').value;
    const operator = document.getElementById('operator').value;

    // ตรวจสอบว่าเป็นจำนวนเต็มบวกหรือ 0 เท่านั้น (ใช้ RegEx เช็คเลข 0 ถึง 9 เท่านั้น)
    const isPositiveInteger = /^\d+$/;

    if (!isPositiveInteger.test(leftInput) || !isPositiveInteger.test(rightInput)) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    // แปลงค่าเป็นตัวเลข Integer
    const num1 = parseInt(leftInput, 10);
    const num2 = parseInt(rightInput, 10);
    let result;

    // ตรวจสอบกรณีหารหรือ mod ด้วย 0
    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // ทำการคำนวณตามตัวดำเนินการ
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    // แสดงผลลัพธ์ผ่าน alert และ console.log
    alert(result);
    console.log(result);
});
