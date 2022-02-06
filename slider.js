

export default class Slider{
    constructor(slider, images){
        this.slider = slider;
        this.images = images;
        this.prev = document.querySelector('.prev');
        this.next = document.querySelector('.next');
        this.container = document.getElementsByClassName('conteiner_image_1');
        this.current = 0;
        
        
    
        let html='';


        for (let i = 0; i < this.images.length; i++) {
            const element = this.images[i];
            html += element.generate();
        }
        this.slider.innerHTML = html;
        this.slider.innerHTML= html + `<div id="square" class="square">1/3</div>`

        //console.log(this.slider, this.images);
        
        this.container[0].style.display="block";
        
    }

    

    addPrevEvent(){
        this.prev.addEventListener('click', ()=>{

           
  
            let immaginePrev = document.getElementById(this.current);
            immaginePrev.style.display = "none";
            if(this.current==0){
              this.current=2;
              
            }else{
              this.current= this.current-1;
              
            }
            document.getElementById('square').innerHTML= this.current +1+ "/3";
            let immagineNew = document.getElementById(this.current);
            immagineNew.style.display ="block";
            let string ="Prev slide\nCurrent slide: "+ this.current;
            console.log(string)
          
          })
    }

    addNextEvent(){
        this.next.addEventListener('click', ()=>{

            
 
            let immaginePrev = document.getElementById(this.current);
            immaginePrev.style.display = "none";
            this.current=(this.current + 1)%3;
            document.getElementById('square').innerHTML= this.current +1+ "/3";
            let immagineNew = document.getElementById(this.current);
            immagineNew.style.display ="block";
          
            let string ="Next slide\nCurrent slide: "+ this.current;
            console.log(string)
          
          })
    }
    


    
}