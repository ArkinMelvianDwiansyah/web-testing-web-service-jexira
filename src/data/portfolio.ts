// src/data/portfolio.ts

export interface Portfolio {
    slug: string;
    title: string;
    image: string;         // Gambar kecil (Thumbnail)
    carouselImage: string;  // khusus carousel index
    detailImage: string;   // Gambar besar (Full Details)
    description1: string;
    description2: string;
    service: string;
    client: string;
    location: string;
    date: string;
    filter: string;        // Kategori filter grid
    categoryIcon: string;  // FontAwesome class icon kategori
    requirementsText: string;
    requirementsList1: string[];
    requirementsList2: string[];
    solution1: string;
    solution2: string;
}

export const portfolios: Portfolio[] = [
    {
        slug: "company-profile-klinik-sehat-prima",
        title: "Website Company Profile untuk Klinik Sehat Prima",
        image: "/assets/images/portfolio/portfolio_item_image_4.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Klinik Sehat Prima adalah klinik kesehatan keluarga di Surabaya yang ingin meningkatkan kehadiran digitalnya. Sebelumnya, informasi tentang layanan klinik hanya tersebar melalui brosur fisik dan mulut ke mulut. Calon pasien kesulitan menemukan informasi jam operasional, daftar dokter, dan lokasi klinik secara online. JalaninWeb ditugaskan untuk membangun website company profile yang profesional, informatif, dan mobile-friendly agar calon pasien bisa mendapatkan semua informasi yang mereka butuhkan dalam hitungan detik.",
        description2: "Kami membangun website 5 halaman yang mencakup: Beranda dengan hero section yang menampilkan keunggulan klinik, halaman Tentang Kami yang membangun kredibilitas dengan menampilkan profil dokter dan sertifikasi, halaman Layanan dengan deskripsi lengkap setiap pelayanan medis, halaman Lokasi dengan embed Google Maps dan petunjuk arah, serta halaman Kontak dengan integrasi langsung ke WhatsApp. SEO dasar dioptimasi agar klinik muncul di pencarian Google untuk kata kunci 'klinik terdekat Surabaya'. Hasilnya, dalam 30 hari pertama setelah launch, traffic organik klinik meningkat 280% dan jumlah pasien baru yang datang menyebut 'menemukan di Google' naik signifikan.",
        service: "Company Profile",
        client: "Klinik Sehat Prima",
        location: "Surabaya, Jawa Timur",
        date: "10-01-2026",
        filter: "company-profile",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Klinik membutuhkan website profesional yang menampilkan informasi layanan, profil dokter, dan lokasi agar mudah ditemukan calon pasien secara online.",
        requirementsList1: [
            "Desain halaman beranda yang meyakinkan",
            "Profil dokter dan jam praktek",
            "Integrasi Google Maps & WhatsApp"
        ],
        requirementsList2: [
            "SEO dasar untuk pencarian lokal",
            "Responsif di semua perangkat",
            "Loading time di bawah 3 detik"
        ],
        solution1: "Website company profile yang kami bangun berhasil meningkatkan traffic organik klinik sebesar 280% dalam 30 hari pertama — calon pasien kini bisa menemukan informasi lengkap klinik langsung dari Google.",
        solution2: "Integrasi WhatsApp dan Google Maps memudahkan pasien menghubungi dan menemukan lokasi klinik, mengurangi pertanyaan repetitif ke resepsionis hingga 60%."
    },
    {
        slug: "website-umkm-batik-nusantara",
        title: "Website Katalog Produk untuk Batik Nusantara Collection",
        image: "/assets/images/portfolio/portfolio_item_image_5.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Batik Nusantara Collection adalah UMKM batik tulis di Pekalongan yang menjual produk melalui Instagram dan WhatsApp. Dengan katalog produk yang terus bertambah hingga 200+ item, pemilik usaha kewalahan menjawab pertanyaan pelanggan satu per satu tentang ketersediaan motif dan harga. Mereka membutuhkan etalase digital yang bisa menampilkan seluruh koleksi secara terorganisir, dengan fitur order langsung ke WhatsApp tanpa perlu membalas DM satu-satu.",
        description2: "JalaninWeb membangun website katalog produk dengan kategorisasi berdasarkan jenis batik (tulis, cap, kombinasi), range harga, dan ukuran. Setiap produk dilengkapi galeri foto high-quality, deskripsi detail bahan dan perawatan, serta tombol 'Pesan via WhatsApp' yang otomatis menyertakan nama produk dan kode SKU dalam pesan. Halaman profil usaha menampilkan cerita brand dan proses pembuatan batik untuk membangun emotional connection. Setelah website live, volume order via WhatsApp meningkat 150% karena pelanggan sudah tahu persis apa yang mereka mau sebelum menghubungi.",
        service: "Website UMKM & Katalog",
        client: "Batik Nusantara Collection",
        location: "Pekalongan, Jawa Tengah",
        date: "15-02-2026",
        filter: "website-umkm-katalog",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "UMKM batik membutuhkan etalase digital yang menampilkan 200+ produk secara terorganisir dengan fitur direct order ke WhatsApp.",
        requirementsList1: [
            "Katalog produk dengan filter kategori & harga",
            "Galeri foto produk high-quality",
            "Tombol order WhatsApp otomatis"
        ],
        requirementsList2: [
            "Halaman profil brand & cerita usaha",
            "Mobile-friendly untuk pelanggan yang akses dari HP",
            "Panduan update produk mandiri"
        ],
        solution1: "Website katalog yang kami bangun meningkatkan volume order via WhatsApp sebesar 150% — pelanggan sudah tahu persis produk yang mereka inginkan sebelum chat.",
        solution2: "Sistem kategorisasi dan filter mengurangi waktu yang dihabiskan pemilik untuk menjawab pertanyaan repetitif tentang ketersediaan dan harga hingga 70%."
    },
    {
        slug: "portofolio-desainer-grafis-ayu",
        title: "Website Portofolio untuk Desainer Grafis Freelance",
        image: "/assets/images/portfolio/portfolio_item_image_6.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Ayu Pratiwi adalah desainer grafis freelance di Jakarta yang selama ini mengandalkan Behance dan Instagram untuk menampilkan karyanya. Masalahnya, kedua platform tersebut tidak memberikan kesan profesional yang cukup kuat saat melamar ke agensi kreatif atau pitching ke klien korporat. Dia membutuhkan website portofolio personal yang menampilkan karya terbaiknya dengan presentasi yang premium, lengkap dengan halaman tentang diri, skill, pengalaman, dan formulir kontak untuk inquiry project.",
        description2: "Kami membangun website portofolio satu halaman dengan pendekatan visual-first: hero section menampilkan tagline personal dan CTA, dilanjutkan galeri karya dengan filter berdasarkan kategori (branding, packaging, illustration, social media), section about yang menceritakan perjalanan karir, daftar skill dan tools yang dikuasai, testimoni klien sebelumnya, serta form kontak yang terhubung ke email. Desain dibuat minimal dan elegan agar fokus tetap pada karya. SEO nama personal dioptimasi agar muncul di Google saat dicari. Dalam 2 bulan setelah launch, Ayu mendapatkan 3 klien baru yang menemukan portofolionya via Google.",
        service: "Portofolio Online",
        client: "Ayu Pratiwi (Freelancer)",
        location: "Jakarta, Indonesia",
        date: "05-03-2026",
        filter: "portofolio-online",
        categoryIcon: "fa-solid fa-palette",
        requirementsText: "Desainer grafis freelance membutuhkan website portofolio personal yang premium untuk pitching ke klien korporat dan agensi kreatif.",
        requirementsList1: [
            "Galeri karya dengan filter kategori",
            "Halaman about & skill",
            "SEO nama personal"
        ],
        requirementsList2: [
            "Form kontak untuk inquiry project",
            "Desain minimal dan elegan",
            "Responsif & loading cepat"
        ],
        solution1: "Website portofolio yang kami buat membantu Ayu mendapatkan 3 klien korporat baru dalam 2 bulan pertama — semua menemukan portofolionya melalui pencarian Google.",
        solution2: "Presentasi karya yang premium dan profesional meningkatkan confidence Ayu saat pitching, menghasilkan closing rate yang jauh lebih tinggi dibanding sebelumnya."
    },
    {
        slug: "landing-page-workshop-digital-marketing",
        title: "Landing Page untuk Workshop Digital Marketing",
        image: "/assets/images/portfolio/portfolio_item_image_7.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "DigiLearn Academy menyelenggarakan workshop digital marketing offline di Surabaya dan membutuhkan landing page khusus untuk campaign pendaftaran. Target mereka: mengisi 50 kursi workshop dalam 2 minggu dengan budget iklan terbatas. Landing page harus mampu mengkonversi traffic dari Instagram Ads dan Google Ads menjadi pendaftar yang langsung bayar atau minimal mengisi form interest.",
        description2: "JalaninWeb membangun landing page satu halaman dengan struktur yang dioptimasi untuk konversi: headline yang menyentuh pain point target audience, social proof berupa testimoni alumni workshop sebelumnya, detail materi dan jadwal yang jelas, profil mentor dengan kredensial yang meyakinkan, pricing dengan early bird discount dan countdown timer, serta CTA yang mengarah ke form pendaftaran singkat (hanya 3 field). Halaman diintegrasikan dengan Meta Pixel dan Google Tag untuk tracking konversi. Hasilnya: 50 kursi sold out dalam 9 hari — 5 hari lebih cepat dari target.",
        service: "Landing Page",
        client: "DigiLearn Academy",
        location: "Surabaya, Jawa Timur",
        date: "20-03-2026",
        filter: "landing-page",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Academy membutuhkan landing page high-converting untuk mengisi 50 kursi workshop digital marketing dalam 2 minggu melalui paid ads.",
        requirementsList1: [
            "Desain fokus konversi (CRO)",
            "Countdown timer & urgency element",
            "Form pendaftaran singkat (3 field)"
        ],
        requirementsList2: [
            "Integrasi Meta Pixel & Google Tag",
            "Performa loading di bawah 2 detik",
            "A/B testing ready"
        ],
        solution1: "Landing page yang kami buat berhasil menjual habis 50 kursi workshop dalam 9 hari — 5 hari lebih cepat dari target awal klien dengan budget iklan yang sama.",
        solution2: "Conversion rate halaman mencapai 12.3%, jauh di atas rata-rata industri 3-5%, berkat struktur CRO dan copywriting persuasif yang kami implementasikan."
    },
    {
        slug: "maintenance-ecommerce-tokosepatu",
        title: "Maintenance & Support untuk Toko Sepatu Online",
        image: "/assets/images/portfolio/portfolio_item_image_8.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "SneakersHub.id adalah toko sepatu online berbasis WordPress + WooCommerce yang sudah berjalan 2 tahun. Seiring pertumbuhan, website mulai mengalami berbagai masalah: loading lambat (7+ detik), error checkout yang sporadis, plugin conflict setelah update, dan kekhawatiran keamanan setelah menerima email phishing yang mentarget admin panel. Pemilik tidak punya waktu dan keahlian teknis untuk menangani semua ini sendiri.",
        description2: "JalaninWeb mengambil alih maintenance penuh dengan paket bulanan yang mencakup: update WordPress core, theme, dan seluruh plugin setiap minggu, backup otomatis harian ke cloud storage terpisah, monitoring uptime 24/7 dengan alert instant jika website down, optimasi kecepatan (berhasil menurunkan loading dari 7 detik menjadi 2.1 detik), security hardening (firewall, limit login attempt, 2FA), serta jatah 5 jam support teknis per bulan untuk perbaikan bug dan perubahan minor. Setelah 6 bulan under maintenance kami, zero downtime tercatat dan tidak ada satu pun insiden keamanan.",
        service: "Maintenance & Support",
        client: "SneakersHub.id",
        location: "Bandung, Jawa Barat",
        date: "01-04-2026",
        filter: "maintenance",
        categoryIcon: "fa-solid fa-server",
        requirementsText: "Toko online membutuhkan maintenance profesional untuk mengatasi masalah kecepatan, keamanan, dan stabilitas yang sudah menumpuk selama 2 tahun.",
        requirementsList1: [
            "Update rutin WordPress, theme & plugin",
            "Backup harian otomatis ke cloud",
            "Optimasi kecepatan website"
        ],
        requirementsList2: [
            "Security hardening & monitoring",
            "Monitoring uptime 24/7",
            "Support teknis 5 jam/bulan"
        ],
        solution1: "Loading time berhasil dipangkas dari 7 detik menjadi 2.1 detik — meningkatkan conversion rate checkout sebesar 35% dalam bulan pertama maintenance.",
        solution2: "Zero downtime dan zero insiden keamanan selama 6 bulan penuh maintenance — memberikan ketenangan pikiran bagi pemilik untuk fokus pada pertumbuhan bisnis."
    },
    {
        slug: "undangan-digital-wedding-rina-aldi",
        title: "Undangan Pernikahan Digital untuk Rina & Aldi",
        image: "/assets/images/portfolio/portfolio_item_image_9.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Rina dan Aldi adalah pasangan muda di Malang yang ingin menikah dengan konsep modern dan eco-friendly. Mereka memilih undangan digital sebagai pengganti undangan cetak — lebih hemat biaya, lebih ramah lingkungan, dan lebih mudah disebar ke seluruh tamu yang tersebar di berbagai kota. Mereka menginginkan undangan yang elegan, interaktif, dan bisa mengakomodasi RSVP serta ucapan dari tamu secara online.",
        description2: "JalaninWeb membangun undangan pernikahan digital dengan tema elegant garden yang sesuai konsep acara. Fitur yang diimplementasikan: hero section dengan nama pasangan dan countdown menuju hari H, love story timeline, galeri foto prewedding dengan efek lightbox, detail acara (akad & resepsi) lengkap dengan Google Maps dan navigasi, formulir RSVP yang memudahkan tamu konfirmasi kehadiran, buku tamu digital untuk ucapan dan doa, informasi rekening untuk gift, serta musik latar yang bisa di-toggle. Undangan disebarkan via WhatsApp dengan personalisasi nama tamu di URL. Total 350 tamu menerima undangan, 89% membuka link, dan 200+ ucapan masuk di buku tamu digital.",
        service: "Undangan Digital",
        client: "Rina & Aldi",
        location: "Malang, Jawa Timur",
        date: "14-04-2026",
        filter: "undangan-online",
        categoryIcon: "fa-solid fa-heart",
        requirementsText: "Pasangan membutuhkan undangan pernikahan digital yang elegan, interaktif, dan mudah disebar ke 350+ tamu di berbagai kota.",
        requirementsList1: [
            "Desain tema elegant garden",
            "Countdown timer hari H",
            "Galeri foto prewedding"
        ],
        requirementsList2: [
            "Formulir RSVP online",
            "Buku tamu & ucapan digital",
            "Personalisasi nama tamu di URL"
        ],
        solution1: "Dari 350 tamu yang menerima undangan, 89% membuka link — jauh lebih tinggi dibanding undangan cetak yang sering terselip dan tidak dibaca.",
        solution2: "Lebih dari 200 ucapan masuk di buku tamu digital, menciptakan kenangan abadi yang bisa dibaca pasangan kapan saja — sesuatu yang tidak mungkin dengan buku tamu fisik."
    },
    {
        slug: "redesign-website-firma-hukum",
        title: "Redesign Website untuk Firma Hukum Adhi & Partners",
        image: "/assets/images/portfolio/portfolio_item_image_10.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Firma Hukum Adhi & Partners sudah memiliki website sejak 2019, tetapi tampilannya ketinggalan zaman, tidak mobile-friendly, dan loading sangat lambat karena masih menggunakan template WordPress lawas dengan banyak plugin usang. Calon klien korporat yang mengunjungi website sering kali meragukan profesionalisme firma karena tampilan digital yang tidak match dengan reputasi mereka di dunia nyata. Firma membutuhkan redesign total tanpa kehilangan konten dan ranking SEO yang sudah dibangun bertahun-tahun.",
        description2: "JalaninWeb melakukan audit menyeluruh terhadap website lama: memetakan semua halaman dan URL yang sudah ter-index Google, mengidentifikasi backlink berharga, dan mendokumentasikan seluruh konten. Redesign dilakukan dengan teknologi Astro untuk performa maksimal — loading turun dari 8 detik menjadi 1.5 detik. Semua URL lama di-redirect 301 ke URL baru agar tidak kehilangan ranking. Tampilan baru dibuat profesional, modern, dan authoritative sesuai industri hukum: warna navy-gold, typography serif untuk heading, layout yang clean dan spacious. Hasilnya: bounce rate turun 45%, average session duration naik 2x, dan inquiry klien baru via website meningkat 80%.",
        service: "Redesign Website",
        client: "Firma Hukum Adhi & Partners",
        location: "Jakarta Selatan, Indonesia",
        date: "01-05-2026",
        filter: "redesign-website",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Firma hukum membutuhkan redesign total website lama yang ketinggalan zaman tanpa mengorbankan SEO ranking dan konten yang sudah terbangun.",
        requirementsList1: [
            "Audit & mapping URL lama",
            "Redesign UI/UX sesuai industri hukum",
            "Migrasi konten tanpa kehilangan data"
        ],
        requirementsList2: [
            "Redirect 301 semua URL lama",
            "Optimasi performa (target <2 detik)",
            "Mobile-responsive di semua device"
        ],
        solution1: "Loading time dipangkas drastis dari 8 detik menjadi 1.5 detik, menghasilkan penurunan bounce rate sebesar 45% dan peningkatan session duration 2x lipat.",
        solution2: "Inquiry klien baru melalui website meningkat 80% pasca-redesign — tampilan profesional yang baru berhasil membangun kepercayaan calon klien korporat sejak kunjungan pertama."
    },
    {
        slug: "web-scraping-data-supplier-marketplace",
        title: "Web Scraping Data Supplier dari Marketplace untuk Distributor F&B",
        image: "/assets/images/portfolio/portfolio_item_image_11.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "PT Sumber Rasa Nusantara adalah distributor bahan makanan F&B di Surabaya yang ingin memperluas jaringan supplier. Mereka membutuhkan database lengkap supplier bahan baku dari beberapa marketplace B2B dan direktori bisnis online — termasuk nama usaha, produk yang dijual, lokasi, rating, dan kontak. Mengumpulkan data ini secara manual dari ribuan halaman marketplace akan memakan waktu berminggu-minggu. Mereka membutuhkan solusi otomatis.",
        description2: "JalaninWeb membangun script scraping kustom yang mengekstrak data dari 3 marketplace B2B dan 2 direktori bisnis online. Proses scraping mengumpulkan 5.000+ data supplier lengkap dengan: nama toko, kategori produk, range harga, lokasi gudang, rating & jumlah transaksi, serta kontak (nomor telepon/WhatsApp jika tersedia). Data dibersihkan dari duplikasi dan format yang berantakan, lalu diserahkan dalam format Excel yang sudah dikategorisasi rapi. Kami juga membangun mini API endpoint agar tim procurement bisa query data berdasarkan kategori dan lokasi. Hasilnya: tim procurement berhasil menghubungi dan menjalin kerjasama dengan 47 supplier baru dalam bulan pertama menggunakan database ini.",
        service: "Web Scraping",
        client: "PT Sumber Rasa Nusantara",
        location: "Surabaya, Jawa Timur",
        date: "20-05-2026",
        filter: "web-scraping",
        categoryIcon: "fa-solid fa-database",
        requirementsText: "Distributor F&B membutuhkan database supplier dari marketplace B2B secara otomatis — mencakup ribuan data yang tidak mungkin dikumpulkan manual.",
        requirementsList1: [
            "Scraping dari 3 marketplace + 2 direktori",
            "Ekstraksi nama, produk, harga, lokasi, kontak",
            "Data cleaning & deduplication"
        ],
        requirementsList2: [
            "Output format Excel terstruktur",
            "Mini API endpoint untuk query data",
            "Dokumentasi cara penggunaan"
        ],
        solution1: "5.000+ data supplier berhasil diekstrak dan dibersihkan dalam waktu 3 hari — pekerjaan yang jika manual akan memakan waktu 4-6 minggu kerja penuh.",
        solution2: "Tim procurement berhasil menjalin kerjasama dengan 47 supplier baru di bulan pertama menggunakan database ini — ROI investasi scraping tercapai dalam hitungan hari."
    },
    {
        slug: "website-umkm-kotak-rasa-ayam-crispy",
        title: "Website Landing Page untuk KOTAK RASA — UMKM Ayam Goreng Crispy",
        image: "/assets/images/portfolio/portfolio_item_image_4.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "KOTAK RASA adalah UMKM ayam goreng crispy di Surabaya yang melayani pesanan satuan hingga catering acara besar (arisan, ulang tahun, pengajian, hajatan). Sebelumnya, seluruh proses order hanya mengandalkan chat WhatsApp tanpa katalog yang jelas — pelanggan sering bingung soal menu, harga, dan paket yang tersedia. Pemilik usaha membutuhkan website yang bisa menjadi 'etalase digital' sekaligus mesin penjualan otomatis yang bekerja 24 jam.",
        description2: "JalaninWeb membangun landing page modern berbasis Astro dengan Tailwind CSS yang mengutamakan konversi dan kecepatan. Website menampilkan menu lengkap dengan harga transparan, 4 paket acara (Arisan 10 porsi, Party 20 porsi, Jumat Berkah 50 porsi, Hajatan 100 porsi), galeri foto pelanggan yang sudah order, testimoni real, dan integrasi multi-platform (GoFood, GrabFood, ShopeeFood, WhatsApp). Setiap section memiliki CTA langsung ke WhatsApp dengan pesan otomatis. Desain bergaya meriah dan appetizing dengan animasi scroll reveal, floating badges, dan tema warna merah-oranye yang memicu selera makan. Dalam 2 minggu pertama setelah launch, order via WhatsApp meningkat 200% karena pelanggan sudah paham menu dan harga sebelum menghubungi.",
        service: "Landing Page",
        client: "KOTAK RASA",
        location: "Surabaya, Jawa Timur",
        date: "11-06-2026",
        filter: "umkm",
        categoryIcon: "fa-solid fa-utensils",
        requirementsText: "UMKM ayam goreng crispy membutuhkan landing page yang bisa menampilkan menu, harga, paket acara, dan menerima order dari berbagai platform secara profesional.",
        requirementsList1: [
            "Katalog menu lengkap dengan harga & filter kategori",
            "Paket catering acara (10-100 porsi) dengan detail isi",
            "Integrasi multi-platform: GoFood, GrabFood, ShopeeFood, WhatsApp"
        ],
        requirementsList2: [
            "Desain menarik & appetizing yang memicu pembelian",
            "Galeri foto pelanggan & testimoni real",
            "SEO lokal agar muncul di pencarian 'ayam crispy Surabaya'"
        ],
        solution1: "Landing page yang kami bangun berhasil meningkatkan order WhatsApp sebesar 200% dalam 2 minggu — pelanggan tidak perlu lagi tanya-tanya menu dan harga karena semua sudah tersaji jelas di website.",
        solution2: "Fitur paket acara dengan detail lengkap dan CTA langsung membuat closing catering naik drastis — 3 dari 5 calon pelanggan langsung deal tanpa negosiasi panjang karena sudah yakin dengan isi paket dan harganya."
    },
];

export const getPortfolioBySlug = (slug: string): Portfolio | undefined =>
    portfolios.find(p => p.slug === slug);
