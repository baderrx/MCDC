// ========== 📛 أسماء الفنادق (34 اسم) ==========
// ✏️ غيّر الأسماء هنا كما تريد
const hotelNames = [
    "Al Safwah Orchidée", "Lumière de la piété ", "Tour de l'espoir ", " Hôtel Razana Al Hafayer", " Hôtel Zawwar Al Mashaaer", "   Hôtel Royal Majestic La Mecque", "    Hôtel Maisan Al Mashaaer", "Hôtel Oasis Al Musk", "Hôtel Al Iba", " Hôtel Elaf Ajyad",
    "Tour Meridien La Mecque", "Hôtel Burj Al Alam", "Marriott Jabal Omar", " Hôtel Manazil Luluat Al Hijaz", " Hôtel Prestige Ajyad", "Aknan Al Safa 3", " Hôtel Atyaf Al Khair", " Hôtel Anjum La Mecque", " Hôtel Safir Al Musk", " Akaber Al Hijra",
    " Hôtel Elaf Kinda", " Hôtel Al Safwah Tour 1", " Hôtel Diyar Al Diyafah", " Hôtel Rawhat Al Maqam", "Hôtel Nuzul Bakka", " Société hôtelière Abraj Al Tala'i", " Hôtel Burhan Al Huda", " Hôtel et Tours La Mecque", " Marriott Courtyard", " Fouco La Mecque",
    " Hôtel M La Mecque par Millennium", " Hôtel Pullman Zamzam La Mecque", " Hôtel Nasamat La Mecque", " Hôtel Burhan Al Diyafah"
];

// ========== الصور في الأعلى ==========
const topLeftImage = "img/KS.png";
const topCenterImage = "img/MCDC.jpeg";
const topRightImage = "img/SN.png";

// الشعارات الإضافية
const extraLogos = [
    "https://via.placeholder.com/50x50?text=شعار1",
    "https://via.placeholder.com/50x50?text=شعار2",
    "https://via.placeholder.com/50x50?text=شعار3",
    "https://via.placeholder.com/50x50?text=شعار4"
];

// ========== صور موقع الشركة ==========
const companyImage = "img/HEAD.jpeg";
const companyLink = "https://maps.app.goo.gl/QzhkZYZS1Q8LveV97";

// ========== صور الفنادق (34 صورة) ==========
const hotelImages = [
    "img/1.jpeg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/24.jpg","img/9.png","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.png","img/15.jpg","img/16.jpg",
    "img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg","img/22.jpg","img/23.jpg","img/24.jpg","img/25.jpg","img/26.jpeg","img/27.jpg","img/28.jpg","img/29.jpg","img/30.jpg","img/31.png",
    "img/32.jpg","img/33.jpg","img/34.jpg"
];

// ========== روابط الفنادق (34 رابط) ==========
const hotelLinks = [
    "https://maps.app.goo.gl/GNKLB1qTGwwwTyKb8", "https://maps.app.goo.gl/RW8TwGoJ25QFXWuWA", "https://maps.app.goo.gl/YkwS7YXn4QHB2jkf6", "https://maps.app.goo.gl/qrbPuVcZQuhbPjaYA",
    "https://maps.app.goo.gl/8BUGYLef5YfmTqYq8", "https://maps.app.goo.gl/68yZUykYtpPxEHdr6", "https://maps.app.goo.gl/8pM6g1EFhb5fs1Jg6", "https://maps.app.goo.gl/u8rNdWQw1NGbdtEq7",
    "https://maps.app.goo.gl/kwke8srr2wszSBP79", "https://maps.app.goo.gl/fFVfQwDZtsGiuKmk8", "https://maps.app.goo.gl/PGLpRQYZJbYSCJVN9", "https://maps.app.goo.gl/momfwmKDSj8kFo1s8",
    "https://maps.app.goo.gl/CCjcnvTxZB5hmU7S8", "https://maps.app.goo.gl/7WTMzLajPabddU8J9", "https://maps.app.goo.gl/5SQjSrDyhUBRdz7k9", "https://maps.app.goo.gl/r7ENm9CP5dGbCaiy6",
    "https://maps.app.goo.gl/qqWSFevtWKmxPaj36", "https://maps.app.goo.gl/SxiuzKdZuKAsRy3Z9", "https://maps.app.goo.gl/gXAtjrMwW3DfPmgy6", "https://maps.app.goo.gl/882JEGTPcatpCxCY7",
    "https://maps.app.goo.gl/SadCmTKXsSZQVi7v8", "https://maps.app.goo.gl/GCb8FBf2TPz4N6R38", "https://maps.app.goo.gl/VurwcsK38gpbsHJJ7", "https://maps.app.goo.gl/KFczYNpcS5GR9XVH7",
    "https://maps.app.goo.gl/CjvGxF2BVYyJ6257A", "https://maps.app.goo.gl/tvzwFipcDJhAnDaW6", "https://maps.app.goo.gl/bYyL1VYJsD2MWwdj8", "https://maps.app.goo.gl/WV9n3KWi2ZT8FmGc6",
    "https://maps.app.goo.gl/BEZRiKb3gqvCS9sh6", "https://maps.app.goo.gl/9SvgVSz3kTLwhfyZ7", "https://maps.app.goo.gl/5PcgAnKd7wAE5wHG9", "https://maps.app.goo.gl/wNuWaV67nmD6C27G7",
    "https://maps.app.goo.gl/ydFMJBw1uBM512rG6","https://maps.app.goo.gl/RQX1Nq24hYMXfP8N9"
];

// ========== أعداد الفنادق لكل قسم ==========
const CENTER_8_COUNT = 14;
const CENTER_9_COUNT = 12;
const CENTER_10_COUNT = 8;

// ========== صور وروابط المخيمات ==========
const arafatImage = "img/arf.jpeg ";
const minaImage = "img/mn.jpeg";
const arafatLink = "https://maps.app.goo.gl/JuQ7Y6mFDTq4SdQd6";
const minaLink = "https://www.google.com/maps?q=21.411056518554688,39.89848709106445&z=17&hl=ar";

const PHONE_NUMBER = "+966500131744";

// ========== تهيئة الصفحة ==========
document.addEventListener('DOMContentLoaded', function() {
    // تعيين الصور الثلاث في الأعلى
    const leftImg = document.getElementById('topLeftImage');
    const centerImg = document.getElementById('topCenterImage');
    const rightImg = document.getElementById('topRightImage');
    if (leftImg) leftImg.src = topLeftImage;
    if (centerImg) centerImg.src = topCenterImage;
    if (rightImg) rightImg.src = topRightImage;
    
    // تعيين الشعارات الإضافية
    const logosRow = document.getElementById('logosRow');
    if (logosRow) {
        logosRow.innerHTML = '';
        extraLogos.forEach((logoUrl, index) => {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'logo-item';
            const logoImg = document.createElement('img');
            logoImg.src = logoUrl;
            logoImg.alt = `شعار ${index + 1}`;
            logoDiv.appendChild(logoImg);
            logosRow.appendChild(logoDiv);
        });
    }
    
    // تعيين صورة موقع الشركة
    const companyImg = document.getElementById('companyImage');
    if (companyImg) companyImg.src = companyImage;
    
    // تعيين صور المخيمات
    const arafatImg = document.getElementById('arafatImage');
    const minaImg = document.getElementById('minaImage');
    if (arafatImg) arafatImg.src = arafatImage;
    if (minaImg) minaImg.src = minaImage;
    
    // عرض الفنادق مقسمة
    renderHotelsSections();
    setupCampsButtons();
    setupEventListeners();
});

// عرض الفنادق مقسمة
function renderHotelsSections() {
    const center8Grid = document.getElementById('center8Grid');
    if (center8Grid) {
        center8Grid.innerHTML = '';
        for (let i = 0; i < CENTER_8_COUNT; i++) {
            center8Grid.appendChild(createHotelItem(i));
        }
    }
    
    const center9Grid = document.getElementById('center9Grid');
    if (center9Grid) {
        center9Grid.innerHTML = '';
        for (let i = CENTER_8_COUNT; i < CENTER_8_COUNT + CENTER_9_COUNT; i++) {
            center9Grid.appendChild(createHotelItem(i));
        }
    }
    
    const center10Grid = document.getElementById('center10Grid');
    if (center10Grid) {
        center10Grid.innerHTML = '';
        for (let i = CENTER_8_COUNT + CENTER_9_COUNT; i < 34; i++) {
            center10Grid.appendChild(createHotelItem(i));
        }
    }
}

// إنشاء عنصر فندق واحد باستخدام الأسماء من المصفوفة
function createHotelItem(index) {
    const hotelDiv = document.createElement('div');
    hotelDiv.className = 'hotel-item';
    
    const imgDiv = document.createElement('div');
    imgDiv.className = 'hotel-image';
    const img = document.createElement('img');
    img.src = hotelImages[index];
    img.alt = hotelNames[index];
    imgDiv.appendChild(img);
    
    const nameSpan = document.createElement('div');
    nameSpan.className = 'hotel-name';
    nameSpan.textContent = hotelNames[index];
    
    hotelDiv.appendChild(imgDiv);
    hotelDiv.appendChild(nameSpan);
    
    hotelDiv.addEventListener('click', function() {
        const link = hotelLinks[index];
        if (link && link !== "https://example.com/hotel" + (index+1)) {
            window.open(link, '_blank');
        } else {
            alert(`عذراً، لم يتم تعيين رابط للفندق ${hotelNames[index]} بعد`);
        }
    });
    
    return hotelDiv;
}

// إعداد أزرار المخيمات والمركز
function setupCampsButtons() {
    const arafatBtn = document.getElementById('arafatBtn');
    const minaBtn = document.getElementById('minaBtn');
    const companyLocation = document.getElementById('companyLocationBtn');
    
    if (arafatBtn) {
        arafatBtn.addEventListener('click', () => window.open(arafatLink, '_blank'));
    }
    if (minaBtn) {
        minaBtn.addEventListener('click', () => window.open(minaLink, '_blank'));
    }
    if (companyLocation) {
        companyLocation.addEventListener('click', () => window.open(companyLink, '_blank'));
    }
}

// إعدادات أزرار التواصل (تم تحديث الرقم إلى 055333907)
function setupEventListeners() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://wa.me/${PHONE_NUMBER}?text=السلام%20عليكم%20أرغب%20بالاستفسار`, '_blank');
        });
    }
    
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `tel:${PHONE_NUMBER}`;
        });
    }
}

console.log('✅ مركز 10-9-8 سنغال - جاهز، يمكنك تغيير أسماء الفنادق من مصفوفة hotelNames');
