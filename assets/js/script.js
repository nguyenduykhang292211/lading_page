document.addEventListener('DOMContentLoaded', () => {
    // ===================== i18n Translations =====================
    const translations = {
        vi: {
            // Navbar
            nav_home: 'Trang chủ',
            nav_about: 'Triết lý',
            nav_services: 'Dịch vụ',
            nav_team: 'Đội ngũ',
            nav_cta: 'Mở Tài Khoản Ngay',

            // Hero
            hero_badge: '🌟 Đội Ngũ Xuất Sắc VietWealth 2025',
            hero_title: 'Đầu Tư Khôn Ngoan,<br> Sinh Lời <span class="highlight">Bền Vững</span>.',
            hero_desc: 'Đồng hành cùng đội ngũ chuyên gia hàng đầu tại VietWealth. Chúng tôi mang đến giải pháp quản lý tài sản tối ưu, nhận định dòng tiền nhạy bén và chiến lược đầu tư sắc sảo nhất.',
            hero_cta1: 'Nhận Tư Vấn Miễn Phí',
            hero_cta2: 'Khám Phá Dịch Vụ',
            hero_stat1: 'Lợi Nhuận TB/Năm',
            hero_stat2: 'Hiệu Suất 2025',

            // Ticker
            ticker_1: 'VietWealth - Uy tín hơn 25 năm',
            ticker_2: 'Khuyến nghị độc quyền Room VIP',
            ticker_3: 'Mở tài khoản eKYC trong 3 phút',
            ticker_4: 'Báo cáo vĩ mô và chiến lược định kỳ',

            // About
            about_title: 'Triết Lý <span class="highlight">Đầu Tư</span>',
            about_subtitle: 'Khác biệt tạo nên sự an tâm và lợi nhuận vượt trội trên thị trường',
            about_card1_title: 'Quản Trị Rủi Ro Kỷ Luật',
            about_card1_desc: 'Bảo vệ vốn là quy tắc sống còn. Chúng tôi xây dựng danh mục với biên an toàn cao, thiết lập kỷ luật cắt lỗ rõ ràng trước khi nhắm đến lợi nhuận.',
            about_card2_title: 'Tăng Trưởng Giá Trị',
            about_card2_desc: 'Sàng lọc khắt khe các doanh nghiệp có nền tảng cơ bản vững chắc, hưởng lợi từ vĩ mô và có chất xúc tác (catalyst) tăng trưởng rõ ràng.',
            about_card3_title: 'Nhạy Bén Dòng Tiền',
            about_card3_desc: 'Kết hợp phân tích kỹ thuật và dấu chân dòng tiền thông minh (Smart Money) để tối ưu hóa điểm ra/vào lệnh, đón đầu các sóng ngành.',

            // Stats
            stat_profit: 'Lợi Nhuận TB/Năm',
            stat_exp: 'Năm Kinh Nghiệm',

            // Services
            services_title: 'Dịch Vụ <span class="highlight">Đặc Quyền</span>',
            services_subtitle: 'Hệ sinh thái giải pháp tài chính cá nhân hóa',
            svc1_title: 'Tư Vấn Room VIP (Real-time)',
            svc1_desc: 'Cập nhật tín hiệu giao dịch, điểm mua/bán chi tiết và nhận định thị trường bám sát từng phút ngay trong phiên giao dịch qua Zalo/Telegram.',
            svc1_li1: '✓ Khuyến nghị rõ ràng giá Mua/Bán',
            svc1_li2: '✓ Cảnh báo rủi ro tức thời',
            svc1_li3: '✓ Hỏi đáp danh mục 1-1',
            svc2_title: 'Thiết Kế & Quản Lý Danh Mục',
            svc2_desc: 'Giải pháp tối ưu cho khách hàng bận rộn. Chúng tôi phân bổ tài sản dựa trên khẩu vị rủi ro và mục tiêu tài chính của riêng bạn.',
            svc2_li1: '✓ Cơ cấu lại danh mục đang kẹp lỗ',
            svc2_li2: '✓ Phân bổ vốn theo tỷ lệ chuẩn',
            svc2_li3: '✓ Review danh mục định kỳ',
            svc3_title: 'Báo Cáo Phân Tích Độc Quyền',
            svc3_desc: 'Nhận các báo cáo phân tích vĩ mô, ngành và định giá doanh nghiệp chuyên sâu độc quyền từ đội ngũ Phân tích VietWealth.',
            svc3_li1: '✓ Báo cáo chiến lược đầu tháng',
            svc3_li2: '✓ Cập nhật KQKD quý sớm nhất',
            svc3_li3: '✓ Định giá cổ phiếu tiềm năng',

            // Team
            team_title: 'Đội Ngũ <span class="highlight">Chuyên Gia</span>',
            team_subtitle: 'Những người "thuyền trưởng" dẫn dắt danh mục của bạn qua mọi con sóng',
            member1_role: 'Trưởng Bộ phận Tư vấn Đầu tư',
            member2_role: 'Chuyên viên Tư vấn Tài chính',
            member3_role: 'Chuyên viên Tư vấn Tài chính',
            member4_role: 'Chuyên viên Phân tích Đầu tư',
            member5_role: 'Chuyên viên Tư vấn Tài chính',

            // CTA
            cta_title: 'Không Còn Phải Đầu Tư TrONG <span class="highlight">Lo Lắng</span>',
            cta_desc: 'Hãy để chúng tôi giúp bạn xây dựng một danh mục phòng thủ vững chắc khi thị trường giảm, và tấn công quyết liệt khi cơ hội đến.',
            cta_btn: 'Tham Gia Room Zalo Trải Nghiệm',

            // Contact
            contact_title: 'Đồng Hành Cùng <span class="highlight">VietWealth</span>',
            contact_desc: 'Điền form dưới đây để đăng ký mở tài khoản (miễn phí) hoặc nhận một bản review danh mục hiện tại của bạn từ các chuyên gia.',
            contact_office_label: 'Văn phòng:',
            form_name_label: 'Họ và Tên *',
            form_name_placeholder: 'Ví dụ: Nguyễn Văn A',
            form_phone_label: 'Số điện thoại / Zalo *',
            form_demand_label: 'Nhu cầu của bạn',
            form_opt1: 'Mở tài khoản giao dịch mới',
            form_opt2: 'Chuyển ID môi giới về VietWealth',
            form_opt3: 'Tư vấn cơ cấu lại danh mục',
            form_submit: 'Gửi Yêu Cầu Tư Vấn',

            // Footer
            footer_desc: 'Giải pháp đầu tư chứng khoán chuyên nghiệp, minh bạch và hiệu quả.',
            footer_explore: 'Khám Phá',
            footer_about: 'Về chúng tôi',
            footer_services: 'Dịch vụ',
            footer_team: 'Đội ngũ chuyên gia',
            footer_support: 'Hỗ trợ',
            footer_guide: 'Hướng dẫn mở tài khoản',
            footer_fees: 'Bảng phí giao dịch',
            footer_disclaimer: 'Miễn trừ trách nhiệm',
            footer_copy: '© 2026 Bản quyền thuộc về Nhóm Môi Giới VietWealth. Không phải là lời khuyên đầu tư bắt buộc.',

            // Form success/error
            form_processing: 'Đang xử lý',
            form_success: 'Thành công! Cảm ơn bạn.',
            form_error: 'Có lỗi kết nối, vui lòng thử lại!',
        },
        en: {
            // Navbar
            nav_home: 'Home',
            nav_about: 'Philosophy',
            nav_services: 'Services',
            nav_team: 'Team',
            nav_cta: 'Open Account Now',

            // Hero
            hero_badge: '🌟 VietWealth Outstanding Team 2025',
            hero_title: 'Invest Wisely,<br> Earn <span class="highlight">Sustainably</span>.',
            hero_desc: 'Partner with top experts at VietWealth. We deliver optimal asset management, sharp cash flow insights and the smartest investment strategies.',
            hero_cta1: 'Get Free Consultation',
            hero_cta2: 'Explore Services',
            hero_stat1: 'Avg. Return/Year',
            hero_stat2: 'Performance 2025',

            // Ticker
            ticker_1: 'VietWealth - Trusted for 25+ years',
            ticker_2: 'Exclusive VIP Room recommendations',
            ticker_3: 'Open eKYC account in 3 minutes',
            ticker_4: 'Macro reports & periodic strategies',

            // About
            about_title: 'Investment <span class="highlight">Philosophy</span>',
            about_subtitle: 'The difference that brings peace of mind and outstanding returns',
            about_card1_title: 'Disciplined Risk Management',
            about_card1_desc: 'Capital protection is the golden rule. We build portfolios with high safety margins and strict stop-loss discipline before targeting returns.',
            about_card2_title: 'Value Growth',
            about_card2_desc: 'Rigorous screening for companies with strong fundamentals, macro tailwinds and clear growth catalysts.',
            about_card3_title: 'Smart Money Flow',
            about_card3_desc: 'Combining technical analysis and Smart Money footprint tracking to optimize entry/exit points and ride sector waves.',

            // Stats
            stat_profit: 'Avg. Return/Year',
            stat_exp: 'Years of Experience',

            // Services
            services_title: 'Premium <span class="highlight">Services</span>',
            services_subtitle: 'Personalized financial solution ecosystem',
            svc1_title: 'VIP Room Advisory (Real-time)',
            svc1_desc: 'Real-time trade signals, detailed buy/sell levels and market insights every minute during trading sessions via Zalo/Telegram.',
            svc1_li1: '✓ Clear Buy/Sell recommendations',
            svc1_li2: '✓ Instant risk alerts',
            svc1_li3: '✓ 1-on-1 portfolio Q&A',
            svc2_title: 'Portfolio Design & Management',
            svc2_desc: 'Optimal solution for busy clients. We allocate assets based on your personal risk appetite and financial goals.',
            svc2_li1: '✓ Restructure losing portfolios',
            svc2_li2: '✓ Standard capital allocation',
            svc2_li3: '✓ Periodic portfolio reviews',
            svc3_title: 'Exclusive Analysis Reports',
            svc3_desc: 'Receive in-depth macro, sector and company valuation reports exclusively from the VietWealth analysis team.',
            svc3_li1: '✓ Monthly strategy reports',
            svc3_li2: '✓ Earliest quarterly earnings updates',
            svc3_li3: '✓ Stock valuation picks',

            // Team
            team_title: 'Expert <span class="highlight">Team</span>',
            team_subtitle: 'The "captains" steering your portfolio through every market wave',
            member1_role: 'Head of Investment Advisory',
            member2_role: 'Financial Advisor',
            member3_role: 'Financial Advisor',
            member4_role: 'Financial Analyst',
            member5_role: 'Financial Advisor',

            // CTA
            cta_title: 'No More Investing IN <span class="highlight">Fear</span>',
            cta_desc: 'Let us help you build a solid defensive portfolio when the market dips, and attack decisively when opportunity strikes.',
            cta_btn: 'Join Zalo Experience Room',

            // Contact
            contact_title: 'Partner With <span class="highlight">VietWealth</span>',
            contact_desc: 'Fill the form below to register for a free account or receive a portfolio review from our experts.',
            contact_office_label: 'Office:',
            form_name_label: 'Full Name *',
            form_name_placeholder: 'E.g. John Doe',
            form_phone_label: 'Phone / Zalo *',
            form_demand_label: 'Your needs',
            form_opt1: 'Open a new trading account',
            form_opt2: 'Transfer brokerage ID to VietWealth',
            form_opt3: 'Portfolio restructuring advisory',
            form_submit: 'Submit Consultation Request',

            // Footer
            footer_desc: 'Professional, transparent and effective stock investment solutions.',
            footer_explore: 'Explore',
            footer_about: 'About Us',
            footer_services: 'Services',
            footer_team: 'Expert Team',
            footer_support: 'Support',
            footer_guide: 'Account opening guide',
            footer_fees: 'Transaction fees',
            footer_disclaimer: 'Disclaimer',
            footer_copy: '© 2026 VietWealth Brokerage Team. This is not mandatory investment advice.',

            // Form success/error
            form_processing: 'Processing',
            form_success: 'Success! Thank you.',
            form_error: 'Connection error, please try again!',
        }
    };

    let currentLang = localStorage.getItem('vietwealth_lang') || 'vi';

    function applyTranslations(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Handle placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang;

        // Update page title
        if (lang === 'en') {
            document.title = 'Professional Brokerage Team | VietWealth';
        } else {
            document.title = 'Đội Ngũ Môi Giới Chuyên Nghiệp | VietWealth';
        }

        // Toggle active class on lang options
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        currentLang = lang;
        localStorage.setItem('vietwealth_lang', lang);
    }

    // Language toggle event
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            if (lang !== currentLang) {
                applyTranslations(lang);
            }
        });
    });

    // Apply saved language on load
    applyTranslations(currentLang);

    // ===================== Original Functionality =====================

    // 1. Navbar scroll effect & Mobile Menu
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counter animation if it's a stat item
                const counters = entry.target.querySelectorAll('.counter');
                if (counters.length > 0) {
                    counters.forEach(counter => {
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;
                            const inc = target / 50; // Speed of counting

                            if (count < target) {
                                counter.innerText = Math.ceil(count + inc);
                                setTimeout(updateCount, 40);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Form submission handled via Netlify Forms (AJAX)
    const form = document.getElementById('leadForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            const dict = translations[currentLang];

            btn.innerHTML = `${dict.form_processing} <span style="display:inline-block; animation: pulse 1s infinite">...</span>`;
            btn.disabled = true;
            btn.style.opacity = '0.8';

            const formData = new FormData(form);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
                .then(() => {
                    btn.style.backgroundColor = '#10b981'; // Success green
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                    btn.textContent = dict.form_success;
                    btn.style.opacity = '1';

                    form.reset();

                    setTimeout(() => {
                        btn.style.backgroundColor = '';
                        btn.style.color = '';
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error);
                    btn.textContent = dict.form_error;
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.opacity = '1';
                    }, 3000);
                });
        });
    }

    // 4. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close mobile menu if open
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
