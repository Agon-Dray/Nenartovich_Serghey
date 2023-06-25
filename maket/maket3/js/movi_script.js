
// var movie = [
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m1.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m2.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m3.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m4.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m5.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m6.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     },
//     {
//         bgImgUrl: "../../../maket/maket3/img/movie/m7.png",
//         movieName: "MovieName",
//         recens: "serie and seasons",
//     }   
// ]
// var rec = document.querySelector('div[data-movie="movie"]')

// function DslMovie() {
//     var str = '';
//     for (var i = 0; i < movie.length; i++) {
//         str += `
//     <div class="movie" style="background-image: url(${movie[i].bgImgUrl});">
//         <div class="recens">
//             <h3>${movie[i].movieName}</h3>
//             <p>${movie[i].recens}</p>
//             <button></button>
//         </div>
//     </div>`;
//     }
//     rec.innerHTML = str;
// }

// DslMovie()

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    })
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }