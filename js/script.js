$(document).ready(function(){
//hilangkan tombol cari
$('#tombol-cari').hide();


//event ketika keyword ditulis
$('#keyword').on('keyup', function(){
    //munculkan gif loader
    $('.loader').show();

    //ajax untuk menggunakan load
    // $('#bungkus').load('ajax/siswa.php?keyword=' + $('#keyword').val());

    //ajax menggunakan $.get
    $.get('ajax/siswa.php?keyword=' + $('#keyword').val(), function(data){
        $('#bungkus').html(data);
        $('.loader').hide();
    });
});
});

