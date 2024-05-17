const main1 = document.getElementById('main_cate1')
const main2 = document.getElementById('main_cate2')
const main3 = document.getElementById('main_cate3')
const main4 = document.getElementById('main_cate4')
const main5 = document.getElementById('main_cate5')
const main6 = document.getElementById('main_cate6')
const main7 = document.getElementById('main_cate7')

const header = document.getElementById('header')
const l_header = document.getElementById('lheader')
const r_header = document.getElementById('rheader')

const sub1 = document.getElementById('sub_cate1')
const sub2 = document.getElementById('sub_cate2')
const sub3 = document.getElementById('sub_cate3')
const sub4 = document.getElementById('sub_cate4')
const sub5 = document.getElementById('sub_cate5')
const sub6 = document.getElementById('sub_cate6')

const main_ul = document.querySelector(".category ul")

function no1(){
    sub1.classList.add("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.add("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function no2(){
    sub1.classList.remove("active");
    sub2.classList.add("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.add("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function no3(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.add("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.add("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function no4(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.add("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.add("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function no5(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.add("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.add("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function no6(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.add("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.add("active");
    main7.classList.remove("active");
}
function no7(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.add("active");
}
function noActive(){
    sub1.classList.remove("active");
    sub2.classList.remove("active");
    sub3.classList.remove("active");
    sub4.classList.remove("active");
    sub5.classList.remove("active");
    sub6.classList.remove("active");

    main1.classList.remove("active");
    main2.classList.remove("active");
    main3.classList.remove("active");
    main4.classList.remove("active");
    main5.classList.remove("active");
    main6.classList.remove("active");
    main7.classList.remove("active");
}
function leave7(){
    main7.classList.remove("active");
}

main1.addEventListener('mouseenter', no1);
main2.addEventListener('mouseenter', no2);
main3.addEventListener('mouseenter', no3);
main4.addEventListener('mouseenter', no4);
main5.addEventListener('mouseenter', no5);
main6.addEventListener('mouseenter', no6);
main7.addEventListener('mouseenter', no7);
main7.addEventListener('mouseleave', leave7);
header.addEventListener('mouseleave', noActive);
l_header.addEventListener('mouseenter', noActive);
r_header.addEventListener('mouseenter', noActive);
