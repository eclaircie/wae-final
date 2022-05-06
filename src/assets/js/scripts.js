// SLIDESHOW

gallery = new Array("assets/images/pizza.jpg",  "assets/images/pasta.jpg", "assets/images/wine.jpg");

imgTotal = gallery.length;

count = 0;

function galleryNext() {
    count++;

    if(count < imgTotal) {
        document.getElementById("slideshow-img").src = gallery[count];
    }
    else {
        count = 0
        document.getElementById("slideshow-img").src = gallery[count]
    }
}

function galleryPrevious() {
     count--;

     if(count > -1) {
         document.getElementById("slideshow-img").src = gallery[count]
     }
     else {
         count = imgTotal - 1;
         document.getElementById("slideshow-img").src = gallery[count]
     }
}



// COUPONS

function printCoupons() {
    var content = document.getElementById("coupons").innerHTML;
    var win = window.open();
    win.document.write('<html><body>', content, '</body></html>');
    win.document.close();
    win.print();
}