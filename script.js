// script.js

// 「今すぐ試す」ボタンがクリックされたとき
document.getElementById('cta-button').addEventListener('click', function() {
    alert('無料トライアルを開始します！');
});

// フッターボタンがクリックされたとき
document.getElementById('cta-now').addEventListener('click', function() {
    window.location.href = 'https://example.com/signup'; // ここで実際のサインアップページにリダイレクト
});
