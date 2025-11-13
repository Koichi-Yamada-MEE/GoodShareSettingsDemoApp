const demoAppJson = {
  jsonName: "01-GoodShareSettingsDemoAppRac",
  version: "1.0.0",
  slides: [
    {
      index: 0,
      imagePath: "../assets/img/rac/01401.png",
      alt: "STEP-01",
      tooltipTarget: "targetArea01401",
      tooltipDescription: "☰メニューをタップする",
      footerContent: "",
    },
    {
      index: 1,
      imagePath: "../assets/img/rac/01402.png",
      alt: "STEP-02",
      tooltipTarget: "targetArea01402",
      tooltipDescription: "「＋機器登録を」タップする",
      footerContent: "",
    },
    {
      index: 2,
      imagePath: "../assets/img/rac/01403.png",
      alt: "STEP-03",
      tooltipTarget: "targetArea01403",
      tooltipDescription: "「エアコン」をタップする",
      footerContent: "",
    },
    {
      index: 3,
      imagePath: "../assets/img/rac/01501.png",
      alt: "STEP-04",
      tooltipTarget: "targetArea01501",
      tooltipDescription: "「ルームエアコン」をタップする",
      footerContent: "",
    },
    {
      index: 4,
      imagePath: "../assets/img/rac/01502.png",
      alt: "STEP-05",
      tooltipTarget: "targetArea01502",
      tooltipDescription: "『 「長押しで無線無効」の文字がある』をタップする",
      footerContent:
        '<ul><li>リモコンの停止ボタンの近くに「<span class="fw-bold">長押しで無線無効</span>」の文字があるかご確認ください。</li><li>「長押しで無線無効」の文字がない場合はやり直してください。</li></ul>',
    },
    {
      index: 5,
      imagePath: "../assets/img/rac/01601.png",
      alt: "STEP-06",
      tooltipTarget: "targetArea01601",
      tooltipDescription: "「リモコンにメニューボタンがない」をタップする",
      footerContent:
        "<ul><li>リモコンにメニューボタンがある場合はやり直してください。</li></ul>",
    },
    {
      index: 6,
      imagePath: "../assets/img/rac/01701.png",
      alt: "STEP-07",
      tooltipTarget: "targetArea01701",
      tooltipDescription:
        '機器とルーターの接続方法を選択します。<br><button type="button" class="btn btn-outline-primary mt-2 d-block mx-auto" data-bs-toggle="modal" data-bs-target="#modalRac01701">選択メニューを表示</button>',
      footerContent: "",
    },
    {
      index: 7,
      imagePath: "../assets/img/rac/01801.png",
      alt: "STEP-08",
      tooltipTarget: "targetArea01801",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 8,
      imagePath: "../assets/img/rac/01802.png",
      alt: "STEP-09",
      tooltipTarget: "targetArea01802",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li>事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID(2.4GHz)、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー(パスワード)</li><li>本アプリでルーターのSSIDに使用できる文字は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon002">半角英数字、半角記号、半角スペース</a>です。</li></ul>',
    },
    {
      index: 9,
      imagePath: "../assets/img/rac/01901.png",
      alt: "STEP-10",
      tooltipTarget: "targetArea01901",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 10,
      imagePath: "../assets/img/rac/02001.png",
      alt: "STEP-11",
      tooltipTarget: "targetArea02001",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon021">エアコンをアクセスポイント（APモード）にする</a></li></ul>',
    },
    {
      index: 11,
      imagePath: "../assets/img/rac/02201.png",
      alt: "STEP-12",
      tooltipTarget: "targetArea02201",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "",
    },
    {
      index: 12,
      imagePath: "../assets/img/rac/02202.png",
      alt: "STEP-13",
      tooltipTarget: "targetArea02202",
      tooltipDescription:
        "「スマートフォンの設定画面へ」をタップしてスマートフォンの設定画面で設定を行う",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac02301">エアコンとスマートフォンを接続する</a></li></ul>',
    },
    {
      index: 13,
      imagePath: "../assets/img/rac/02501.png",
      alt: "STEP-14",
      tooltipTarget: "targetArea02501",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        "<ul><li>ルーターのSSID（2.4GHz）と暗号化キー（パスワード）をお手元に準備してください。次の操作で使用します。</li></ul>",
    },
    {
      index: 14,
      imagePath: "../assets/img/rac/02601.png",
      alt: "STEP-15",
      tooltipTarget: "targetArea02601",
      tooltipDescription:
        'タップして<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon003">一覧画面</a>を表示、接続するルーターのSSIDを選択する',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon005">SSIDと暗号化キーの表示例</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon004">SSIDは手動でも入力できます。</a></li></ul>',
    },
    {
      index: 15,
      imagePath: "../assets/img/rac/02602.png",
      alt: "STEP-16",
      tooltipTarget: "targetArea02602",
      tooltipDescription:
        "ルーターの暗号化キー(パスワード)を入力、「接続する」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon009">「暗号化キーを表示する」</a>を選択すると、前回使用した暗号化キーを自動入力できます。</li></ul>',
    },
    {
      index: 16,
      imagePath: "../assets/img/rac/02801.png",
      alt: "STEP-17",
      tooltipTarget: "targetArea02801",
      tooltipDescription: "機器の登録が終わるまで、2～3分程度待つ",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon013">機器の登録に失敗した場合</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon014">「機器の登録確認」が表示された場合</a></li></ul>',
    },
    {
      index: 17,
      imagePath: "../assets/img/rac/03001.png",
      alt: "STEP-18",
      tooltipTarget: "targetArea03001",
      tooltipDescription:
        "登録が完了したら、「エアコン初期設定へ」をタップする",
      footerContent: "",
    },
    {
      index: 18,
      imagePath: "../assets/img/rac/03002.png",
      alt: "STEP-19",
      tooltipTarget: "targetArea03002",
      tooltipDescription: "「宅外操作」を有効、「次へ」をタップする",
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 19,
      imagePath: "../assets/img/rac/03101.png",
      alt: "STEP-20",
      tooltipTarget: "targetArea03101",
      tooltipDescription:
        "「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる",
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書をご確認ください。</li><li>エモコアイ搭載エアコンの場合、<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac031">「次へ」</a>が表示されます。タップして操作を続けてください。</li></ul>',
    },
    {
      index: 20,
      imagePath: "../assets/img/rac/03102.png",
      alt: "STEP-21",
      tooltipTarget: "targetArea03102",
      tooltipDescription: "「ホームに戻る」をタップ、ホーム画面に戻る",
      footerContent:
        '<ul><li>エモコアイ搭載エアコンの登録が完了しました。</li><li>エアコン名は設置されている部屋名称に変更することをお勧めします(リビングのエアコンなど)。変更方法は、取扱説明書をご確認ください。</li></ul>',
    },
    {
      index: 21,
      imagePath: "../assets/img/rac/03201.png",
      alt: "STEP-22",
      tooltipTarget: "targetArea03201",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        "ここからは、WPS機能で接続する手順を説明します。",
    },
    {
      index: 22,
      imagePath: "../assets/img/rac/03202.png",
      alt: "STEP-23",
      tooltipTarget: "targetArea03202",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li>事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターの場所、<i class="bi bi-2-circle"></i>ルーターのWPS実施方法</li><li>ルーターのWPS実施方法は機器により異なります。詳しくはルーターの取扱説明書をご確認ください。</li></ul>',
    },
    {
      index: 23,
      imagePath: "../assets/img/rac/03301.png",
      alt: "STEP-24",
      tooltipTarget: "targetArea03301",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac034">リモコンを使ってエアコンを接続モードにする</a></li></ul>',
    },
    {
      index: 24,
      imagePath: "../assets/img/rac/03501.png",
      alt: "STEP-25",
      tooltipTarget: "targetArea03501",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon015">ルーターをWPSモードにする</a></li></ul>',
    },
    {
      index: 25,
      imagePath: "../assets/img/rac/03601.png",
      alt: "STEP-26",
      tooltipTarget: "targetArea03601",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon016">エアコンとルーターの接続が完了したことを確認する</a></li></ul>',
    },
    {
      index: 26,
      imagePath: "../assets/img/rac/03901.png",
      alt: "STEP-27",
      tooltipTarget: "targetArea03901",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon017">スマートフォンの接続先を確認する</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon018">「"MyMU"がローカルネットワーク上のデバイスの検索および接続を求めています」</a>と表示されたら</li></ul>',
    },
    {
      index: 27,
      imagePath: "../assets/img/rac/04001.png",
      alt: "STEP-28",
      tooltipTarget: "targetArea04001",
      tooltipDescription: "登録するエアコンをタップする",
      footerContent:
        '<ul><li>複数の機器が表示された場合、<img class="mt-0 align-text-bottom" src="../assets/img/rac/buzzer.svg">ブザー鳴動ボタンをタップし、登録するエアコンからブザー音が鳴ることを確認してください。</li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon012">エアコンが別のユーザーに登録されている場合</a></li></ul>',
    },
    {
      index: 28,
      imagePath: "../assets/img/rac/03001.png",
      alt: "STEP-29",
      tooltipTarget: "targetArea04101",
      tooltipDescription:
        "登録が完了したら、「エアコン初期設定へ」をタップする",
      footerContent:
        '',
    },
    {
      index: 29,
      imagePath: "../assets/img/rac/03002.png",
      alt: "STEP-30",
      tooltipTarget: "targetArea04102",
      tooltipDescription: "「宅外操作」を有効、「次へ」をタップする",
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 30,
      imagePath: "../assets/img/rac/03101.png",
      alt: "STEP-31",
      tooltipTarget: "targetArea04201",
      tooltipDescription:
        "「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる",
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書をご確認ください。</li><li>エモコアイ搭載エアコンの場合、<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac031">「次へ」</a>が表示されます。タップして操作を続けてください。</li></ul>',
    },
    {
      index: 31,
      imagePath: "../assets/img/rac/03102.png",
      alt: "STEP-32",
      tooltipTarget: "targetArea04202",
      tooltipDescription: "「ホームに戻る」をタップ、ホーム画面に戻る",
      footerContent:
        "<ul><li>エモコアイ搭載エアコンの登録が完了しました。</li><li>エアコン名は設置されている部屋名称に変更することをお勧めします(リビングのエアコンなど)。変更方法は、取扱説明書をご確認ください。</li></ul>",
    },
  ],
};
