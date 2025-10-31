const demoAppJson = {
  jsonName: "GoodShareSettingsDemoAppRac",
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
      tooltipDescription: "『 「長押しで無線無効」の文字がある』をタップする",
      footerContent:
        '<ul><li>リモコンの停止ボタンの近くに「<span class="fw-bold">長押しで無線無効</span>」の文字があるかご確認ください。</li><li>「長押しで無線無効」の文字がない場合はやり直してください。</li></ul>',
    },
    {
      index: 5,
      imagePath: "../assets/img/rac/07-01.png",
      alt: "STEP-06",
      tooltipTarget: "targetArea4501",
      tooltipDescription: "「リモコンにメニューボタンがある」をタップする",
      footerContent:
        "<ul><li>リモコンにメニューボタンがない場合はやり直してください。</li></ul>",
    },
    {
      index: 6,
      imagePath: "../assets/img/rac/08-01.png",
      alt: "STEP-07",
      tooltipTarget: "targetArea07",
      tooltipDescription: "機器とルーターの接続方法を選択します。<br /><button type=\"button\" class=\"btn btn-outline-primary mt-2 d-block mx-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#modalRac000\">選択メニューを表示</button>",
      footerContent: "",
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
      footerContent:
        '<ul><li>事前に以下の準備・確認をしてください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID(2.4GHz)、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー(パスワード)</li><li>本アプリでルーターのSSIDに使用できる文字は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon002">半角英数字、半角記号、半角スペース</a>です。</li></ul>',
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
      imagePath: "../assets/img/rac/49-01.png",
      alt: "STEP-11",
      tooltipTarget: "targetArea4901",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac5001">リモコンを使ってエアコンを接続モードにする</a></li></ul>',
    },
    {
      index: 11,
      imagePath: "../assets/img/rac/13-01.png",
      alt: "STEP-12",
      tooltipTarget: "targetArea5301",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '',
    },
    {
      index: 12,
      imagePath: "../assets/img/rac/53-01.png",
      alt: "STEP-13",
      tooltipTarget: "targetArea5102",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac5201">情報シールを確認する</a></li></ul>',
    },
    {
      index: 13,
      imagePath: "../assets/img/rac/13-02.png",
      alt: "STEP-14",
      tooltipTarget: "targetArea13",
      tooltipDescription:
        "「スマートフォンの設定画面へ」をタップしてスマートフォンの設定画面で設定を行う",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac5401">エアコンとスマートフォンを接続する</a></li></ul>',
    },

    {
      index: 14,
      imagePath: "../assets/img/rac/16-01.png",
      alt: "STEP-15",
      tooltipTarget: "targetArea14",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent: "<ul><li>ルーターのSSID（2.4GHz）と暗号化キー（パスワード）をお手元に準備してください。次の操作で使用します。</li></ul>",
    },
    {
      index: 15,
      imagePath: "../assets/img/rac/17-01.png",
      alt: "STEP-16",
      tooltipTarget: "targetArea15",
      tooltipDescription:
        'タップして<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon003">一覧画面</a>を表示、接続するルーターのSSIDを選択する',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon005">SSIDと暗号化キーの表示例</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon004">SSIDは手動でも入力できます。</a></li></ul>',
    },
    {
      index: 16,
      imagePath: "../assets/img/rac/17-02.png",
      alt: "STEP-17",
      tooltipTarget: "targetArea16",
      tooltipDescription:
        "ルーターの暗号化キー(パスワード)を入力、「接続する」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon009">「暗号化キーを表示する」</a>を選択すると、前回使用した暗号化キーを自動入力できます。</li></ul>',
    },
    {
      index: 17,
      imagePath: "../assets/img/rac/19-01.png",
      alt: "STEP-18",
      tooltipTarget: "targetArea17",
      tooltipDescription: "機器の登録が終わるまで、2～3分程度待つ",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac017-1">機器の登録に失敗した場合</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac017-2">「機器の登録確認」が表示された場合</a></li></ul>',
    },
    {
      index: 18,
      imagePath: "../assets/img/rac/21-01.png",
      alt: "STEP-19",
      tooltipTarget: "targetArea18",
      tooltipDescription:
        "登録が完了したら、「エアコン初期設定へ」をタップする",
      footerContent: "",
    },
    {
      index: 19,
      imagePath: "../assets/img/rac/21-02.png",
      alt: "STEP-20",
      tooltipTarget: "targetArea19",
      tooltipDescription: "「宅外操作」を有効、「次へ」をタップする",
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 20,
      imagePath: "../assets/img/rac/22-01.png",
      alt: "STEP-21",
      tooltipTarget: "targetArea20",
      tooltipDescription:
        "「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる",
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書をご確認ください。</li><li>エアコン名は設置されている部屋名称に変更することをお勧めします(リビングのエアコンなど)。変更方法は、取扱説明書をご確認ください。</li></ul>',
    },
    {
      index: 21,
      imagePath: "../assets/img/rac/32-01.png",
      alt: "STEP-22",
      tooltipTarget: "targetArea22",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        'ここからは、無線LAN内蔵エアコン（メニューボタンなし）を登録する（WPS）について説明します。',
    },
    {
      index: 22,
      imagePath: "../assets/img/rac/32-02.png",
      alt: "STEP-23",
      tooltipTarget: "targetArea23",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li>事前に以下の準備・確認をしてください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID(2.4GHz)、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー(パスワード)</li><li>ルーターのWPS実施方法は機器により異なります。詳しくはルーターの取扱説明書をご確認ください。</li></ul>',
    },
    {
      index: 23,
      imagePath: "../assets/img/rac/33-01.png",
      alt: "STEP-24",
      tooltipTarget: "targetArea24",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac024">リモコンを使ってエアコンを接続モードにする</a></li></ul>',
    },
    {
      index: 24,
      imagePath: "../assets/img/rac/35-01.png",
      alt: "STEP-25",
      tooltipTarget: "targetArea25",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac025">ルーターをWPSモードにする</a></li></ul>',
    },
    {
      index: 25,
      imagePath: "../assets/img/rac/36-01.png",
      alt: "STEP-26",
      tooltipTarget: "targetArea26",
      tooltipDescription: "画面の内容を操作し、「次へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac026">エアコンとルーターの接続が完了したことを確認する</a></li></ul>',
    },
    {
      index: 26,
      imagePath: "../assets/img/rac/39-01.png",
      alt: "STEP-27",
      tooltipTarget: "targetArea27",
      tooltipDescription: "画面の内容を確認し、「次へ」をタップする",
      footerContent:
        '<ul><li>画面上にスマートフォンの接続先情報が表示されます。表示されているSSIDがエアコンを接続したルーターのSSIDと一致していることを確認してください。異なる場合は、エアコンを接続したルーターにスマートフォンを接続してください。接続方法はスマートフォンの取扱説明書をご確認ください。</li><li>iOS14以降を搭載のスマートフォンでは、初回登録時に「次へ」をタップすると下記のメッセージが表示されますので、「OK」をタップしてください。「OK」をタップしないと機器が表示されません。「許可しない」をタップした場合は、iOSのローカルネットワークの設定で通信を許可するよう変更してください。</li></ul>',
    },
    {
      index: 27,
      imagePath: "../assets/img/rac/40-01.png",
      alt: "STEP-28",
      tooltipTarget: "targetArea28",
      tooltipDescription: "登録するエアコンをタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac000">Click me !</a></li></ul>',
    },
    {
      index: 28,
      imagePath: "../assets/img/rac/41-01.png",
      alt: "STEP-29",
      tooltipTarget: "targetArea29",
      tooltipDescription: "登録が完了したら、「エアコン初期設定へ」をタップする",
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac000">Click me !</a></li></ul>',
    },
    {
      index: 29,
      imagePath: "../assets/img/rac/41-02.png",
      alt: "STEP-30",
      tooltipTarget: "targetArea30",
      tooltipDescription: "「宅外操作」を有効、「次へ」をタップする",
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 30,
      imagePath: "../assets/img/rac/42-01.png",
      alt: "STEP-31",
      tooltipTarget: "targetArea31",
      tooltipDescription: '「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる',
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書をご確認ください。</li><li>エモコアイ搭載エアコンの場合、<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalRac020">「次へ」</a>が表示されます。タップして操作を続けてください。</li></ul>',
    },
  ],
};
