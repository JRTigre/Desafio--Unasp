class myCard extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const cardProduct =document.createElement("div");
        cardProduct.setAttribute("class", "Card_product")
       
        const photo = document.createElement("div");
        photo.setAttribute("Id" , "Img-product")
        photo.setAttribute("class","Photo_product");
        const product = document.createElement("img");
        product.src= this.getAttribute("photos");
       
        photo.appendChild(product);
        

        const iten = document.createElement("div");
        iten.setAttribute("class","iten_product");
        const title=document.createElement("h2");
        title.setAttribute("class", "name");
        title.textContent= this.getAttribute("title");
        const perfil =document.createElement("p");
        perfil.setAttribute("class", "discription");
        perfil.textContent= this.getAttribute("perfil");
        
        const valor = document.createElement("div");
        valor.setAttribute("class","box_price");
        const price =document.createElement("p");
        price.setAttribute("class", "price", );
        price.textContent= this.getAttribute("price"),

        iten.appendChild(title);
        iten.appendChild(perfil);
        iten.appendChild(valor);
        valor.appendChild(price);

        
        cardProduct.appendChild(photo);
        cardProduct.appendChild(iten);


        return cardProduct;
    };
    styles(){
        const style= document.createElement("style");
        style.textContent =
        `
          *{
            font-family: "Roboto Condensed", sans-serif;
            font-optical-sizing: auto;
            font-weight: <weight>;
           font-style: normal;}
           
          img{
            display: flex;
            width: 140px;
            height: 140px;
            border-radius: 8px 0px 8px 0px;
          }
         
          .Card_product{
            display: flex;
            width: 345px;
            height: 150px;
            border-radius: 11px;
           
          }
          .iten_product{
            display: inline-block;
            width: 340px;
            height: 130px;
           text-align: center;
           background: #F0E68C;
            border: 2px solid  rgba(254,182,69,1);
           border-radius: 15px 0px 15px 0px;
           margin-top:8px;
          }
        .name{
          font-size: 15px;
          margin: 5px;
          
        font-family: "Work Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
       font-style: normal;
}
        }
        .discription{
      
        padding: 1px;
        font-family: "Work Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
       font-style: normal;
        
        }
        
        
        .price{

          margin-top: 5px;
          color:#008000;
          font-weight: bold;
        
        }

        `;
        return style;
    };
}
customElements.define ( "my-card", myCard)