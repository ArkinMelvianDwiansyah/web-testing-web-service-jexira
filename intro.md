# PROJECT CONTEXT & PRD: Jexira Web Service

## 1. Tech Stack & Environment
- **Framework Utama:** Astro (Astro.js)
- **Bahasa Pemrograman:** TypeScript (`.ts`) & sintaks `.astro`
- **Node Version:** Node.js v24.14.0 (win-x64)
- **Package Manager:** npm

## 2. Arsitektur Folder Utama
Project ini mengikuti standar struktur direktori Astro yang ketat:

- **`/public/`**
  Ini adalah tempat untuk aset statis (seperti `favicon.ico`, gambar logo, atau font). **Aturan penting:** File di folder ini TIDAK diproses oleh bundler (Vite). Jika kamu menaruh `logo.png` di sini, panggil di kode langsung dengan `/logo.png` (tanpa path `./public/`).
- **`/src/components/`**
  Tempat berkumpulnya semua potongan UI yang *reusable* (bisa dipakai berulang). Contoh: `Header.astro`, `Footer.astro`, `Hero.astro`, atau `BlogCard.astro`.
- **`/src/layouts/`**
  Berisi `BaseLayout.astro`. Ini adalah kerangka utama HTML (berisi `<head>`, meta tags, dan `<body>`) yang membungkus semua konten halaman.
- **`/src/data/`**
  Berisi file TypeScript murni (`portfolio.ts`, `services.ts`). File ini bertindak sebagai *mock database* atau sumber data statis yang nantinya di-*mapping* (di-looping) ke dalam komponen UI.
- **`/dist/`**
  Folder *output* hasil *build* production. Folder ini di-generate otomatis, jangan pernah melakukan edit kode secara manual di folder ini.

## 3. Sistem Routing & Slug (Cara Kerja Astro)
Project ini menggunakan **File-based Routing**. Artinya, struktur file di dalam folder `src/pages/` akan otomatis menjadi URL *website*.

- **Static Routes:**
  - `src/pages/index.astro` -> menjadi halaman utama (`/`)
  - `src/pages/about.astro` -> menjadi halaman (`/about`)
  - `src/pages/contact.astro` -> menjadi halaman (`/contact`)
- **Dynamic Routes (Slugs):**
  Di dalam `src/pages/` terdapat folder `portfolio/` dan `service/`. Jika kita ingin membuat halaman detail yang URL-nya dinamis (contoh: `/portfolio/nama-klien`), kita menggunakan file dengan kurung siku seperti `[slug].astro`. File ini akan mengambil parameter dari URL untuk me-render data spesifik dari `/src/data/portfolio.ts`.

## 4. Cara Menjalankan Project (Commands)
Jangan gunakan `npm start`. Gunakan script bawaan Astro berikut di terminal:
1. **`npm run dev`** : Menjalankan server *development* (biasanya di `http://localhost:4321`). Gunakan ini saat sedang *coding*. Server akan *auto-reload* jika ada perubahan file.
2. **`npm run build`** : Mengkompilasi semua file `.astro` dan `.ts` menjadi file HTML/CSS statis murni ke dalam folder `/dist/`. Digunakan saat siap *deploy* ke *hosting*.
3. **`npm run preview`** : Menjalankan server lokal untuk melihat hasil dari folder `/dist/` secara persis seperti di *production server*.

## 5. Development Guidelines (Instruksi Khusus untuk AI)
- Setiap membuat halaman baru di `src/pages/`, SELALU gunakan komponen `<BaseLayout>` sebagai pembungkus utama agar desain Header dan Footer konsisten.
- Pecah UI yang kompleks menjadi komponen kecil di `src/components/` agar kode di `pages` tetap bersih (*clean*).
- Selalu gunakan TypeScript untuk mendefinisikan tipe data (*Interfaces/Types*) pada parameter `props` di dalam komponen `.astro`.