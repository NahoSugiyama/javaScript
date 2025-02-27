//オブジェクトの宣言と値の代入
const personalData = {name:'C&M太郎', age:36, gender:'男性'};

//オブジェクトの値を出力
console.log(personalData);

//'age'というキーの値を更新
personalData.age = 37;

//新しくプロパティを追加
personalData.address = '東京都';
console.log(personalData);
console.log(personalData.gender);
