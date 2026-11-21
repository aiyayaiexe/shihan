let shihan = ["Y. ヤマダ", "A. トウヘイ", "M. カナイ", "S. セイイチ", "H. コニグズバーグ",
  "C. ベルティオーム", "P. バーナース", "D. ウェイト", "A. デムコ", "M. エイブラムス",
  "S. ピムズラー", "R. ワーコフ", "R. スティックレス", "H. レールマン", "L. ビエリ",
  "A. メーター", "E. ハギハラ", "L. リー ヴェッキオ", "G. ケネディ",
  "B. マリガン", "M. シェーホン", "H. スミス", "R. ストラウド", "D. マクドナルド",
  "R. ファリナート", "I. ファウスト", "D. ファイアストーン", "C. マクギニス", "E. ピータロイ",
  "R. サード", "F. ウォン", "T. リー", "L. レヴィット", "D. メノ",
  "J. ネメス", "G. サカモト", "P. タマニ", "D. タングマン", "P. バーナース",
  "S. ホール", "Y. カタギリ", "Y. オカモト", "N. アンドゥハル", "S. カウフマン",
  "G. レイン", "D. ローランドー", "G. ロンプレ", "Y. メーター", "W. ヴァン エンク",
  "R. ワグナー", "C. スミス", "K. ニシダ", "D. バート", "G. ブルックス",
  "E. ディ マルコ", "C. グリフィン", "E. モンテレオーネ", "L. ジェイコブズ パヴリック", "G. ペネヴァート",
  "G. ラモス", "E. リフキン", "W. クサビエ スタウブ", "G. トレンブレイ", "A. ワイズ",
  "E. アバラテグイ", "S. コヤニス", "M. ヌマタ", "D. アポダカ", "P. ハーデスティ",
  "A. コルデロ ハーデスティ", "S. イェスバーガー", "B. ミゼラック", "D. パーマー", "G. スキナー"];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  //background
  background(245, 235, 224);
  noStroke();


  let c1 = color(94, 48, 35);
  let c2 = color(67, 40, 24);
  let c3 = color((67, 40, 24));
  let c4 = color(137, 87, 55);
  let c5 = color(120, 56, 12);
  let c6 = color(160, 96, 52);
  let c7 = color(218, 180, 157);

  let space = 100;
    
  push();
  //base
  fill(c1);
  rect(0, 0, windowWidth, 55);
  rect(0, windowHeight/2, windowWidth, 55);

  //shade
  fill(c2);
  rect(0, 45, windowWidth, 13);
  rect(0, windowHeight/2 + 45, windowWidth, 13);
  pop();

  //placks

  let i = 0 //counter for plack names, to know when to stop or add
  
  push();

  for (let x = 30; x < windowWidth; x += space) { //top
      fill(c7);
      noStroke();
      rect(x, 58, 60, 270);
    
      fill(c5);
      noStroke();
      rect(x - 15, 10, 60, 300);
    
      fill(c5);
      noStroke();
      rect(x - 20, 15, 65, 300);
      
      fill(c4);
      noStroke();
      rect(x - 20, 10, 60, 300);
      
      stroke(c3);
      strokeWeight(20);
      point(x + 10, 28);
      
      stroke(c5);
      strokeWeight(15);
      point(x + 10, 25);

      fill(c5);
      noStroke();
      rect(x + 3, 12, 13, 10);

      stroke(c6);
      strokeWeight(13.5);
      point(x + 9.5, 15);

    if (i < shihan.length) {
      push();
      noStroke();
      fill(40, 11, 0); 
      translate(x, 60);
      rotate(HALF_PI); 
      textSize(27);
      textFont("Petrona");
      text(shihan[i], 0, 0);
      pop();
      }
    i++
    }

    for (let x = 30; x < windowWidth; x += space) { //bottom
      fill(c7);
      noStroke();
      rect(x, windowHeight/2 + 58, 60, 270);
      
      fill(c5);
      noStroke();
      rect(x - 15, windowHeight/2 + 10, 60, 300);
    
      fill(c5);
      noStroke();
      rect(x - 20, windowHeight/2 + 15, 65, 300);
      
      fill(c4);
      noStroke();
      rect(x - 20, windowHeight/2 + 10, 60, 300);
      
      stroke(c3);
      strokeWeight(20);
      point(x + 10, windowHeight/2 + 28);
      
      stroke(c5);
      strokeWeight(15);
      point(x + 10, windowHeight/2 + 25);

      fill(c5);
      noStroke();
      rect(x + 3, windowHeight/2 + 12, 13, 10);

      stroke(c6);
      strokeWeight(13.5);
      point(x + 9.5,windowHeight/2 + 15);

      if (i < shihan.length) {
      push();
      noStroke();
      fill(0); 
      translate(x, windowHeight/2 + 60);
      rotate(HALF_PI); 
      textSize(27)
      textFont("Petrona");
      fill(40, 11, 0); 
      text(shihan[i], 0, 0);
      pop();
      }
    i++
    }
  
  pop();
}

function windowResized() { //to make it change with the window, without being within draw
  resizeCanvas(windowWidth, windowHeight);
}

// Reflection + Interpretation + Differences:


// Our first assignment was to recreate a memory through code. In this, I learned how to create 2d primitives in order to draw, with the addition of for loops, translates, rotates, pushing, popping, variables, arrays, and more. I used what I was taught to develop a photo of the “Nafudakake” and also allow it to grow and shrink with the page, and have the text be affected accordingly.
// What is observed is wooden plaques with shading and an area to simulate the idea of it being held on the wall from a hole. Overall its a pretty simple design with a straightforward color palette; however, I think the design is effective.
// I had the same constant idea throughout the project. I had drawn a sketch and followed it pretty much to the T; the only thing that would have changed is the spacing, as I didn’t draw it in reference to window size. I ended up just making it adjust to the window size, which I liked.

