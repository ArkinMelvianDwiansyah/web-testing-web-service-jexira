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
    // --- TAMBAHAN BARU UNTUK HALAMAN LIST (UI) ---
    listImage: string; 
    tags: string[];    
    gridCol: string;   
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
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_1.webp',
        tags: ['Bisnis', 'Corporate', 'UMKM'],
        gridCol: 'col-lg-6',
    },
    {
        slug: 'website-umkm-katalog',
        title: 'Website UMKM & Katalog Produk',
        badge: 'UMKM & Showcase',
        tagline: 'Go digital dengan etalase online terjangkau dan terima order via WhatsApp',
        description: 'Kami membantu UMKM memiliki kehadiran digital yang kuat tanpa biaya besar. Miliki etalase digital sendiri untuk memamerkan produk Anda tanpa batasan, lengkap dengan profil usaha dan terintegrasi langsung dengan WhatsApp untuk kemudahan transaksi.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Katalog produk & kategori',
            'Profil usaha yang meyakinkan',
            'Tombol direct order ke WhatsApp',
            'Desain responsif (Mobile-friendly)',
            'Mudah diupdate & dikelola sendiri',
            'Bantuan setup Google My Business',
        ],
        process: [
            { step: '01', title: 'Konsultasi & Kumpulkan Data', desc: 'Kami pelajari jenis usaha Anda, kategori produk, foto, dan informasi profil yang akan ditampilkan.' },
            { step: '02', title: 'Desain Etalase & Profil', desc: 'Tampilan dirancang bersih, mudah dinavigasi, dan menonjolkan produk serta identitas brand Anda.' },
            { step: '03', title: 'Input Produk & Integrasi WA', desc: 'Kami mengunggah produk awal dan mengatur tombol pesanan agar langsung terhubung ke WhatsApp Anda.' },
            { step: '04', title: 'Training & Serah Terima', desc: 'Website rilis! Kami ajari Anda cara mengunggah produk baru sendiri dengan mudah.' },
        ],
        metaDesc: 'Jasa pembuatan website UMKM dan katalog produk terjangkau. Tampilkan etalase digital Anda dengan rapi dan terima pesanan langsung melalui WhatsApp.',
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_2.webp', // Menggunakan gambar UMKM sebelumnya
        tags: ['UMKM', 'Katalog', 'WhatsApp'],
        gridCol: 'col-lg-6',
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
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_3.webp',
        tags: ['Mahasiswa', 'Freelancer'],
        gridCol: 'col-lg-4',
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
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_4.webp',
        tags: ['Event', 'Campaign', 'Produk'],
        gridCol: 'col-lg-4',
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
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_5.webp',
        tags: ['Update', 'Backup', 'Support'],
        gridCol: 'col-lg-4',
    },
    {
        slug: 'undangan-online',
        title: 'Undangan Pernikahan Digital',
        badge: 'Event & Personal',
        tagline: 'Sebarkan momen bahagiamu dengan elegan, praktis, dan tanpa batas',
        description: 'Ubah cara Anda mengundang tamu dengan undangan pernikahan berbasis website. Lebih ramah lingkungan, interaktif, dan mudah dibagikan ke mana saja hanya dengan satu tautan.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Desain elegan & tema premium',
            'Formulir RSVP untuk tamu',
            'Galeri foto & video prewedding',
            'Navigasi lokasi (Google Maps)',
            'Buku tamu digital & ucapan',
            'Bebas sebar tanpa batasan kuota',
        ],
        process: [
            { step: '01', title: 'Pemilihan Tema & Data', desc: 'Anda memilih tema yang tersedia dan mengirimkan data acara, foto, serta cerita cinta Anda.' },
            { step: '02', title: 'Pembuatan Website', desc: 'Kami merakit undangan Anda dengan animasi yang halus dan memasukkan musik latar sesuai permintaan.' },
            { step: '03', title: 'Review & Revisi', desc: 'Kami mengirimkan draf undangan. Anda bisa melakukan pengecekan nama, waktu, dan lokasi sebelum disebar.' },
            { step: '04', title: 'Siap Disebar', desc: 'Tautan aktif dan undangan siap disebarkan ke keluarga, teman, dan kerabat Anda.' },
        ],
        metaDesc: 'Jasa pembuatan website undangan pernikahan online digital. Desain elegan, fitur RSVP tamu, galeri foto, dan Google Maps terintegrasi.',
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_4.webp', // Pastikan menyiapkan gambar ini
        tags: ['Undangan', 'Wedding', 'Digital'],
        gridCol: 'col-lg-4',
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
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_3.webp',
        tags: ['Revamp', 'Modern', 'Migrasi'],
        gridCol: 'col-lg-4',
    },
    {
        slug: 'web-scraping',
        title: 'Web Scraping & Ekstraksi Data',
        badge: 'Data & Otomatisasi',
        tagline: 'Kumpulkan data dari website dan aplikasi secara otomatis',
        description: 'Butuh ribuan data produk, kontak, atau informasi dari sebuah website? Kami membantu mengekstrak data dari website atau aplikasi menjadi format yang rapi dan terstruktur untuk kebutuhan analisis bisnis Anda.',
        heroImage: '/assets/images/services/service_details_image_1.webp',
        detailImages: [
            '/assets/images/services/service_details_image_2.webp',
            '/assets/images/services/service_details_image_3.webp',
            '/assets/images/services/service_details_image_4.webp',
        ],
        outcomes: [
            'Ekstraksi data ke Excel / CSV / JSON',
            'Scraping data e-commerce & direktori',
            'Bypass sistem login & keamanan dasar',
            'Pembersihan data (Data Cleaning)',
            'Automasi pengambilan data berkala',
            'Pembuatan API Endpoint (Custom)',
        ],
        process: [
            { step: '01', title: 'Analisis Target', desc: 'Kami mempelajari struktur website atau aplikasi target untuk menemukan jalur pengambilan data terbaik.' },
            { step: '02', title: 'Pembuatan Script', desc: 'Menulis bot atau script khusus untuk mengambil data dengan aman tanpa membebani server target.' },
            { step: '03', title: 'Eksekusi & Scraping', desc: 'Proses penarikan data dalam jumlah besar dilakukan oleh server kami.' },
            { step: '04', title: 'Validasi & Penyerahan', desc: 'Data dirapikan (dibersihkan dari format yang berantakan) lalu diserahkan ke Anda dalam format Excel/CSV.' },
        ],
        metaDesc: 'Jasa web scraping dan ekstraksi data otomatis dari website dan aplikasi. Dapatkan data terstruktur (Excel/CSV) untuk riset dan analisis kompetitor.',
        // --- DATA UI HALAMAN LIST ---
        listImage: '/assets/images/services/service_image_5.webp', // Pastikan menyiapkan gambar ini
        tags: ['Scraping', 'Data', 'Otomatisasi'],
        gridCol: 'col-lg-4',
    },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
    services.find(s => s.slug === slug);