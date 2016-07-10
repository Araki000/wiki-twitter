// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/* global $ */

// window.onload = function(){
//     var windowwidth = $(window).width();
//     $('body').css('width', windowwidth + 'px');
// };



$(function(){
    
    $.cookie.defaults.path = "/";

    // Cookieの名前
    var cookie_name = "fav";
    // お気に入りできる数
    var max = 5;
    // Cookieの中身は二重の配列
    // Cookieは空白を持たない
    // 一段目：各ツイート
    // 二段目：ツイートの中身＞1.ユーザー名 2.文章 3.(存在すれば)写真

    $(".tweet_area").click(function(){
        // $.removeCookie(cookie_name);

        // initialization
        // 最終的に保存するものをfav_cookieと名づける
        
        var flag = true;
        
        if(!$.cookie(cookie_name)){
            var Cookie = [];
        }else{
            var Cookie = $.cookie(cookie_name).split(",");
        }
        
        console.log("initial condition");
        console.log(Cookie);
        var fav_cookie = [];
        
        if(Cookie != []){
            
            console.log("there is cookoie following");
            console.log(Cookie);
            
            while(true){
                var tempArr = [];
                var temp;
                
                for(var i = 0; i < 4 ; i++){
                    temp = Cookie.shift();
                    console.log("temp");
                    console.log(temp);
                    if(!temp && temp != ""){
                        flag = false;
                        break;
                    }
                    tempArr.push(temp);
                }
                
                if(flag){
                    fav_cookie.push(tempArr);
                    console.log("fav_cookie pushed!");
                    console.log(fav_cookie);
                }else{
                    break;
                }
                
            }
            
            $.removeCookie(cookie_name);
            
        }


        
        // アイコンと内容と写真のデータ 
        var icon = $(".forcookieicon",this).text();
        var name = $(this).find("span").text();
        var contents = $(".twitter_contents",this).text();
        var media = $(".forcookiemedia",this).text();
        
        // Cookieで取得してきたもの
        var cookie_content = [icon,name,contents,media];
    
        var surefav = $(".fav",this).text();
        if(surefav == "favorite"){
            
        // ここにCookieから削除する実装
            // 削除するツイートのindexを探す
            var index = -1;
            for(i = 0 ; i < fav_cookie.length ; i++){
                // cookie_contentがfav_cookie[i]と等価な配列か否か
                if(fav_cookie[i].toString() == cookie_content.toString()){
                    index = i;
                    break;
                }
            }
            
            // 存在したら、削除して詰める
            if(index>=0){
                fav_cookie.splice(index,1);
            }else{
                // 存在しないときのエラー
                alert("Uhh... you haven't favorited this tweet");
            }

            // Cookie保存
            if(fav_cookie == []){
                $.removeCookie();
            }else{
                $.cookie(cookie_name,fav_cookie,{ expires: 1 });
            }
            // お気に入り追加されていることを表示
            $(".fav",this).text("");
            $(this).animate({ backgroundColor: "#ffffff" }, 400);
            
        // // Debug用
        console.log("deleted");
        console.log(fav_cookie);
            
        }else{
            // ここにCookieに追加する実装
            
            fav_cookie.push(cookie_content);
            
            // max個以上は削除
            if (fav_cookie.length > max){
                fav_cookie.shift();
            }
            
            // Cookie保存
            $.cookie(cookie_name,fav_cookie,{ expires: 1 });
            // お気に入り追加されていることを表示
            $(".fav",this).text("favorite");
            $(this).stop().animate({ backgroundColor: "rgba(255,255,153,0.6)" }, 800);
            
            // // Debug用
            console.log("added");
            console.log(fav_cookie);

        }
    });
});