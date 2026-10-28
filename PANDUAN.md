# 📖 PANDUAN CARA MENGGANTI FOTO WEBSITE ANNIVERSARY

File ini berisi catatan dan langkah-langkah lengkap untuk mengganti foto dan teks pada website ini.

---

## 📂 LANGKAH 1: Masukkan File Foto ke Folder `photos/`

1. Buka folder:
   ```text
   WebAniv/photos/
   ```
2. Salin/Paste foto-foto yang ingin kamu gunakan ke dalam folder tersebut.
3. **Tips Penamaan File:**  
   Beri nama sederhana agar mudah dipanggil di kode, contohnya:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg` (dan seterusnya)
   - *Catatan: Perhatikan ekstensi file (apakah `.jpg`, `.jpeg`, atau `.png`). Nama file harus sama persis dengan yang ditulis di kode.*

---

## 🌐 LANGKAH 2: Ganti Foto di File `index.html`

Buka file **`index.html`** menggunakan text editor (VS Code, Notepad, dll).

### 1. Foto Utama / Hero Film Strip (Sekitar Baris 64)
Cari baris berikut:
```html
<img class="film-photo" id="hero-photo" src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800" alt="kita berdua" />
```
Ganti atribut `src="..."` menjadi:
```html
<img class="film-photo" id="hero-photo" src="photos/foto1.jpg" alt="kita berdua" />
```

### 2. Foto Bingkai Hati di Dalam Kotak Kado (Sekitar Baris 121)
Cari baris berikut:
```html
<img class="heart-photo" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" alt="momen spesial"
  onclick="openLB(this.src, 'LOVE 💖')" style="cursor: pointer;" />
```
Ganti atribut `src="..."` menjadi:
```html
<img class="heart-photo" src="photos/foto2.jpg" alt="momen spesial"
  onclick="openLB(this.src, 'LOVE 💖')" style="cursor: pointer;" />
```

### 3. Foto Karakter / Pixel World (Sekitar Baris 150)
Bagian ini sudah terpasang menggunakan foto pixel interaktif:
- Tampilan normal: `photos/pixel2.jpg` (tersenyum)
- Efek saat kursor diarahkan (hover): `photos/pixel1.jpg` (mengedipkan mata)
```html
<img id="main-pixel" class="pixel-img" src="photos/pixel2.jpg" alt="pixel you" />
```

### 4. Favicon / Ikon Tab Browser (Sekitar Baris 15)
Sudah diatur menggunakan emoji love 💗:
```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💗</text></svg>" />
```

---

## ⚙️ LANGKAH 3: Ganti Galeri & Running Strip di File `script.js`

Buka file **`script.js`**.

### 1. Daftar Foto Galeri (Baris 3 - 25)
Cari variabel `const photos`:
```javascript
const photos = [
  { src: 'photos/foto1.jpg', cap: 'Momen Indah Kita' },
  { src: 'photos/foto2.jpg', cap: 'Kebahagiaan Bersamamu' },
  { src: 'photos/foto3.jpg', cap: 'Langkah Bersama' },
  { src: 'photos/foto4.jpg', cap: 'Cinta Dalam Genggaman' },
  { src: 'photos/foto5.jpg', cap: 'Dunia Terasa Indah' },
  { src: 'photos/foto6.jpg', cap: 'Senyum Paling Manis' },
  { src: 'photos/foto7.jpg', cap: 'Setiap Detik Berharga' },
  { src: 'photos/foto8.jpg', cap: 'Kebersamaan Kita' },
  // ... dan seterusnya
];
```
- **`src`**: Arahkan ke file di dalam folder `photos/` (misal `'photos/foto1.jpg'`).
- **`cap`**: Tulisan / caption kenangan yang muncul saat foto disentuh/diklik.

### 2. Efek Hover Foto Pixel (Sekitar Baris 243 - 244)
Bagian ini sudah terhubung ke file foto pixel lokal:
```javascript
const PIXEL_SMILE = "photos/pixel1.jpg";
const PIXEL_WINK  = "photos/pixel2.jpg";
```

---

## 💡 CATATAN TAMBAHAN

### Jika Jumlah Fotonya Kurang dari 21:
Pada `script.js` baris 115, galeri dibagi berdasarkan tahun:
```javascript
const years = [
  { year: '2023', start: 0, count: 6 },
  { year: '2024', start: 6, count: 6 },
  { year: '2025', start: 12, count: 6 },
  { year: 'Future', start: 18, count: 3 }
];
```
Jika foto yang kamu punya lebih sedikit (misalnya total hanya 8 foto), kamu bisa ubah bagian di atas agar sesuai dengan jumlah foto yang kamu miliki, atau minta AI untuk menyesuaikannya.

### Mengganti Teks Nama & Tanggal (Opsional):
- **Tanggal Jadian:** Ada di `index.html` baris 32 (`DD-MM-YYYY ♡`).
- **Nama Pasangan:** Ada di `index.html` baris 83-85 (`Nama Kamu 💗 Nama Dia`).
- **Isi Surat:** Ada di `script.js` baris 173 (`const msg = "..."`).

