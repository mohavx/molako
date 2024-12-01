// يمكن إضافة ميزات أخرى إن لزم
console.log("تم تحميل الصفحة بنجاح!");
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // منع السلوك الافتراضي للنقر على الروابط
        const targetId = this.getAttribute('href'); // الحصول على الـ id من الرابط
        const targetElement = document.querySelector(targetId); // العنصر الهدف

        // التمرير إلى العنصر الهدف بسلاسة
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll(".animate__animated");

    window.addEventListener("scroll", () => {
        animatedTexts.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add("animate__flip");
            } else {
                element.classList.remove("animate__flip"); // إعادة تعيين الأنيميشن
            }
        });
    });
});
