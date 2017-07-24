var index = 1;

function onclick(n) {

    index = index + 1;
    showImage(index);
    console.log(onclick)
}

showImage(1);

function showImage(n) {

    var x = document.getElementsByClassName("rolimage");
    if (n>x.length) {index=1}
      if (n<1) {index=x.length}
    for (var i = 0; i < x.length; i++) {

        x[i].style.display = "none";
    }
    x[index-1].style.display = "block";
}