// src/data/services.ts

export interface ServiceProcess {
    step: string;
    title: string;
    desc: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    badge: string;
    tagline: string;
    description: string;
    heroImage: string;
    detailImages: [string, string, string];
    outcomes: string[];
    process: ServiceProcess[];
    metaDesc: string;
}

export const services: ServiceData[] = [
    {
        slug: 'company-profile',
        title: 'Website Company Profile',
        badge: 'Bisnis & Corporate',
        tagline: 'Wajah digital profesional untuk bisnis Anda',
        description: 'Website company profile adalah identitas digital perusahaan Anda. Kami merancang tampilan yang profesional, informatif, dan meyakinkan agar calon klien langsung percaya sejak kunjungan pertama.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Tampilan profesional & modern',
            'Desain responsif semua device',
            'Halaman Tentang, Layanan, Kontak',
            'Integrasi WhatsApp & Google Maps',
            'SEO dasar teroptimasi',
            'Selesai 5–7 hari kerja',
        ],
        process: [
            { step: '01', title: 'Konsultasi Kebutuhan', desc: 'Kami mendengarkan kebutuhan bisnis Anda, brand identity, dan target audiens untuk memastikan website yang dibuat benar-benar sesuai.' },
            { step: '02', title: 'Desain & Wireframe', desc: 'Tim desainer kami menyiapkan mockup tampilan website. Anda bisa review dan berikan masukan sebelum masuk ke tahap development.' },
            { step: '03', title: 'Development & Konten', desc: 'Website dibangun dengan teknologi modern, cepat, dan aman. Konten diisi sesuai brief yang telah disepakati bersama.' },
            { step: '04', title: 'Review & Go Live', desc: 'Setelah revisi final, website di-deploy ke hosting. Kami pastikan semua berjalan sempurna sebelum diserahkan ke Anda.' },
        ],
        metaDesc: 'Jasa pembuatan website company profile profesional untuk bisnis dan UMKM. Desain modern, cepat, dan siap go live dalam 5–7 hari.',
    },
    {
        slug: 'landing-page',
        title: 'Landing Page Bisnis',
        badge: 'Konversi Tinggi',
        tagline: 'Halaman khusus yang mengubah pengunjung jadi pelanggan',
        description: 'Landing page dirancang khusus untuk satu tujuan: konversi. Cocok untuk campaign produk, event, promosi, atau lead generation dengan desain yang fokus dan call-to-action yang kuat.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Desain fokus satu tujuan konversi',
            'CTA (Call-to-Action) yang kuat',
            'Loading super cepat',
            'Form lead capture terintegrasi',
            'A/B testing ready',
            'Selesai 3–5 hari kerja',
        ],
        process: [
            { step: '01', title: 'Riset & Strategi', desc: 'Kami pelajari produk, target pasar, dan kompetitor untuk menentukan pesan utama dan struktur halaman yang paling efektif.' },
            { step: '02', title: 'Copywriting & Desain', desc: 'Teks persuasif dan desain visual yang menarik dibuat bersamaan untuk hasil yang kohesif dan konversi tinggi.' },
            { step: '03', title: 'Development', desc: 'Landing page dibangun ringan dan cepat, kompatibel di semua browser dan device.' },
            { step: '04', title: 'Launch & Tracking', desc: 'Setelah launch, kami pasang Google Analytics dan Pixel untuk memantau performa halaman.' },
        ],
        metaDesc: 'Jasa pembuatan landing page bisnis dengan konversi tinggi. Desain fokus, CTA kuat, dan siap dalam 3–5 hari kerja.',
    },
    {
        slug: 'website-umkm',
        title: 'Website UMKM',
        badge: 'UMKM & Lokal',
        tagline: 'Website terjangkau untuk bisnis lokal yang ingin go digital',
        description: 'Kami membantu UMKM memiliki kehadiran digital yang kuat tanpa biaya besar. Website katalog produk, profil usaha, dan halaman kontak yang mudah dikelola sendiri.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Katalog produk / menu digital',
            'Profil usaha yang meyakinkan',
            'Integrasi WhatsApp order langsung',
            'Google My Business setup',
            'Mudah diupdate sendiri',
            'Harga terjangkau, kualitas pro',
        ],
        process: [
            { step: '01', title: 'Kumpulkan Informasi', desc: 'Kami kumpulkan data usaha, foto produk, dan konten yang akan ditampilkan di website.' },
            { step: '02', title: 'Desain Simpel & Menarik', desc: 'Tampilan dibuat bersih, mudah dinavigasi, dan sesuai karakter usaha Anda.' },
            { step: '03', title: 'Build & Upload Konten', desc: 'Website dibangun dan semua konten diunggah. Termasuk setup domain dan hosting.' },
            { step: '04', title: 'Training & Serah Terima', desc: 'Kami ajari cara update konten sendiri, lalu website resmi diserahkan.' },
        ],
        metaDesc: 'Jasa pembuatan website UMKM terjangkau dan profesional. Katalog produk, profil usaha, dan WhatsApp terintegrasi.',
    },
    {
        slug: 'toko-online',
        title: 'Toko Online',
        badge: 'E-Commerce',
        tagline: 'Jualan online 24 jam tanpa tergantung marketplace',
        description: 'Punya toko online sendiri artinya tidak perlu bayar komisi marketplace dan bisa bangun brand sendiri. Kami membangun toko online lengkap dengan manajemen produk, keranjang belanja, dan payment gateway.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Manajemen produk & stok',
            'Keranjang belanja & checkout',
            'Integrasi payment gateway',
            'Notifikasi order otomatis',
            'Dashboard admin lengkap',
            'Mobile-friendly & cepat',
        ],
        process: [
            { step: '01', title: 'Konsultasi Produk', desc: 'Kami pelajari jenis produk, alur transaksi, dan kebutuhan khusus toko Anda.' },
            { step: '02', title: 'Setup Platform', desc: 'Pilih platform yang tepat (custom / WooCommerce / lainnya) sesuai skala bisnis.' },
            { step: '03', title: 'Input Produk & Konfigurasi', desc: 'Semua produk diinput, payment gateway dikonfigurasi, dan sistem diuji penuh.' },
            { step: '04', title: 'Launch & Support', desc: 'Toko go live dengan panduan lengkap. Support 3 bulan pertama gratis.' },
        ],
        metaDesc: 'Jasa pembuatan toko online profesional dengan payment gateway dan dashboard admin. Bebas komisi marketplace.',
    },
    {
        slug: 'portofolio-online',
        title: 'Website Portofolio',
        badge: 'Personal & Freelancer',
        tagline: 'Tampilkan karya terbaikmu secara profesional',
        description: 'Website portofolio adalah investasi terbaik untuk karir dan personal branding. Cocok untuk mahasiswa, freelancer, desainer, fotografer, dan profesional kreatif.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Galeri karya / proyek',
            'Halaman tentang & skill',
            'Formulir kontak klien',
            'Desain personal & unik',
            'SEO nama personal',
            'Siap dalam 3–5 hari',
        ],
        process: [
            { step: '01', title: 'Kumpulkan Karya', desc: 'Siapkan foto, deskripsi proyek, dan informasi diri yang ingin ditampilkan.' },
            { step: '02', title: 'Desain Personal', desc: 'Desain dibuat sesuai kepribadian dan bidang profesi Anda.' },
            { step: '03', title: 'Build & Optimasi', desc: 'Website dibangun ringan dan cepat, dengan SEO nama agar mudah ditemukan.' },
            { step: '04', title: 'Serah Terima', desc: 'Website live dan siap digunakan untuk melamar kerja atau mencari klien.' },
        ],
        metaDesc: 'Jasa pembuatan website portofolio untuk mahasiswa, freelancer, dan profesional kreatif. Personal, unik, dan SEO-friendly.',
    },
    {
        slug: 'maintenance',
        title: 'Maintenance & Support',
        badge: 'Perawatan Website',
        tagline: 'Website Anda selalu up-to-date dan bebas masalah',
        description: 'Website yang tidak dirawat bisa lambat, error, atau kena hack. Layanan maintenance kami memastikan website Anda selalu berjalan optimal, aman, dan terupdate.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Update plugin & CMS rutin',
            'Backup data berkala',
            'Monitoring uptime 24/7',
            'Perbaikan bug & error',
            'Optimasi kecepatan berkala',
            'Laporan bulanan',
        ],
        process: [
            { step: '01', title: 'Audit Website', desc: 'Kami lakukan audit menyeluruh: kecepatan, keamanan, plugin, dan konten.' },
            { step: '02', title: 'Perbaikan Awal', desc: 'Semua issue ditemukan langsung diperbaiki di sesi onboarding.' },
            { step: '03', title: 'Maintenance Rutin', desc: 'Update, backup, dan monitoring dilakukan secara terjadwal setiap bulan.' },
            { step: '04', title: 'Laporan & Rekomendasi', desc: 'Anda terima laporan bulanan plus rekomendasi peningkatan website.' },
        ],
        metaDesc: 'Layanan maintenance dan support website profesional. Update rutin, backup, monitoring uptime, dan perbaikan bug.',
    },
    {
        slug: 'redesign-website',
        title: 'Redesign Website',
        badge: 'Revamp & Modernisasi',
        tagline: 'Website lama tampil baru, lebih cepat dan lebih menarik',
        description: 'Punya website tapi tampilannya sudah ketinggalan zaman, lambat, atau tidak mobile-friendly? Kami bantu redesign total tanpa kehilangan konten dan SEO yang sudah ada.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
        '/assets/images/services/service_details_image_2.webp',
        '/assets/images/services/service_details_image_3.webp',
        '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
        'Tampilan modern & fresh',
        'Kecepatan loading meningkat',
        'Mobile-friendly & responsif',
        'Konten & struktur dipertahankan',
        'SEO tidak terganggu',
        'Selesai 5–7 hari kerja',
        ],
        process: [
        { step: '01', title: 'Audit Website Lama', desc: 'Kami analisis website lama: kecepatan, tampilan, struktur konten, dan SEO yang sudah ada agar tidak ada yang hilang setelah redesign.' },
        { step: '02', title: 'Konsep Desain Baru', desc: 'Tim desainer kami buat konsep tampilan baru yang modern sesuai tren dan karakter bisnis Anda. Review bersama sebelum masuk development.' },
        { step: '03', title: 'Migrasi & Development', desc: 'Semua konten dipindahkan ke desain baru. Kecepatan, keamanan, dan responsivitas jadi prioritas utama.' },
        { step: '04', title: 'Launch & Verifikasi', desc: 'Setelah QA menyeluruh, website baru go live. Kami pastikan redirect, SEO, dan semua halaman berjalan sempurna.' },
        ],
        metaDesc: 'Jasa redesign website profesional. Tampilan lama dirombak jadi modern, cepat, dan mobile-friendly tanpa kehilangan konten dan SEO.',
    },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
    services.find(s => s.slug === slug);