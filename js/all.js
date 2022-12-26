var nav = document.querySelector('.temp')
window.addEventListener('scroll', (e) => {
    let scrollY = this.scrollY;
    if (scrollY > 200) {
        this.nav.classList.add("active");
    } else {
        this.nav.classList.remove("active");
    }
})
const dataPanel = document.getElementById("data-panal");
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('YouTubeVideoPlayerAPI', {
        videoId: 'Xa2LF3QZz2c',   // YouTube 影片ID
        width: '100%',            // 播放器寬度 (px)
        height: '500px',           // 播放器高度 (px)
        playerVars: {
            autoplay: 1,            // 自動播放影片
            controls: 0,            // 顯示播放器
            showinfo: 1,            // 隱藏影片標題
            modestbranding: 1,      // 隱藏YouTube Logo
            loop: 1,                // 重覆播放
            playlist: 'Xa2LF3QZz2c', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
            fs: 0,                  // 隱藏全螢幕按鈕
            cc_load_policty: 0,     // 隱藏字幕
            iv_load_policy: 3,      // 隱藏影片註解
            autohide: 0             // 影片播放時，隱藏影片控制列
        },
        events: {
            onReady: function (e) {
                e.target.mute();      //播放時靜音
                e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
            }
        }
    });
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});