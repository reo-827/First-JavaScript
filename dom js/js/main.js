'use script';
//要素の操作
// {
//   function update() {
//     // document.querySelector('h1').textContent = 'Changed!';
//     // document.querySelector('#target').textContent = 'Changed!';
//     document.getElementById('target').textContent = 'Changed!';
//   }

//   setTimeout(update, 1000);
// }
/* 今回は、h１のdomの操作をしている。domはdocumentという特殊なオブジェクトで操作できる。
また、文書内の特定の要素を取得するにはquerySelectorというメソッドを使う。そして
中身のテキストはtextContentで表現できる。そのあと、1秒後に置き換えるために関数を渡し、
setTimeoutでupdateを1秒後にすると書く。さらに１つに要素を指定するのに、id属性も使うことができる。
getElementByIdというidを指定して要素を探すメソッドもある。 */


//複数の要素の操作
// {
//   function update() {
//     // document.querySelector('p').textContent = 'Changed!';
//     // document.querySelectorAll('p')[1].textContent = 'Changed!';
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです。`;
//     });
//   }
//   setTimeout(update, 1000);
// }
/* querySelectorで指定するとき、指定したものが複数あるとき一番最初の要素のみを適用する。
なので、querySelectorの後にAllを付ける。なおインデックスを入力しての要素を変更できる。
さらにquerySelectorAllで取得した値は、forEachを使うことができる。
DOMで要素を取得するには、様々な方法があるが、id属性がついているならgetElementById、id属性がなければ
querySelectorかquerySelectorAllを使う。*/


//addEventListener（）を使う。
// {
//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'Changed!';
//   });
// }
/* インタラクティブな仕組みを作りたい、今回はボタンを押した時に文字を変化するようにしたい時の場合
まずボタン要素を取得する。そしてaddEventListenerを描いた上で、イベントの種類を記入する。次にclickした時に
実行したい処理を関数で渡す。今回のupdateは１つしか使っていないので、アロー関数でまとめる。*/


//属性の操作
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target')
//     targetNode.textContent = 'Changed!';
//     targetNode.title = 'This is title!';
//     targetNode.style.color = 'red';
//     targetNode.style.backgroundColor = 'skyblue';
//   });
// }
/* いくつかの例外をのぞいて属性と同名のプロパティを使うことができる。今回の場合だとtextContentと前半のコードが
同じなので定数にまとめて記入した。また、style属性も使用できるが、cssとの使い分けが曖昧になるので
スタイリングはcssで行う。 */


//className
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target')
//     targetNode.className = 'my-color my-border';
//   });
// }
/* javascriptでclass属性を扱う時、calssは予約語なのでclassNameとしなければならない。
また、注意点としてclassNameを使うとクラス属性の値が丸っと変更されるので今回のようなあらかじめ
クラスが付いていた場合に保持してほいし時は、classNameに先に付いていたクラスも書く必要がある。*/

//classList
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target')
//     // targetNode.className = 'my-color my-border';
//     // targetNode.classList.add('my-color');
//     // if (targetNode.classList.contains('my-color') === ture) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//     targetNode.classList.toggle('my-color');//上記の条件分岐の省略版
//   });
// }
/* classList.addを使うと既存のクラスの設定に新しく追加してくれる。また、classList.contains()を使うと
ある要素に特定のクラスが付いているのか調べることもできる。処理の結果をtureかfalse,で返してくれるので今回は
条件分岐を使い、特定のクラスが付いていたら外す、付いていなかったら付けるといった処理を描いた。クラスを外すにはremove()を使う。また、付けたり外したりする処理はよく書くのでclassList.toggleという短く書く命令も用意されている。 */


//カスタムデータ属性
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     // targetNode.textContent = 'Dotinstall';
//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }
/* 今回の例であげられる英訳はh1に関するものなのでまとめて管理するためにカスタムデータという属性を使う。
data-から始まってそのあとは独自の属性を付けられるのでtransletionを作り、Dotinstallという値を入れる。
その上でjavascriptで扱うには、classと同様に同名ではなくdataset.にしなければならない。 */


//要素の追加
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';
//     // const ulNode = document.querySelector('ul');
//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }
/* DOMがあり、DOMツリーの最後にitem2の要素を追加する。その場合、３つのステップが必要。
1番目にli要素を作る。その上で、要素に中身を設定する。これで要素は完成したが、DOMツリーには含まれていないので
追加する。なお、ここでは最後に要素を追加したい場合、ulという親要素の対して子要素の末尾に追加するという手法を使う。まずはじめに要素を作るにはdocument.createElement()というメソッドを使う。（）は要素の名前を入れればいいので今回はli要素を作りたいのでliと書く。そして要素の中身を設定するためにtextContentで設定する。あとは、DOMツリーに追加するのためにまず、親要素であるulをquerySelectorで取得する。そしてulの子要素の末尾に追加するのでappendChildというメソッドを使う。 */


//要素の複製、挿入
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);

//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy, item2);
//   });
// }
/* item0を複製して要素に途中に追加したい場合。まず、item0を複製、そしてDOMツリーに追加、最後に親要素からみてitem2の前に挿入するという手法を使う。 まず、item0を取得する。そしてcloneNode()でコピーを行う。ちなみに（）の中身はtrueにすると要素の中身もコピーされるがfalseにするとコピーされない。そして次に親要素であるulとitem2の手前に入れるのでitem2も取得する。そして、親要素に対して、insertBeforeを使い、copyをitem2の前に挿入してという風に書く。*/


//要素の削除
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];
//     // item1.remove();
//     document.querySelector('ul').removeChild(item1);
//   });
// }
/* 削除したい要素を取得して、.remove()とすれば良い。またこれは古いブラウザだと使えない場合があるので
親Node.removeChild(削除したいNode)とすれば良い。 */


//ユーザーから入力を受け取って要素を作る。
// document.querySelector('button').addEventListener('click', () => {
//   const li = document.createElement('li');
//   const text = document.querySelector('input')
//   li.textContent = text.value;
//   document.querySelector('ul').appendChild(li);

//   text.value = '';
//   text.focus();
// });
/* 例として、入力部品があったとして、ボタンをクリックしたら下のリストに追加されるというものを作成。htmlには入力部品とからのul要素を準備。
まずはリストに追加するli要素を作る。その上で中身のテキストはinput要素に追加された値を使いたいのでまずはinput要素の取得、そしてli.textContentに設定する。入力された値はvalue属性で取得できるのでtext.valueと書く。あとは、ulに対してappendChildで追加すれば良い。また、テキストの値を空文字にしてあげて、フォーカスさせるには、focusメソッドを使えば良い。 */


//セレクトボックスの操作
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }
/* htmlにはselectタグと空ulを準備。そこから色を選んで、下のリストに追加されるというものの実装
まずは、li要素を作成する。次にselect要素で選択された値を使いたいので、要素を取得する。また、selectの場合、valueプロパティで選択された値、selectIndexで選択された値が何番目かを取得できるのでli.textContentで表示する。それから、value属性の値にはタグの中身が使われるが、別の値にしたい時は、htmlの方でvalue属性を指定すれば良い。 */


//ラジオボタン
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     let selectedColor;
//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   });
// }
/* ラジオボタンでも同じ処理をしてみる。
まず、selectのようにまとまっていないのでquerySelectorAllでinputを全て取得する必要がある。複数取得するので定数名はcolorsとする。
それから選択された値は保持しておきたいので変数を設定する。
次にcolorsに対して、ループ処理を行う。まず、１つ１つの要素をcolorとして処理を行うようにする。次に要素がチェックされたら、selectedColorに
代入すれば良い。チェックされているかどうかは、checkedプロパティで調べることができるのでcheckedプロパティがtrueだったらselectedColorに
そのcolorのvalueプロパティの値を代入する。
最後に、li要素を作って追加する処理を行う。li.textContentは選択された値を入れたいのでselectedColorとする。 */


//チェックボックスの操作
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     const selectedcolors = [];
//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedcolors.push(color.value);
//       }
//     });
//     const li = document.createElement('li');
//     // li.textContent = selectedcolors.join(',')//joinは省略可能。何故なら配列の文字列で表現される時、カンマ区切りになるからである。
//     li.textContent = selectedcolors;
//     document.querySelector('ul').appendChild(li);
//   });
// }
/* チェックボックスの操作を行う時、上の二行はこれまでと同じである。
チェックボックスの場合、複数選択可能なので、選択された値を配列で保持する必要がある。今回の場合、配列は変わりますが再代入されることはないので
constを使って宣言する。そしてループ処理を行うのですが、selectedColorに追加するとき、pushメソッドを使います。他の処理はこれまでやったものと同じ。
一点異なるのは、textContentに代入する時、配列の要素をカンマ区切りにするためにjoinを使う。 */


//ボタンに対するイベント
// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double click');
//   });

//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }
/* マウス系のイベントについてこれまでclickのみを見てきたが、dblclickやmousemoveと言ってマウスを動かすと反応するイベントがある。
今回は特定の要素だけでなく、document全体に対してmousemoveの処理を適用させた。*/

//マウスカーソルの座標の取得
// {
//   document.addEventListener('mousemove', e => {
//     // console.log('moved!');
//     console.log(e.clientX, e.clientY);
//   });

//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }
/* ボタンに対してのイベントのコマンドで（）の関数に引数を渡してあげるとブラウザがイベントに関する情報をセットして渡してくれるという仕組みのなっている。そのためここで渡される引数はイベントオブジェクトと呼ばれ、慣習的にeventのeが使われる。今回はx座標とy座標を表示。ここでのxy座標は左上が基準となっている。また、キーボードに関するイベントもある。この場合はkeydownを使う。イベントオブジェクトを渡してe.keyとしてあげれば押したkeyを取得することができる。 */


//フォーム部品に関するイベントついて
// {
//   const text = document.querySelector('textarea');
//   text.addEventListener('focus', () => {
//     console.log('focus');
//   });

//   text.addEventListener('blur', () => {
//     console.log('blur');
//   });

//   text.addEventListener('input', () => {
//     // console.log('input');
//     console.log(text.value.length);//文字数表示
//   });
//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }
/* 今回は、textareaを使う。まずはこの要素を取得する。その上で、いくつかのイベントを取得する。
textに対してaddEventListenerとする。まずはfocusとblur、focusはフォーカスが当たった時、blurはフォーカスが
外れた時のイベントです。次にinputとchange、inputは内容が更新された時、changeは更新が確定した時のイベント。
また、inputイベントはリアルタイムに入力されたテキストの文字数を表示することもできる。 */


//formタグのイベントについて
// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('submit');
//   });
// }
/* フォーム部品はフォームタグの中にボタンがあるとsubmitというイベントが発生します。
consoleで表示することができます。しかし一瞬だけしか表示されません。これは、フォームを送信すると
ページ遷移が発生して、一瞬だけ表示された後にページがリロードされてしまうからです。
これをキャンセルするには、eventオブジェクトを渡してあげて、既定の動作をキャンセルするpreventDefaultを使う。
フォームタグを使うメリットとして、フォームタグはボタンを押さず、enterを押すだけでフォームを送信できるという点にある。また、フォームの中に<input type="text">のみだったらボタンは省略しても良い。 */


//イベントの電播について
// {
//   document.querySelector('ul').addEventListenet('click', e => {
//     if (e.target.nodename === 'LI') {
//       e,target.classList.toggle('done');
//     }
//   });
// }
/* １つの子要素でclickを追加すると親要素を辿って、伝播する仕組みになっている。
なのでclickイベントをつけたかった時、親要素のみにEventListenerを書けば良い。
また、イベントオブジェクトを使えば、クリックした要素はe.target、EventListenerを追加した要素は
e.currentTargetで取得できる。今回は、ToDoリストを想定して、クリックするたびに打ち消し線がつくようにする。
ここのスタイルにイベントを設定するのではなく、親要素であるulの方にイベントを設定する。
まず、ulを取得し、クリックしたらとする。そしてクリックされた方の要素の操作なのでe.targetを使う。
一応、e.targetがLIかどうかを判別するその場合、e.target.nodename === 'LI'とする。
その上でe.targetのclassList.toggleメソッドを使い、'doneとすれば良い。' */