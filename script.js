let highestZ = 1;




class Paper{

    holdingpaper = false;
    
    preMouseX = 0;
    preMouseY = 0;


    moueX = 0;
    moueY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init(paper){

        paper.addEventListener('mousedown', (e) =>{

         this.holdingpaper = true;

         paper.style.zIndex = highestZ;
         highestZ+= 1;

         if ( e.button === 0) {
            this.preMouseX = this.moueX;
            this.preMouseY = this.moueY;

            console.log (this.preMouseX);
            console.log (this.preMouseY)
         }

        })


        document.addEventListener('mousemove' ,(e) =>{
           

            this.moueX = e.clientX;
            this.moueY = e.clientY;

            this.velocityX = this.moueX - this.preMouseX ;
            this.velocityY = this.moueY - this.preMouseY ;

            if (this.holdingpaper){

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;


                this.preMouseX = this.moueX;
                this.preMouseY = this.moueY;


               
                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px`;
                

            }


        })

        window.addEventListener('mouseup' , (e) =>{
            console.log('mouse button is relesed');
            this.holdingpaper = false;
        })
    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach( paper =>{
    const p = new Paper();
    p.init(paper);
})