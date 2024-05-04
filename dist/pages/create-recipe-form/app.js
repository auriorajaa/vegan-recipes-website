// Ambil elemen input
var inputQuantity = document.getElementById('servings');

// Tambahkan event listener untuk 'change' event
inputQuantity.addEventListener('change', function () {
    // Ambil nilai dari input
    var quantity = parseInt(inputQuantity.value);

    // Validasi jika nilai adalah 0, atur nilainya ke 1
    if (quantity === 0) {
        inputQuantity.value = 1;
    }
});

// Fungsi ini mengambil elemen dengan ID 'floating_email' dan menambahkan event listener untuk input
document.getElementById('floating_email').addEventListener('input', function () {
    // Mengambil nilai email dari input
    var email = this.value;
    // Pola regular expression untuk memeriksa validitas email
    var pattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
    // Memeriksa apakah nilai email sesuai dengan pola regular expression
    var isValid = pattern.test(email);

    // Jika email tidak valid
    if (!isValid) {
        // Menetapkan pesan kesalahan kustom
        this.setCustomValidity("Please enter a valid email address");
    } else {
        // Jika email valid, menghapus pesan kesalahan kustom
        this.setCustomValidity("");
    }
});


// Ambil elemen formulir
const form = document.getElementById('recipeForm');

// Ketika formulir disubmit
form.addEventListener('submit', function (event) {
    // Mencegah pengiriman formulir default
    event.preventDefault();

    // Tampilkan modal konfirmasi
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('hidden');
});

// Ambil tombol untuk menutup modal
const closeModalButton = document.getElementById('closeModal');

// Ketika tombol untuk menutup modal ditekan
closeModalButton.addEventListener('click', function () {
    // Sembunyikan modal
    const modal = document.getElementById('confirmModal');
    modal.classList.add('hidden');
});

// Ambil tombol untuk mengonfirmasi pengiriman formulir
const confirmSubmitButton = document.getElementById('confirmSubmit');

// Ketika tombol untuk mengonfirmasi pengiriman formulir ditekan
confirmSubmitButton.addEventListener('click', function () {
    // Submit formulir
    form.submit();
});

// Ambil tombol untuk membatalkan pengiriman formulir
const cancelSubmitButton = document.getElementById('cancelSubmit');

// Ketika tombol untuk membatalkan pengiriman formulir ditekan
cancelSubmitButton.addEventListener('click', function () {
    // Sembunyikan modal
    const modal = document.getElementById('confirmModal');
    modal.classList.add('hidden');
});
