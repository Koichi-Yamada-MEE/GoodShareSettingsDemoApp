/******************************************
 * JSON
 ******************************************/
// プロパティの値を取得
function getJsonValue(path) {
  const jsonData = sessionStorage.getItem("demoAppJson");
  const obj = JSON.parse(jsonData);
  if (!obj) return undefined;

  return path.split('.').reduce((acc, key) => {
    if (acc && key in acc) {
      return acc[key];
    } else {
      return undefined;
    }
  }, obj);
}

// プロパティの値を設定
function setJsonValue(path, value) {
  const jsonData = sessionStorage.getItem("demoAppJson");
  const obj = JSON.parse(jsonData);
  if (!obj) {
    alert("セッションストレージにデータがありません");
    return false;
  }

  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) {
      alert(`"${keys[i]}" が存在しないため更新できません`);
      return false;
    }
    current = current[keys[i]];
  }

  const lastKey = keys[keys.length - 1];
  if (!(lastKey in current)) {
    alert(`"${lastKey}" が存在しないため更新できません`);
    return false;
  }

  current[lastKey] = value;
  sessionStorage.setItem("demoAppJson", JSON.stringify(obj));
  return true;
}


// document.getElementById('open-modal').addEventListener('click', function() {
//   document.getElementById('modal').classList.remove('d-none');
// });

// document.getElementById('close-modal').addEventListener('click', function() {
//   document.getElementById('modal').classList.add('d-none');
// });

















// function toggleVisibility(targetId) {
  // targetArea内の全ての子要素を取得
  // const targetArea = document.getElementById('targetArea');
  // const children = targetArea.children;

  // 各子要素をループして表示/非表示を切り替え
//   for (let i = 0; i < children.length; i++) {
//     const child = children[i];
//     if (child.id === targetId) {
//       child.style.display = 'block'; // 指定されたIDの要素を表示
//     } else {
//       child.style.display = 'none'; // 他の要素を非表示
//     }
//   }
// }


const menuIcon = document.querySelector('.floating-menu-icon');
const drawerMenu = document.querySelector('.drawer-menu');
const closeIcon = document.querySelector('.close-icon');

// 開く
menuIcon.addEventListener('click', () => {
  drawerMenu.classList.add('open');
});

// 閉じる
closeIcon.addEventListener('click', () => {
  drawerMenu.classList.remove('open');
});

// 外側クリックで閉じる
document.addEventListener('click', (e) => {
  if (!drawerMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    drawerMenu.classList.remove('open');
  }
});
