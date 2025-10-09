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


/******************************************
 * ドロワーメニュー
 ******************************************/
fetch("../partials/drawer-menu.html")
  .then(response => response.text())
  .then(html => {
    document.querySelector(".drawer-menu").innerHTML = html;
  });

/******************************************
 * モーダルウインドウ
 ******************************************/

function showModal(modalId) {
  
  // const trigger = document.querySelector('.modal-trigger');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContainer = document.getElementById(modalId);
  const modalHeader = modalContainer.querySelector('.modal-header');
  const modalFooter = modalContainer.querySelector('.modal-footer');
  // const footerLink = document.getElementById('footerContent').querySelector('.footer-link');
  const closeX = modalHeader.querySelector('.modal-close-btn');
  const closeBtn = modalFooter.querySelector('.modal-close-btn');

  modalOverlay.classList.remove('d-none');
  modalContainer.classList.remove('d-none');

  // モーダルを閉じる（閉じるボタン・×）
  // [closeBtn, closeX].forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     modalOverlay.classList.add('d-none');
  //     modalContainer.classList.add('d-none');
  //   });
  // });
};
// オーバーレイクリックで閉じる
// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.classList.add('d-none');
//   }
// });

