function toggleVisibility(targetId) {
  // targetArea内の全ての子要素を取得
  const targetArea = document.getElementById('targetArea');
  const children = targetArea.children;

  // 各子要素をループして表示/非表示を切り替え
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.id === targetId) {
      child.style.display = 'block'; // 指定されたIDの要素を表示
    } else {
      child.style.display = 'none'; // 他の要素を非表示
    }
  }
}


const hamburgerIcon = document.querySelector('.hamburger-icon');
const drawerContainer = document.querySelector('.drawer-container');
const closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click', () => {
  drawerContainer.classList.add('open'); // 表示 + ドローイン
});

closeIcon.addEventListener('click', () => {
  drawerContainer.classList.remove('open'); // 非表示 + ドローアウト
});

// ドロワー外をクリックして閉じる場合（任意）
document.addEventListener('click', (e) => {
  if (!drawerContainer.contains(e.target) && !hamburgerIcon.contains(e.target)) {
    drawerContainer.classList.remove('open');
  }
});
