const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// โหลดข้อมูลจาก Cookie ทันทีที่เปิดหน้าเว็บ
window.onload = function() {
    const savedTodos = getCookie('todos');
    if (savedTodos) {
        // แปลง JSON string กลับเป็นอาเรย์แล้วนำมาแสดงผล
        try {
            const todoArray = JSON.parse(savedTodos);
            // โหลดเรียงย้อนกลับเพื่อให้ลำดับล่าสุดอยู่บนสุด
            todoArray.forEach(todoText => {
                createTodoElement(todoText, false);
            });
        } catch (e) {
            console.error(e);
        }
    }
};

// ฟังก์ชันคลิกปุ่ม 'New'
newBtn.addEventListener('click', function() {
    const input = prompt('Enter a new TO DO:');
    if (input !== null && input.trim() !== '') {
        createTodoElement(input.trim(), true);
        saveTodosToCookie();
    }
});

// ฟังก์ชันสร้าง Element ของ To-Do และเพิ่มเข้า DOM
function createTodoElement(text, prepend = true) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    // เมื่อคลิกที่ To-Do ให้ถามยืนยันเพื่อลบ
    todoDiv.addEventListener('click', function() {
        if (confirm('Do you really want to remove this TO DO?')) {
            ftList.removeChild(todoDiv);
            saveTodosToCookie();
        }
    });

    if (prepend) {
        ftList.insertBefore(todoDiv, ftList.firstChild); // เอาไว้บนสุด
    } else {
        ftList.appendChild(todoDiv);
    }
}

// ฟังก์ชันบันทึกรายการทั้งหมดลงใน Cookie (เก็บไว้ 7 วัน)
function saveTodosToCookie() {
    const todoDivs = ftList.getElementsByTagName('div');
    const todoArray = [];
    for (let i = 0; i < todoDivs.length; i++) {
        todoArray.push(todoDivs[i].textContent);
    }
    
    const jsonString = JSON.stringify(todoArray);
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000)); // อายุ 7 วัน
    let expires = "expires=" + d.toUTCString();
    document.cookie = "todos=" + encodeURIComponent(jsonString) + ";" + expires + ";path=/";
}

// ฟังก์ชันอ่านค่า Cookie ตามชื่อ
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
