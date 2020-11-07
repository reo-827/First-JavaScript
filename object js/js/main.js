'use script';

/* 配列というデータ構造
複数の定数を１つにまとめる時は、[]を使う。コンソールを開くと、順番に数値が表示される。
順番を表す数値をインデックスもしくは添字という。また、インデックスは1番ではなく0番から始まる。
lengthという表示もあるが、要素を表しており、今回は、３つなので３と表示される。
_proto_はjava scriptが内部的に作り出したもの。*/
// {
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;
  // const scores = [80, 90, 40,];
  // console.log(scores);


  //ここの要素にアクセスする方法
  //const scores = [80, 90, 40];
  // console.log(scores[1]); //90だけを表示したい場合、配列の定数名に []をつけインデックスを記入すれば良い。
  // scores[2] = 44; //要素の修正の仕方。
  // console.log(scores); /* constで定義したのに再代入できるのは、scores = 10;といったconstそのものであって、配列への再代入は可能である。*/
  // console.log(scores.length); //lengthの表示のさせ方。


  //配列とループ処理の組み合わせ。
  //const scores = [80 ,90, 40, 70];
  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

//上記のようではコードが多いのでまとめる。
  // for (let i = 0; i < 3; i++) {//この場合、要素数が変化した時毎回直さなくてはならない。なので以下のような書き方もある。
  // for (let i = 0; i < scores.length; i++) {
    // console.log(`Score ${i}: ${scores[i]}`);//配列の要素数と一致するので、lengthに置き換えられる。
  // }


  //push,shiftなどで先頭や末尾に要素を追加したり、削除したりできる。
  //spliceで要素の途中に追加できる。（変化の位置、削除数、追加する要素）の順。
  // {
  //const scores = [80, 90, 40, 70];
  // scores.push(60, 50);
  // scores.shift();
  //90,40,70,60,50と表示される。
  // for (let i = 0; i < scores.length; i++) {
    // console.log(`Score ${i}: ${scores[i]}`);
  // }

    //const scores = [80, 90, 40, 70];
    // scores.splice(1, 1 ,40, 50)
      // for (let i = 0; i < scores.length; i++) {
    // console.log(`Score ${i}: ${scores[i]}`);
  // }
  // }


  //スプレッド構文とは...を配列の中で使うことで別の配列を展開する記法。関数にも使える。
//   const Otherscores = [10, 20];
//   const scores = [80, 90, 40, 70, ...Otherscores];
//   console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }
//   sum(...Otherscores);
//   sum(10, 20);
// }


//分割代入
// {
  // const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...other] = scores;//レスト構文と呼ばれていて、分割代入と一緒に使うと割り当てた以外の要素を格納する役割を果たす。
  // console.log(a);
  // console.log(b);
  // console.log(other);

  //値を交換する。
  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);
// }


//forEach()とは、forの構文をもっとスッキリかける。
// {
//   const scores = [80, 90, 40, 70];
//   // scores.forEach((score) => {  //ここで関数に引数を設定すると配列の要素をその名前で１つずつ受け取って以下のブロックの中で使うことができる。今回はアロー関数で設定。
//   scores.forEach((score, index) => {  //２つ目の引数で要素の何番目かを表示する。
//     console.log(`Score ${index}: ${score}`)
//   });
// }


//map()とは、配列の各要素の何らかの処理をして別の配列を作りたい場合に使う。今回は、それぞれを２０円ずつ値上げした時の場合。
// {
//   const prices = [180, 190, 200];
//   // const UpdatePrices = prices.map((price) => {
//   //   return price + 20;
//   // });
//   const UpdatePrices = prices.map(price => price + 20);//上を省略して書いた場合。
//   console.log(UpdatePrices)
// }


//filter()とは配列の要素をチェックして、条件の合うものだけを抽出して別の配列として取得できる。今回は偶数のみを抽出する。偶数の条件に合致したものを、tureにそれ以外をfalseにする。
// {
//   const numbers = [1, 4, 7, 8, 10];
//   // const evennumbers = numbers.filter(number => {
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // });
//   const evennumbers = numbers.filter(number => number % 2 === 0);//上を省略したもの。
//   console.log(evennumbers);
// }


//これまでは配列の値に順番をつけてまとめていたが、値に名前をつけてまとめるオブジェクト記法というものがある。今回は、点の座標の管理の場合。
// {
//   // const point = [100, 180];

//   // const point = {x: 100, y: 180};
//   const point = {
//     x: 100,
//     y: 180,
//   };
//   console.log(point);
// }


//オブジェクトのプロパティーにアクセスする方法。
// {
//   const point = {
//     x: 100,
//     y: 180
//   };

//   point.x = 120;
//   // point['x'] = 120;//値の変更

//   // console.log(point.x);
//   // console.log(point['y']);//プロパティの表示

//   point.z = 90;//プロパティの追加
//   delete point.y;//プロパティの削除
//   console.log(point);
// }


//オブジェクトの操作、スレッド構文はオブジェクトにおいても展開できる。
// {
//   const otherprops = {
//     r: 4,
//     color: 'red',
//   };

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherprops,
//   };
//   // console.log(point);
  
//   //また、分割代入とレスト構文もオブジェクトに対して使うことができる。
//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }


//Object.keys()とはオブジェクトには、forEachが使えないのでObject.keysにすると、全てのキーが配列で取得できるようになる。定数でくくり、そうするとキーが配列で取得できて、配列には、forEachが使える。
// {
//   // const point = {
//   //   x: 100,
//   //   y: 180,
//   // };

//   // const keys = Object.keys(point);
//   // keys.forEach(key => {
//   //   console.log(`Key: ${key} value: ${point[key]}`);
//   // });

//   const point = [//オブジェクトと配列の記法を組み合わせた一例。
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ];
//   console.log(point[1].y);
// }


//数値や文字列といった単純なデータ型と配列やオブジェクトといった複雑なデータ型の挙動の違いについて。
// {
//   // let x = 1;
//   // let y = x;
//   // x = 5;
//   // console.log(x);//5になる
//   // console.log(y);//1になる
  
//   // let x = [1, 2];
//   // let y = x;
//   // x[0] = 5;
//   // console.log(x);//[5, 2]
//   // console.log(y);
//   //[1, 2]ではなく[5, 2]と表示される。なぜかというと複雑なデータ型では、データをそのままコピーしてシステムに負荷をかけないようになっているためこの場合のYはXの格納されている場所の情報のみ移されている。なので、値をコピーしたい場合は、スプレッド演算子を使う。以下のようなコードになる。
//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x);
//   console.log(y);
// }


//配列やオブジェクトを見てきたが、他にもデータを操作する様々な命令がある。これから文字列を扱う命令を見ていく。
// const str = 'hello';
// // console.log(str.length);
// //文字数を知るための命令は定数名の後にlengthを入れる。
// // console.log(str.substring(2, 4));
// //部分文字列を取得する命令、console.log(定数名.substring(開始位置, 終了位置));とする。
// console.log(str[1]);
//文字列に対して配列のような記法を使うと、個々の文字にアクセスできるようになる。ただ、これは値を取得できるだけであって、値を設定したり、forEach()を使ったりすることはできない。


//文字列に関する命令。まずは配列の要素を文字列として結合させるための命令。
// const d = [2019, 11, 14];
// console.log(d.join('/'));
// console.log(d.join(' '));
//定数名.join()として、引数に結合するときの文字列を渡す。

// const t = '17:08:24';
// // console.log(t.split(':'));
// //joinとは逆に文字列を区切り文字のところで分解してそれを配列にした時はsplit()を使う。
// const [hour, minute, second] = t.split(':')
// console.log(hour);
// console.log(minute);
// console.log(second);
//分割代入を組み合わせて使うこともできる。これらのように配列と文字列を交互に変換することがある。


//数値計算に関する命令。
// const scores = [10, 3, 9];
// let sum = 0;
// scores.forEach(score => {
//   sum += score;
// });
// const avg = sum / scores.length;
// // console.log(sum);
// // console.log(avg);
// //数値の合計と平均のコード

// console.log(Math.floor(avg));//小数点以下を切り捨てる。
// console.log(Math.ceil(avg));//小数点以下を切り上げる。
// console.log(Math.round(avg));//四捨五入をする。
// console.log(avg.toFixed(3));//指定した桁数に数値を表示する。

// {
// console.log(Math.random());
// // Math.randomで０以上１未満の間でランダムに生成する。
// //   Math.floor(Math.dandom() * 3);
// // //０、１、２
// //   Math.floor(Math.random() * (n + 1));
// // //０、...n
// //   Math.floor(Math.random() * (max + 1 - min)) + min;
// // //min, ..., max
//  console.log(Math.floor(Math.random() * 6) + 1);
// //例としてサイコロとして１から６をランダムで出している。
// }


//現在日時や年月日を数値で表す。
// const d = new Date();
// console.log(d);
// //現在日時

// // const d = new Date();
// // d.getFullYear();2019
// // d.getMonth();0-11(jan:0 feb:1...)
// // d.getDate();1-31
// // d.getDay();0-6(0:sun 1:mon...)
// // d.getHours();0-23
// // d.getMinutes();0-59
// // d.getSeconds();0-59
// // d.getMilliseconds();0-999 1ms = 1/1000sec
// console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
// //現在の日付。操作している国に依存する。また、どこでも同じタイムゾーンになる値が用意されていて、getTime()がある。UTCと呼ばれる協定世界時が表示される。

// //特定の日時の取得の仕方。
// {
//   const d = new Date(2019, 10);//2019/11/1/00:00:00
//   d.setHours(10, 20, 30);//2019/11/1 10:20:30
//   //後から日時を付け足す方法。
//   d.setDate(31);//11月は３０までなので＋１されて12/1となる。
//   d.setDate(d.getDate() + 3);//12/1に＋１されて12/4 12:20:30
//   console.log(d);
// }


//警告や確認のダイアログの表示方法。
// {
//   // alert('hello');

//   // confirm('キャンセルしますか？');
//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました。');
//   } else {
//     console.log(`キャンセルしました。`);
//   }
//   //alertはokしかボタンがないのに対して、confirmはokかキャンセルの２種類ある。また、ifを使い条件分岐することにより、それぞれの入力に応じた対処ができる。
// }


//タイマー機能について。
// {
//   // function showTime() {
//   //   console.log(new Date());
//   // }
//   // setInterval(showTime, 1000);
//   //setintervalに関数とミリ秒単位を渡すことにより、この関数をミリ秒間隔で繰り返してくれる。注意点は（）をつけないこと。（）をつけると、上で実行した時に返ってくる値をsetIntervalの（）に渡すことになるのでこの場合だとundefinedを渡すことになって意味合いが異なってくる。

// //   let i = 0;
// //     function showTime() {
// //     console.log(new Date());
// //     i++;
// //     if (i > 2) {
// //       clearInterval(intervalID);
// //     }
// //   }
// //   const intervalID = setInterval(showTime, 1000);
// // }
// //setIntervalに定数を設定することで、実行した時に返ってくる値が作られ別のタイマーとの識別子を作成することになる。そしてカウンター用の変数を設定することにより、カウンターが３になったところで止まるようにできる。

// // function showTime() {
// //   console.log(new Date());
// // }
// // setTimeout(showTime, 1000);
// //指定した時間に一回だけ処理が実行される。

//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     const setTimeoutId = setTimeout(showTime, 1000);
//     i++;
//     if (i > 2) {
//       clearTimeout(setTimeoutId);
//     }
//   }
//   showTime();
//上記のコードはsetIntervalと同じように繰り返し処理を実行することができる。
// }

//setIntervalとsetTimeoutの違い。setIntervalは、一定時間ごとに処理を行う命令になる。仮に1000ミリ秒と入力された場合、ミリ秒間隔できっかり実行される。しかし、処理に1200ミリ秒かかる場合でも1000ミリ秒間隔で行うので２つの処理が重なり、システムに負荷がかかるようになる。一方、setTimeoutは、処理に1200ミリ秒かかるとしても重なることがないので、システムに負荷をかけずに繰り返し処理を実行したい場合はこちらを使われる。


//文字列の大文字変換と例外処理
// {
//   // const name = 'taguchi';
//   // console.log(name.toUpperCase());
//   // console.log('Finish!');
//   //ユーザーから入力された文字列を大文字にする命令。ただし、文字列以外には使えない。
//   const name = 5;
//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }
//   console.log('Finish!');
// //文字列以外はエラーとなる。このようなエラーが起きた場合の処理を行うことが例外処理である。まずTryのブロックの中にエラーが起こりそうな処理を入れる。そして、catchのブロックの中に例外が起きた後の処理を入れる。また、catchに対して、引数を渡すと、その中に例外に関する情報が入るのでその名前で扱えるようになる。引数名は慣習的にeとする。
// }


//オブジェクトが複数ある場合。

  // const posts = [
  //   {
  //     text: 'JavaScript勉強中。。',
  //     likeCount: 0,
  //   },
  //   {
  //     text: 'プログラミング楽しい',
  //     likeCount: 0,
  //   },
  // ];
  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}いいね`);
  // }
  // show(posts[0]);
  //匿名で文章を投稿できるSNSを作っているとする。まず、文章といいねを管理するオブジェクトを複数入れる。関数を使ってpostを受け取ったらテンプレートリテラルで表示する。そしてあとは、呼び出すのみ。

  //   const posts = [
  //   {
  //     text: 'JavaScript勉強中。。',
  //     likeCount: 0,
  //     // show: function () {
  //     //   console.log(`${this.text} - ${this.likeCount}いいね`);
  //     // },
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },  //上記を省略化したもので意味は同じ。
  //   },
  //   {
  //     text: 'プログラミング楽しい',
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },
  //   },
  // ];
  // posts[0].show();
  //オブジェクトではプロパティの値として、関数を持たせることができる。今回は、キーをshowとして同じプロパティ内はthisでアクセスできる。また、関数をプロパティの値にした場合その関数をメソッドと呼ぶ。

/*全てのオブジェクトにメソッドを追加するのは面倒ですし、処理の内容が変わったら１つ１つ変更するのもエラーの原因になりかねない。そのためこのような場合のオブジェクトをテンプレート化するための仕組みをクラスという。そして、クラスから作られるオブジェクトのことをインスタンスという。クラスの作り方は、ブロックの外にclassというキーワードの後にクラス名を入れれば良い。また、クラス名の頭文字は大文字にするのが慣習である。constructor()というメソッドで初期化処理を行い、この処理でインスタンスのプロパティがセットされる。クラス内のインスタンスをthisと表す。そして、テキストはインスタンスごとに違う値にしたいのでconstructorに引数を渡し、セットする。
次にインスタンスの作り方について。
newというキーワードの後にクラス名を入れ、（）の中に独自の値を入れることでconstructorの引数に渡され、その内容でインスタントが作成される。以下が例である。*/
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}`);
//     }
//   }

//   const posts = [
//     new Post('JavaSctipt勉強中。。'),
//     new Post('プログラミング楽しい'),
//   ];
//   posts[0].show();
//   posts[1].show();
// }

//カプセル化。プロパティは直接操作せず、メソッドを介して操作するべき。例としてlikeの機能を追加する。
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('JavaSctipt勉強中。。'),
//     new Post('プログラミング楽しい'),
//   ];
//   posts[0].like();
//   posts[1].show();
// }

//静的メソッドとはインスタントを介さず、直接クラスから呼び出すことのできるメソッドのこと。メソッドの前にstaticをつける。また、クラス内に使われるthisはこのクラスから作られるインスタント。静的メソッドでは、インスタントを介さず呼び出すので、thisが使えないという点に注意する。以下が使用する例である。
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('JavaSctipt勉強中。。'),
//     new Post('プログラミング楽しい'),
//   ];
//   Post.showInfo();
// }

//クラスの拡張。
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   class SponseredPost {  //拡張したクラス
//     constructor(text, sponser) {
//       this.text = text;
//       this.likeCount = 0;
//       this.sponser = sponser;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//       console.log(`...sponsered by ${this.sponser}`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('JavaSctipt勉強中。。'),
//     new Post('プログラミング楽しい'),
//     new SponseredPost('3分動画をマスターしよう！', 'dotinstall'),
//   ];
  
//   posts[2].show();
//   posts[2].like();
// }

//クラスの継承には、extends 親クラス名を子クラスの名前の後に入れる。また、子クラスのconstructor（）でthisキーワードを使うにはconstructorの最初でsuper()を入れる必要がある。そうすることで親クラスのconstructorが呼ばれる。そしてsuperの後に親クラスのメソッドを入力したらそのメソッドが呼べる。
{
  class Post {  //親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  class SponseredPost extends Post {  //子クラス
    constructor(text, sponser) {
      super(text);
      this.sponser = sponser;
    }

    show() {
      super.show();
      console.log(`...sponsered by ${this.sponser}`);
    }

    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('JavaSctipt勉強中。。'),
    new Post('プログラミング楽しい'),
    new SponseredPost('3分動画をマスターしよう！', 'dotinstall'),
  ];
  
  posts[2].show();
  posts[2].like();
}