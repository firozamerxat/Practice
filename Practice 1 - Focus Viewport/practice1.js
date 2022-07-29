const container=document.querySelector('.container');
const imgs=document.querySelectorAll ('.container img');


container.addEventListener('mousemove', function(e){
    let percent=e.clientX/Window.outerWide;
    let offset=10*percent;
    let blur=20;

    imgs.forEach((img,index)=>{
        offset*=1.3;
        let blurValue=Math.pow(index/imgs.length-percent, 2)*blur;
        img.style.setProperty('--offset',offset+'px');
        img.style.setProperty('--blur',blurValue+'px');
    })
})