import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        this.patch= "./productos.txt";
        this.products =[]
    }

    static id= 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products))
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
       return console.log(respuesta2)
    }

    getProductsByID = async (id) => {
        let respuesta3 = await this.readProducts();
        if (!respuesta3.find((product) => product.id === id)) {
            //console.log("Producto no encontrado");
        } else {
            console.log(respuesta3.find((product) => product.id ===id));
        }
        };
    
    deleteProductById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id !=id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        //console.log("Producto eliminado")
    };

    updateProducts = async ({id, ...producto}) =>{     
        await this.deleteProductById(id);
        let productold = await this.readProducts()
        let productsModif = [{ ...producto, id}, ...productold];
        await fs.writeFile(this.patch, JSON.stringify(productsModif));
        console.log("Producto actualizado")         
    };



}

const productos = new ProductManager

/*productos.addProduct("Titulo1", "Description1", 1000, "image1", "abc123", 10)
productos.addProduct("Titulo2", "Description2", 2000, "image2", "abc1234", 100)
productos.addProduct("Titulo3", "Description3", 3000, "image3", "abc12345", 1000); */

//productos.getProducts()

//productos.getProductsByID(2)

//productos.deleteProductById(2)

productos.updateProducts({
            title: "Titulo2",
            description: "Description2",
            price: 100000000000000,
            thumbnail: "image2",
            code: "abc1234",
            stock: 100,
            id: 2
})
