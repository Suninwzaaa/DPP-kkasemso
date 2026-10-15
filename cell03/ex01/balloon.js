const balloon = document.getElementById('balloon');

// กำหนดตัวแปรเก็บค่าขนาดและลำดับสี (0 = แดง, 1 = เขียว, 2 = ฟ้า)
let currentSize = 200;
let colorIndex = 0; 
const colors = ['red', 'green', 'blue'];

// 1. ฟังก์ชันเมื่อคลิกที่ลูกโป่ง
balloon.addEventListener('click', function() {
    currentSize += 10; // ขยายขึ้น 10px

    // ถ้าขนาดเกิน 420px ให้รีเซ็ตกลับมาที่ 200px (ระเบิด)
    if (currentSize > 420) {
        currentSize = 200;
    }

    // อัปเดตขนาดความกว้างและความสูง
    updateBalloonStyle();

    // เปลี่ยนสีไปข้างหน้า (แดง -> เขียว -> ฟ้า -> วนกลับมาแดง)
    colorIndex = (colorIndex + 1) % 3;
    updateBalloonColor();
});

// 2. ฟังก์ชันเมื่อเอาเมาส์ออกจากลูกโป่ง (Mouse leave)
balloon.addEventListener('mouseleave', function() {
    // หดลง 5px แต่ต้องไม่ต่ำกว่า 200px
    if (currentSize > 200) {
        currentSize -= 5;
        if (currentSize < 200) {
            currentSize = 200;
        }
    }

    // อัปเดตขนาด
    updateBalloonStyle();

    // เปลี่ยนตีย้อนกลับ (ฟ้า -> เขียว -> แดง)
    colorIndex = (colorIndex - 1 + 3) % 3;
    updateBalloonColor();
});

// ฟังก์ชันอัปเดตขนาดกว้าง ยาว
function updateBalloonStyle() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
}

// ฟังก์ชันอัปเดตสีตามลำดับอาร์เรย์
function updateBalloonColor() {
    balloon.style.backgroundColor = colors[colorIndex];
}
