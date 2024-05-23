class myCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const cardProduct = document.createElement("div");
    cardProduct.setAttribute("class", "Card_product")

    const photo = document.createElement("div");
    photo.setAttribute("Id", "Img-product")
    photo.setAttribute("class", "Photo_product");
    const product = document.createElement("img");
    product.src = this.getAttribute("photos");

    photo.appendChild(product);


    const iten = document.createElement("div");
    iten.setAttribute("class", "iten_product");
    const title = document.createElement("h2");
    title.setAttribute("class", "name");
    title.textContent = this.getAttribute("title");
    const perfil = document.createElement("p");
    perfil.setAttribute("class", "write");
    perfil.textContent = this.getAttribute("perfil");

    const valor = document.createElement("div");
    valor.setAttribute("class", "box_price");
    const price = document.createElement("p");
    price.setAttribute("class", "price",);
    price.textContent = this.getAttribute("price"),

    iten.appendChild(title);
    iten.appendChild(perfil);
    iten.appendChild(valor);
    valor.appendChild(price);


    cardProduct.appendChild(photo);
    cardProduct.appendChild(iten);


    return cardProduct;
  };
  styles() {
    const style = document.createElement("style");
    style.textContent =
      `
          *{
            font-family: "Roboto Condensed", sans-serif;
            font-optical-sizing: auto;
            font-weight: <weight>;
           font-style: normal;}
           
          img{
            display: flex;
            width: 130px;
            height: 130px;
            margin-top:6px;
            border-radius: 10px 0px 0px 10px;
            box-shadow: 0px 0px 8px white;
          }
         
          .Card_product{
            display: flex;
            width: 340px;
            height: 160px;
            border-radius: 11px;
            margin-left:7px;
            
          
           
          }
          .iten_product{
           display: inline-block;
           width: 340px;
           height: 130px;
           /*text-align: center;*/
           background: linear-gradient(10deg,rgba(0,212,255,1) 0%,rgba(2,0,36,1)  100%);
           box-shadow: 0px 0px 8px white;
           border-radius: 0px 10px 10px 0px;
           margin-top:6px;
          }
        .name{
          font-size: 18px;
          margin: 5px;   
          font-family: "Work Sans", sans-serif;
          font-optical-sizing: auto;
          font-weight: bold;
         font-style: normal;
         color:gold;
         text-shadow: 0px 0px 2px black;
        }
        
        
        .write{
          margin-top:1px;
          margin-left:5px;
          color:white;
          text-shadow: 0px 0px 6px black;
      
        
        
        }
        
        
        .price{

          margin-top:-5px;
          margin-left:5px;
          color:#000;
          
          font-size:20px;
        
        }

        `;
    return style;
  };
}
customElements.define("my-card", myCard)