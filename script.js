// Toggle mobile menu with slide
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
  menu.classList.toggle("translate-x-0");
  overlay.classList.toggle("hidden");
});

// اغلاق القائمة عند الضغط على الأوفرلاي
overlay.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
  menu.classList.remove("translate-x-0");
  overlay.classList.add("hidden");
});

// Active link
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    // إزالة الـ active من كل اللينكات
    links.forEach((l) => l.classList.remove("text-blue-600", "font-bold"));

    // إضافة active للينك اللي اتضغط عليه
    link.classList.add("text-blue-600", "font-bold");

    // قفل المينيو بعد الضغط (في الموبايل بس)
    menu.classList.add("-translate-x-full");
    menu.classList.remove("translate-x-0");
    overlay.classList.add("hidden");
  });
});

// Toggle Language Button
const langBtns = document.querySelectorAll("#langBtn, #langBtnMobile");
langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "العربية" ? "English" : "العربية";
  });
});
