pics = new Array("assets/images/pizza.jpg",  "assets/images/pasta.jpg", "assets/images/wine.jpg") 
count = 0; picCount = pics.length;

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


