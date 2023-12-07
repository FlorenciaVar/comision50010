class Productmanager {
    constructor(){
        this.products = []; 
    }

static id = 0;

addProduct(title, description, price, image, code, stock) {
    for(let i = 0; i < this.products.length;i++){
        if (this.products[i].code === code) {
           console.log(`el código ${code} está repetido`);
           break;
        }
    }
    
    const newProduct ={
        title, 
        description, 
        price, 
        image, 
        code, 
        stock,        
    }

    if(!Object.values(newProduct).includes(undefined)){
        Productmanager.id++;
        this.products.push({
            ...newProduct,
            id: Productmanager.id,            
        });
    }else{
        console.log("Todos los campos son requeridos")
    }
    Productmanager.id++
    this.products.push({ 
        title, 
        description, 
        price, 
        image, 
        code, 
        stock, 
        id:Productmanager.id,
    });
}

getProduct() {
    return this.products;
}

existe (id) {
    return this.products.find((product) => product.id === id);
}
getProductById(id){
    !this.existe(id) ? console.log("Not found") : console.log(this.existe(id));
    }
}


const products = new Productmanager();
//primer llamada = arreglo vacío
console.log(products.getProduct());

//Agregamos productos
products.addProduct("titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
products.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abc124", 5);

//Segunda llamada = arreglo con productos
console.log(products.getProduct());

//Validación de code repetido
products.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abc124", 5);

//Validación de campos requeridos
products.addProduct("titulo2", "descripcion2", 1000, "imagen2");

//Búsqueda de producto por ID
products.getProductById(2)

//Búsqueda de producto por ID no encontrado
products.getProductById(10)





