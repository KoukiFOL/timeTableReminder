# 時間割リマインダ
大学の時間割をGoogle Carendarにスケジュールとして追加するbotです。googleカレンダーを使った日程調整に便利です。

## 使い方
### 1. 自分のGoogle Driveに取り込む
1. <a href="https://docs.google.com/spreadsheets/d/1KptaI71qJfaNsvWt3y787pP6A0XO6Qbcdm9M_Cpq8jA/edit?usp=sharing">このリンク</a>を開く。開いたファイルを直接書くことはできないので自分のGoogleDriveにコピーを作成します。
   
3. 「ファイル」を選択し、「コピーを作成」を選択する。
   
<img style="height:500px;" src="https://github.com/KoukiFOL/timeTableManager/assets/92080227/81893efe-f7af-477b-aec7-dc9b2ba33b5d">

3. 「フォルダ」を選択し保存したいフォルダを選択してから「コピーを作成」をクリックする

<img style="height:500px;" src="https://github.com/KoukiFOL/timeTableManager/assets/92080227/1cd17a84-dd3f-4bba-9171-1bb7b3d39fcb">

### 2. 使ってみる
1. googleドライブを開く
2. 「時間割リマインダ のコピー」と書かれたファイルをクリックして開く
3. 開いたスプレッドシートの該当するセルに科目名を入れ時間割を作成し、「実行」をクリックするとGoogleカレンダーに登録されます。
4. 間違えて2回押してしまった場合、「削除」をクリックすると取り消すことができます。取り消されたらもう一度「作成」をクリックして下さい。（削除が終わるまで時間がかかりますがそのままお待ちください。）

### 3. 便利な機能
+ 「学年歴」のシートを開いて各学期の授業開始日、終了日を設定するとその範囲のみgoogleカレンダーへ登録します。

### 注意
+ まれに「実行」ボタンをクリックしても実行されないときがあるのでその時はもう一度押してください。
+ 初めて使う際、このような画面が出ますが「詳細」をクリックして「安全でないページに戻る」をクリックすれば使えます。
![image](https://github.com/KoukiFOL/timeTableManager/assets/92080227/642885a5-a55f-4fdf-ad78-bbb22ce9a929)

### 実装予定の機能
+ 休日開校日、変則的な時間割に対応して時間割を書き込む機能
+ UIへのエラー表示
