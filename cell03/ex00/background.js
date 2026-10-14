// ดึงปุ่มมาจาก HTML ด้วย id
const button = document.getElementById('colorButton');

// สร้างฟังก์ชันสำหรับสุ่มเลขสี Hex (เช่น #FF5733)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เพิ่ม Event Listener ให้ปุ่มทำงานเมื่อถูกคลิก
button.addEventListener('click', function() {
    // เปลี่ยนสีพื้นหลังของ body เป็นสีที่สุ่มได้
    document.body.style.backgroundColor = getRandomColor();
});
