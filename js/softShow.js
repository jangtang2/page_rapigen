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