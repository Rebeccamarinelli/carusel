

export class Slide{
    constructor(img, caption, number){
        this.img = img;
        this.caption = caption;
        this.number = number;
       
    }

    generate(){
        const html = `
        <div id="${this.number}" class="conteiner_image_1" style=" background-image:url('${this.img}')">
           <div class="cont_p"><p class="text">${this.caption}</p></div> 
        </div>
        `;
        return html;
    }

    
}

