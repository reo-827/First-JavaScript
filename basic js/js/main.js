'use script';

console.log('Hello world from main.js!')

// console.log(`it`s me`);
// console.log("it`s me");
// console.log(`it\`s me);
// シングルクォーテーションを文中で使用する場合、ダブルクォーテーションで括るか、直前にバックスラッシュを入れる。

console.log('hel\nlo wor\tld');
// \nは改行、\tはタブ

console.log('hello' + 'world');
// 文字を繋げて入力する場合、プラス記号。

console.log(10 + 3); //足し算
console.log(10 - 3); //引き算
console.log(10 * 3); //掛け算
console.log(10 / 3); //割り算
console.log(10 % 3); //余り、anser1
console.log(10 ** 3); //乗数、anser1000

//定数 const
// let price = 150;

// console.log(price * 140);
// console.log(price * 160);
/*定数を使うことによりミスや思わぬエラーを減らすことができる。
const 値名 = 数字を使用し、constにより定数を使うという宣言を行う。また、この場合の＝は同じという意味ではなく、数理を値名に代入するという意味である。*/

//変数 let
// price = 170;

// console.log(price * 140);
// console.log(price * 160);
//使いわけとしては後から数値を変更するときに使用するが、だいたいはconstを使う。

/*命名規則
英数字、＄、＿のみ使用。名前の先頭に数字は使用できない。
大文字、小文字は区別される。
予約語は使えない。例えばconstなど。
*/

// let price = 500;

//price = price + 100;
// price += 100;

//price = price * 2;
// price *= 2;

//price = price + 1;
//price += 1;
// price++;

//price = price - 1;
//price -= 1;
// price--;

// console.log(price);


//JSのデータ型を調べる。
console.log(typeof `hello`);
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undifined);
console.log(typeof null);
//nullがobjectになるのはJSのバグ。

console.log(`5` * `3`);
console.log(`5` - `3`);
//上記は文字列にも関わらず、数値として演算できる。しかし＋は文字列の連結の演算として扱われる。

console.log(`5` + `3`);
console.log(parseInt(`5`, 10) + `3`);
//parseIntをつけることにより、５を１０進数の５として扱うようになる。

console.log(parseInt(`hello`, 10) + 3);
//数値として変換できないものは、NaN （not a number）として表示される。


// 真偽値による比較演算子
const price = 1200;
console.log(price > 1000); //何々より大きい true
console.log(price < 1000); //何々より小さい false
console.log(price >= 1000); //何々以上 true
console.log(price <= 1000); //何々以下 false
console.log(price === 1000); //何々と等しい false
console.log(price !== 1000); //何々と異なる ture

//false < 0,null,unefined,``,false
//true < それ以外。

console.log(Boolean(0));
console.log(Boolean(`hello`));


/*ifを使った条件分岐 {}これで囲まれたものをブロックと言い、；はいらない。
また、条件に合わず、falseだった場合elseで繋いで書くことができる。*/

// const score = 60;
// if (score >= 80) {
//   consople.log(`Great!`);
// } else if (score >= 60) {
//   console.log(`Good.`);
// } else {
//   console.log(`OK...`)
// }

/*条件演算子
条件式 ? trueの処理 : falseの処理のように記入する。*/

// score >= 80 ? console.log(`Great`) : console.log(`OK...`);


/*論理演算子
&& なおかつ (and)
|| もしくは (or)
! 〜ではない (not)*/

const score = 60;
const name = `taguchi`;

// if (score >= 50) {
//   if (name === `taguchi`) {
//     console.log(`Great`);
//   }
// }

if (score >= 50 && name ===`taguchi`){
  console.log(`Great`);
}

/*switchによる条件分岐
===ばかりが並ぶときにしようできる。*/

const signal = `blue`;

// if (signal === `red`){
//   console.log(`stop`);
// } else if (signal === `yellow`){
//   console.log(`caution`);
// } else if (signal === blue){
//   console.log(`go`);
// }

switch (signal) {
  case `red`:
    console.log(`stop`);
    break;
  case `yellow`:
    console.log(`caution`);
    break;
  case `blue`:
  case `green`:  
    console.log(`go`);
    break;
  default:
    console.log(`wrong signal`);
    break;      
}


/*forを使ったループ処理 */　
for (let i = 1; i <= 10; i++) {
  //console.log(`hallo`);

//カウンターの変数名として慣習的にiが使われる。iは１ずつ増やしながら再代入されるのでletを使用。

//console.log('hallo' + i);
console.log(`hallo ${i}`);
//カウンターの値も処理の中で表示する方法。文字列＋でもいいが、文字列の中に変数の値を埋め込むこともできる。テンプレートリテラルという。
}

/* whileとは、指定した条件が満たされている間、特定の処理を繰り返すというもの。 */
// let hp = 100;
// while (hp >= 0) {
//   console.log(`${hp} HP left`)
//   hp -= 15;
// }

//条件を満たしていなかった場合でもHPを表示したい場合はdo...whileという構文を使う。
let hp = -50;
do {
  console.log(`${hp} HP left`)
  hp -= 15;
} while (hp >= 0)


/* forやwhileで特定の回だけ処理をスキップした時の方法。ifで条件分岐したのちに、continueとする。 */
for (let i = 1; i <= 10; i++) {
  // if (i === 4)
  // if (i % 3 === 0) {//％を使い倍数してもできる。
  //   continue;
  // }

  if (i === 4){//ループを途中で中止するときは、breakを使う。
    break;
  }
  console.log(i)
}


/* 関数
以下のように最初pや途中、最後に広告を入れたいという時に１つ１つに処理を施すのはミスの可能性が増えます。
そのような時に、関数、functionを使いまとめる。*/
/* 場所によって表示する文言を変えたい場合,関数を定義したfunctionの（）に変数を入れる。その後テンプレートリテラルを使い、文字列に入れる。*/
function showAd(message = 'Ad') {//呼び出すときは（）のつけ忘れに注意する。また、関数を定義している値は仮配置しているので、仮引数という。
  console.log(`----------`);
  console.log(`----${message}----`);
  console.log(`----------`);
}
showAd('Header Ad');//実際に関数を呼び出す時に渡されるこちらの値を実引数という。
console.log('Tom is Great!');
console.log(`Bob is Great!`);
// showAd('Ad');
showAd();//何も指定しないとmessageで定義した変数が入る。
console.log(`Steve is Great!`);
console.log(`Richard is Great!`);
showAd('Footer Ad');


/* returnについて。 
点数などの数値を合算したい場合、関数の処理結果を値として返す必要がある場合に使う。*/
//関数宣言
// function sum(a, b, c) {
//   return a + b + c;
// }
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

//関数式
// const sum = function (a, b, c) {
//   return a + b + c;
// }; 定数に代入しているので；を付ける。

//アロー関数とは、関数式を短く書く関数のこと。
const sum = (a, b, c) => a + b + c;
/*functionを省略する。次に、引数とブロックを=>で結ぶ。次に処理がreturnだけの場合はreturnも省略できる。
これで上の関数と同じ意味になる。*/

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

/* 引数が１つの場合（）も省略できる。 */
// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2;
console.log(double(12));


/* スコープとは？ブロックの内外で定数や変数のスコープ、（有効されるもの）が異なる。{}ブロックのみで使用できるのでコードを書いたら
その都度、ブロックで括る習慣を付ける。 */
const x = 2;//全体のxで有効な定数や変数はグローバルスコープと言う。

function f() {
  const x = 1;
  console.log(x);//このような場合の定数や変数はブロック内でのみ有効。
}
f();

console.log(x);//この場合、ブロックの外で宣言されたxが有効となる。