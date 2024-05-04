// Fungsi ini akan dijalankan saat dokumen HTML telah sepenuhnya dimuat
$(document).ready(function () {
    // Ketika elemen dengan kelas 'list' diklik
    $('.list').click(function () {
        // Mengambil nilai dari atribut 'data-filter' pada elemen yang diklik
        const value = $(this).attr('data-filter');

        // Jika nilai adalah 'All'
        if (value == 'All') {
            // Tampilkan semua elemen dengan kelas 'itemBox' dengan efek durasi 1000ms
            $('.itemBox').show('1000')
        } else {
            // Sembunyikan semua elemen dengan kelas 'itemBox' terlebih dahulu
            $('.itemBox').hide();
            // Tampilkan hanya elemen dengan kelas 'itemBox' yang sesuai dengan nilai 'data-filter', dengan efek durasi 1000ms
            $('.itemBox.' + value).show('1000');
        }

        // Tambahkan kelas 'active' ke elemen yang diklik dan hapus kelas 'active' dari saudara-saudaranya
        $(this).addClass('active').siblings().removeClass('active');
    })
})
