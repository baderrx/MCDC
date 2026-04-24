// ========== 📛 أسماء الفنادق (34 اسم) ==========
// ✏️ غيّر الأسماء هنا كما تريد
const hotelNames = [
    "Al Safwah Orchidée", "Lumière de la piété ", "Tour de l'espoir ", " Hôtel Razana Al Hafayer", " Hôtel Zawwar Al Mashaaer", "   Hôtel Royal Majestic La Mecque", "    Hôtel Maisan Al Mashaaer", "Hôtel Oasis Al Musk", "Hôtel Al Iba", " Hôtel Elaf Ajyad",
    "Tour Meridien La Mecque", "Hôtel Burj Al Alam", "Marriott Jabal Omar", " Hôtel Manazil Luluat Al Hijaz", " Hôtel Prestige Ajyad", "Aknan Al Safa 3", " Hôtel Atyaf Al Khair", " Hôtel Anjum La Mecque", " Hôtel Safir Al Musk", " Akaber Al Hijra",
    " Hôtel Elaf Kinda", " Hôtel Al Safwah Tour 1", " Hôtel Diyar Al Diyafah", " Hôtel Rawhat Al Maqam", "Hôtel Nuzul Bakka", " Société hôtelière Abraj Al Tala'i", " Hôtel Burhan Al Huda", " Hôtel et Tours La Mecque", " Marriott Courtyard", " Fouco La Mecque",
    " Hôtel M La Mecque par Millennium", " Hôtel Pullman Zamzam La Mecque", " Hôtel Nasamat La Mecque", " Hôtel Burhan Al Diyafah"
];

// ========== الصور في الأعلى ==========
const topLeftImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWR1lf61gZFcWaG6f2rqA3yZUOrcd6xJLRTw&s";
const topCenterImage = "https://img.sanishtech.com/u/8deb1f8b834f4ff69cc5e992c0923c9a.jpeg";
const topRightImage = "https://flags-world.com/wp-content/uploads/2021/01/flag-of-senegal-meaning-and-colors_5.png";

// الشعارات الإضافية
const extraLogos = [
    "https://via.placeholder.com/50x50?text=شعار1",
    "https://via.placeholder.com/50x50?text=شعار2",
    "https://via.placeholder.com/50x50?text=شعار3",
    "https://via.placeholder.com/50x50?text=شعار4"
];

// ========== صور موقع الشركة ==========
const companyImage = "https://img.sanishtech.com/u/a6b7c67fcfe01294aafac9b073df48d3.jpeg";
const companyLink = "https://maps.app.goo.gl/QzhkZYZS1Q8LveV97";

// ========== صور الفنادق (34 صورة) ==========
const hotelImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGCslSfmqtGLNX7B8fDC4v445kafiiqUaib-LKDvWaEPhWoelnIXPLJrZVnXKOsL3hE0pUYbZ3ZnPWFMgPKzb56SEGaK10Mt1sfVFPzV5OJFpSPHpSr282lcPiA_CAFeeJFszMx5w=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAESybwcflTlJWyf_sySKCm-ikhDaoN4AVJlISMgG57C4wuYIfMqKSMrqx75WJgpOkFO9GJ2PXl1s6vNpfjx1rPgt4hfPa8cv9gCrT1DKQ9NwZl7NajK2g6pNSviAkqqsWaNz8Oj=w408-h544-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFHt7KrhPdZ09cm_i3BDLBTq580kKcwBS_9N6e6ScxHeinUq4CdVNPtIOi9V64eZj-AfTPwaPRFJaMfCCLIk3IqYIlkJIr-VALTEcteLXuTnBTXw_hK7muAsC4qejKEdJtP5F_E=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFltNt_SdJRIVIocDYukSW0Ikig8q7Nnrk9QGRMkX3ah2hwPeMhRGjVpYczpbs1Z7mwt1yVIAfavGucO-z_4G-J2IWZFKYTrB3rLCbzi5lkPPLPu1SaXhrOCS8Ax1FyQD8LXGx9TEBUymaM=w408-h611-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEXFogSGpB67BRofDAwGGSF3XpazFPytQaJVOH7clVoFX26SXcy4nUa1_Be1qU_S1muIPKlbJz0g-9ETFoQ1blmIb-WLRrrFmMgqY_Gns8SXKvLW3EJmTUlwUdQlFpWbGyGmNd1=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGbIiNWIX46FqWzI1yHUAwy53q35HgII1TLb1HO5eNXmWsMn2z39R-BWITm2t8ODVXC4pkEFwlvEEpcExvzUBN3cVI2hmcgxbsqx0Lfi_0LCWvzcs72NPpvlhzK3F62_YqXBPd0=w408-h544-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGH0rBOguRWhphkrbim0CwPCgj3g64YPjeh7C0mU80swS-5xEa6XxUl6OG2GnfrGllqFeaL7_UKa418wyiG-7ZjwRZHOrvPdv-PbfdN9lCyRzMJVzeU_PyRrNWKKJpz3TIRPLDlbzWmN4ac=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFtfWfZpB8HTd8Kj8JUu7d-QzhNyVf2Ly-8fsR4pMHUlxCDQhI048LqDTDsgKRTCkeP63-Hxltsanqvypqq1p1ZCgS19E0UkU01P9oaCTxBTWCEMscVGvQyhGX9T-r9Ya579k4k=w408-h272-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHBn4Amw-Mk3qCOGumPDZwsJhWymieo_6EF_0BTdIdlBgTLHvjtOoHBKBNfAHMmw3WiUszYzl-RHcJ6tiEVb_WY8pzskMymgvinHX8caqFKAz_MC6KcwPmdQ3slknKujt7oLpwF4g=w408-h408-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHwBLfGevNH2T9P5xrEZM-3dc7HyOySFwUrVXlToeWY1ZN10vBsFlZvQeh0E75t6L_bVaOXx_JEMm1pMGNzahaQOa4vr070ZdHPDHybxNCBsxeX-d5EEtedKPVIAVZVEPW6Wc5dAg=w408-h461-k-no",
    "https://lh3.googleusercontent.com/gps-proxy/ALd4DhE2puE7Bp1iLnlFyT0_OK4zvYtWviHLEn3WCjCPSYxzAHWKBCKy31yGim-EDTx0a3FdMSqJbfyMlf-1eG4BVrP8nQr9mTKxUPtRiZmr4ny52iCmbIY5Y37h-zY-BECrjda3wDsqR1gJqL-iRZB0rbQlYnrP6x8ZaZSZH62LpLLv50JW9dj-JI43=w408-h382-k-no", "https://lh3.googleusercontent.com/gps-proxy/ALd4DhEh_28q5K7Z11_6b_QyvWo93fOMEEE-2EZtxm-LU40iu3oklwnu5UucyWS0htgkv14rtkNZ3Y9stHQqXoNY9ycMI2MR2y6cLnRFamdKD_qvdoEka4xK4oCJykAf2QLSlVMLKuxycDuS1_oun_Y83VCjR3QQAh6n4blD6VG1Vh05N518Jyim1IQL=w408-h272-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG_GY5q4Tza4YerNnu5H5YWko1eiZLYtexgMiE0vacBUYOTiRM2pyI96_hj3gOKgaK-OERPi7UEB5yHe9xkP1knwuWGxqOrp8VmM1RrgdhtdlSmbTe2eNFgn7JyS6ZYKQdlhqMtMfn6Q_60=w408-h272-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbhBL8RaHNROK58OKEWKrG0TTOcPqvkCaQNevZHBPaj4ptdIbFQUmqYGNMjozXg7xZh50aE6y49e3dOPkqkuYK99gzlxC0k6G8E6hD0F1EofGz94WR0IQ6UPgaNw4KoWrGE9zhdHy3vCBH=w203-h360-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFf3svuNjXR_BmWAikA9cCbbhGT8hf6P9bhvTaT17-D3CLNpzSVR5GX87j1bop-fqi9Co2mYjihg8SXu5FIWTffGveZJNrSzbZMBrBV4Wa79f1QGq2bb1vgESkOno8dX5VaCwZYuHFU0vJo=w533-h240-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyNKTktgNRJJydPmzcx2LKE2jhvRWCa0cAEVo5pU1x4ESTFwqCVIZtgBeJkOBQoffn4XR7Vxo165T9VLFXIh9Lv2DFyy02I9G9OFNnX9TJUD7pDabA7fSZEzScxZp4MnQZUj5H0wEU2b3_=w426-h240-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHz1DyvbDjf9N2hcUBpGAVIQKLD0j5dqoHChTYRyvIygQUjDzfw6nrEstIZi4IwUjDJ9pV7lCEr-FcqEOUDs-25nUwFlM_yg0nIIio_WIoKVMTpjfeZe8v9lmYaKkk4d2--ZIDo=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFDyJl1ZiiqqXEnAG4VsqearEVqos2CrTkvDR3ZuwT_zWYrQ87fVgd3LAoDcwNgt1bLZ51FNfPNXtPZzhmPSyjdlB_YcNFiAT2jwlhwx4g5-1iidr97DGb2R-NNtyskR1pvujfpwg=w408-h271-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF3VJ4ip6EehO3xZ-9ECYURbCc5cfqsbQ6XzclYNjQ83qMCFZtgrsBzpXodQN192ekBndBVR8ENbnjpznYKmE0yRGWtiMThTCeUJxUJv7A2SEF03Yi4rt1qLLYj_40o7o90xkChew=w408-h272-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF9iGORv8KFOo7rwL_TetIvCo_c_3iTfb1ivGYg02YiuhXyO9XBgt6RPdyhCDSiLzq01gF1ly3LO0amRXOLmrfeXBRArJRlNhR4NRWeaQ8QHpF4Tn2oS_BDzWlYymB1wNtjojOczA=w408-h725-k-no",
    "https://lh3.googleusercontent.com/gps-proxy/ALd4DhHPYT2HUDx4X2Kyd8Iw6iJPZ4WBHUp6NntAiORJfwWW36Q7tM5z_WNCXoacfhuC5G74LY0EJEmeok6cStg89YPAKSUOwQV4A7BzOkMg_WZ2mIdUKWC8aUC_sCYhs0sfdYSb-L6JsyKO1ICMdymVXyoIBk8V62BSn2GxUoqZ8CEZN8X90GGl5aNMVA=w408-h306-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF2VAL1E7eROeTyvZ4jEZzUSUs4fk-uRt6UQGludkVr7yokapuDXxxvR4Ke2jXm6UKEjvCahEJ2iq_UWB5fVardFOuWUCjeyfMtVJdI_UQAsxz3ZBFqFlJASVMb_2T8obQBZqXJ=w408-h544-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFsJSh2a1w97CVdar0dPJmoXxUrMNQZ6PxJ803KpklzeKGGlr14A0wXl_lmwRATYPl55pp2Xg3BHAlmkev8VOAKsOU9anqev0APp7h04QdoEIG4wn0ASZLlRu1Kfp6oMMm3BYgI=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFSWvxdtZETRjEq2rOoQfyCkNalFAEK2URYZUtyuLJJWV8tbn5L_FTlR-XL4ZxfsbvASiTTxXjp6d5xvECn6lqn5U7RZ41GVvyHzu3vpRUt5cd_lNcfxdm2mSVMn7C1lC_J9xYDmQ=w408-h419-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTF4AZ-njYxsw70mfKV9iZzrHr_l6UqQO4rWG55N9lvsPkmWG01ujNfTcbYDRcJRQJufJhHgP27lii9t2zsOn8A32NTMFSRjgGoyXMMD3mvo1T9oU70Hsoxl46AzgS1G1n7BA=w408-h544-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmznQpz9s3KRjvZRO31OotwPDx_C7fn1mGHMglfcdSmrcKeGVoTFPwFpIQi9Rupge_2INr4JqYxyqPym5fIKxntK-XRx43KpKFh2ZmPpjvlJvLDSIlM80bEZPHWGFpySyccYyL=w408-h866-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHSvifXXF0SbQWEh8egQ0MLtMBFmb8l499j9S5E_GsEmdcTbnTxCTezOU1ATNbxowHp99PQ2gTgYeenx_wVb6Ei3C5zZ4Ri0yYB0Y1CYqHX4zfeVRdPVAyjUSuA13NNnkasLWQ=w408-h549-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGeCiCOa-dEb0IErf2-Zy3BqcRDxFE28c3tzOWWRI9AnkIvSnvYfzy43MMaTq9_1HOidNxq0XsL2wl2rTm7_LYUpKUBYYjvHClAvSpKXo-Rn96a4C0iOoqKsoZ5q696WUFot1zJ=w427-h240-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFx2GpUvH4pxzmJhcuZrLyyvKrMEVRCD1wGVcSlR2k-MEz-di8oasUJM_ZUjEbLBp_94DogiTJ7z_lwyYmiIEgOrFcNzZLEt6ovxts0iQPeK2waJgkZ6Eb6cStSM4CjOgT4ZNOywTOo7Mg=w408-h612-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG6tz7v1CcqatdlOCQpAxAHQ1o3gW7wJWeZs_EoxXDuR92Cd_kcEaz6VvL3XRSfWSngpbVYXNc9nuCwGLQlCKdfBaEb8BFxkxtGzw0m3zHGFqBgwGK1GGMZG8xFc0nIxkyZUbjND06Li4Wc=w408-h274-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHXdBJiBcQU1Lq_jKfxyyk_iar8KFMoDg8PMqvMDHw8nANaJMbQXhBkugOQIlIgAT7juAWpi8DWAvsT8utG-sm1WpjTG4AeLuIaCwtn9NDus4oOgij9RVov8j_JyZiGW3RMhZaamtl33oSV=w426-h240-k-no", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEgEeb6DArFvTsUow1-KD9v5nBW965QdOyONY1mlJ3DkP9I8XGP5rDAIxKQKweBMUBdE5ng3F3pzWo6QfuezVVX2TYC-T_9qKYjgPRSVhubHMzSKZEsz3NmX11jHTNufGGbKxcXFA=w408-h306-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG9Wp4p7qnYyfYu-4ejO8d-_JWj_fmsW-_tN-QJFBrHtkn4bdGo1tYR822gmRzsnwGnEcpsQCfxhozgIRYcqCjZz5JLMttZKg6NRqdZx_fuMEG83OmkrIJEF2EjZpZRygD2XCe2oe7elwbH=w408-h544-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHWaqsx9ZpYsc96tWUDt2STm1yJ9kHbhj-hH2xF8Y8dxD1RxB-RfXV6YFYLZnJVKTnJLUdlnxXa77zvTNZ3bLRd5QzAJwaXlWtmK5s0pux2bm37OmMHXxuTYdw6hcKLfB0C-nyf1Q=w408-h725-k-no"
];

// ========== روابط الفنادق (34 رابط) ==========
const hotelLinks = [
    "https://maps.app.goo.gl/GNKLB1qTGwwwTyKb8", "https://maps.app.goo.gl/RW8TwGoJ25QFXWuWA", "https://maps.app.goo.gl/YkwS7YXn4QHB2jkf6", "https://maps.app.goo.gl/qrbPuVcZQuhbPjaYA",
    "https://maps.app.goo.gl/8BUGYLef5YfmTqYq8", "https://maps.app.goo.gl/68yZUykYtpPxEHdr6", "https://maps.app.goo.gl/8pM6g1EFhb5fs1Jg6", "https://maps.app.goo.gl/P5ha7TcARr1UD9kP8",
    "https://maps.app.goo.gl/kwke8srr2wszSBP79", "https://maps.app.goo.gl/fFVfQwDZtsGiuKmk8", "https://maps.app.goo.gl/PGLpRQYZJbYSCJVN9", "https://maps.app.goo.gl/momfwmKDSj8kFo1s8",
    "https://maps.app.goo.gl/CCjcnvTxZB5hmU7S8", "https://maps.app.goo.gl/7WTMzLajPabddU8J9", "https://maps.app.goo.gl/5SQjSrDyhUBRdz7k9", "https://maps.app.goo.gl/r7ENm9CP5dGbCaiy6",
    "https://maps.app.goo.gl/qqWSFevtWKmxPaj36", "https://maps.app.goo.gl/SxiuzKdZuKAsRy3Z9", "https://maps.app.goo.gl/gXAtjrMwW3DfPmgy6", "https://maps.app.goo.gl/882JEGTPcatpCxCY7",
    "https://maps.app.goo.gl/SadCmTKXsSZQVi7v8", "https://maps.app.goo.gl/GCb8FBf2TPz4N6R38", "https://maps.app.goo.gl/VurwcsK38gpbsHJJ7", "https://maps.app.goo.gl/KFczYNpcS5GR9XVH7",
    "https://maps.app.goo.gl/CjvGxF2BVYyJ6257A", "https://maps.app.goo.gl/tvzwFipcDJhAnDaW6*", "https://maps.app.goo.gl/bYyL1VYJsD2MWwdj8", "https://maps.app.goo.gl/WV9n3KWi2ZT8FmGc6",
    "https://maps.app.goo.gl/BEZRiKb3gqvCS9sh6", "https://maps.app.goo.gl/9SvgVSz3kTLwhfyZ7", "https://maps.app.goo.gl/5PcgAnKd7wAE5wHG9", "https://maps.app.goo.gl/wNuWaV67nmD6C27G7",
    "https://maps.app.goo.gl/ydFMJBw1uBM512rG6","https://maps.app.goo.gl/RQX1Nq24hYMXfP8N9"
];

// ========== أعداد الفنادق لكل قسم ==========
const CENTER_8_COUNT = 14;
const CENTER_9_COUNT = 12;
const CENTER_10_COUNT = 8;

// ========== صور وروابط المخيمات ==========
const arafatImage = "https://img.sanishtech.com/u/d521635a88f0a5b5ddd36c0e49a28cad.jpeg";
const minaImage = "https://img.sanishtech.com/u/4340d26b88bfda9958c87fcb64fffa82.jpeg";
const arafatLink = "https://maps.app.goo.gl/JuQ7Y6mFDTq4SdQd6";
const minaLink = "https://www.google.com/maps?q=21.411056518554688,39.89848709106445&z=17&hl=ar";

const PHONE_NUMBER = "0550333907";

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
