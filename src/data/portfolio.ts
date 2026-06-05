// src/data/portfolio.ts

export interface Portfolio {
    slug: string;
    title: string;
    image: string;         // Gambar kecil (Thumbnail)
    carouselImage: string;  // ← TAMBAH INI — khusus carousel index
    detailImage: string;   // Gambar besar (Full Details)
    description1: string;
    description2: string;
    service: string;
    client: string;
    location: string;
    date: string;
    filter: string;        // Kategori filter grid: branding | aplikasi | webdesign | infrastruktur
    categoryIcon: string;  // FontAwesome class icon kategori
    requirementsText: string;
    requirementsList1: string[];
    requirementsList2: string[];
    solution1: string;
    solution2: string;
}

export const portfolios: Portfolio[] = [
    {
        slug: "driving-digital-transformation",
        title: "Transformasi Digital UMKM: Desain Logo & Branding Premium",
        image: "/assets/images/portfolio/portfolio_item_image_4.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp", 
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Di era persaingan bisnis yang semakin ketat, identitas visual bukan sekadar pelengkap — ia adalah wajah pertama yang dilihat calon pelanggan sebelum mereka memutuskan untuk mempercayai sebuah brand. Proyek ini hadir sebagai langkah strategis bagi Bioraprimacorp, sebuah pelaku UMKM di Surabaya yang ingin bertransisi dari tampilan visual yang konvensional dan kurang konsisten menuju identitas brand yang modern, profesional, dan mudah diingat. Kami memulai dengan melakukan brand discovery session mendalam, menggali nilai-nilai inti perusahaan, target pasar, serta tone of voice yang ingin disampaikan. Dari sana, tim desainer JalaninWeb menyusun moodboard, mengeksplorasi berbagai arah kreatif, dan akhirnya mengeksekusi satu desain logo yang tidak hanya estetis — tetapi juga memiliki makna dan cerita di balik setiap elemennya.",
        description2: "Proses branding yang kami jalankan tidak berhenti pada file logo semata. Kami membangun panduan identitas visual lengkap yang mencakup palet warna primer dan sekunder, tipografi resmi beserta hierarki penggunaannya, aturan penempatan logo di berbagai media (digital, cetak, merchandise), serta template dasar untuk keperluan promosi. Hasilnya, Bioraprimacorp kini memiliki identitas visual yang konsisten di seluruh touchpoint bisnis mereka — mulai dari kartu nama, kemasan produk, hingga tampilan media sosial. Dengan brand yang kuat dan terstruktur, kepercayaan pelanggan meningkat secara signifikan, membuka pintu bagi pertumbuhan bisnis jangka panjang yang lebih solid. JalaninWeb tidak sekadar membuat logo — kami membantu bisnis Anda bercerita lewat visual.",
        service: "Logo Design",
        client: "Bioraprimacorp",
        location: "Surabaya, Jawa Timur",
        date: "15-01-2025",
        filter: "branding",
        categoryIcon: "fa-solid fa-tags",
        requirementsText: "Fokus utama pada fase ini adalah mengeksekusi strategi branding yang solid untuk memastikan kelancaran transisi identitas perusahaan dari tampilan lama menuju citra yang segar, modern, dan berdampak.",
        requirementsList1: [
            "Fase Asesmen & Brand Discovery",
            "Pengembangan Strategi Branding"
        ],
        requirementsList2: [
            "Implementasi Desain Logo",
            "Dokumentasi Standar Branding (Brand Guideline)"
        ],
        solution1: "Eksekusi strategi desain yang matang dan terstruktur memastikan transisi identitas visual yang mulus — logo tampil profesional dan konsisten di berbagai media, baik cetak maupun digital.",
        solution2: "Pendekatan menyeluruh JalaninWeb yang mencakup riset pasar lokal, eksplorasi kreatif, dan panduan implementasi branding menjadikan transformasi ini bukan sekadar perubahan tampilan, melainkan investasi jangka panjang untuk reputasi bisnis klien."
    },
    {
        slug: "explore-our-it-solutions",
        title: "Eksplorasi Solusi IT untuk Layanan Sektor Publik dan Pemerintahan",
        image: "/assets/images/portfolio/portfolio_item_image_5.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Pelayanan publik yang baik dimulai dari sistem digital yang andal. Dinas Kominfo Kabupaten Kediri menyadari bahwa aplikasi pelayanan masyarakat mereka yang lama sudah tidak lagi mampu memenuhi tuntutan era modern — antarmuka yang tidak intuitif, infrastruktur yang rentan terhadap gangguan, dan proses birokrasi yang masih manual menjadi hambatan nyata bagi kelancaran layanan. JalaninWeb hadir sebagai mitra teknologi untuk merombak sistem tersebut dari dalam. Kami memulai proses dengan melakukan audit menyeluruh terhadap alur kerja existing, mengidentifikasi bottleneck utama, dan memetakan kebutuhan nyata para petugas serta masyarakat pengguna aplikasi. Pendekatan berbasis data ini menjadi fondasi desain ulang UI/UX yang kami lakukan — bukan sekadar mempercantik tampilan, tetapi membangun pengalaman yang benar-benar mempermudah proses pelayanan dari awal hingga akhir.",
        description2: "Di sisi teknis, tantangan terbesar adalah memodernisasi sistem legacy yang telah berjalan bertahun-tahun tanpa menghentikan layanan aktif yang sedang berjalan. Tim back-end JalaninWeb mengimplementasikan arsitektur microservice yang memisahkan komponen sistem secara modular, sehingga pembaruan dapat dilakukan secara bertahap tanpa risiko downtime massal. Kami juga menerapkan enkripsi data end-to-end dan sistem autentikasi berlapis untuk membentengi aplikasi dari potensi serangan siber yang semakin marak menarget instansi pemerintah. Pengujian beban (load testing) dilakukan secara menyeluruh untuk memastikan sistem tetap stabil meski diakses ribuan pengguna secara bersamaan pada jam-jam puncak layanan. Hasilnya: aplikasi yang lebih cepat, lebih aman, dan lebih nyaman digunakan — baik oleh petugas di lapangan maupun masyarakat yang mengaksesnya dari rumah.",
        service: "App Design",
        client: "Dinas Kominfo Kediri",
        location: "Kediri, Jawa Timur",
        date: "22-03-2025",
        filter: "aplikasi",
        categoryIcon: "fa-solid fa-mobile-screen",
        requirementsText: "Klien membutuhkan perombakan total pada aplikasi pelayanan publik mereka agar lebih ramah pengguna (user-friendly), responsif di berbagai perangkat, dan terlindungi dari ancaman keamanan siber yang terus berkembang.",
        requirementsList1: [
            "Perombakan UI/UX Aplikasi Pelayanan",
            "Peningkatan Sistem Keamanan & Enkripsi Data"
        ],
        requirementsList2: [
            "Integrasi Database Backend & Migrasi Data",
            "Pengujian Beban Server (Load Testing)"
        ],
        solution1: "Kami menghadirkan pengalaman penggunaan aplikasi yang jauh lebih mulus dengan antarmuka yang intuitif dan backend yang kokoh — siap menampung ribuan antrean data pelayanan secara simultan.",
        solution2: "Pengujian menyeluruh yang kami lakukan memastikan uptime sistem mencapai 99,9%, bahkan saat menghadapi lonjakan trafik pada jam puncak pelayanan masyarakat, tanpa gangguan berarti pada kualitas layanan."
    },
    {
        slug: "innovative-solutions",
        title: "Solusi Inovatif: Menampilkan Keberagaman Portofolio IT Kami",
        image: "/assets/images/portfolio/portfolio_item_image_6.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Setiap perusahaan berskala nasional memiliki kebutuhan IT yang unik dan kompleks. PT Global Service Indonesia, sebagai perusahaan dengan operasional yang tersebar di berbagai kota, membutuhkan lebih dari sekadar solusi teknologi biasa — mereka butuh ekosistem digital yang kohesif, skalabel, dan mampu tumbuh seiring ekspansi bisnis mereka. JalaninWeb ditugaskan untuk merancang dan mengimplementasikan solusi IT menyeluruh yang mencakup pengembangan perangkat lunak kustom, pembenahan infrastruktur jaringan, hingga penerapan protokol keamanan siber tingkat lanjut. Proyek ini bukan hanya tentang teknologi — ini tentang bagaimana teknologi yang tepat dapat menjadi akselerator pertumbuhan bisnis yang nyata.",
        description2: "Kami mengadopsi metodologi Agile dalam seluruh proses pengembangan, memungkinkan tim klien untuk terlibat aktif di setiap sprint dan memberikan feedback secara real-time. Pipeline CI/CD (Continuous Integration/Continuous Deployment) yang kami bangun memastikan pembaruan sistem dapat dirilis dengan cepat dan aman, tanpa risiko gangguan pada operasional yang sedang berjalan. Seluruh komponen sistem dirancang dengan prinsip modularitas — setiap modul dapat diperbarui atau diganti secara independen tanpa mempengaruhi bagian sistem lainnya. Hasilnya adalah infrastruktur IT yang tidak hanya menjawab kebutuhan hari ini, tetapi juga siap menghadapi tantangan dan peluang di masa depan, dengan biaya operasional yang jauh lebih efisien dari sebelumnya.",
        service: "Card Design",
        client: "PT Global Service Indonesia",
        location: "Jakarta, Indonesia",
        date: "10-06-2025",
        filter: "infrastruktur",
        categoryIcon: "fa-solid fa-server",
        requirementsText: "Kebutuhan mendesak akan infrastruktur IT yang skalabel, modular, dan mampu mendukung ekspansi bisnis perusahaan ke berbagai wilayah baru tanpa mengorbankan stabilitas sistem yang sudah ada.",
        requirementsList1: [
            "Penilaian & Audit Skalabilitas Sistem",
            "Pemilihan Stack Teknologi yang Tepat"
        ],
        requirementsList2: [
            "Pengembangan dengan Metode Agile",
            "Implementasi Pipeline CI/CD"
        ],
        solution1: "Tim JalaninWeb berhasil mengimplementasikan arsitektur modular yang fleksibel, memperlancar komunikasi dan pertukaran data antar berbagai unit bisnis yang tersebar secara geografis.",
        solution2: "Arsitektur baru yang kami bangun terbukti secara signifikan mengurangi biaya operasional server dan pemeliharaan IT hingga 30%, sekaligus meningkatkan kecepatan deployment fitur baru yang dibutuhkan bisnis."
    },
    {
        slug: "tech-triumphs",
        title: "Pencapaian Teknologi: Merayakan Kesuksesan Solusi Web Kami",
        image: "/assets/images/portfolio/portfolio_item_image_7.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Ketika PT United Tractors Tbk — salah satu perusahaan distribusi alat berat terbesar di Indonesia — mempercayakan pengembangan sistem web enterprise mereka kepada JalaninWeb, kami memahami sepenuhnya bahwa ini bukan sekadar proyek pengembangan website biasa. Ini adalah tulang punggung digital dari operasional logistik dan distribusi skala nasional yang tidak boleh berhenti sedetik pun. Sistem yang kami bangun harus mampu menangani ribuan transaksi data logistik secara real-time, memastikan visibilitas penuh terhadap pergerakan armada dan inventaris alat berat, sekaligus menyajikan laporan operasional yang akurat bagi para pengambil keputusan di level manajemen. Tantangan teknis ini kami jawab dengan arsitektur web yang dioptimalkan secara menyeluruh dari sisi performa, keamanan, maupun keandalan.",
        description2: "Kami membangun sistem dengan pendekatan high-availability architecture, di mana redundansi server diterapkan di beberapa titik kritis untuk memastikan tidak ada single point of failure. Konfigurasi CDN (Content Delivery Network) global kami pasang untuk memastikan akses yang cepat dari berbagai lokasi di seluruh Indonesia, termasuk wilayah-wilayah terpencil sekalipun. Tim keamanan JalaninWeb juga menerapkan pemantauan 24/7 dengan sistem deteksi anomali otomatis yang mampu mengidentifikasi dan merespons ancaman siber sebelum berdampak pada operasional. Hasilnya sungguh luar biasa: sistem berhasil mencatat uptime 100% selama 12 bulan pertama operasional penuh, sebuah pencapaian yang menjadi kebanggaan bersama. Lebih dari itu, pengguna internal melaporkan peningkatan kepuasan dan produktivitas hingga 50% berkat antarmuka yang lebih intuitif dan respons sistem yang jauh lebih cepat.",
        service: "Web Design",
        client: "PT United Tractors Tbk",
        location: "Jakarta Barat, Indonesia",
        date: "05-08-2025",
        filter: "webdesign",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Klien menuntut aplikasi web berkinerja sangat tinggi dengan persyaratan downtime yang nyaris nol — sistem harus mampu berjalan non-stop untuk mendukung pengawasan dan koordinasi operasional logistik berskala nasional.",
        requirementsList1: [
            "Optimasi Performa Web & Query Database",
            "Perencanaan Arsitektur Redundansi Server"
        ],
        requirementsList2: [
            "Konfigurasi CDN Global",
            "Pemantauan Keamanan Siber 24/7"
        ],
        solution1: "Sistem web enterprise yang kami rancang sukses mencatat rekor uptime 100% selama 12 bulan penuh masa operasional — sebuah pencapaian teknis yang membuktikan kekokohan arsitektur yang kami bangun.",
        solution2: "Pengguna internal melaporkan lonjakan kepuasan dan produktivitas hingga 50%, berkat antarmuka yang lebih intuitif, performa sistem yang lebih responsif, dan keandalan akses data yang dapat diandalkan kapan saja."
    },
    {
        slug: "revolutionizing-it-strategies",
        title: "Revolusi Strategi IT: Mengintip Solusi IT Dinamis JalaninWeb",
        image: "/assets/images/portfolio/portfolio_item_image_8.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Bisnis bengkel otomotif seperti ACE Motocare Surabaya seringkali terjebak dalam dilema klasik: mereka tahu sistem manual yang selama ini digunakan sudah tidak efisien, tetapi merasa khawatir proses digitalisasi akan mengganggu ritme kerja harian yang sudah berjalan. JalaninWeb hadir untuk membuktikan bahwa transformasi digital tidak harus menyakitkan. Kami memulai dengan melakukan analisis mendalam terhadap alur kerja para mekanik dan staf administrasi — mencatat setiap langkah proses pencatatan servis, pengelolaan stok sparepart, dan pembuatan laporan harian yang selama ini dilakukan secara manual di buku atau spreadsheet sederhana. Dari hasil analisis inilah kami merancang solusi digital yang benar-benar sesuai dengan kebutuhan lapangan, bukan solusi generik yang dipaksakan.",
        description2: "Solusi yang kami implementasikan berbasis Excel VBA otomatis — sebuah pilihan yang disengaja agar tim bengkel tidak perlu belajar sistem yang asing dari nol. Dengan memanfaatkan antarmuka Excel yang sudah mereka kenal, kami membangun sistem otomatisasi yang mampu mengurangi waktu input data manual secara drastis, menghasilkan laporan harian secara otomatis dalam hitungan detik, serta mengelola catatan servis dan histori kendaraan pelanggan dengan lebih terstruktur. Proses implementasi dilakukan secara bertahap — modul demi modul diperkenalkan dengan sesi pelatihan singkat yang praktis — sehingga tidak ada satu pun hari operasional bengkel yang terganggu selama masa transisi. Hasilnya: produktivitas harian bengkel meningkat signifikan, error akibat pencatatan manual berkurang, dan kepuasan karyawan terhadap sistem baru pun sangat tinggi.",
        service: "Web Design",
        client: "ACE Motocare Surabaya",
        location: "Surabaya, Jawa Timur",
        date: "12-10-2025",
        filter: "infrastruktur",
        categoryIcon: "fa-solid fa-server",
        requirementsText: "Objektif utama adalah memodernisasi sistem pencatatan dan pengelolaan inventaris internal bengkel tanpa sekalipun mengganggu alur kerja operasional harian yang sudah berjalan dan menghasilkan pendapatan.",
        requirementsList1: [
            "Analisis Mendalam Alur Kerja Mekanik & Admin",
            "Penyebaran Sistem Secara Bertahap (Phased Rollout)"
        ],
        requirementsList2: [
            "Pelatihan Staf & Onboarding Digital",
            "Sistem Umpan Balik & Evaluasi Berkala"
        ],
        solution1: "Transisi menuju sistem digital baru berjalan sangat mulus tanpa gangguan operasional, dengan tingkat adopsi dan kepuasan karyawan yang jauh melampaui ekspektasi awal klien.",
        solution2: "Produktivitas harian bengkel meningkat signifikan berkat otomatisasi berbasis Excel VBA yang kami kembangkan secara kustom — mengeliminasi input data manual berulang dan menghasilkan laporan operasional secara instan tanpa keahlian teknis khusus."
    },
    {
        slug: "cloud-migration-and-integration",
        title: "Proyek Migrasi dan Integrasi Cloud untuk Bisnis F&B Lokal",
        image: "/assets/images/portfolio/portfolio_item_image_9.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Bisnis kuliner yang berkembang pesat seperti Runchise Cafe menghadapi tantangan yang sangat nyata ketika infrastruktur IT mereka tidak mampu lagi mengimbangi kecepatan pertumbuhan jaringan kedai mereka. Sistem kasir (Point of Sales) yang sebelumnya berjalan di server lokal mulai menunjukkan keterbatasannya: data transaksi sulit diakses dari pusat, pembaruan menu membutuhkan kunjungan fisik ke setiap cabang, dan risiko kehilangan data akibat kerusakan hardware lokal selalu mengintai. JalaninWeb ditugaskan untuk memindahkan seluruh infrastruktur sistem POS ini ke solusi cloud komersial yang andal menggunakan layanan Rumahweb — sebuah langkah besar yang membutuhkan perencanaan sangat matang agar tidak satu pun data transaksi berharga yang hilang dalam prosesnya.",
        description2: "Migrasi database dari server on-premise ke cloud adalah proses yang jauh lebih kompleks dari yang terlihat di permukaan. Kami mengawali dengan audit lengkap terhadap struktur database existing, mengidentifikasi inkonsistensi data, dan membersihkan data duplikat sebelum proses transfer dimulai. Strategi migrasi kami dirancang dengan pendekatan zero-downtime — sistem lama tetap berjalan aktif melayani transaksi sementara proses replikasi data ke server cloud berlangsung secara paralel di latar belakang. Setelah sinkronisasi selesai dan diverifikasi, perpindahan akses dilakukan dalam hitungan menit tanpa pelanggan merasakan gangguan apapun. Pasca-migrasi, kami melakukan konfigurasi domain, pengaturan akses multi-cabang yang aman, serta pelatihan komprehensif bagi seluruh staf kasir agar dapat mengoperasikan sistem baru dengan percaya diri. Kini Runchise Cafe dapat memantau performa seluruh cabang secara real-time dari mana saja, kapan saja — cukup dengan koneksi internet.",
        service: "Web Design",
        client: "Runchise Cafe",
        location: "Jakarta Barat, Indonesia",
        date: "20-12-2024",
        filter: "aplikasi",
        categoryIcon: "fa-solid fa-cloud",
        requirementsText: "Pada fase kritis migrasi ini, fokus kami adalah mengeksekusi strategi Database Migration yang kuat dari server lokal kasir on-premise menuju solusi hosting cloud komersial terpercaya, dengan jaminan nol kehilangan data transaksi.",
        requirementsList1: [
            "Fase Asesmen & Audit Infrastruktur Jaringan",
            "Pengembangan Rencana & Jadwal Migrasi",
            "Strategi Migrasi Data dengan Zero-Downtime",
            "Persiapan & Konfigurasi Lingkungan Server Cloud"
        ],
        requirementsList2: [
            "Migrasi Aplikasi Point of Sales (POS)",
            "Pelatihan Kasir & Pembuatan Dokumentasi Penggunaan",
            "Konfigurasi Domain & Manajemen Akses Multi-Cabang",
            "Dukungan Teknis Penuh Pasca-Migrasi (Post-Migration Support)"
        ],
        solution1: "Strategi migrasi bertahap dengan pendekatan zero-downtime yang kami terapkan berhasil memindahkan ribuan data transaksi dari server lokal ke cloud tanpa kehilangan satu pun record data — proses yang berjalan sepenuhnya transparan bagi pelanggan di lapangan.",
        solution2: "Sebagai mitra teknologi yang bertanggung jawab penuh, JalaninWeb memastikan bisnis kafe klien beroperasi tanpa interupsi sepanjang proses migrasi — dari perencanaan awal, eksekusi teknis, hingga pendampingan pasca-migrasi yang menjamin kemandirian tim operasional klien.",
    },
    {
        slug: "sistem-manajemen-klinik-digital",
        title: "Sistem Manajemen Klinik Digital: Dari Antrian Kertas ke Dashboard Real-Time",
        image: "/assets/images/portfolio/portfolio_item_image_10.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Klinik Pratama Sehat Bersama di Malang adalah contoh nyata bagaimana fasilitas kesehatan skala menengah bisa tertinggal bukan karena kualitas pelayanannya buruk, melainkan karena sistem administrasinya yang belum terdigitalisasi. Setiap hari, staf resepsionis harus mengelola antrian pasien secara manual menggunakan buku tulis, dokter tidak memiliki akses cepat ke rekam medis pasien sebelumnya, dan laporan keuangan harian harus dikerjakan secara manual setelah jam operasional berakhir. Inefisiensi ini tidak hanya menguras energi staf, tetapi juga berdampak langsung pada pengalaman pasien yang harus menunggu lebih lama dari seharusnya. JalaninWeb hadir dengan solusi sistem manajemen klinik berbasis web yang dirancang khusus sesuai alur kerja operasional klinik tersebut — bukan solusi generik yang dipaksakan, melainkan sistem yang tumbuh dari kebutuhan nyata di lapangan.",
        description2: "Sistem yang kami bangun mencakup modul pendaftaran dan antrian pasien digital dengan tampilan nomor antrian real-time di layar ruang tunggu, modul rekam medis elektronik (RME) yang memungkinkan dokter mengakses dan memperbarui catatan pasien dari tablet maupun laptop, serta modul kasir dan laporan keuangan harian yang terintegrasi penuh. Semua modul terhubung dalam satu dashboard terpusat yang bisa diakses kepala klinik dari mana saja. Proses implementasi kami lakukan secara bertahap selama tiga minggu — paralel dengan operasional klinik yang tetap berjalan normal — disertai sesi pelatihan intensif untuk seluruh staf. Hasilnya signifikan: waktu tunggu rata-rata pasien berkurang dari 35 menit menjadi 12 menit, dan kepala klinik kini bisa memantau performa operasional harian hanya dari smartphone mereka.",
        service: "App Design",
        client: "Klinik Pratama Sehat Bersama",
        location: "Malang, Jawa Timur",
        date: "03-02-2025",
        filter: "aplikasi",
        categoryIcon: "fa-solid fa-hospital",
        requirementsText: "Klinik membutuhkan sistem terpadu yang mendigitalisasi seluruh alur operasional — dari pendaftaran pasien, rekam medis, hingga pelaporan keuangan — tanpa menghentikan pelayanan yang sedang berjalan.",
        requirementsList1: [
            "Modul Antrian & Pendaftaran Pasien Digital",
            "Rekam Medis Elektronik (RME) Berbasis Web",
            "Integrasi Jadwal Dokter & Appointment Online"
        ],
        requirementsList2: [
            "Modul Kasir & Laporan Keuangan Harian",
            "Dashboard Monitoring Real-Time untuk Manajemen",
            "Pelatihan Staf & Pendampingan Pasca-Launch"
        ],
        solution1: "Sistem manajemen klinik yang kami bangun berhasil memangkas waktu tunggu rata-rata pasien dari 35 menit menjadi hanya 12 menit — sebuah peningkatan yang langsung dirasakan oleh pasien dan staf sejak hari pertama go-live.",
        solution2: "Kepala klinik kini memiliki visibilitas penuh terhadap seluruh operasional harian melalui satu dashboard terintegrasi, menggantikan laporan manual yang sebelumnya membutuhkan waktu berjam-jam untuk disusun setiap malam."
    },
    {
        slug: "website-properti-landing-page",
        title: "Landing Page Properti High-Converting untuk Developer Perumahan Surabaya",
        image: "/assets/images/portfolio/portfolio_item_image_11.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "Di industri properti, kesan pertama adalah segalanya. PT Griya Nusantara Indah, developer perumahan menengah atas di kawasan Surabaya Barat, menyadari bahwa website mereka yang lama tidak lagi mampu mengkonversi pengunjung menjadi calon pembeli yang serius. Tampilan yang sudah ketinggalan zaman, loading yang lambat, dan tidak adanya fitur interaktif membuat calon pembeli potensial beralih ke kompetitor yang tampilannya lebih modern dan meyakinkan. JalaninWeb ditugaskan untuk membangun landing page properti baru yang tidak hanya cantik secara visual, tetapi juga dioptimalkan secara teknis untuk menghasilkan lead berkualitas — calon pembeli yang benar-benar tertarik dan siap dihubungi tim marketing.",
        description2: "Strategi desain kami berpusat pada konsep visual storytelling — setiap section halaman dirancang untuk memandu pengunjung dalam sebuah perjalanan emosional, dari membangun keinginan hingga mendorong tindakan nyata. Kami mengintegrasikan galeri foto dan video 360° unit rumah, kalkulator KPR interaktif yang memungkinkan calon pembeli menghitung cicilan secara langsung di halaman, peta lokasi interaktif dengan highlight fasilitas sekitar, serta formulir lead yang dioptimalkan dengan hanya tiga field wajib untuk meminimalkan friction. Di sisi teknis, halaman dibangun dengan performa loading di bawah 2 detik, fully responsive di semua perangkat, dan terintegrasi dengan Google Analytics serta Meta Pixel untuk tracking konversi yang akurat. Dalam 60 hari pertama setelah launch, jumlah lead masuk meningkat 340% dibandingkan periode yang sama dengan website lama.",
        service: "Web Design",
        client: "PT Griya Nusantara Indah",
        location: "Surabaya Barat, Jawa Timur",
        date: "18-03-2025",
        filter: "webdesign",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Developer properti membutuhkan landing page modern yang mampu mengkonversi traffic organik dan berbayar menjadi lead berkualitas, dengan performa teknis tinggi dan pengalaman pengguna yang memikat.",
        requirementsList1: [
            "Desain UI/UX Berorientasi Konversi (CRO)",
            "Galeri Foto & Tur Virtual 360°",
            "Kalkulator KPR Interaktif"
        ],
        requirementsList2: [
            "Optimasi Performa & Core Web Vitals",
            "Integrasi Analytics & Meta Pixel",
            "Formulir Lead Terintegrasi CRM"
        ],
        solution1: "Landing page baru berhasil meningkatkan jumlah lead masuk sebesar 340% dalam 60 hari pertama — hasil yang melampaui target awal klien dan membuktikan efektivitas pendekatan desain berbasis konversi yang kami terapkan.",
        solution2: "Performa teknis halaman yang optimal dengan loading time di bawah 2 detik berkontribusi langsung pada penurunan bounce rate sebesar 45%, artinya jauh lebih banyak pengunjung yang bertahan dan menjelajahi konten hingga mengisi formulir kontak."
    },
    {
        slug: "erp-custom-distributor-sembako",
        title: "Sistem ERP Custom untuk Distributor Sembako Skala Regional",
        image: "/assets/images/portfolio/portfolio_item_image_1.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "UD Makmur Jaya adalah distributor sembako yang telah beroperasi selama lebih dari 20 tahun di wilayah Jawa Timur, dengan jaringan lebih dari 150 toko pengecer aktif. Di balik pengalaman panjang itu, tersimpan masalah operasional yang semakin hari semakin menghambat pertumbuhan: pencatatan stok barang yang masih menggunakan buku besar fisik, proses pembuatan faktur yang lambat dan rawan salah hitung, serta tidak adanya visibilitas real-time terhadap posisi stok di gudang. JalaninWeb ditugaskan untuk membangun sistem ERP kustom yang benar-benar sesuai dengan model bisnis distribusi sembako mereka — ramping, fokus, dan mudah dioperasikan oleh tim yang tidak memiliki latar belakang IT.",
        description2: "Sistem yang kami bangun dirancang di tiga pilar utama: manajemen stok real-time, manajemen pesanan dan faktur, serta laporan penjualan dan hutang piutang. Modul stok dilengkapi sistem peringatan otomatis ketika stok barang mendekati batas minimum, sehingga tim gudang bisa melakukan reorder sebelum kehabisan. Modul faktur memungkinkan tim penjualan membuat dan mengirim faktur digital ke toko pengecer hanya dalam hitungan detik dari smartphone mereka. Seluruh data terintegrasi dalam satu database terpusat yang dapat diakses pemilik usaha secara real-time dari mana saja. Setelah tiga bulan beroperasi dengan sistem baru, UD Makmur Jaya melaporkan pengurangan kesalahan pengiriman hingga 90% dan penghematan waktu administrasi harian lebih dari 4 jam.",
        service: "App Design",
        client: "UD Makmur Jaya",
        location: "Sidoarjo, Jawa Timur",
        date: "25-04-2025",
        filter: "infrastruktur",
        categoryIcon: "fa-solid fa-server",
        requirementsText: "Distributor membutuhkan sistem ERP kustom yang menggantikan pencatatan manual dengan solusi digital terpadu — mencakup manajemen stok, faktur, dan laporan keuangan — tanpa kerumitan software ERP generik yang berlebihan.",
        requirementsList1: [
            "Modul Manajemen Stok Real-Time dengan Alert Otomatis",
            "Sistem Pembuatan & Pengiriman Faktur Digital",
            "Manajemen Data Master Produk & Pengecer"
        ],
        requirementsList2: [
            "Laporan Penjualan, Stok & Hutang Piutang",
            "Akses Mobile untuk Tim Sales di Lapangan",
            "Migrasi Data Historis & Pelatihan Operasional"
        ],
        solution1: "Sistem ERP kustom yang kami bangun berhasil mengurangi kesalahan pengiriman akibat data stok yang tidak akurat hingga 90% — sebuah perbaikan operasional yang langsung berdampak pada kepuasan toko pengecer dan reputasi bisnis klien.",
        solution2: "Tim administrasi melaporkan penghematan waktu kerja harian lebih dari 4 jam yang sebelumnya terbuang untuk input data manual — waktu yang kini dialihkan untuk aktivitas yang lebih bernilai bagi pertumbuhan bisnis."
    },
    {
        slug: "rebranding-sekolah-swasta",
        title: "Rebranding Digital Sekolah Swasta: Website, Logo & Sistem PPDB Online",
        image: "/assets/images/portfolio/portfolio_item_image_1.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "SMP-SMA Terpadu Al-Hikmah Gresik menghadapi tantangan yang banyak dialami institusi pendidikan swasta: reputasi akademik yang baik, tetapi citra digital yang tidak merepresentasikannya dengan layak. Website lama mereka tampil ketinggalan zaman, sulit diakses dari smartphone, dan tidak memberikan informasi yang cukup bagi orang tua calon siswa. Lebih kritis lagi, proses PPDB masih dilakukan sepenuhnya secara tatap muka — calon wali murid harus datang ke sekolah hanya untuk mengambil formulir. Di era digital ini, penghalang seperti itu bisa menjadi alasan orang tua memilih sekolah lain yang prosesnya lebih praktis. JalaninWeb ditugaskan untuk melakukan transformasi digital menyeluruh: mulai dari rebranding identitas visual hingga pembangunan sistem PPDB online yang fungsional.",
        description2: "Proses kami dimulai dengan riset mendalam terhadap nilai-nilai dan keunggulan sekolah, yang kemudian kami tuangkan ke dalam identitas visual baru — logo yang lebih modern namun tetap mempertahankan elemen islami yang menjadi ciri khas institusi. Website baru dibangun dengan pendekatan mobile-first, dilengkapi halaman profil guru, galeri kegiatan siswa, dan blog pendidikan untuk membangun kepercayaan calon wali murid. Puncak dari proyek ini adalah sistem PPDB online terintegrasi yang memungkinkan calon siswa mendaftar, mengunggah dokumen, dan memantau status pendaftaran secara mandiri dari rumah. Panitia PPDB dapat mengelola seluruh data pendaftar dan melakukan verifikasi dokumen melalui panel admin yang sederhana namun lengkap. Pada tahun ajaran pertama menggunakan sistem baru, jumlah pendaftar meningkat 60% dibandingkan tahun sebelumnya.",
        service: "Web Design",
        client: "SMP-SMA Terpadu Al-Hikmah",
        location: "Gresik, Jawa Timur",
        date: "10-06-2025",
        filter: "webdesign",
        categoryIcon: "fa-solid fa-globe",
        requirementsText: "Institusi pendidikan membutuhkan transformasi digital menyeluruh yang mencakup rebranding identitas visual, website modern yang informatif, dan sistem PPDB online yang memudahkan calon siswa mendaftar dari rumah.",
        requirementsList1: [
            "Rebranding Logo & Identitas Visual Islami Modern",
            "Desain & Pengembangan Website Mobile-First",
            "Sistem PPDB Online dengan Upload Dokumen"
        ],
        requirementsList2: [
            "Panel Admin Manajemen Data Pendaftar",
            "Notifikasi Status Pendaftaran via WhatsApp",
            "Pelatihan Operator & Dokumentasi Sistem"
        ],
        solution1: "Transformasi digital menyeluruh yang kami implementasikan berkontribusi langsung pada peningkatan jumlah pendaftar PPDB sebesar 60% di tahun ajaran pertama — bukti nyata bahwa citra digital yang kuat dan kemudahan akses pendaftaran adalah investasi yang sangat berharga bagi institusi pendidikan.",
        solution2: "Panitia PPDB yang sebelumnya kewalahan mengelola tumpukan berkas fisik kini dapat memproses ratusan pendaftar secara efisien dari satu panel admin — menghemat waktu, mengurangi risiko kehilangan dokumen, dan memberikan pengalaman pendaftaran yang jauh lebih profesional bagi orang tua calon siswa."
    },
    {
        slug: "keamanan-jaringan-manufaktur",
        title: "Audit & Penguatan Keamanan Jaringan untuk Pabrik Manufaktur Tekstil",
        image: "/assets/images/portfolio/portfolio_item_image_1.webp",
        carouselImage: "/assets/images/portfolio/portfolio_item_image_1.webp",
        detailImage: "/assets/images/portfolio/portfolio_details_image_1.webp",
        description1: "PT Sandang Prima Tekstil adalah perusahaan manufaktur tekstil menengah di Mojokerto yang memproduksi kain untuk pasar domestik dan ekspor. Ketika mereka mengalami insiden kebocoran data desain produk eksklusif yang diduga dicuri melalui celah keamanan jaringan internal, manajemen menyadari bahwa investasi dalam keamanan siber bukan lagi pilihan — melainkan keharusan. Jaringan mereka yang terdiri dari puluhan komputer di lantai produksi, gudang, dan kantor administrasi belum pernah diaudit secara profesional sejak awal dibangun bertahun-tahun lalu. JalaninWeb dengan tim spesialis keamanan jaringan ditugaskan untuk melakukan audit menyeluruh, mengidentifikasi seluruh celah keamanan yang ada, dan mengimplementasikan solusi penguatan jaringan yang komprehensif.",
        description2: "Audit keamanan yang kami lakukan mengungkap sejumlah temuan kritis: penggunaan password default pada beberapa router dan switch, tidak adanya segmentasi jaringan antara komputer produksi dan kantor, firmware perangkat jaringan yang sudah kadaluarsa, serta absennya sistem pemantauan aktivitas jaringan yang mencurigakan. Berbekal temuan ini, kami menyusun roadmap perbaikan yang diprioritaskan berdasarkan tingkat risiko. Implementasi mencakup penerapan network segmentation dengan VLAN, instalasi firewall enterprise-grade dengan aturan akses yang ketat, pembaruan firmware seluruh perangkat jaringan, serta implementasi sistem Network Intrusion Detection System (NIDS) untuk memantau aktivitas mencurigakan secara real-time. Kami juga menyelenggarakan sesi security awareness training bagi seluruh karyawan — karena faktor manusia adalah celah yang paling sering dieksploitasi. Pasca-implementasi, tidak ada satu pun insiden keamanan yang berhasil menembus jaringan dalam enam bulan pemantauan.",
        service: "App Design",
        client: "PT Sandang Prima Tekstil",
        location: "Mojokerto, Jawa Timur",
        date: "15-07-2025",
        filter: "infrastruktur",
        categoryIcon: "fa-solid fa-shield-halved",
        requirementsText: "Perusahaan manufaktur membutuhkan audit keamanan jaringan menyeluruh pasca-insiden kebocoran data, dilanjutkan dengan implementasi solusi penguatan keamanan yang komprehensif untuk mencegah kejadian serupa di masa depan.",
        requirementsList1: [
            "Audit & Penetration Testing Jaringan Internal",
            "Implementasi Network Segmentation dengan VLAN",
            "Instalasi Firewall Enterprise-Grade"
        ],
        requirementsList2: [
            "Pembaruan Firmware Seluruh Perangkat Jaringan",
            "Implementasi Sistem NIDS (Network Intrusion Detection)",
            "Security Awareness Training untuk Seluruh Karyawan"
        ],
        solution1: "Audit menyeluruh berhasil mengidentifikasi 12 celah keamanan kritis yang sebelumnya tidak diketahui manajemen — seluruhnya telah ditutup melalui serangkaian tindakan perbaikan terstruktur dalam waktu kurang dari empat minggu.",
        solution2: "Selama enam bulan pemantauan pasca-implementasi, sistem NIDS yang kami pasang berhasil mendeteksi dan memblokir 47 upaya akses mencurigakan secara otomatis — tanpa satu pun insiden keamanan yang berhasil menembus pertahanan jaringan baru perusahaan."
    }
];