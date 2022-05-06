// SLIDESHOW

pics = new Array("assets/images/pizza.jpg",  "assets/images/pasta.jpg", "assets/images/wine.jpg") 
count = 0; 
picCount = pics.length;

function npic() {
    count++;

    if(count < picCount) {
        document.getElementById("food").src = pics[count]
    }
    else {
        count = 0
        document.getElementById("food") = pics[count]
    }

}

function ppic() {
    count--;

    if(count > -1) {
        document.getElementById("food").src = pics[count]
    }
    else {
        count = picCount - 1;
        document.getElementById("food").src = pics[count]
    }
}


// COUPONS

function printCoupons() {

    var divContents = document.getElementById("coupons").innerHTML;
    var a = window.open();
    //a.document.write('divContents');
    //win.print();
    a.document.write('<html><body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}