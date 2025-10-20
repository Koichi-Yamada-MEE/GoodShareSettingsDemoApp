const demoAppJson = {
  jsonName: "GoodShareSettingsDemoApp",
  version: "1.0.0",
  slides: [
    {
      index: 0,
      imagePath: "../assets/img/rac/05-01.png",
      alt: "STEP-01",
      tooltipTarget: "targetArea01",
      tooltipDescription: "☰メニューをタップする",
      footerContent: "",
    },
    {
      index: 1,
      imagePath: "../assets/img/rac/05-02.png",
      alt: "STEP-02",
      tooltipTarget: "targetArea02",
      tooltipDescription: "「＋機器登録を」タップする",
      footerContent: "",
    },
    {
      index: 2,
      imagePath: "../assets/img/rac/05-03.png",
      alt: "STEP-03",
      tooltipTarget: "targetArea03",
      tooltipDescription: "「エアコン」をタップする",
      footerContent: "",
    },
    {
      index: 3,
      imagePath: "../assets/img/rac/06-01.png",
      alt: "STEP-04",
      tooltipTarget: "targetArea04",
      tooltipDescription: "「ルームエアコン」をタップする",
      footerContent: "",
    },
    {
      index: 4,
      imagePath: "../assets/img/rac/06-02.png",
      alt: "STEP-05",
      tooltipTarget: "targetArea05",
      tooltipDescription: "『「長押しで無線無効」の文字がある』をタップする",
      footerContent: "リモコンの停止ボタンの近くに「長押しで無線無効」の文字があるかご確認ください。",
    },
    {
      index: 5,
      imagePath: "../assets/img/rac/07-01.png",
      alt: "STEP-06",
      tooltipTarget: "targetArea06",
      tooltipDescription: "「リモコンにメニューボタンがない」をタップする",
      footerContent: "",
    },
    {
      index: 6,
      imagePath: "../assets/img/rac/08-01.png",
      alt: "STEP-07",
      tooltipTarget: "targetArea07",
      tooltipDescription: "「アクセスポイントモードでの接続」をタップする",
      footerContent: "<ul><li>機器とルーターを接続済みの場合は画面下部の「<a class=\"footer-link\" data-bs-toggle=\"modal\" data-bs-target=\"#modalRac007\">機器とルーターを接続済み</a>」をタップしてください。</li></ul>",
    },
    {
      index: 7,
      imagePath: "../assets/img/rac/09-01.png",
      alt: "STEP-08",
      tooltipTarget: "targetArea08",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 8,
      imagePath: "../assets/img/rac/09-02.png",
      alt: "STEP-09",
      tooltipTarget: "targetArea09",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "<ul><li>事前に次を準備してください。<i class=\"bi bi-1-circle\"></i>接続したいルーターのSSID（2.4GHz）、<i class=\"bi bi-2-circle\"></i>ルーターに接続する暗号化キー（パスワード）</li><li>本アプリでルーターのSSIDに使用できる文字は<a class=\"footer-link\" data-bs-toggle=\"modal\" data-bs-target=\"#modalCommon002\">半角英数字、半角記号、半角スペース</a>です。</li></ul>",
    },
    {
      index: 9,
      imagePath: "../assets/img/rac/10-01.png",
      alt: "STEP-10",
      tooltipTarget: "targetArea10",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 10,
      imagePath: "../assets/img/rac/11-01.png",
      alt: "STEP-11",
      tooltipTarget: "targetArea11",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent: "<ul><li><a class=\"footer-link\" data-bs-toggle=\"modal\" data-bs-target=\"#modalRac011\">エアコンをアクセスポイントモード（APモード）にする</a></li></ul>",
    },
    {
      index: 11,
      imagePath: "../assets/img/rac/13-01.png",
      alt: "STEP-12",
      tooltipTarget: "targetArea12",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 12,
      imagePath: "../assets/img/rac/13-02.png",
      alt: "STEP-13",
      tooltipTarget: "targetArea13",
      tooltipDescription: "「スマートフォンの設定画面へ」をタップしてスマートフォンの設定画面で設定を行う",
      footerContent: "<ul><li><a class=\"footer-link\" data-bs-toggle=\"modal\" data-bs-target=\"#modalRac013\">エアコンとスマートフォンを接続する</a></li></ul>",
    },
    {
      index: 13,
      imagePath: "../assets/img/rac/16-01.png",
      alt: "STEP-14",
      tooltipTarget: "targetArea14",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 14,
      imagePath: "../assets/img/rac/17-01.png",
      alt: "STEP-15",
      tooltipTarget: "targetArea15",
      tooltipDescription: "「SSID」欄をタップし、表示されるSSID選択画面で接続するルーターのSSIDを選択し、「決定」をタップする",
      footerContent: "",
    },
    {
      index: 15,
      imagePath: "../assets/img/rac/17-02.png",
      alt: "STEP-16",
      tooltipTarget: "targetArea16",
      tooltipDescription: "「暗号化キー（パスワード）」にルーターの暗号化キーを入力し、「接続する」をタップする",
      footerContent: "",
    },
    {
      index: 16,
      imagePath: "../assets/img/rac/19-01.png",
      alt: "STEP-17",
      tooltipTarget: "targetArea17",
      tooltipDescription: "エアコンの登録が終わるまでそのまま2〜3分程度待つ",
      footerContent: "",
    },
    {
      index: 17,
      imagePath: "../assets/img/rac/21-01.png",
      alt: "STEP-18",
      tooltipTarget: "targetArea18",
      tooltipDescription: "登録完了のメッセージが表示されたら、続けて「エアコン初期設定へ」をタップする",
      footerContent: "",
    },
    {
      index: 18,
      imagePath: "../assets/img/rac/21-02.png",
      alt: "STEP-19",
      tooltipTarget: "targetArea19",
      tooltipDescription: "「宅外操作」のスイッチをONにし「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 19,
      imagePath: "../assets/img/rac/22-01.png",
      alt: "STEP-20",
      tooltipTarget: "targetArea20",
      tooltipDescription: "エアコンの登録と初期設定が完了しました。「 アプリを起動する」をタップすると、霧ヶ峰アプリが起動します。",
      footerContent: "",
    },
    {
      index: 20,
      imagePath: "../assets/img/rac/22-02.png",
      alt: "STEP-21",
      tooltipTarget: "targetArea21",
      tooltipDescription: "登録が完了しました。「 ホームに戻る」をタップしてホーム画面に移動します。",
      footerContent: "",
    },
  ],
};

// function storeJsonData() {
//   try {
//     sessionStorage.setItem("demoAppJson", JSON.stringify(demoAppJson));
//     // リダイレクト先に移動
//     window.location.href = "./rac/rac-setting-07.html";
//   } catch (error) {
//     showAlert("JSONデータの保存に失敗しました。", "error");
//   }
// }

// storeJsonData();

