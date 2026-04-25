export const invitationData = {
    // Kişisel Bilgiler
    brideName: "Fatmana",
    groomName: "Süleyman",

    // Etkinlik Temel Bilgileri
    eventType: "Evleniyoruz",
    topDecoration: "Sonsuzluğun Başlangıcı",

    // Düğün Tarih ve Saat
    dateStr: "2026-05-03T19:30:00",      // ✅ DOĞRU MU? (format: YYYY-MM-DDTHH:mm:ss)
    dateDisplay: "3 Mayıs 2026",          // ✅ DOĞRU MU?
    timeDisplay: "PAZAR, SAAT 19:30",     // ✅ DOĞRU MU?

    // =============================================
    // 📍 GELİN EVİ — Aşağıdaki 4 alanı doldurun
    // =============================================
    brideHome: {
        label: "Kız Evi Adresi",
        name: "Kız Evi",                          // TODO: Gelin evinin adı veya mahalle/sokak ismi
        addressLine1: "",            // TODO: Cadde/Sokak/No bilgisi
        addressLine2: "Çaybaşı Mah. Ebul Feyiz Elçibey Cd. Kardelen Sitesi No:24 Çumra / Konya",         // TODO: İlçe/İl bilgisi doğru mu?
        googleMapsUrl: "https://maps.app.goo.gl/2iuaSZBY9i5HgAjj9",                           // TODO: Google Maps kısa linki (maps.app.goo.gl/...)
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.3672432447983!2d32.789154194657684!3d37.556525767267246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14da0c3922e9b67f%3A0x4db7cb7fa13e8f9a!2zw4dheWJhxZ_EsSwgRWJ1bCBGZXlpeiBFbMOnaWJleSBDZC4gTm86MjQsIDQyNTAwIMOHdW1yYS9Lb255YQ!5e0!3m2!1str!2str!4v1777131920411!5m2!1str!2str"
    },

    // =============================================
    // 📍 ERKEK EVİ — Aşağıdaki 4 alanı doldurun
    // =============================================
    groomHome: {
        label: "Erkek Evi Adresi",
        name: "Erkek Evi",                          // TODO: Erkek evinin adı veya mahalle/sokak ismi
        addressLine1: "",            // TODO: Cadde/Sokak/No bilgisi
        addressLine2: "Bağlar Mah. 72112. Sk. No:3 Çumra / Konya",         // TODO: İlçe/İl bilgisi doğru mu?
        googleMapsUrl: "https://maps.app.goo.gl/JJYKNDp5zRArbykH8",                           // TODO: Google Maps kısa linki
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.03596754806654!2d32.779079158139105!3d37.572625803635056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14da0c6e61ffe78b%3A0xa47b9e705013e795!2zQmFyZGFrw6fEsSwgNzIxMTIuIFNrLiBObzozLCA0MjUwMCDDh3VtcmEvS29ueWE!5e0!3m2!1str!2str!4v1777132157982!5m2!1str!2str"
    },

    // =============================================
    // 🎉 KINA GECESİ BİLGİLERİ
    // =============================================
    henna: {
        dateStr: "2026-05-01T19:30:00",              // TODO: Kına tarihi ve saati doğru mu?
        dateDisplay: "1 Mayıs 2026",                 // TODO: Doğru mu?
        timeDisplay: "CUMARTESİ, SAAT 19:30",        // TODO: Gün ve saat doğru mu?

        // 📍 KINA MEKANI — Aşağıdaki 4 alanı doldurun
        venue: {
            label: "Kına Mekanı",
            name: "Türkmenoğlu Çumra Düğün ve Kongre Merkezi",                     // TODO: Kına mekanının adı (örn: "Çumra Kültür Merkezi")
            addressLine1: "",      // TODO: Cadde/Sokak/No bilgisi
            addressLine2: "Haydar Fadim Kocaer Anadolu Lisesi Karşısı, Yenidoğan, Mevlana Cd., 42500 Çumra/Konya",     // TODO: İlçe/İl doğru mu?
            googleMapsUrl: "https://maps.app.goo.gl/76W5SqSYesJvwydR7",                       // TODO: Google Maps kısa linki
            googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.7190122555926!2d32.76940918091396!3d37.58523378460387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14da0d0a52e0c3fb%3A0x8fd5810e50031e94!2zVMO8cmttZW5vxJ9sdSDDh3VtcmEgRMO8xJ_DvG4gdmUgS29uZ3JlIE1lcmtlemk!5e0!3m2!1str!2str!4v1777131342276!5m2!1str!2str"
        },

        // ⏰ KINA PROGRAMI — Saatleri ve açıklamaları kontrol edin
        events: [
            {
                iconName: "Heart",
                title: "Kına Başlangıcı",            // TODO: Başlık doğru mu?
                time: "19:30",                       // TODO: Saat doğru mu?
                description: "Kına gecemize hoş geldiniz."
            },
            {
                iconName: "Clock",
                title: "Kına Yakma",                  // TODO: Başlık doğru mu?
                time: "22:00",                       // TODO: Saat doğru mu?
                description: "Geleneklerimizle bezenen özel anımız."
            },
            {
                iconName: "Calendar",
                title: "Eğlence",                    // TODO: Başlık doğru mu?
                time: "23:00",                       // TODO: Saat doğru mu?
                description: "Sevdiklerimizle coşkulu bir gece!"
            }
        ]
    },

    // =============================================
    // 💒 DÜĞÜN BİLGİLERİ (Mekan zaten dolu ✅)
    // =============================================
    venue: {
        label: "Düğün Salonu",
        name: "Mavi Bahçe Kır Düğün Salonu",         // ✅
        addressLine1: "Baraj, Atatürk Cd. No:22",    // ✅
        addressLine2: "42500 Çumra / Konya",          // ✅
        googleMapsUrl: "https://maps.app.goo.gl/pUgZDjPLMB5AmUPx9",  // ✅
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.418975061671!2d32.787473976405956!3d37.56875072400018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14da0d9718828cf5%3A0x165db4aef213c655!2zTWF2aSBCYWjDp2UgS8SxciBEw7zEn8O8biBTYWxvbnU!5e0!3m2!1str!2str!4v1777051942842!5m2!1str!2str"  // ✅
    },

    // ⏰ DÜĞÜN PROGRAMI — Saatleri kontrol edin
    events: [
        {
            iconName: "Heart",
            title: "Gelin Alma",
            time: "18:00",                           // TODO: Saat doğru mu?
            description: "En güzel anımız için hazırlanıyoruz."
        },
        {
            iconName: "Clock",
            title: "Düğün Saati",
            time: "19:30",                           // TODO: Saat doğru mu?
            description: "Bu mutlu günümüzde yanımızda olun."
        },
        {
            iconName: "Clock",
            title: "Takı Merasimi",
            time: "21:00",                           // TODO: Saat doğru mu?
            description: "Mutluluğumuza ortak olun."
        }
    ],

    // Alt Kısım (Footer) Bilgileri
    footer: {
        message: "İki Cihan Saadeti Duasıyla Çıktığımız Bu Yolda, Şahitliğinizden Onur Duyarız.",
        hashtag: "#FatmanaSuleyman2026",
        contactEmail: "sanaldavetiyecim@gmail.com",
        instagramUrl: "",                            // TODO: Instagram varsa ekleyin
        emailUrl: "mailto:[sanaldavetiyecim@gmail.com]",
        credits: "Aşk ile yapıldı"
    }
};

// =============================================
// 📌 GOOGLE MAPS LİNKLERİ NASIL ALINIR?
// =============================================
//
// 🔗 googleMapsUrl (Yol Tarifi butonu için):
//    1. Google Maps'te konumu bulun
//    2. "Paylaş" butonuna tıklayın
//    3. "Bağlantıyı kopyala" seçin
//    4. Kısa linki buraya yapıştırın (örn: https://maps.app.goo.gl/xxxxx)
//
// 🗺️ googleMapsEmbed (Harita widget'ı için):
//    1. Google Maps'te konumu bulun
//    2. Sol menüden "Paylaş" > "Harita Yerleştir" sekmesine geçin
//    3. HTML kodunu kopyalayın
//    4. src="..." içindeki URL'yi buraya yapıştırın
//       (sadece https://www.google.com/maps/embed?pb=... kısmı)
//
// =============================================
