const slide = document.getElementById('slide');
const items = document.querySelectorAll('.item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let counter = 0;
const intervalTime = 5000; // 5秒 (5000ms)
let slideInterval;

// スライドを動かすメイン関数
const updateSlide = () => {
  slide.style.transform = `translateX(${-100 * counter}%)`;
};

// 次のスライドへ
const nextSlide = () => {
  counter++;
  if (counter >= items.length) {
    counter = 0; // 最後まで行ったら最初に戻る
  }
  updateSlide();
};

// 前のスライドへ
const prevSlide = () => {
  counter--;
  if (counter < 0) {
    counter = items.length - 1; // 最初だったら最後に飛ぶ
  }
  updateSlide();
};

// 自動再生を開始する関数
const startSlide = () => {
  slideInterval = setInterval(nextSlide, intervalTime);
};

// 自動再生をリセットする関数（ボタン操作時に呼ぶ）
const resetInterval = () => {
  clearInterval(slideInterval);
  startSlide();
};

// イベントリスナー
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval(); // 手動操作したらタイマーをリセット
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval(); // 手動操作したらタイマーをリセット
});

// 実行
startSlide();
