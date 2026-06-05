// src/data/blog.ts

export interface BlogAuthor {
    name: string;
    designation: string;
    avatar: string;
}

export interface BlogData {
    slug: string;
    title: string;
    category: string;
    badge: string;
    date: string;
    readTime: string;
    image: string;
    heroImage: string;
    contentImages: [string, string];
    excerpt: string;
    intro: string;
    sectionTitle: string;
    sectionBody: string;
    sectionImage: string;
    keyPoints: string[];
    reasonsTitle: string;
    reasons: string[];
    tags: string[];
    comments: number;
    author: BlogAuthor;
    metaDesc: string;
}

export const blogs: BlogData[] = [
    {
        slug: 'cara-membuat-website-umkm',
        title: 'Cara Membuat Website untuk UMKM yang Menarik dan Profesional',
        category: 'Tips Website',
        badge: 'Panduan Praktis',
        date: '12 Mei 2026',
        readTime: '5 menit baca',
        image: '/assets/images/blog/blog_post_image_5.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Pelajari panduan mudah membangun website yang modern, efektif, dan profesional untuk UMKM agar bisnis kamu makin dikenal dan dipercaya.',
        intro: 'Di tahun 2026, memiliki website bukan lagi sekadar gaya-gayaan. Website adalah aset digital utama bisnis kamu — tempat calon pelanggan mencari informasi, mengenal brand, dan akhirnya memutuskan untuk menghubungi. Kabar baiknya, membuat website UMKM yang profesional kini jauh lebih mudah dan terjangkau dari sebelumnya.',
        sectionTitle: 'Langkah-Langkah Membuat Website UMKM yang Efektif',
        sectionBody: 'Membangun website UMKM yang baik tidak harus rumit. Yang terpenting adalah tujuan yang jelas, tampilan yang bersih, dan konten yang relevan bagi target pasar kamu. Mulai dari menentukan nama domain yang mudah diingat, hingga memilih platform yang sesuai dengan kebutuhan dan kemampuan teknis kamu.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Tentukan tujuan website sejak awal (profil, katalog, atau penjualan)',
            'Pilih nama domain yang singkat, mudah dieja, dan relevan',
            'Gunakan desain yang bersih dan mobile-friendly',
            'Isi konten yang jelas: siapa kamu, apa yang kamu jual, cara menghubungi',
            'Optimalkan kecepatan loading untuk pengalaman pengguna terbaik',
            'Pasang Google Analytics untuk pantau performa sejak hari pertama',
        ],
        reasonsTitle: '3 Kesalahan Umum UMKM Saat Membuat Website',
        reasons: [
            'Terlalu fokus pada tampilan tapi kontennya membingungkan dan tidak jelas',
            'Tidak mengoptimalkan website untuk tampilan mobile (60%+ pengunjung dari HP)',
            'Tidak ada call-to-action yang jelas sehingga pengunjung tidak tahu harus berbuat apa',
        ],
        tags: ['Website UMKM', 'Tips Website', 'Bisnis Lokal', 'Go Digital'],
        comments: 24,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Web Development Expert',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: 'Panduan lengkap cara membuat website untuk UMKM yang menarik dan profesional. Mulai dari domain, desain, konten hingga optimasi performa.',
    },
    {
        slug: 'kenapa-bisnis-butuh-website',
        title: '5 Alasan Kenapa Bisnis Kamu Wajib Punya Website di 2026',
        category: 'Bisnis Digital',
        badge: 'Tips & Strategi',
        date: '5 Mei 2026',
        readTime: '5 menit baca',
        image: '/assets/images/blog/blog_post_image_5.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Di era digital 2026, tidak punya website berarti tidak ada di peta bisnis. Pelajari 5 alasan mendasar mengapa bisnis kamu wajib go digital sekarang.',
        intro: 'Di tahun 2026, konsumen menghabiskan rata-rata 6 jam sehari di internet. Ketika mereka mencari produk atau jasa, langkah pertama yang mereka lakukan adalah Google. Jika bisnis kamu tidak muncul di sana, kamu kehilangan ribuan calon pelanggan setiap harinya. Website bukan lagi kemewahan — ini adalah fondasi bisnis modern.',
        sectionTitle: 'Mengapa Website Lebih Penting dari Sekadar Brosur Digital',
        sectionBody: 'Website yang baik bekerja untuk bisnis kamu 24 jam sehari, 7 hari seminggu. Ia menerima calon pelanggan, menjawab pertanyaan mereka, dan bahkan mengonversi mereka menjadi pembeli — bahkan saat kamu sedang tidur. Ini adalah aset bisnis terkuat yang bisa kamu miliki dengan investasi terjangkau.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Kredibilitas & kepercayaan pelanggan meningkat drastis',
            'Jangkauan pasar tidak terbatas geografis',
            'Tersedia 24/7 tanpa biaya tambahan',
            'Media pemasaran paling cost-effective',
            'Data & insight pelanggan yang terukur',
            'Kompetitif di era digital yang makin ketat',
        ],
        reasonsTitle: '3 Fakta yang Membuat Bisnis Tanpa Website Tertinggal',
        reasons: [
            '97% konsumen mencari produk/jasa secara online sebelum membeli',
            'Bisnis dengan website mendapat 2x lebih banyak leads dibanding yang tidak punya',
            'Kepercayaan konsumen turun 75% jika bisnis tidak memiliki website profesional',
        ],
        tags: ['Website UMKM', 'Bisnis Digital', 'Company Profile', 'Go Digital'],
        comments: 18,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Digital Marketing Expert',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: '5 alasan kuat kenapa bisnis kamu wajib punya website di tahun 2026. Dari kredibilitas hingga jangkauan pasar — semua ada di sini.',
    },
    {
        slug: 'perbedaan-landing-page-dan-website',
        title: 'Perbedaan Landing Page dan Website: Mana yang Kamu Butuhkan?',
        category: 'Edukasi',
        badge: 'Panduan Lengkap',
        date: '28 Apr 2026',
        readTime: '6 menit baca',
        image: '/assets/images/blog/blog_post_image_5.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Banyak pemilik bisnis bingung antara landing page dan website. Artikel ini menjelaskan perbedaan keduanya dan kapan masing-masing paling efektif digunakan.',
        intro: 'Seringkali kita mendengar dua istilah ini digunakan bergantian, padahal keduanya memiliki tujuan yang sangat berbeda. Landing page dan website adalah dua alat digital yang powerful, tapi digunakan untuk misi yang berbeda. Memilih yang salah bisa berarti buang uang dan waktu tanpa hasil optimal.',
        sectionTitle: 'Kapan Pilih Landing Page, Kapan Pilih Website?',
        sectionBody: 'Landing page adalah halaman tunggal yang difokuskan pada satu tujuan spesifik: konversi. Tidak ada menu navigasi yang mengalihkan perhatian, tidak ada link ke halaman lain. Semua elemen di desain untuk mendorong pengunjung melakukan satu aksi: beli, daftar, atau hubungi. Website di sisi lain adalah rumah digital lengkap yang menceritakan seluruh brand kamu.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Landing page: fokus pada 1 tujuan konversi',
            'Website: membangun brand & kepercayaan jangka panjang',
            'Landing page ideal untuk iklan & campaign berbayar',
            'Website ideal sebagai pusat informasi bisnis',
            'Keduanya bisa digunakan bersamaan untuk hasil maksimal',
            'Pilihan tergantung goal bisnis, bukan harga',
        ],
        reasonsTitle: '3 Tanda Kamu Butuh Landing Page (Bukan Website)',
        reasons: [
            'Kamu sedang menjalankan campaign iklan Google/Meta Ads yang spesifik',
            'Kamu ingin mengumpulkan leads atau mendorong satu produk/promo tertentu',
            'Kamu butuh halaman yang bisa diukur konversinya secara akurat',
        ],
        tags: ['Landing Page', 'Website', 'Bisnis Digital', 'Konversi'],
        comments: 12,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Web Strategist',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: 'Perbedaan landing page dan website explained. Panduan memilih mana yang tepat untuk bisnis kamu berdasarkan tujuan dan kebutuhan digital.',
    },
    {
        slug: 'tips-website-cepat',
        title: '7 Tips Biar Website Kamu Cepat dan Tidak Lemot',
        category: 'Tips Website',
        badge: 'Teknis & Performa',
        date: '20 Apr 2026',
        readTime: '7 menit baca',
        image: '/assets/images/blog/blog_post_image_5.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Website lemot bikin pengunjung kabur dan ranking Google turun. Ini dia 7 cara mudah meningkatkan kecepatan website kamu agar lebih cepat dan efisien.',
        intro: 'Tahukah kamu? Sebuah studi Google menemukan bahwa 53% pengguna mobile meninggalkan halaman yang butuh lebih dari 3 detik untuk dimuat. Kecepatan website bukan hanya soal kenyamanan pengguna, tapi juga faktor penting dalam ranking Google. Website yang cepat = lebih banyak pengunjung = lebih banyak penjualan.',
        sectionTitle: 'Kenapa Kecepatan Website Sangat Krusial di 2026',
        sectionBody: 'Google kini menggunakan Core Web Vitals sebagai faktor ranking utama. Ini berarti kecepatan, responsivitas, dan stabilitas visual website kamu secara langsung mempengaruhi posisi di halaman pencarian. Website yang lambat tidak hanya membuat pengunjung frustrasi, tapi juga dihukum oleh algoritma Google.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Kompres semua gambar ke format WebP atau AVIF',
            'Aktifkan browser caching dan CDN',
            'Minifikasi file CSS, JS, dan HTML',
            'Gunakan lazy loading untuk gambar di bawah fold',
            'Pilih hosting yang berkualitas dan server yang dekat dengan target pasar',
            'Kurangi penggunaan plugin atau script pihak ketiga yang tidak perlu',
            'Optimalkan database dan gunakan query yang efisien',
        ],
        reasonsTitle: '3 Alat Gratis untuk Cek Kecepatan Website Kamu',
        reasons: [
            'Google PageSpeed Insights — cek skor performa dan rekomendasi spesifik dari Google',
            'GTmetrix — analisis detail termasuk waterfall loading dan saran perbaikan',
            'WebPageTest — test dari berbagai lokasi server dan browser untuk hasil akurat',
        ],
        tags: ['Kecepatan Web', 'SEO', 'Core Web Vitals', 'Tips Website', 'Performa'],
        comments: 31,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Technical SEO Specialist',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: '7 tips ampuh agar website kamu cepat dan tidak lemot. Dari kompresi gambar hingga CDN — panduan lengkap optimasi kecepatan website 2026.',
    },
    {
        slug: 'harga-jasa-pembuatan-website',
        title: 'Berapa Harga Jasa Pembuatan Website di 2026? Ini Rinciannya',
        category: 'Info Harga',
        badge: 'Transparansi Harga',
        date: '15 Apr 2026',
        readTime: '7 menit baca',
        image: '/assets/images/blog/blog_post_image_5.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Penasaran berapa biaya buat website di 2026? Artikel ini membongkar rincian harga jasa pembuatan website untuk UMKM, company profile, hingga toko online.',
        intro: 'Salah satu pertanyaan paling sering kami terima adalah: "Pak/Bu, berapa ya biaya buat website?" Jawabannya tidak sesederhana angka, karena harga sangat bergantung pada kompleksitas, fitur, dan tujuan website. Tapi jangan khawatir — kami akan breakdown semua faktornya secara transparan di artikel ini.',
        sectionTitle: 'Faktor-Faktor yang Menentukan Harga Website',
        sectionBody: 'Harga website bukan sekedar bayar desain dan hosting. Ada banyak komponen yang masuk: riset dan strategi, desain UI/UX, development (coding), pengisian konten, optimasi SEO dasar, testing, deployment, dan training penggunaan. Setiap komponen ini membutuhkan waktu dan keahlian profesional yang berbeda-beda.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Website company profile: mulai dari Rp 2–5 juta',
            'Landing page: mulai dari Rp 1,5–3 juta',
            'Website UMKM lengkap: mulai dari Rp 3–7 juta',
            'Toko online dengan payment gateway: mulai dari Rp 5–15 juta',
            'Maintenance bulanan: mulai dari Rp 300 ribu',
            'Harga sepadan dengan investasi jangka panjang',
        ],
        reasonsTitle: '3 Kesalahan Umum saat Memilih Jasa Website Murah',
        reasons: [
            'Tergiur harga di bawah pasaran tanpa cek portofolio dan kualitas output',
            'Tidak meminta kontrak dan garansi tertulis yang jelas',
            'Tidak memikirkan biaya maintenance dan update jangka panjang',
        ],
        tags: ['Info Harga', 'Jasa Website', 'UMKM', 'Toko Online', 'Company Profile'],
        comments: 9,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Business Consultant',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: 'Rincian harga jasa pembuatan website di 2026 untuk UMKM, landing page, company profile, dan toko online. Transparan dan sesuai budget.',
    },
    {
        slug: 'company-profile-website',
        title: 'Apa Itu Website Company Profile dan Kenapa Bisnis Kamu Perlu?',
        category: 'Layanan',
        badge: 'Company Profile',
        date: '8 Apr 2026',
        readTime: '4 menit baca',
        image: '/assets/images/blog/blog_post_image_6.webp',
        heroImage: '/assets/images/blog/blog_post_image_8.webp',
        contentImages: [
            '/assets/images/blog/blog_post_image_9.webp',
            '/assets/images/blog/blog_post_image_10.webp',
        ],
        excerpt: 'Company profile online adalah wajah digital perusahaanmu. Simak kenapa ini penting dan apa saja isi yang wajib ada di website company profile yang efektif.',
        intro: 'Bayangkan kamu sedang mencari vendor atau supplier untuk bisnis. Langkah pertama yang kamu lakukan adalah Google mereka. Jika tidak ada website atau websitenya terlihat tidak profesional, kamu langsung meragukan kredibilitas mereka. Inilah mengapa website company profile adalah investasi paling mendasar untuk bisnis B2B maupun B2C.',
        sectionTitle: 'Apa yang Wajib Ada di Website Company Profile?',
        sectionBody: 'Website company profile yang efektif bukan sekadar tampilan indah. Ia harus mampu menjawab tiga pertanyaan utama pengunjung dalam hitungan detik: Siapa kalian? Apa yang kalian tawarkan? Bagaimana cara menghubungi? Setiap elemen desain dan konten harus diarahkan untuk menjawab ketiga pertanyaan ini dengan jelas dan meyakinkan.',
        sectionImage: '/assets/images/blog/blog_post_image_11.webp',
        keyPoints: [
            'Halaman Beranda yang kuat dengan value proposition yang jelas',
            'Halaman Tentang Kami yang membangun kepercayaan dan kredibilitas',
            'Showcase layanan atau produk yang lengkap dan informatif',
            'Portofolio atau testimoni klien sebagai social proof',
            'Halaman Kontak dengan berbagai opsi: form, WhatsApp, maps',
            'Desain responsif yang sempurna di semua perangkat',
        ],
        reasonsTitle: '3 Manfaat Nyata Website Company Profile untuk Bisnis',
        reasons: [
            'Membangun kepercayaan pertama sebelum meeting atau negosiasi dengan calon klien',
            'Bekerja sebagai sales 24/7 — menerima inquiry bahkan saat tim sedang offline',
            'Meningkatkan visibilitas di Google sehingga calon klien bisa menemukan bisnis kamu organik',
        ],
        tags: ['Company Profile', 'Bisnis Digital', 'Branding', 'Jasa Website'],
        comments: 7,
        author: {
            name: 'Tim JalaninWeb',
            designation: 'Brand Strategist',
            avatar: '/assets/images/avatar/avatar_8.webp',
        },
        metaDesc: 'Panduan lengkap website company profile: apa itu, konten wajibnya, dan kenapa bisnis kamu sangat membutuhkannya di era digital 2026.',
    },
];

export const getBlogBySlug = (slug: string): BlogData | undefined =>
    blogs.find(b => b.slug === slug);

// Helper: ambil semua kategori unik beserta jumlahnya
export const getBlogCategories = (): { name: string; count: number; slug: string }[] => {
    const map = new Map<string, number>();
    blogs.forEach(b => map.set(b.category, (map.get(b.category) ?? 0) + 1));
    return Array.from(map.entries()).map(([name, count]) => ({
        name,
        count,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
    }));
};

// Helper: ambil semua tag unik
export const getAllTags = (): string[] => {
    const set = new Set<string>();
    blogs.forEach(b => b.tags.forEach(t => set.add(t)));
    return Array.from(set);
};
