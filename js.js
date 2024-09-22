const translations = {
    vi: {
        name: "Chào, tôi là Dat",
        quote: "Chinh phục công nghệ, sáng tạo không giới hạn",
        explore: "Khám phá",
        about-title: "Về tôi",
        about-description: "Tôi là Dat, một freelancer làm linh tinh. Từ phát triển web đến thiết kế sáng tạo, tôi thích khám phá nhiều lĩnh vực công nghệ và hiện thực hóa ý tưởng.",
        profile-title: "Thông tin cá nhân",
        sleep: "Ngủ",
        study: "Học Ngủ",
        highschool: "Tốt nghiệp Trường THPT Việt Nam - Ba Lan",
        live: "Sống tại",
        status: "Tình trạng",
        portfolio: "Hồ sơ cá nhân"
    },
    en: {
        name: "Hi, I am Dat",
        quote: "Conquering technology, limitless creativity",
        explore: "Explore",
        about-title: "About Me",
        about-description: "I am Dat, a freelancer who does a bit of everything. From web development to creative design, I love exploring different areas of technology and bringing ideas to life.",
        profile-title: "Personal Info",
        sleep: "Sleep",
        study: "Studied Sleep",
        highschool: "Went to Vietnam - Poland High School",
        live: "Lives in",
        status: "Single",
        portfolio: "Portfolio"
    }
};

document.getElementById('language').addEventListener('change', function() {
    const language = this.value;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
});
