// JAVASCRIPT CODE //
const cvs = document.getElementById("Java");
const ctx = cvs.getContext("2d");



//game vars
let frames = 0;
let delay = 0;
let delay2 = 0;
let delay3 = 0;
let delay4 = 0;
let delay5 = 0;
let delay6 = 60;
let dx = 20;//ٍسرعة
let jump = 10;
let score = 0;
let Time = 100;
let lvl;//عشان تغير المرحله
//تحرك (on/off)
let left = 0;
let right = 0;
let up = 0;
let down = 0;
//مهارات (on/off)
let s1 = 0;
//load img

//img for charctar
//HERO
const sprite = new Image();
sprite.src = "sprite/Kid_goku.png";
//first enemy(lvl 1) and second enemy(lvl2)
const sprite2 = new Image();
sprite2.src = "sprite/Black_goku.png";
//third enemy(lvl3)
const sprite3 = new Image();
sprite3.src = "sprite/azin.png";
//end
const gohan = new Image();
gohan.src = "sprite/gohan.png";

//img for cloud
const background_cloud = new Image();
background_cloud.src = "background/a.png";

//img for background
//start 
const background_ = new Image();
background_.src = "background/gameready.jpg";
//lvl 1 
const background_1 = new Image();
background_1.src = "background/2D background by snowball71.jpg";
//lvl 2
const background_2 = new Image();
background_2.src = "background/lvl3.png";
//lvl 3
const background_3 = new Image();
background_3.src = "background/maxresdefault.jpg";
// end
const background_4 = new Image();
background_4.src = "background/677262.png";

//img for Ki(skill)
//kid_goku
const ki = new Image();
ki.src = "Ki_blast/dbz-energy-blast-png-6.png";
//black_goku
const ki3 = new Image();
ki3.src = "Ki_blast/ki-blast-png-11-original.png";
//black_goku_lvl2
const ki2 = new Image();
ki2.src = "Ki_blast/kindpng_179210.png";
//Azin
const ki4 = new Image();
ki4.src = "Ki_blast/dark-png-2.png";

//img for HP
//HP for Enemy
const hp = new Image();
hp.src = "HP/full_enemy.png";
//HP for hero
const hp2 = new Image();
hp2.src = "HP/full_hero.png";

//img for lvl complete, fail and other(1,2,3)
const lvl_complete = new Image();
lvl_complete.src = "LVL/LevelComplete.png";

const lvl_Fail = new Image();
lvl_Fail.src = "LVL/c5e8ba822aa4312.png";

const time_1 = new Image();
time_1.src = "LVL/1-Number-PNG-Pic.png";

const time_2 = new Image();
time_2.src = "LVL/Number 2 PNG images free download_PNG14924.png";

const time_3 = new Image();
time_3.src = "LVL/number3_PNG14969.png";


//sound
const sound = document.getElementById("myAudio");
const sound2 = document.getElementById("myAudio2");

//game state
const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2,
}
//key 
window.addEventListener("keydown", moveSomething, false);//movement
function moveSomething(e) {
    // alert(e.keyCode);لو تبا تعرف اي زر
    switch (e.keyCode) {
        case 37:
            left = 1;
            Kid_goku.x -= dx;
            //border
            if (Kid_goku.x <= 0) { Kid_goku.x = 0 }
            break;
        case 38:
            up = 1;
            Kid_goku.y += -jump;
            break;
        case 39:
            // right key pressed
            right = 1;
            Kid_goku.x += dx;
            if (Kid_goku.x > cvs.width - 56) { Kid_goku.x = cvs.width - 56 }
            break;
        case 40:
            down = 1;
            Kid_goku.y += dx;
            if (Kid_goku.y > cvs.height - 47) { Kid_goku.y = cvs.height - 47 }
            break;
        case 49:
            //1
            if (state.current == state.game) {
                //how many ki you can use 
                if (delay6 >= 50) {
                    delay6 = 0;
                    s1 = 1;
                    Ki.y = Kid_goku.y;
                    Ki.x = Kid_goku.x;
                    sound.playbackRate = 2;
                    sound.play();
                }
            }
        case 50:
            //2
            break;
        case 51:
            // 3
            break;
        case 52:
            //4
            break;

    }
    // e.preventDefault();//To prevent scroll the page
    // return false;//To prevent scroll the page

}

//controll the game
cvs.addEventListener("click", function (evt) {
    switch (state.current) {
        // console.log(event);
        case state.getReady:
            state.current = state.game;
            lvl = 1;
            break;
    }
})


//background
const Background = {
    //var
    x: 0,
    y: 0,
    w: cvs.width,
    h: cvs.height,
    

    draw: function () {
        if (state.current == state.getReady) {
            ctx.drawImage(background_, this.x, this.y, this.w, this.h);
        }
        if (state.current == state.game) {
            if (lvl == 1) { ctx.drawImage(background_1, this.x, this.y, this.w, this.h); }
            if (lvl == 2) { ctx.drawImage(background_2, this.x, this.y, this.w, this.h); }
            if (lvl == 3) { ctx.drawImage(background_3, this.x, this.y, this.w, this.h); }
        }
        if (state.current == state.over) {
            ctx.drawImage(background_4, this.x, this.y, this.w, this.h);
        }



    },
}

//cloud
const Cloud = {
    //state getready
    animation: [
        { sX: 413, sY: 458, sW: 87, sH: 34 },
        { sX: 554, sY: 458, sW: 87, sH: 34 }
    ],
    
    x: cvs.width,
    x2: 0,
    y: cvs.height / 20,
    y2: cvs.height / 5,
    w: 87,
    h: 34,
    dx: 4,//سرعة السحابه

    frame: 0,
    draw: function () {
        if (state.current == state.game) {
            let cloud1 = this.animation[0];
            ctx.drawImage(background_cloud, cloud1.sX, cloud1.sY, cloud1.sW, cloud1.sH, this.x, this.y, this.w, this.h);//سحابه رقم واحد

            let cloud2 = this.animation[1];
            ctx.drawImage(background_cloud, cloud2.sX, cloud2.sY, cloud2.sW, cloud2.sH, this.x2, this.y2, this.w, this.h);//سحابه رقم أثنين
        }



    },

    update: function () {
        if (state.current == state.game) {
            this.x = this.x - this.dx;
            if (this.x == -1000) { this.x = cvs.width }

            this.x2 = this.x2 + this.dx;
            if (this.x2 == 1000) { this.x2 = 0 }
        }
    }
}

//kid_goku(hero)
const Kid_goku = {
    //state getready
    animation: [
        { sX: 1048, sY: 27, sW: 56, sH: 93 },
        { sX: 1108, sY: 27, sW: 56, sH: 93 },
        { sX: 1171, sY: 27, sW: 61, sH: 93 },
        { sX: 1235, sY: 27, sW: 59, sH: 93 },
        { sX: 1297, sY: 36, sW: 59, sH: 84 },
        { sX: 1361, sY: 35, sW: 59, sH: 85 },
        { sX: 1418, sY: 32, sW: 60, sH: 88 },
    ],
    //stste game
    animation2: [
        { sX: 384, sY: 149, sW: 76, sH: 82 },
        { sX: 471, sY: 149, sW: 76, sH: 82 },
        { sX: 565, sY: 149, sW: 83, sH: 82 },
        { sX: 649, sY: 149, sW: 83, sH: 82 },
        { sX: 828, sY: 149, sW: 85, sH: 86 },
    ],

    x: cvs.width / 7,
    y: cvs.height - 47,
    w: 56,
    h: 47,
    hp: 100,

    frame: 0,
    frame2: 0,
    frame3: 0,

    draw: function () {
        if (state.current == state.getReady) {
            let kid_goku = this.animation[this.frame];
            ctx.drawImage(sprite, kid_goku.sX, kid_goku.sY, kid_goku.sW, kid_goku.sH, 100, 50, this.w, this.h);
        }
        if (state.current == state.game) {
            if (left == 1) {
                ctx.drawImage(sprite, 283, 241, 77, 88, this.x, this.y, this.w, this.h);
                delay += 1;
                if (delay >= 60) { left = 0; delay = 0; }
            } else if (right == 1) {
                ctx.drawImage(sprite, 551, 244, 94, 85, this.x, this.y, this.w, this.h);
                delay += 1;
                if (delay >= 60) { right = 0; delay = 0 }
            } else if (up == 1) {
                ctx.drawImage(sprite, 181, 451, 82, 97, this.x, this.y, this.w, this.h);
                delay += 1;
                if (this.y <= 100) { this.y += 10; }
                if (delay >= 60) { up = 0; delay = 0; }
            } else if (down == 1) {
                ctx.drawImage(sprite, 353, 1251, 101, 63, this.x, this.y, this.w, this.h);
                delay += 1;
                if (delay >= 60) { down = 0; delay = 0 }

            } else if (s1 == 1) {
                ctx.drawImage(sprite, 319, 2228, 76, 97, this.x, this.y, this.w, this.h);

            } else {
                let kid_goku = this.animation2[this.frame];
                ctx.drawImage(sprite, kid_goku.sX, kid_goku.sY, kid_goku.sW, kid_goku.sH, this.x, this.y, this.w, this.h);
            }
        }
        if (state.current == state.over) {
            let kid_goku = this.animation[0];
            ctx.drawImage(sprite, kid_goku.sX, kid_goku.sY, kid_goku.sW, kid_goku.sH, cvs.width / 7, 160, this.w, this.h);
        }

    },

    update: function () {
        if (state.current == state.getReady) {
            //سرعه الصوره
            this.period = 20;
            //we increase the frame by1 to change array so change img
            // if(frames%this.period ==0){this.frame+=1}else{this.frame+=0}
            this.frame += frames % this.period == 0 ? 1 : 0; 
            //we reset the arry to 0 when it the last value in arry
            this.frame = this.frame % this.animation.length;
        }
        if (state.current == state.game) {
            //سرعه الصوره
            this.period = 40;
            //we increase the frame by1 to change array so change img
            this.frame += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame = this.frame % this.animation2.length;

        }
    },

}

const Gohan = {
    draw: function () {
        if (state.current == state.over) {
            ctx.drawImage(gohan, cvs.width - 100, 140, 55, 55);
        }
    }
}
//Black_goku(enemy)
const Black_goku = {
    //state getready
    animation: [
        { sX: 23, sY: 9, sW: 66, sH: 148 },
        { sX: 167, sY: 9, sW: 66, sH: 148 },
        { sX: 235, sY: 12, sW: 102, sH: 148 },
        { sX: 407, sY: 156, sW: 94, sH: 157 },

    ],

    //state game
    animation2: [
        { sX: 23, sY: 9, sW: 66, sH: 148 },
        { sX: 849, sY: 13, sW: 94, sH: 150 },
        { sX: 611, sY: 173, sW: 107, sH: 142 },

    ],

    x: cvs.width / 3,
    x2: cvs.width - 66,//this x for in game
    y: cvs.height - 100,
    w: 66,
    h: 100,
    hp: 100,

    frame: 0,
    frame2: 0,

    draw: function () {
        if (state.current == state.getReady) {
            let black_goku = this.animation[this.frame]
            ctx.drawImage(sprite2, black_goku.sX, black_goku.sY, black_goku.sW, black_goku.sH, this.x, 50, this.w, this.h);
        }
        if (state.current == state.game && lvl == 1) {
            let black_goku = this.animation2[this.frame2]
            ctx.drawImage(sprite2, black_goku.sX, black_goku.sY, black_goku.sW, black_goku.sH, this.x2, this.y, this.w, this.h);
        }
    },

    update: function () {
        if (state.current == state.getReady) {
            //سرعه الصوره
            this.period = 40;
            //we increase the frame by1 to change array so change img
            this.frame += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame = this.frame % this.animation.length;
        }
        if (state.current == state.game && lvl == 1) {
            //سرعه الصوره
            this.period = 150;
            //we increase the frame by1 to change array so change img
            this.frame2 += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame2 = this.frame2 % this.animation2.length;
        }




    },

}
//Black_goku_lvl2(enemy)
const Black_goku_lvl2 = {
    //state getready
    animation: [
        { sX: 14, sY: 482, sW: 64, sH: 167 },
        { sX: 81, sY: 482, sW: 64, sH: 167 },
        { sX: 145, sY: 482, sW: 101, sH: 167 },
        { sX: 255, sY: 482, sW: 78, sH: 167 },
        { sX: 332, sY: 482, sW: 112, sH: 167 },

    ],

    //state game
    animation2: [
        { sX: 14, sY: 482, sW: 64, sH: 167 },
        { sX: 612, sY: 480, sW: 112, sH: 164 },
    ],

    x: cvs.width / 2,
    x2: cvs.width - 66,//this x for in game
    y: cvs.height - 100,
    w: 66,
    h: 100,
    hp: 100,

    frame: 0,
    frame2: 0,

    draw: function () {
        if (state.current == state.getReady) {
            let black_goku_lvl2 = this.animation[this.frame]
            ctx.drawImage(sprite2, black_goku_lvl2.sX, black_goku_lvl2.sY, black_goku_lvl2.sW, black_goku_lvl2.sH, this.x, 50, this.w, this.h);
        }
        if (state.current == state.game && lvl == 2) {
            let black_goku = this.animation2[this.frame2]
            ctx.drawImage(sprite2, black_goku.sX, black_goku.sY, black_goku.sW, black_goku.sH, this.x2, this.y, this.w, this.h);
        }
    },

    update: function () {
        if (state.current == state.getReady) {
            //سرعه الصوره
            this.period = 40;
            //we increase the frame by1 to change array so change img
            this.frame += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame = this.frame % this.animation.length;
        }
        if (state.current == state.game && lvl == 2) {
            //سرعه الصوره
            this.period = 200;
            //we increase the frame by1 to change array so change img
            this.frame2 += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame2 = this.frame2 % this.animation2.length;
        }




    },

}
//third enemy
const Azin = {
    //state getready
    animation: [
        { sX: 1127, sY: 0, sW: 56, sH: 112 },
        { sX: 1059, sY: 112, sW: 60, sH: 112 },
        { sX: 983, sY: 110, sW: 67, sH: 117 },
        { sX: 901, sY: 105, sW: 76, sH: 123 },
        { sX: 821, sY: 103, sW: 83, sH: 123 },
    ],

    //state game
    animation2: [
        { sX: 1127, sY: 0, sW: 56, sH: 112 },
        { sX: 699, sY: 857, sW: 90, sH: 123 },

    ],

    x: cvs.width - 200,
    x2: cvs.width - 66,//this x for in game
    y: cvs.height - 100,
    w: 66,
    h: 100,
    hp: 100,

    frame: 0,
    frame2: 0,

    draw: function () {
        if (state.current == state.getReady) {
            let azin = this.animation[this.frame]
            ctx.drawImage(sprite3, azin.sX, azin.sY, azin.sW, azin.sH, this.x, 50, this.w, this.h);

        }
        if (state.current == state.game && lvl == 3) {
            let azin = this.animation2[this.frame2]
            ctx.drawImage(sprite3, azin.sX, azin.sY, azin.sW, azin.sH, this.x2, this.y, this.w, this.h);
        }
    },

    update: function () {
        if (state.current == state.getReady) {
            //سرعه الصوره
            this.period = 40;
            //we increase the frame by1 to change array so change img
            this.frame += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame = this.frame % this.animation.length;
        }
        if (state.current == state.game && lvl == 3) {
            //سرعه الصوره
            this.period = 200;
            //we increase the frame by1 to change array so change img
            this.frame2 += frames % this.period == 0 ? 1 : 0;
            //we reset the arry to 0 when it the last value in arry
            this.frame2 = this.frame2 % this.animation2.length;
        }
    },

}

//skill(shot)
//kid_goki
const Ki = {
    x: Kid_goku.x + 30,
    y: Kid_goku.y,
    diff: 20,



    draw: function () {
        if (state.current == state.game) {
            ctx.drawImage(ki, this.x, this.y, 50, 50);
        }
    },

    update: function () {

        this.x += 10
        if (Black_goku.x2 - this.x < this.diff && Black_goku.y - this.y < this.diff) {
             s1 = 0; 
             score += 10; 
             this.x = Kid_goku.x + 40; 
             Black_goku.hp -= 20 
            }
        if (this.x >= cvs.width) { this.x = Kid_goku.x + 30; s1 = 0 }//to reset position for object(KI)

    }
}
//black_goku
const Ki2 = {
    x: Black_goku.x2 - 45,
    y: Black_goku.y,
    diff: 30,

    draw: function () {
        if (state.current == state.game) {

            ctx.drawImage(ki3, this.x, this.y, 50, 50);

        }
    },

    update: function () {

        this.x -= 5

        if (Kid_goku.x - this.x < this.diff && Kid_goku.x - this.x > -this.diff && Kid_goku.y - this.y < this.diff && Kid_goku.y - this.y > -this.diff) {
            this.x = Black_goku.x2 - 45;
            Black_goku.frame2 = 0;
            score -= 10;
            Kid_goku.hp -= 20;
        }

        if (this.x <= 0) { this.x = Black_goku.x2 - 45; Black_goku.frame2 = 0; }

    }
}
//black_goku_lvl2
const Ki3 = {
    x: Black_goku_lvl2.x2 - 45,
    y: Black_goku_lvl2.y,
    y2: Black_goku_lvl2.y + 30,
    diff: 30,

    draw: function () {
        if (state.current == state.game) {

            ctx.drawImage(ki2, this.x, this.y, 50, 50);
            ctx.drawImage(ki2, this.x, this.y2, 50, 50);
        }
    },

    update: function () {

        this.x -= 5

        if (Kid_goku.x - this.x < this.diff && Kid_goku.x - this.x > -this.diff && Kid_goku.y - this.y < this.diff && Kid_goku.y - this.y > -this.diff) {
            this.x = Black_goku_lvl2.x2 - 45;
            Black_goku_lvl2.frame2 = 0;
            score -= 10;
            Kid_goku.hp -= 20;
        }

        if (Kid_goku.x - this.x < this.diff && Kid_goku.x - this.x > -this.diff && Kid_goku.y - this.y2 < this.diff && Kid_goku.y - this.y2 > -this.diff) {
            this.x = Black_goku_lvl2.x2 - 45;
            Black_goku_lvl2.frame2 = 0;
            score -= 10;
            Kid_goku.hp -= 20;
        }

        if (this.x <= 0) { this.x = Black_goku_lvl2.x2 - 45; Black_goku_lvl2.frame2 = 0; }

    }
}
//azin
const Ki4 = {
    x: Azin.x2 - 45,
    y: Azin.y,
    y2: Azin.y + 30,
    y3: Azin.y - 30,
    diff: 30,

    draw: function () {
        if (state.current == state.game) {

            ctx.drawImage(ki4, this.x, this.y, 50, 50);
            ctx.drawImage(ki4, this.x, this.y2, 50, 50);
            ctx.drawImage(ki4, this.x, this.y3, 50, 50);
        }
    },

    update: function () {

        this.x -= 5

        if (Kid_goku.x - this.x < this.diff && Kid_goku.x - this.x > -this.diff && Kid_goku.y - this.y < this.diff && Kid_goku.y - this.y > -this.diff) {
            this.x = Azin.x2 - 45;
            Azin.frame2 = 0;
            score -= 10;
            Kid_goku.hp -= 20;
        }

        if (Kid_goku.x - this.x < this.diff && Kid_goku.x - this.x > -this.diff && Kid_goku.y - this.y2 < this.diff && Kid_goku.y - this.y2 > -this.diff) {
            this.x = Azin.x2 - 45;
            Azin.frame2 = 0;
            score -= 10;
            Kid_goku.hp -= 20;
        }

        if (this.x <= 0) { this.x = Azin.x2 - 45; Azin.frame2 = 0; }

    }
}

//life for enemy
const HP_enemy = {
    Hp_bar: [
        { x: 200, y: 24, w: 634, h: 74 },//100
        { x: 200, y: 114, w: 634, h: 74 },//80
        { x: 200, y: 191, w: 634, h: 74 },//60
        { x: 200, y: 365, w: 634, h: 74 },//40
        { x: 200, y: 515, w: 634, h: 74 },//20
        { x: 200, y: 621, w: 634, h: 74 }//0
    ],
    hp_counter: 0,
    draw: function () {
        if (state.current == state.game) {
            if (Black_goku.hp == 100) {
                let hp_ = this.Hp_bar[0]
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 250, 0, 250, 40);
            }
            if (Black_goku.hp == 80) {
                this.hp_counter = 1;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 250, 0, 250, 40);
            }
            if (Black_goku.hp == 60) {
                this.hp_counter = 2;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 250, 0, 250, 40);
            }
            if (Black_goku.hp == 40) {
                this.hp_counter = 3;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 250, 0, 250, 40);
            }
            if (Black_goku.hp == 20) {
                this.hp_counter = 4;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 250, 0, 250, 40);
            }
            if (Black_goku.hp == 0) {
                this.hp_counter = 5;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp, hp_.x, hp_.y, hp_.w, hp_.h, cvs.width - 300, 0, 250, 40);
            }
        }
    },
}
const HP_hero = {
    Hp_bar: [
        { x: 200, y: 24, w: 634, h: 74 },//100
        { x: 200, y: 114, w: 634, h: 74 },//80
        { x: 200, y: 191, w: 634, h: 74 },//60
        { x: 200, y: 365, w: 634, h: 74 },//40
        { x: 200, y: 515, w: 634, h: 74 },//20
        { x: 200, y: 621, w: 634, h: 74 }//0
    ],
    hp_counter: 0,
    draw: function () {
        if (state.current == state.game) {
            if (Kid_goku.hp == 100) {
                let hp_ = this.Hp_bar[0]
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
            if (Kid_goku.hp == 80) {
                this.hp_counter = 1;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
            if (Kid_goku.hp == 60) {
                this.hp_counter = 2;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
            if (Kid_goku.hp == 40) {
                this.hp_counter = 3;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
            if (Kid_goku.hp == 20) {
                this.hp_counter = 4;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
            if (Kid_goku.hp == 0) {
                this.hp_counter = 5;
                let hp_ = this.Hp_bar[this.hp_counter];
                ctx.drawImage(hp2, hp_.x, hp_.y, hp_.w, hp_.h, 0, 0, 250, 40);
            }
        }
    },
}

const Lvl = {
    animation: [
        { name: lvl_complete, x: 180, y: 80, w: 200, h: 100 },
        { name: time_1, x: 180, y: 80, w: 200, h: 100 },
        { name: time_2, x: 180, y: 80, w: 200, h: 100 },
        { name: time_3, x: 180, y: 80, w: 200, h: 100 },
    ],
    frame: 0,
    
    draw: function () {
        if (Black_goku.hp <= 0) {
            sound2.playbackRate = 1;
            sound2.play();
            let next_lvl = this.animation[this.frame];
            ctx.drawImage(next_lvl.name, next_lvl.x, next_lvl.y, next_lvl.w, next_lvl.h);
            delay4 += 5;
            if (delay4 == 100 && this.frame <= 3) {
                this.frame += 1;
                delay4 = 0;
            }
            if (lvl == 1) {
                //عشان يوم يستوي رقم ثلاث يعيد كل شي
                if (this.frame == 4) {
                    //reset HP
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    //go to next lvl
                    lvl = 2;
                    this.frame = 0;
                }
            }
            if (lvl == 2) {
                if (this.frame == 4) {
                    //reset HP
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    //go to next lvl
                    lvl = 3;
                    this.frame = 0;
                }
            }
            if (lvl == 3) {
                if (this.frame == 4) {
                    //reset HP
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    //go to next lvl
                    state.current = 2;
                    this.frame = 0;
                }
            }
        }
        if (Kid_goku.hp <= 0) {
            let next_lvl = this.animation[this.frame];
            ctx.drawImage(next_lvl.name, next_lvl.x, next_lvl.y, next_lvl.w, next_lvl.h);
            delay4 += 5;
            if (delay4 == 100 && this.frame <= 3) { this.frame += 1; delay4 = 0; }
            if (lvl == 1) {
                if (this.frame == 4) {
                    //reset HP    
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    lvl = 1;
                    this.frame = 0;
                }
            }
            if (lvl == 2) {
                if (this.frame == 4) {
                    //reset HP    
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    lvl = 1;
                    this.frame = 0;
                }
            }
            if (lvl == 3) {
                if (this.frame == 4) {
                    //reset HP    
                    Black_goku.hp = 100;
                    Kid_goku.hp = 100;
                    //reset position
                    Kid_goku.x = cvs.width / 7;
                    Kid_goku.y = cvs.height - 47;
                    lvl = 2;
                    this.frame = 0;
                }
            }
        }
        if (Time <= 0) {
            //you lose img
            ctx.drawImage(lvl_Fail, 180, 80, 200, 100);

            //restore full hp
            Black_goku.hp = 100;
            Kid_goku.hp = 100;

            //reset position
            Kid_goku.x = cvs.width / 7,
                Kid_goku.y = cvs.height - 47,

                //reset time and lvl
                delay5 += 1;
            if (delay5 >= 60) {
                var min = 1;
                Time = 100;
                delay5 = 0;
                lvl = min;
            }
        }
    },
}

const Time_d = {
    update: function () {
        if (state.current == state.game) {
            delay2 += 1;
            if (delay2 == 40) {
                Time -= 1;//تنقص الوقت
                delay2 = 0;
                if (Time <= 0) { Time = 0; score = 0;lvl=1 }/*عشان ما ينقص اقل من 0*/
                if (Black_goku.hp <= 0) { Time = 100; };
            }
        }
    }
}



//draw exe
function draw() {
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    Background.draw();//call background to draw
    Cloud.draw();//call cloud to draw
    Kid_goku.draw();
    Gohan.draw();
    Black_goku.draw();
    Black_goku_lvl2.draw();
    Azin.draw();
    HP_enemy.draw();
    HP_hero.draw();
    Lvl.draw();
    if (s1 == 1) { Ki.draw();}
    if (Black_goku.frame2 == 2) { Ki2.draw(); }
    if (Black_goku_lvl2.frame2 == 1) { Ki3.draw(); }
    if (Azin.frame2 == 1) { Ki4.draw(); }
}
//update exe
function update() {
    Cloud.update();//call cloud to move
    Kid_goku.update();
    Black_goku.update();
    Azin.update();
    Time_d.update();
    if (s1 == 1) { Ki.update(); }
    if (Black_goku.frame2 == 2) { Ki2.update(); }
    Black_goku_lvl2.update();
    if (Black_goku_lvl2.frame2 == 1) { Ki3.update(); }
    if (Azin.frame2 == 1) { Ki4.update(); }


}

//loop
function loop() {
    update();
    draw();

    if (state.current == state.game) {
        ctx.font = "20px Arial";
        ctx.fillText("score = " + score, 10, 80);
        ctx.font = "20px Arial";
        ctx.fillText(Time, 280, 20);
    }
    if (state.current == state.over) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("score = " + score, cvs.width / 4, 80);

        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("You saved your brother ", cvs.width / 4, 100);

    }
    frames++;
    delay6 += 1;


    requestAnimationFrame(loop);
}
loop();
