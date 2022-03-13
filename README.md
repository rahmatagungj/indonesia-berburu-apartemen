# Berburu Apartemen

Pada suatu hari Anda ingin pindah ke apartemen baru di jalan tertentu, dan Anda diberi daftar blok bersebelahan di jalan itu di mana setiap blok berisi apartemen tempat Anda bisa pindah.

Anda juga memiliki daftar persyaratan: daftar bangunan yang penting bagi Anda. Misalnya, Anda mungkin ingin memiliki sekolah dan pusat kebugaran di dekat apartemen Anda. Daftar blok yang Anda miliki berisi informasi di setiap blok tentang semua bangunan yang ada dan tidak ada di blok yang bersangkutan. Misalnya, untuk setiap blok, Anda mungkin tahu apakah ada sekolah, kolam renang, kantor, dan gym.

Untuk mengoptimalkan hidup Anda, Anda ingin memilih blok apartemen sedemikian rupa sehingga Anda meminimalkan jarak terjauh Anda harus berjalan kaki dari apartemen Anda untuk mencapai salah satu bangunan yang Anda butuhkan.

Buatlah fungsi yang mengambil daftar blok bersebelahan di jalan tertentu dan daftar bangunan yang Anda butuhkan dan yang mengembalikan lokasi (indeks) blok yang paling optimal untuk Anda.

Jika ada beberapa blok yang paling optimal, fungsi Anda dapat mengembalikan indeks salah satunya.

### Input

```js
blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
]
reqs = ["gym", "school", "store"]
```

### Output

```js
3 // pada indeks 3, jarak terjauh yang harus Anda tempuh untuk mencapai gym, sekolah, atau toko adalah 1 blok; di indeks lain, Anda harus berjalan lebih jauh
```

## Instructions

1. Anda harus menyelesaikan fungsi apartmentHunting pada berkas `apartmentHunting.js`.
2. Fungsi harus mengembalikan nilai indeks blok yang paling optimal untuk Anda.
3. Jalankan program dan test dengan perintah `node run`
