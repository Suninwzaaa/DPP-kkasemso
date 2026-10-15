
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        themeBtn.textContent = 'โหมดมืด';
    } else {
        themeBtn.textContent = 'โหมดสว่าง';
    }
});


const calcBtn = document.getElementById('calcBtn');
const resultBox = document.getElementById('resultBox');

calcBtn.addEventListener('click', function() {
    const days = parseInt(document.getElementById('days').value);
    const people = parseInt(document.getElementById('people').value);

    if (isNaN(days) || isNaN(people) || days <= 0 || people <= 0) {
        resultBox.textContent = 'กรุณากรอกตัวเลขที่ถูกต้อง (ต้องมากกว่า 0)';
        return;
    }

    
    const estimatedCost = days * people * 1500;

    resultBox.innerHTML = `ประมาณการค่าใช้จ่ายสำหรับ ${people} คน (${days} วัน):<br><strong>${estimatedCost.toLocaleString()} บาท</strong>`;
});