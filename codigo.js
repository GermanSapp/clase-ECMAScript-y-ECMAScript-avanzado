class Product{

  static id=0;

  constructor(titulo, descripcion,precio,imagen,codigo,stock){
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.codigo = codigo;
      this.stock = stock;
      this.id = Product.id++;

}

};


  class ProductManager{

      constructor(){

      this.products = new Array()

}

  addProduct = (product)=>{

      if(this.products.some(p => p.codigo === product.codigo)) 
          return "Error: este codigo esta repetido";
          this.products.push(product);

}

  getProducts = () => {

      return this.products;

}


  getProductById(id) {

  if(this.products.some(p => p.id===id)){
      return Product;
  }else{
      error('No existe el producto');
  }

}

};


const gestor = ProductManager();
gestor.addProduct();

/*let product = new Product();
console.log(product)
console.log(product.getProducts());
product.addProduct('Mouse', 'Mouse inalambrico', '500', 'No Img','M256',true );
console.log(product.getProductById());