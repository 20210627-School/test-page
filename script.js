const slide = document.getElementById('slide');
const items = document.querySelectorAll('.item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let counter = 0;
const intervalTime = 4000; // ４秒
let slideInterval;

function updateSlide() {
    // 100% ずつ横にずらす
    slide.style.transform = `translateX(${-100 * counter}%)`;
}

function nextSlide() {
    counter++;
    if (counter >= items.length) {
        counter = 0; // 最後まで行ったら最初に戻る
    }
    updateSlide();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = items.length - 1; // 最初なら最後に飛ぶ
    }
    updateSlide();
}

// 自動再生を開始する
function startAutoSlide() {
    stopAutoSlide(); // 既存のタイマーをクリアして重複を防ぐ
    slideInterval = setInterval(nextSlide, intervalTime);
}

// 自動再生を止める
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// クリックイベント
nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide(); // 操作後にタイマーをリセット
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide(); // 操作後にタイマーをリセット
});

// マウスが画像の上にある時は自動停止、離れたら再開
const container = document.querySelector('.carousel-container');
container.addEventListener('mouseenter', stopAutoSlide);
container.addEventListener('mouseleave', startAutoSlide);

// 初期実行
startAutoSlide();
