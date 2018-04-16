"use strict";var toggleMenu=function(){$("#navbar").toggle("fast")};function showTab(e){"qte"==e?($("#qte").show(),$("#per").hide(),$("#tab_qte").addClass("ativo"),$("#tab_per").removeClass("ativo")):($("#qte").hide(),$("#per").show(),$("#tab_qte").removeClass("ativo"),$("#tab_per").addClass("ativo"))}function formatDisplayNumber(e,t){return t+" "+e.toFixed(0).replace(/./g,function(e,t,a){return t>0&&"."!==e&&(a.length-t)%3==0?"."+e:e})}$("#navbar").click(function(){toggleMenu()}),$("#navbar #cont a").click(function(){$("#navbar #cont").find(".ativo").removeClass("ativo"),$(this).addClass("ativo")}),$("#navbar #cont a").on("click",function(e){var t=this.hash;if("#"==$(this).attr("href").substring(0,1)){e.preventDefault();return $("html, body").animate({scrollTop:$(this.hash).offset().top-130},500,function(){return window.history.pushState(null,null,t)})}});var nav=$(".header"),nav_class="header-shadow",threshold=100;$(window).scroll(function(){$(this).scrollTop()>threshold?nav.addClass(nav_class):nav.hasClass(nav_class)&&nav.removeClass(nav_class)}),$("#language-button").click(function(){$("#language-menu").addClass("language-menu-down-animation")});var endDate="";function updateSaldo(){$.ajax({url:"https://apiw.lunes.io/api/ico/phase",type:"POST",success:function(e){var t=$.grep(e,function(e){return"active"===e.sale_status}),a=parseInt(t[0].total_value);endDate=t[0].end_datetime;var n=formatDisplayNumber(parseInt(t[0].global_limit),""),r=Math.floor(parseFloat(t[0].total_credit_value)*parseFloat(t[0].price_value));$("#coin_sale").html(formatDisplayNumber(a,"")),$("#coin_counter").html(n),$("#raisedValue").html("$ "+formatDisplayNumber(r,"")),document.getElementById("loading_bar_green").style.width=percBarra(t[0].global_limit,a)+"%",getDateTime(endDate)},error:function(e,t,a){$("#coin_counter").html("0"),document.getElementById("loading_bar_green").style.width="0%"}}),$("#coin_sale").html(formatDisplayNumber(0,"")),$("#coin_counter").html(0),$("#raisedValue").html("$ "+formatDisplayNumber(0,"")),document.getElementById("loading_bar_green").style.width="0%"}function diff_hours(e,t){var a=(e.getTime()-t.getTime())/1e3;return a/=3600,Math.abs(Math.round(a))}function percBarra(e,t){var a=Math.round(t)/Math.round(e);return 100*Math.abs(a)}function getDateTime(e){var t=new Date(e).getTime(),a=new Date;a=a.getTime();var n=moment.duration(t-a,"milliseconds");setInterval(function(){n=moment.duration(n-1e3,"milliseconds"),document.querySelector("#con_days").innerHTML=Math.floor(n.asDays()),document.querySelector("#con_hours").innerHTML=n.hours(),document.querySelector("#con_min").innerHTML=n.minutes(),document.querySelector("#con_sec").innerHTML=n.seconds(),n.days()<1&&($("#put_s_day_en").html("Day"),$("#put_s_day_pt").html("Dia")),n.hours()<1&&($("#put_s_hour_en").html("Hour"),$("#put_s_hour_pt").html("Hora")),n.minutes()<1&&($("#put_s_min_en").html("Minute"),$("#put_s_min_pt").html("Minuto"))},1e3)}document.querySelector("#con_days").innerHTML=0,document.querySelector("#con_hours").innerHTML=0,document.querySelector("#con_min").innerHTML=0,document.querySelector("#con_sec").innerHTML=0,$("#put_s_day_en").html("Days"),$("#put_s_day_pt").html("Dias"),$("#put_s_day_fr").html("Jours"),$("#put_s_day_ar").html("أيام"),$("#put_s_hour_en").html("Hours"),$("#put_s_hour_pt").html("Horas"),$("#put_s_hour_fr").html("Heures"),$("#put_s_hour_ar").html("ساعات"),$("#put_s_min_en").html("Minutes"),$("#put_s_min_pt").html("Minutos"),$("#put_s_min_fr").html("Minutes"),$("#put_s_min_ar").html("دقائق"),$("#put_s_sec_en").html("Seconds"),$("#put_s_sec_pt").html("Segundos"),$("#put_s_sec_fr").html("Seconds"),$("#put_s_sec_ar").html("ثواني"),$(document).ready(function(){var e=$("#header"),t="lunes-nav-shadow";$(window).scroll(function(){$(this).scrollTop()>100?e.addClass(t):e.hasClass(t)&&e.removeClass(t)}),$("#slide_time").lightSlider({gallery:!0,item:1,loop:!0,thumbItem:9,slideMargin:0,enableDrag:!0,currentPagerPosition:"left",onSliderLoad:function(e){e.lightGallery({selector:"#slide_time .lslide"}),gulp}}),$("#slide_advisor").lightSlider({gallery:!0,item:1,loop:!0,thumbItem:9,slideMargin:0,enableDrag:!0,currentPagerPosition:"left",onSliderLoad:function(e){e.lightGallery({selector:"#slide_advisor .lslide"})}}),updateSaldo()});