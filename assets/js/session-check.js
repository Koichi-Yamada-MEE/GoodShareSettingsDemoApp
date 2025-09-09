function validateSessionDataOrRedirect(key, redirectUrl) {
  const raw = sessionStorage.getItem(key);

  if (!raw) {
    alert("セッションストレージが見つかりません。ホーム画面に戻ります。"); 
    window.location.href = redirectUrl;
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (e) {
    console.warn("セッションデータが有効なJSON形式ではありません:", e);
    window.location.href = redirectUrl;
    return null;
  }
}
