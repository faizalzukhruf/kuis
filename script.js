
      //hitung mundur
      var countDownDate = new Date("Dec 30,2019 23::00").getTime();
      var x = setInterval(function () {
        var time = new Date().getTime();
        var timeleft = countDownDate - time;

        // var days = Math.floor(timeleft / (1000 * 60 * 60 *24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        // document.getElementById("hari").innerHTML = '<div class="box time">' + days + '</div>';
        document.getElementById("jam").innerHTML = '<div class="box time">' + hours + '</div>';
        document.getElementById("menit").innerHTML = '<div class="box time">' + minutes + '</div>';
        document.getElementById("detik").innerHTML = '<div class="box time">' + seconds + '</div>';
      },1000);

      //sidebar melayang
      $("#right_bar").sticky({bottomSpacing:180});

      //scroll to top
        $(document).ready(function(){
              $('[data-toggle="tooltip"]').tooltip();
              // scroll body to 0px on click
              $('#scroll-to-top').click(function () {
                  $('body,html').animate({
                      scrollTop: 0
                  }, 800);
                  return false;
              });
        })

                //ragu 1
          $('#ragu1').click(function() {
              $(this).addClass('change_color');
              $('#urutan1').removeClass('text-dark');
              $('#urutan1').addClass('text-white');
              $('#urutan1').removeClass('border');
              $('#urutan1').removeClass('border-primary');
              $('#urutan1').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio1').click(function () {
                      const a5 = document.getElementById('customradio1').checked = true;
                      $('#urutan1').removeClass('text-dark');
                      $('#urutan1').addClass('text-white');
                      $('#urutan1').removeClass('border');
                      $('#urutan1').removeClass('border-primary');
                      $('#urutan1').addClass('bg-custom');
                      $('#urutan1').removeClass('bg-danger');
                      $('#ragu1').removeClass('change_color');
              });
              $('#customradio2').click(function () {
                      const a5 = document.getElementById('customradio2').checked = true;
                      $('#urutan1').removeClass('text-dark');
                      $('#urutan1').addClass('text-white');
                      $('#urutan1').removeClass('border');
                      $('#urutan1').removeClass('border-primary');
                      $('#urutan1').addClass('bg-custom');
                      $('#urutan1').removeClass('bg-danger');
                      $('#ragu1').removeClass('change_color');
              })
              $('#customradio3').click(function () {
                      const a5 = document.getElementById('customradio3').checked = true;
                      $('#urutan1').removeClass('text-dark');
                      $('#urutan1').addClass('text-white');
                      $('#urutan1').removeClass('border');
                      $('#urutan1').removeClass('border-primary');
                      $('#urutan1').addClass('bg-custom');
                      $('#urutan1').removeClass('bg-danger');
                      $('#ragu1').removeClass('change_color');
              })
              $('#customradio4').click(function () {
                      const a5 = document.getElementById('customradio4').checked = true;
                      $('#urutan1').removeClass('text-dark');
                      $('#urutan1').addClass('text-white');
                      $('#urutan1').removeClass('border');
                      $('#urutan1').removeClass('border-primary');
                      $('#urutan1').addClass('bg-custom');
                      $('#urutan1').removeClass('bg-danger');
                      $('#ragu1').removeClass('change_color');
              })
            });

        //ragu ragu 12
          $('#ragu2').click(function() {
              $(this).addClass('change_color');
              $('#urutan2').removeClass('text-dark');
              $('#urutan2').addClass('text-white');
              $('#urutan2').removeClass('border');
              $('#urutan2').removeClass('border-primary');
              $('#urutan2').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio5').click(function () {
                      const a5 = document.getElementById('customradio5').checked = true;
                      $('#urutan2').removeClass('text-dark');
                      $('#urutan2').addClass('text-white');
                      $('#urutan2').removeClass('border');
                      $('#urutan2').removeClass('border-primary');
                      $('#urutan2').addClass('bg-custom');
                      $('#urutan2').removeClass('bg-danger');
                      $('#ragu2').removeClass('change_color');
              });
              $('#customradio6').click(function () {
                      const a5 = document.getElementById('customradio6').checked = true;
                      $('#urutan2').removeClass('text-dark');
                      $('#urutan2').addClass('text-white');
                      $('#urutan2').removeClass('border');
                      $('#urutan2').removeClass('border-primary');
                      $('#urutan2').addClass('bg-custom');
                      $('#urutan2').removeClass('bg-danger');
                      $('#ragu2').removeClass('change_color');
              })
              $('#customradio7').click(function () {
                      const a5 = document.getElementById('customradio7').checked = true;
                      $('#urutan2').removeClass('text-dark');
                      $('#urutan2').addClass('text-white');
                      $('#urutan2').removeClass('border');
                      $('#urutan2').removeClass('border-primary');
                      $('#urutan2').addClass('bg-custom');
                      $('#urutan2').removeClass('bg-danger');
                      $('#ragu2').removeClass('change_color');
              })
              $('#customradio8').click(function () {
                      const a5 = document.getElementById('customradio8').checked = true;
                      $('#urutan2').removeClass('text-dark');
                      $('#urutan2').addClass('text-white');
                      $('#urutan2').removeClass('border');
                      $('#urutan2').removeClass('border-primary');
                      $('#urutan2').addClass('bg-custom');
                      $('#urutan2').removeClass('bg-danger');
                      $('#ragu2').removeClass('change_color');
              })
            });

           //ragu ragu 3
          $('#ragu3').click(function() {
              $(this).addClass('change_color');
              $('#urutan3').removeClass('text-dark');
              $('#urutan3').addClass('text-white');
              $('#urutan3').removeClass('border');
              $('#urutan3').removeClass('border-primary');
              $('#urutan3').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio9').click(function () {
                      const a5 = document.getElementById('customradio9').checked = true;
                      $('#urutan3').removeClass('text-dark');
                      $('#urutan3').addClass('text-white');
                      $('#urutan3').removeClass('border');
                      $('#urutan3').removeClass('border-primary');
                      $('#urutan3').addClass('bg-custom');
                      $('#urutan3').removeClass('bg-danger');
                      $('#ragu3').removeClass('change_color');
              });
              $('#customradio10').click(function () {
                      const a5 = document.getElementById('customradio10').checked = true;
                      $('#urutan3').removeClass('text-dark');
                      $('#urutan3').addClass('text-white');
                      $('#urutan3').removeClass('border');
                      $('#urutan3').removeClass('border-primary');
                      $('#urutan3').addClass('bg-custom');
                      $('#urutan3').removeClass('bg-danger');
                      $('#ragu3').removeClass('change_color');
              });
              $('#customradio11').click(function () {
                      const a5 = document.getElementById('customradio11').checked = true;
                      $('#urutan3').removeClass('text-dark');
                      $('#urutan3').addClass('text-white');
                      $('#urutan3').removeClass('border');
                      $('#urutan3').removeClass('border-primary');
                      $('#urutan3').addClass('bg-custom');
                      $('#urutan3').removeClass('bg-danger');
                      $('#ragu3').removeClass('change_color');
              });
              $('#customradio12').click(function () {
                      const a5 = document.getElementById('customradio12').checked = true;
                      $('#urutan3').removeClass('text-dark');
                      $('#urutan3').addClass('text-white');
                      $('#urutan3').removeClass('border');
                      $('#urutan3').removeClass('border-primary');
                      $('#urutan3').addClass('bg-custom');
                      $('#urutan3').removeClass('bg-danger');
                      $('#ragu3').removeClass('change_color');
              })
            });

           //ragu ragu 4
          $('#ragu4').click(function() {
              $(this).addClass('change_color');
              $('#urutan4').removeClass('text-dark');
              $('#urutan4').addClass('text-white');
              $('#urutan4').removeClass('border');
              $('#urutan4').removeClass('border-primary');
              $('#urutan4').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio13').click(function () {
                      const a5 = document.getElementById('customradio13').checked = true;
                      $('#urutan4').removeClass('text-dark');
                      $('#urutan4').addClass('text-white');
                      $('#urutan4').removeClass('border');
                      $('#urutan4').removeClass('border-primary');
                      $('#urutan4').addClass('bg-custom');
                      $('#urutan4').removeClass('bg-danger');
                      $('#ragu4').removeClass('change_color');
              });
              $('#customradio14').click(function () {
                      const a5 = document.getElementById('customradio14').checked = true;
                      $('#urutan4').removeClass('text-dark');
                      $('#urutan4').addClass('text-white');
                      $('#urutan4').removeClass('border');
                      $('#urutan4').removeClass('border-primary');
                      $('#urutan4').addClass('bg-custom');
                      $('#urutan4').removeClass('bg-danger');
                      $('#ragu4').removeClass('change_color');
              });
              $('#customradio15').click(function () {
                      const a5 = document.getElementById('customradio15').checked = true;
                      $('#urutan4').removeClass('text-dark');
                      $('#urutan4').addClass('text-white');
                      $('#urutan4').removeClass('border');
                      $('#urutan4').removeClass('border-primary');
                      $('#urutan4').addClass('bg-custom');
                      $('#urutan4').removeClass('bg-danger');
                      $('#ragu4').removeClass('change_color');
              });
              $('#customradio16').click(function () {
                      const a5 = document.getElementById('customradio16').checked = true;
                      $('#urutan4').removeClass('text-dark');
                      $('#urutan4').addClass('text-white');
                      $('#urutan4').removeClass('border');
                      $('#urutan4').removeClass('border-primary');
                      $('#urutan4').addClass('bg-custom');
                      $('#urutan4').removeClass('bg-danger');
                      $('#ragu4').removeClass('change_color');
              })
            });

           //ragu 5
           $('#ragu5').click(function() {
              $(this).addClass('change_color');
              $('#urutan5').removeClass('text-dark');
              $('#urutan5').addClass('text-white');
              $('#urutan5').removeClass('border');
              $('#urutan5').removeClass('border-primary');
              $('#urutan5').addClass('bg-danger');
          });
        $('#customradio17').click(function () {
                const a5 = document.getElementById('customradio17').checked = true;
                $('#urutan5').removeClass('text-dark');
                $('#urutan5').addClass('text-white');
                $('#urutan5').removeClass('border');
                $('#urutan5').removeClass('border-primary');
                $('#urutan5').addClass('bg-custom');
                $('#urutan5').removeClass('bg-danger');
                $('#ragu5').removeClass('change_color');
        });
         $('#customradio18').click(function () {
                const a5 = document.getElementById('customradio18').checked = true;
                $('#urutan5').removeClass('text-dark');
                $('#urutan5').addClass('text-white');
                $('#urutan5').removeClass('border');
                $('#urutan5').removeClass('border-primary');
                $('#urutan5').addClass('bg-custom');
                $('#urutan5').removeClass('bg-danger');
                $('#ragu5').removeClass('change_color');
        });
        $('#customradio19').click(function () {
                const a5 = document.getElementById('customradio19').checked = true;
                $('#urutan5').removeClass('text-dark');
                $('#urutan5').addClass('text-white');
                $('#urutan5').removeClass('border');
                $('#urutan5').removeClass('border-primary');
                $('#urutan5').addClass('bg-custom');
                $('#urutan5').removeClass('bg-danger');
                $('#ragu5').removeClass('change_color');
        });
        $('#customradio20').click(function () {
                const a5 = document.getElementById('customradio20').checked = true;
                $('#urutan5').removeClass('text-dark');
                $('#urutan5').addClass('text-white');
                $('#urutan5').removeClass('border');
                $('#urutan5').removeClass('border-primary');
                $('#urutan5').addClass('bg-custom');
                $('#urutan5').removeClass('bg-danger');
                $('#ragu5').removeClass('change_color');
        });

        //ragu 16
          $('#ragu16').click(function() {
              $(this).addClass('change_color');
              $('#urutan16').removeClass('text-dark');
              $('#urutan16').addClass('text-white');
              $('#urutan16').removeClass('border');
              $('#urutan16').removeClass('border-primary');
              $('#urutan16').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio1').click(function () {
                      const a5 = document.getElementById('customradio1').checked = true;
                      $('#urutan16').removeClass('text-dark');
                      $('#urutan16').addClass('text-white');
                      $('#urutan16').removeClass('border');
                      $('#urutan16').removeClass('border-primary');
                      $('#urutan16').addClass('bg-custom');
                      $('#urutan16').removeClass('bg-danger');
                      $('#ragu16').removeClass('change_color');
              });
              $('#customradio2').click(function () {
                      const a5 = document.getElementById('customradio2').checked = true;
                      $('#urutan16').removeClass('text-dark');
                      $('#urutan16').addClass('text-white');
                      $('#urutan16').removeClass('border');
                      $('#urutan16').removeClass('border-primary');
                      $('#urutan16').addClass('bg-custom');
                      $('#urutan16').removeClass('bg-danger');
                      $('#ragu16').removeClass('change_color');
              })
              $('#customradio3').click(function () {
                      const a5 = document.getElementById('customradio3').checked = true;
                      $('#urutan16').removeClass('text-dark');
                      $('#urutan16').addClass('text-white');
                      $('#urutan16').removeClass('border');
                      $('#urutan16').removeClass('border-primary');
                      $('#urutan16').addClass('bg-custom');
                      $('#urutan16').removeClass('bg-danger');
                      $('#ragu16').removeClass('change_color');
              })
              $('#customradio4').click(function () {
                      const a5 = document.getElementById('customradio4').checked = true;
                      $('#urutan16').removeClass('text-dark');
                      $('#urutan16').addClass('text-white');
                      $('#urutan16').removeClass('border');
                      $('#urutan16').removeClass('border-primary');
                      $('#urutan16').addClass('bg-custom');
                      $('#urutan16').removeClass('bg-danger');
                      $('#ragu16').removeClass('change_color');
              })
            });

        //ragu ragu 17
          $('#ragu17').click(function() {
              $(this).addClass('change_color');
              $('#urutan17').removeClass('text-dark');
              $('#urutan17').addClass('text-white');
              $('#urutan17').removeClass('border');
              $('#urutan17').removeClass('border-primary');
              $('#urutan17').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio5').click(function () {
                      const a5 = document.getElementById('customradio5').checked = true;
                      $('#urutan17').removeClass('text-dark');
                      $('#urutan17').addClass('text-white');
                      $('#urutan17').removeClass('border');
                      $('#urutan17').removeClass('border-primary');
                      $('#urutan17').addClass('bg-custom');
                      $('#urutan17').removeClass('bg-danger');
                      $('#ragu17').removeClass('change_color');
              });
              $('#customradio6').click(function () {
                      const a5 = document.getElementById('customradio6').checked = true;
                      $('#urutan17').removeClass('text-dark');
                      $('#urutan17').addClass('text-white');
                      $('#urutan17').removeClass('border');
                      $('#urutan17').removeClass('border-primary');
                      $('#urutan17').addClass('bg-custom');
                      $('#urutan17').removeClass('bg-danger');
                      $('#ragu17').removeClass('change_color');
              })
              $('#customradio7').click(function () {
                      const a5 = document.getElementById('customradio7').checked = true;
                      $('#urutan17').removeClass('text-dark');
                      $('#urutan17').addClass('text-white');
                      $('#urutan17').removeClass('border');
                      $('#urutan17').removeClass('border-primary');
                      $('#urutan17').addClass('bg-custom');
                      $('#urutan17').removeClass('bg-danger');
                      $('#ragu17').removeClass('change_color');
              })
              $('#customradio8').click(function () {
                      const a5 = document.getElementById('customradio8').checked = true;
                      $('#urutan17').removeClass('text-dark');
                      $('#urutan17').addClass('text-white');
                      $('#urutan17').removeClass('border');
                      $('#urutan17').removeClass('border-primary');
                      $('#urutan17').addClass('bg-custom');
                      $('#urutan17').removeClass('bg-danger');
                      $('#ragu17').removeClass('change_color');
              })
            });

           //ragu ragu 18
          $('#ragu18').click(function() {
              $(this).addClass('change_color');
              $('#urutan18').removeClass('text-dark');
              $('#urutan18').addClass('text-white');
              $('#urutan18').removeClass('border');
              $('#urutan18').removeClass('border-primary');
              $('#urutan18').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio9').click(function () {
                      const a5 = document.getElementById('customradio9').checked = true;
                      $('#urutan18').removeClass('text-dark');
                      $('#urutan18').addClass('text-white');
                      $('#urutan18').removeClass('border');
                      $('#urutan18').removeClass('border-primary');
                      $('#urutan18').addClass('bg-custom');
                      $('#urutan18').removeClass('bg-danger');
                      $('#ragu18').removeClass('change_color');
              });
              $('#customradio10').click(function () {
                      const a5 = document.getElementById('customradio10').checked = true;
                      $('#urutan18').removeClass('text-dark');
                      $('#urutan18').addClass('text-white');
                      $('#urutan18').removeClass('border');
                      $('#urutan18').removeClass('border-primary');
                      $('#urutan18').addClass('bg-custom');
                      $('#urutan18').removeClass('bg-danger');
                      $('#ragu18').removeClass('change_color');
              });
              $('#customradio11').click(function () {
                      const a5 = document.getElementById('customradio11').checked = true;
                      $('#urutan18').removeClass('text-dark');
                      $('#urutan18').addClass('text-white');
                      $('#urutan18').removeClass('border');
                      $('#urutan18').removeClass('border-primary');
                      $('#urutan18').addClass('bg-custom');
                      $('#urutan18').removeClass('bg-danger');
                      $('#ragu18').removeClass('change_color');
              });
              $('#customradio12').click(function () {
                      const a5 = document.getElementById('customradio12').checked = true;
                      $('#urutan18').removeClass('text-dark');
                      $('#urutan18').addClass('text-white');
                      $('#urutan18').removeClass('border');
                      $('#urutan18').removeClass('border-primary');
                      $('#urutan18').addClass('bg-custom');
                      $('#urutan18').removeClass('bg-danger');
                      $('#ragu18').removeClass('change_color');
              })
            });

           //ragu ragu 19
          $('#ragu19').click(function() {
              $(this).addClass('change_color');
              $('#urutan19').removeClass('text-dark');
              $('#urutan19').addClass('text-white');
              $('#urutan19').removeClass('border');
              $('#urutan19').removeClass('border-primary');
              $('#urutan19').addClass('bg-danger');
          });
           $(document).ready(function(){
              $('#customradio13').click(function () {
                      const a5 = document.getElementById('customradio13').checked = true;
                      $('#urutan19').removeClass('text-dark');
                      $('#urutan19').addClass('text-white');
                      $('#urutan19').removeClass('border');
                      $('#urutan19').removeClass('border-primary');
                      $('#urutan19').addClass('bg-custom');
                      $('#urutan19').removeClass('bg-danger');
                      $('#ragu19').removeClass('change_color');
              });
              $('#customradio14').click(function () {
                      const a5 = document.getElementById('customradio14').checked = true;
                      $('#urutan19').removeClass('text-dark');
                      $('#urutan19').addClass('text-white');
                      $('#urutan19').removeClass('border');
                      $('#urutan19').removeClass('border-primary');
                      $('#urutan19').addClass('bg-custom');
                      $('#urutan19').removeClass('bg-danger');
                      $('#ragu19').removeClass('change_color');
              });
              $('#customradio15').click(function () {
                      const a5 = document.getElementById('customradio15').checked = true;
                      $('#urutan19').removeClass('text-dark');
                      $('#urutan19').addClass('text-white');
                      $('#urutan19').removeClass('border');
                      $('#urutan19').removeClass('border-primary');
                      $('#urutan19').addClass('bg-custom');
                      $('#urutan19').removeClass('bg-danger');
                      $('#ragu19').removeClass('change_color');
              });
              $('#customradio16').click(function () {
                      const a5 = document.getElementById('customradio16').checked = true;
                      $('#urutan19').removeClass('text-dark');
                      $('#urutan19').addClass('text-white');
                      $('#urutan19').removeClass('border');
                      $('#urutan19').removeClass('border-primary');
                      $('#urutan19').addClass('bg-custom');
                      $('#urutan19').removeClass('bg-danger');
                      $('#ragu19').removeClass('change_color');
              })
            });

           //ragu 20
           $('#ragu20').click(function() {
              $(this).addClass('change_color');
              $('#urutan20').removeClass('text-dark');
              $('#urutan20').addClass('text-white');
              $('#urutan20').removeClass('border');
              $('#urutan20').removeClass('border-primary');
              $('#urutan20').addClass('bg-danger');
          });
        $('#customradio17').click(function () {
                const a5 = document.getElementById('customradio17').checked = true;
                $('#urutan20').removeClass('text-dark');
                $('#urutan20').addClass('text-white');
                $('#urutan20').removeClass('border');
                $('#urutan20').removeClass('border-primary');
                $('#urutan20').addClass('bg-custom');
                $('#urutan20').removeClass('bg-danger');
                $('#ragu20').removeClass('change_color');
        });
         $('#customradio18').click(function () {
                const a5 = document.getElementById('customradio18').checked = true;
                $('#urutan20').removeClass('text-dark');
                $('#urutan20').addClass('text-white');
                $('#urutan20').removeClass('border');
                $('#urutan20').removeClass('border-primary');
                $('#urutan20').addClass('bg-custom');
                $('#urutan20').removeClass('bg-danger');
                $('#ragu20').removeClass('change_color');
        });
        $('#customradio19').click(function () {
                const a5 = document.getElementById('customradio19').checked = true;
                $('#urutan20').removeClass('text-dark');
                $('#urutan20').addClass('text-white');
                $('#urutan20').removeClass('border');
                $('#urutan20').removeClass('border-primary');
                $('#urutan20').addClass('bg-custom');
                $('#urutan20').removeClass('bg-danger');
                $('#ragu20').removeClass('change_color');
        });
        $('#customradio20').click(function () {
                const a5 = document.getElementById('customradio20').checked = true;
                $('#urutan20').removeClass('text-dark');
                $('#urutan20').addClass('text-white');
                $('#urutan20').removeClass('border');
                $('#urutan20').removeClass('border-primary');
                $('#urutan20').addClass('bg-custom');
                $('#urutan20').removeClass('bg-danger');
                $('#ragu20').removeClass('change_color');
        });

       //alert kirim jawaban
      $('#kirim').click(function(){
           swal({
            title: "Apakah Anda yakin untuk mengirim jawaban?",
            text: "Jawaban tidak dapat di ubah, ketika sudah di kirim!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Jawaban telah di kirim!", {
                icon: "success",
              });
            } else {
              swal("Cek kembali jawaban Anda!");
            }
          });
      });