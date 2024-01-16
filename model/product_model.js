

const Firestore = require('../db/firebase').firestoreDb;
const dbRef = Firestore.collection('probando');

class Product {
    constructor(
        type_product,
        sku_product,
        name_product,
        published_product,
        featured_product,
        short_description_product,
        day_start_reduced_product,
        day_finish_reduced_product,
        tax_status_product,
        tax_class_product,
        is_inventary,
        inventary_product,
        inventary_shortage_product,
        allow_backorders,
        sold_individually,
        weight_product,
        length_product,
        width_product,
        heigth_product,
        allow_costumer_reviews,
        sales_receipt,
        discounted_product,
        price_product,
        tag_product

    ){

          this.type_product =  type_product,
          this.sku_product =  sku_product,
          this.name =  name_product,
          this.published =  published_product,
          this.featured_product =  featured_product,
          this.short_description_product =  short_description_product,
          this.day_start_reduced_product =  day_start_reduced_product,
          this.day_finish_reduced_product =  day_finish_reduced_product,
          this.tax_status_product =  tax_status_product,
          this.tax_class_product =  tax_class_product,
          this.is_inventary =  is_inventary,
          this.inventary_product =  inventary_product,
          this.inventary_shortage_product =  inventary_shortage_product,
          this.allow_backorders =  allow_backorders,
          this.sold_individually =  sold_individually,
          this.weight_product =  weight_product,
          this.length_product =  length_product,
          this.weight_product =  width_product,
          this.heigth_product =  heigth_product,
          this.allow_backorders =  allow_costumer_reviews,
          this.sales_receipt =  sales_receipt,
          this.discounted_product =  discounted_product,
          this.price_product =  price_product,
          this.tag_product =  tag_product


    }
   static async searchProductIfExist(codeProduct){

    //SEACH UNIQUE PRODUCT BY CODE
    const getProductByCode = dbRef.doc(`${codeProduct}`);
    return await getProductByCode.get()

   }

   static async saveProductoDb(product, code){
     
    //SAVE PRODUCT IN DB WITH ID CUSTOMIZED
      const refCustomized = dbRef.doc(`${code}`);
      return await refCustomized.set(product)
    
   };


   saveProductsToDb(products){};
   deleteProductFromDb(codeProduct){};
   deleteProductsFromDb(codeProducts){}
   updateProductToDb(codeProduct){};
   getProductsFromDb(codeProducts){};
   getProductFromDb(codeProduct){};
};

module.exports = Product