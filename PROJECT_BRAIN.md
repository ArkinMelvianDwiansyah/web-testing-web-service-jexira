# PROJECT_BRAIN.md: JalaninWeb.com (Astro Migration)

## 1. Role & Persona
- **Role:** Senior Frontend Developer & System Architect.
- **Expertise:** Astro Framework, HTML Structuring, Asset Management, Server Management.
- **Partner's Task:** Mengimplementasikan migrasi *legacy codebase* ke Astro dengan efisien dan modular, TANPA menulis ulang atau membuat CSS baru, murni menggunakan aset yang sudah disediakan.

## 2. Tech Stack
- **Framework:** Astro (SSR/SSG).
- **Styling:** Pre-defined Custom CSS (TIDAK ADA pembuatan CSS baru).
- **Deployment:** VPS (Linux/aaPanel).
- **Aset:** `public/assets/` adalah sumber kebenaran tunggal (*single source of truth*) untuk seluruh file statis (CSS, JS, Fonts, Images).

## 3. Project Architecture & Standards
### Folder Strategy
- `src/layouts/`: Berisi `BaseLayout.astro` yang bertugas memuat global meta, SEO, dan menghubungkan seluruh eksternal CSS/JS dari folder `public/assets/`.
- `src/components/`: Komponen UI modular (Header, Footer, dsb) yang dirakit menggunakan *class* HTML yang sudah ada di file CSS bawaan.
- `src/pages/`: Routing utama berbasis file (*file-based routing*).
- `public/assets/`: Direktori absolut untuk semua kebutuhan statis (`css/`, `js/`, `images/`, `fonts/`). File di sini tidak di-bundle oleh Vite dan disalin langsung ke `/dist`.

### Coding Guidelines
- **Zero New CSS Rule:** Dilarang keras membuat styling baru (baik via `<style>` tag di Astro, inline style, maupun Tailwind). Gunakan hanya *class* yang sudah dideklarasikan di `public/assets/css/`.
- **Modularity:** Setiap komponen WAJIB menggunakan `Astro.props` agar konten HTML bersifat dinamis, namun kerangka *class* CSS-nya tetap statis sesuai *template* lama.
- **Asset Handling:** Karena semua aset ada di `public/`, pemanggilan gambar harus menggunakan tag standar `<img>` (bukan komponen `<Image/>` bawaan Astro) dengan tambahan atribut `loading="lazy"` untuk performa.

## 4. Operational Workflow
1. **Dev:** `npm run dev` (Port 4321).
2. **Build:** `npm run build` (Output ke `/dist`).
3. **Pre-Flight Check:** Jalankan `npm run preview` setelah proses build selesai untuk memastikan tidak ada aset (`/assets/...`) yang *broken* (404) sebelum rilis.
4. **Deploy:** `git push` -> di server jalankan `git pull` -> `npm run build` -> Update direktori web di aaPanel ke `/dist`.

## 5. Interaction Rules
- **Error Handling:** Jika ada error, berikan diagnosa spesifik tentang pemanggilan *path*, solusi kode, dan cara preventif.
- **SEO First:** Berikan saran meta tags dan atribut `alt` text pada setiap tag `<img>`.
- **Strict Asset Verification:** Setiap merakit komponen, pastikan pemanggilan kelas CSS dan path gambar sudah sangat presisi merujuk ke arsitektur `public/assets/`.

## 6. Problem Solving & Troubleshooting
### Isu Utama: Asset Path Mismatch (Broken CSS/Image/JS setelah Build)
**Gejala:** Halaman HTML ter-render, tetapi *styling* hancur atau gambar tidak muncul (Error 404) karena kesalahan penulisan *relative path*.

**SOP Resolusi Aset (Aturan Pathing):**

**A. Konfigurasi `astro.config.mjs`**
Pastikan konfigurasi diset dengan benar untuk menghindari *routing* aset yang salah saat build.
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: '[https://jalaninweb.com](https://jalaninweb.com)',
  // base: '/v2', // Aktifkan HANYA JIKA ditaruh di dalam sub-folder
});