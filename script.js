const swiper = new Swiper('.main-slider', {
    loop: true,               // 無限ループ
    speed: 1000,              // 切り替えアニメーションの速度(1秒)
    
    autoplay: {
        delay: 5000,          // 5秒ごとに自動で切り替わる
        disableOnInteraction: false, // ユーザーが手動で動かしても自動再生を止めない
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,      // ドットをクリックして切り替え
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Canva埋め込み内での動作安定化
    observer: true,
    observeParents: true,
});
