let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity=1;
            box.target.style.transform = "translateY(0%)"
        }
        else{
            box.target.style.opacity=0;
        }
    })
})
let item = document.querySelectorAll(".showBox")
observer.observe(item[0])
observer.observe(item[1])
observer.observe(item[2])
observer.observe(item[3])
observer.observe(item[4])
observer.observe(item[5])
observer.observe(item[6])
observer.observe(item[7])
observer.observe(item[8])
observer.observe(item[9])
observer.observe(item[10])
observer.observe(item[11])
observer.observe(item[12])
observer.observe(item[13])
observer.observe(item[14])
observer.observe(item[15])
observer.observe(item[16])
observer.observe(item[17])
observer.observe(item[18])
observer.observe(item[19])
observer.observe(item[20])
observer.observe(item[21])
observer.observe(item[22])
observer.observe(item[23])
observer.observe(item[24])