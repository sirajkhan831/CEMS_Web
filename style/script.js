let count = 1;
AOS.init();

function mobile() {
    setTimeout(rotate, 600);
    darkmode();
}

function rotate() {
    count++;
    if (count % 2 == 0) {
        document.getElementById('bur').classList.add("burger-rev");
        document.getElementById('bur').classList.add("bur");
        setTimeout(function remove() {
            document.getElementById('bur').classList.remove('bur');
            document.getElementById('bur').classList.remove('burger');
        }, 700);
        document.getElementById('mobile').style.display = 'flex'
        document.getElementById('mobile').classList.remove('slide-one');
        document.getElementById('mobile').classList.add('slide');
        document.getElementById('content').style.display = 'none';
    }
    else {
        document.getElementById('bur').classList.remove("burger-rev");
        document.getElementById('bur').classList.add("bur-rev");
        document.getElementById('mobile').classList.add('slide-next');
        document.getElementById('bur').classList.add('burger');
        setTimeout(function remove() {
            document.getElementById('bur').classList.remove('bur-rev');
            document.getElementById('mobile').style.display = 'none'
        }, 700);
        document.getElementById('mobile').classList.add('slide-one');
    }
}
let count1 = 1;
function darkmode() {
    count1++;
    document.getElementById('body').classList.toggle('body-dark');
    document.getElementById('navbar').classList.toggle('navbar-dark');
    document.getElementById('navbar-mobile').classList.toggle('navbar-dark');
    document.getElementById('dark').classList.toggle('white');
    if (count1 % 2 == 0) {
        console.log(count1);
        document.getElementById('switch').src = "/style/drag-light.png";
        document.getElementById('drag').src = "/style/dragme-light.png";
        document.getElementById('bur').src = "/style/burger-light.png";
    }
    else {
        console.log(count1);
        document.getElementById('switch').src = "/style/drag-black.png"
        document.getElementById('drag').src = "/style/dragme-black.png"
        document.getElementById('bur').src = "/style/burger.png";
    }
    document.getElementById('drag1').classList.toggle('drag');
    document.getElementById('drag').classList.toggle('drag');
    document.getElementById('drag1').classList.toggle('drag-left');
    document.getElementById('drag').classList.toggle('drag-left');
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName('h4')[i].classList.toggle('white');
        document.getElementsByClassName('h3')[i].classList.toggle('white');
    }
}