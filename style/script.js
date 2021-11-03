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