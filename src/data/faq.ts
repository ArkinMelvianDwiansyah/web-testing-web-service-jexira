// src/data/faq.ts

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqCategory {
    id: string;
    label: string;
    icon: string;
    items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
    {
        id: 'umum',
        label: 'Umum',
        icon: 'fa-solid fa-circle-info',
        items: [
            {
                question: 'Apa itu JalaninWeb dan apa yang membedakannya dari jasa website lain?',
                answer: 'JalaninWeb adalah jasa pembuatan website profesional yang fokus membantu UMKM, bisnis kecil-menengah, dan individu go digital dengan cara yang mudah dan terjangkau. Yang membedakan kami: kami tidak hanya "buat website lalu selesai" — kami mendampingi klien dari konsultasi awal, proses pengerjaan, hingga website live dan berjalan lancar. Tim kami juga aktif merespons pertanyaan dan feedback klien selama proses berlangsung, bukan sekadar terima order lalu menghilang.',
            },
            {
                question: 'Apakah JalaninWeb cocok untuk bisnis yang baru pertama kali punya website?',
                answer: 'Justru itu target utama kami! Kami sangat terbiasa menangani klien yang sama sekali belum pernah punya website. Kami akan pandu dari awal: apa saja yang perlu disiapkan, konten apa yang perlu ada, bagaimana memilih nama domain, hingga cara mengelola website sendiri setelah jadi. Tidak perlu punya pengetahuan teknis apapun untuk mulai.',
            },
            {
                question: 'Berapa lama proses pembuatan website dari awal sampai live?',
                answer: 'Tergantung jenis layanan dan kompleksitas: Landing Page 1 halaman selesai dalam 3–5 hari kerja. Website Company Profile atau UMKM (3–7 halaman) 5–7 hari kerja. Website dengan fitur khusus seperti toko online, sistem booking, atau panel admin bisa 2–4 minggu. Estimasi ini dihitung sejak semua bahan (teks, foto, informasi bisnis) sudah diterima dari klien. Keterlambatan paling sering terjadi karena konten dari klien belum siap — jadi kami sarankan siapkan dari awal.',
            },
            {
                question: 'Apakah saya perlu menyiapkan sesuatu sebelum order?',
                answer: 'Tidak perlu banyak. Yang paling membantu kalau sudah disiapkan sejak awal adalah: logo bisnis (jika ada), foto produk atau foto bisnis, teks profil singkat tentang bisnis Anda, dan referensi website yang Anda suka tampilannya. Kalau belum punya semua itu pun tidak masalah — kami bisa bantu buat konten placeholder dan guide Anda menyiapkannya.',
            },
            {
                question: 'Bagaimana alur kerjasama dari awal order sampai website selesai?',
                answer: 'Alurnya sederhana: (1) Konsultasi via WhatsApp atau form kontak — kami diskusi kebutuhan dan tentukan paket yang sesuai. (2) Deal & DP — setelah sepakat, klien bayar 50% sebagai tanda jadi. (3) Pengumpulan bahan — kami minta konten yang diperlukan (teks, foto, dll). (4) Desain & development — kami kerjakan dan kirim preview untuk review. (5) Revisi — klien beri masukan, kami perbaiki. (6) Pelunasan & go live — setelah klien ACC, bayar sisa 50%, website langsung live. (7) Serah terima — kami kirim semua akses (hosting, domain, dll) beserta panduan penggunaan.',
            },
            {
                question: 'Apakah JalaninWeb bisa mengerjakan proyek dengan deadline mendesak?',
                answer: 'Bisa, tergantung antrian dan jenis proyeknya. Untuk kebutuhan sangat mendesak (misal perlu live dalam 2–3 hari), hubungi kami terlebih dahulu untuk diskusi kelayakan. Ada kemungkinan dikenakan biaya express surcharge tergantung situasi. Semakin awal Anda menghubungi, semakin besar kemungkinan kami bisa akomodasi.',
            },
        ],
    },
    {
        id: 'harga',
        label: 'Harga & Pembayaran',
        icon: 'fa-solid fa-tag',
        items: [
            {
                question: 'Berapa kisaran harga pembuatan website di JalaninWeb?',
                answer: 'Harga kami mulai dari Rp 500.000 untuk landing page sederhana 1 halaman, Rp 1.500.000 untuk website UMKM atau company profile standar (hingga 5 halaman), Rp 3.000.000+ untuk website dengan fitur lebih kompleks seperti toko online atau sistem manajemen. Untuk proyek enterprise atau custom, harga ditentukan setelah konsultasi dan pembuatan scope of work. Semua harga sudah termasuk domain .com atau .id untuk 1 tahun pertama.',
            },
            {
                question: 'Apa saja yang sudah termasuk dalam harga paket?',
                answer: 'Setiap paket sudah include: desain custom (bukan template asal pakai), development hingga siap live, domain .com atau .id 1 tahun, setup hosting, SSL certificate (HTTPS) gratis, optimasi kecepatan dasar, form kontak atau integrasi WhatsApp, uji coba di berbagai device, dan free maintenance 3 bulan pertama. Yang tidak include: foto premium dari stock photo berbayar, konten teks (ditulis klien atau bisa request tambah jasa copywriting), dan hosting tahun ke-2 dan seterusnya.',
            },
            {
                question: 'Apakah ada biaya tambahan atau biaya tersembunyi setelah selesai?',
                answer: 'Tidak ada biaya tersembunyi. Harga yang disepakati di awal adalah harga final untuk scope yang sudah ditentukan. Biaya tambahan hanya akan muncul jika ada penambahan fitur atau halaman di luar scope awal, yang akan kami informasikan dan minta persetujuan terlebih dahulu sebelum dikerjakan. Perpanjangan domain dan hosting tahunan juga akan kami informasikan sebelum jatuh tempo.',
            },
            {
                question: 'Bagaimana sistem pembayarannya? Apakah bisa dicicil?',
                answer: 'Sistem pembayaran kami 50% di awal (DP) sebelum pengerjaan dimulai, dan 50% pelunasan setelah klien ACC hasil akhir sebelum website live. Untuk proyek dengan nilai di atas Rp 5.000.000, bisa didiskusikan skema cicilan 3 tahap: 40% DP, 30% setelah desain disetujui, 30% pelunasan sebelum live.',
            },
            {
                question: 'Metode pembayaran apa saja yang diterima?',
                answer: 'Kami menerima: transfer bank (BCA, Mandiri, BNI, BRI), dompet digital (GoPay, OVO, Dana, ShopeePay), dan QRIS. Setelah transfer, mohon konfirmasi via WhatsApp dengan mengirim bukti pembayaran agar proses bisa segera dimulai.',
            },
            {
                question: 'Apakah ada diskon untuk order multiple website atau langganan jangka panjang?',
                answer: 'Ya! Untuk klien yang order 2 website atau lebih sekaligus, ada diskon 10–15% tergantung total nilai proyek. Untuk klien yang berlangganan maintenance bulanan minimal 6 bulan, ada diskon khusus untuk paket maintenance. Hubungi kami untuk mendapatkan penawaran khusus.',
            },
        ],
    },
    {
        id: 'teknis',
        label: 'Teknis & Desain',
        icon: 'fa-solid fa-code',
        items: [
            {
                question: 'Teknologi apa yang digunakan JalaninWeb untuk membangun website?',
                answer: 'Pilihan teknologi kami sesuaikan dengan kebutuhan: Astro atau Next.js untuk website statis/semi-statis yang butuh performa sangat tinggi (cocok untuk company profile, landing page, portofolio). WordPress + Elementor atau block editor untuk website yang perlu sering diupdate kontennya secara mandiri oleh klien. WooCommerce untuk toko online berbasis WordPress. Custom stack (React, Node.js, Laravel, MySQL) untuk aplikasi web dengan logika bisnis kompleks. Kami selalu rekomendasikan teknologi yang paling tepat untuk kebutuhan dan budget klien, bukan yang paling mahal.',
            },
            {
                question: 'Apakah website yang dibuat sudah pasti mobile-friendly dan responsif?',
                answer: 'Ya, ini non-negotiable. Semua website yang kami bangun wajib responsif dan tampil baik di smartphone, tablet, dan desktop. Sebelum serah terima, kami test di minimal 5 ukuran layar berbeda dan beberapa browser utama (Chrome, Firefox, Safari, Edge). Mengingat lebih dari 70% traffic website Indonesia berasal dari mobile, ini adalah salah satu prioritas utama kami.',
            },
            {
                question: 'Apakah website sudah dioptimasi untuk SEO?',
                answer: 'Semua paket include SEO dasar: struktur heading yang benar (H1, H2, H3), meta title dan meta description yang dioptimasi, alt text pada gambar, URL yang bersih dan readable, sitemap XML, robots.txt, dan integrasi Google Search Console. Untuk SEO lanjutan seperti riset keyword, pembuatan konten SEO, link building, dan optimasi off-page, tersedia sebagai layanan tambahan terpisah.',
            },
            {
                question: 'Seberapa cepat website yang dibangun JalaninWeb?',
                answer: 'Kecepatan adalah salah satu keunggulan kami. Rata-rata website yang kami bangun mendapat skor Google PageSpeed 85–96/100 di mobile dan 90–99/100 di desktop. Ini dicapai melalui: kompresi dan optimasi semua gambar, minifikasi CSS dan JavaScript, lazy loading untuk konten di bawah fold, penggunaan CDN, dan pemilihan hosting yang tepat. Website lambat bisa kehilangan 53% pengunjung mobile sebelum halaman selesai loading — kami pastikan itu tidak terjadi pada website Anda.',
            },
            {
                question: 'Bisakah saya update konten website sendiri setelah jadi?',
                answer: 'Bisa, dan kami sangat encourage ini. Untuk website berbasis WordPress, Anda bisa update teks, gambar, produk, dan artikel blog langsung dari dashboard admin yang simpel. Kami juga sediakan sesi training singkat (30–60 menit via Zoom atau video tutorial) untuk menjelaskan cara penggunaan. Untuk website berbasis Astro atau Next.js, update konten dilakukan via file teks atau CMS headless yang kami setup — kami akan jelaskan caranya.',
            },
            {
                question: 'Apakah website dilengkapi SSL dan aman dari serangan?',
                answer: 'Ya. Setiap website yang kami deploy sudah include: SSL certificate gratis (HTTPS), konfigurasi header keamanan dasar, proteksi brute force untuk halaman login (jika ada), dan update rutin plugin/dependency selama masa maintenance. Untuk keamanan tingkat lanjut seperti firewall aplikasi web (WAF), monitoring keamanan real-time, dan enkripsi data sensitif, tersedia di paket Enterprise atau sebagai add-on.',
            },
            {
                question: 'Apakah JalaninWeb bisa integrasi website dengan sistem lain seperti WhatsApp, Instagram, atau payment gateway?',
                answer: 'Ya, ini yang paling sering diminta klien kami. Integrasi yang rutin kami lakukan: tombol WhatsApp yang langsung buka chat dengan pesan otomatis, embed feed Instagram di halaman website, Google Maps untuk tampilkan lokasi bisnis, payment gateway (Midtrans, Xendit, Duitku) untuk toko online, Google Analytics dan Meta Pixel untuk tracking pengunjung, dan formulir kontak yang terhubung ke email atau WhatsApp. Integrasi lain yang lebih kompleks bisa didiskusikan.',
            },
        ],
    },
    {
        id: 'domain',
        label: 'Domain & Hosting',
        icon: 'fa-solid fa-server',
        items: [
            {
                question: 'Apakah domain dan hosting sudah termasuk dalam paket?',
                answer: 'Domain .com atau .id untuk 1 tahun pertama sudah termasuk di semua paket. Untuk hosting, kami bantu setup di provider terpercaya (Niagahoster, Cloudflare Pages, Vercel, atau AWS tergantung jenis website). Biaya hosting tahun pertama biasanya sudah included di paket, dan akan kami informasikan biaya perpanjangan tahunannya sebelum jatuh tempo.',
            },
            {
                question: 'Hosting di mana? Apakah saya bisa pilih sendiri?',
                answer: 'Untuk website statis (Astro, Next.js), kami deploy ke Cloudflare Pages atau Vercel yang gratis dan sangat cepat. Untuk WordPress, kami rekomendasikan Niagahoster atau Hostinger karena performa bagus dan support bahasa Indonesia. Jika Anda sudah punya hosting sendiri atau ingin hosting di provider tertentu, kami bisa sesuaikan — selama hostingnya support teknologi yang digunakan.',
            },
            {
                question: 'Bagaimana kalau domain yang saya inginkan sudah diambil orang lain?',
                answer: 'Kami akan bantu carikan alternatif nama domain yang mirip dan masih tersedia. Biasanya kami sarankan coba variasi: menambahkan kata seperti "id", "official", "co", atau menggunakan ekstensi berbeda seperti .net atau .co.id. Jika domain yang Anda inginkan sudah terdaftar tapi website-nya tidak aktif, ada kemungkinan bisa dibeli dari pemiliknya — kami bisa bantu infokan caranya.',
            },
            {
                question: 'Siapa yang pegang kendali domain dan hosting setelah website jadi?',
                answer: 'Anda, sepenuhnya. Setelah serah terima, semua akses — termasuk akun registrar domain, cPanel/dashboard hosting, dan akun CMS — diserahkan ke Anda. JalaninWeb tidak menyimpan akses apapun tanpa seijin Anda. Kami percaya klien harus punya kendali penuh atas aset digital mereka sendiri.',
            },
            {
                question: 'Apa yang terjadi saat domain atau hosting mendekati tanggal expired?',
                answer: 'Kami akan mengingatkan Anda minimal 30 hari sebelum domain atau hosting expired, melalui WhatsApp atau email yang didaftarkan. Anda bisa perpanjang sendiri atau minta bantuan kami untuk perpanjang (dengan biaya sesuai harga provider). Sangat penting untuk tidak biarkan domain expired karena bisa diambil orang lain.',
            },
        ],
    },
    {
        id: 'revisi',
        label: 'Revisi & Serah Terima',
        icon: 'fa-solid fa-rotate-left',
        items: [
            {
                question: 'Berapa kali saya bisa minta revisi?',
                answer: 'Setiap paket include revisi tidak terbatas selama dalam scope dan masa pengerjaan. Maksudnya: selama perubahan yang diminta masih dalam lingkup yang disepakati di awal (bukan penambahan halaman baru atau fitur baru), kami kerjakan sampai Anda benar-benar puas. Yang dihitung sebagai "di luar scope" dan bisa dikenakan biaya tambahan misalnya: menambah halaman yang tidak ada di brief awal, mengganti total konsep desain setelah sudah ACC, atau menambah fitur yang tidak ada di paket.',
            },
            {
                question: 'Bagaimana proses review dan feedback revisi?',
                answer: 'Setelah desain awal selesai, kami kirim link preview website (bisa diakses dari browser, tidak perlu install apapun). Anda bisa langsung review dan catat feedback apa saja yang perlu diubah — teks, warna, layout, foto, dll. Feedback bisa dikirim via WhatsApp atau Google Docs. Kami akan kerjakan revisi dalam 1–2 hari kerja dan kirim update untuk review kembali. Proses ini diulang sampai Anda puas.',
            },
            {
                question: 'Apa yang diserahkan saat serah terima website?',
                answer: 'Saat serah terima, Anda akan menerima: akses penuh ke hosting (cPanel atau dashboard sesuai provider), akses ke registrar domain, akses ke dashboard CMS (WordPress admin, atau platform yang digunakan), file source code backup (opsional, bisa diminta), dokumentasi singkat cara penggunaan dan update konten, dan kontak support untuk 3 bulan pertama. Semua ini diserahkan setelah pelunasan pembayaran.',
            },
            {
                question: 'Apakah saya bisa minta revisi setelah website sudah live?',
                answer: 'Selama masih dalam masa free maintenance 3 bulan, perbaikan bug dan error ditangani gratis. Untuk perubahan konten minor (update teks, ganti foto) juga bisa dibantu tanpa biaya tambahan. Untuk perubahan desain signifikan atau penambahan fitur setelah website live, akan dikenakan biaya sesuai scope pekerjaan yang disepakati. Setelah masa 3 bulan habis, semua request ditangani berbayar atau bisa berlangganan paket maintenance.',
            },
        ],
    },
    {
        id: 'support',
        label: 'Support & Maintenance',
        icon: 'fa-solid fa-headset',
        items: [
            {
                question: 'Apa yang dimaksud dengan free maintenance 3 bulan?',
                answer: 'Selama 3 bulan setelah website live, kami tangani gratis: perbaikan bug atau error yang muncul tiba-tiba, gangguan tampilan di browser atau device tertentu, masalah koneksi domain ke hosting, update plugin/dependency kritis yang berkaitan dengan keamanan, dan pertanyaan teknis seputar penggunaan website. Yang tidak termasuk dalam maintenance gratis: penambahan fitur baru, perubahan desain, dan pembuatan konten.',
            },
            {
                question: 'Bagaimana cara menghubungi support JalaninWeb?',
                answer: 'Cara paling cepat adalah via WhatsApp ke +62 896-8055-1957. Untuk masalah non-urgent, bisa juga via email ke Jalaninweb@gmail.com. Jam aktif support: Senin–Sabtu pukul 08.00–20.00 WIB. Di luar jam tersebut, pesan tetap bisa dikirim dan akan direspons di jam kerja berikutnya. Untuk klien berlangganan paket maintenance, ada prioritas response lebih cepat.',
            },
            {
                question: 'Apakah JalaninWeb bisa maintain website yang tidak dibuat oleh mereka?',
                answer: 'Bisa, dengan catatan kami perlu melakukan audit terlebih dahulu untuk menilai kondisi kode, keamanan, dan infrastruktur website yang sudah ada. Audit ini dikenakan biaya kecil dan hasilnya akan kami jelaskan beserta rekomendasi solusinya. Berdasarkan hasil audit, kami baru bisa tentukan apakah bisa langsung maintain atau perlu perbaikan dulu.',
            },
            {
                question: 'Apa yang terjadi setelah masa free maintenance 3 bulan habis?',
                answer: 'Ada beberapa pilihan: (1) Berlangganan paket maintenance bulanan kami — mencakup update rutin, backup berkala, monitoring uptime, dan jatah request perubahan minor per bulan. (2) Per-request basis — Anda hubungi kami saat ada kebutuhan, kami kerjakan dengan biaya sesuai pekerjaan. (3) Mandiri — jika website berbasis WordPress atau CMS yang user-friendly, Anda bisa kelola sendiri menggunakan panduan yang kami berikan saat serah terima.',
            },
            {
                question: 'Apakah JalaninWeb menyediakan backup rutin untuk website?',
                answer: 'Ya. Selama masa maintenance (baik 3 bulan gratis maupun berlangganan), kami lakukan backup full website dan database minimal 1x per bulan, atau lebih sering jika website sering update konten. Backup disimpan di cloud storage terpisah dari hosting utama. Jika terjadi insiden (website error parah, kena hack, atau data hilang), kami bisa restore dari backup terakhir dalam hitungan jam.',
            },
        ],
    },
];