let count = 1;
AOS.init();
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
function dark() {
    count1++;
    if (count1 % 2 == 0)
    {
        document.getElementById('body').classList.remove('body');
        document.getElementById('body').classList.add('body-dark');
        // document.getElementById('navbar').classList.remove('navbar');
        document.getElementById('navbar').classList.add('navbar-dark');
        document.getElementById('navbar-mobile').classList.add('navbar-dark');
        document.getElementById('dark').classList.add('white');
        document.getElementById('dark').innerText = 'Light Theme';
        document.getElementById('dark-m').innerText = 'Light Theme';
        let i = 0;
        for (i = 0; i < 10; i++){
            document.getElementsByClassName('h4')[i].classList.add('white');
            document.getElementsByClassName('h3')[i].classList.add('white');
        }
    }
    else{
        document.getElementById('body').classList.add('body');
        document.getElementById('body').classList.remove('body-dark');
        // document.getElementById('navbar').classList.add('navbar');
        document.getElementById('navbar').classList.remove('navbar-dark');
        document.getElementById('navbar-mobile').classList.remove('navbar-dark');
        document.getElementById('dark').classList.remove('white');
        document.getElementById('dark').innerText = 'Dark Theme';
        document.getElementById('dark-m').innerText = 'Dark Theme';
        for (i = 0; i < 10; i++){
            document.getElementsByClassName('h4')[i].classList.remove('white');
            document.getElementsByClassName('h3')[i].classList.remove('white');
        }
    }
}
function mobile(){
    rotate();
    dark();
}