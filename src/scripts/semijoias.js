const { Medusa } = require("@medusajs/medusa");
const medusa = new Medusa({ baseUrl: "http://localhost:9000", maxRetries: 3 });

(async () => {
  try {
    console.log("Limpando produtos existentes...");
    const existingProducts = await medusa.admin.products.list();
    for (const product of existingProducts.products) {
      await medusa.admin.products.delete(product.id);
    }
    console.log("Produtos antigos removidos.");

    const products = [
      {
        title: "542936 Pingente Rommanel folheado a ouro borboleta em acrílico",
        description: "PINGENTE FORMATO BORBOLETA COM ACRÍLICO BRANCO BRILHANTE. MED. 1,7 CM X 1,2 CM.",
        price: 152,
        category: "Pingentes",
        thumbnail: "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20borboleta%2001.jpg",
        images: [
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20borboleta%2002.jpg",
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20borboleta%2003.jpg"
        ],
        material: "Acrílico branco brilhante",
        finish: "Folheado a ouro",
        dimensions: "1,7 CM X 1,2 CM",
        gender: "Feminino",
        inventory_quantity: 15,
        sku: "542936",
        handle: "pingente-borboleta-acrilico-branco"
      },
      {
        title: "840187 Pingente Rommanel de prata coração bojudo",
        description: "PINGENTE FORMATO CORAÇÃO BOJUDO COM TRABALHO VAZADO NA FRENTE E VERSO LISO. MED. 2,1 CM X 1,5 CM.",
        price: 217,
        category: "Pingentes",
        thumbnail: "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20cora%C3%A7%C3%A3o%20bojudo%20prata%2001.jpg",
        images: [
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20cora%C3%A7%C3%A3o%20bojudo%20prata%2002.jpg",
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pingente%20cora%C3%A7%C3%A3o%20bojudo%20prata%2003.jpg"
        ],
        material: "Prata",
        finish: "Trabalho vazado na frente e verso liso",
        dimensions: "2,1 CM X 1,5 CM",
        gender: "Feminino",
        inventory_quantity: 15,
        sku: "840187",
        handle: "pingente-coracao-bojudo-prata"
      },
      {
        title: "551674 Pulseira Rommanel amor folheada a ouro",
        description: "Pulseira formada por fio de elos intercalados, composto por pingente formato coração vazado. med. 19 cm ajustável a 18 cm.",
        price: 222,
        category: "Pulseiras",
        thumbnail: "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pulseira-amor%2001.jpg",
        images: [
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pulseira-amor%2002.jpg",
          "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pulseira-amor%2003.jpg"
        ],
        material: "Folheada a ouro",
        finish: "",
        dimensions: "med. 19 cm ajustável a 18 cm",
        gender: "Feminino",
        inventory_quantity: 15,
        sku: "551674",
        handle: "pulseira-amor-folheada-ouro"
      },
      {
        title: "551413 Pulseira Rommanel folheada a ouro olho grego",
        description: "Pulseira formada por peças trabalhadas vazadas com 'olho grego' no centro. med. 19 cm.",
        price: 270,
        category: "Pulseiras",
        thumbnail: "https://ricmenol-starter.nyc3.cdn.digitaloceanspaces.com/pulseira-olho-grego.jpg",
        images: [],
        material: "Folheada a ouro",
        finish: "BORBOLETA ESTILIZADA. Para evitar falsificações, todas joias Rommanel recebem a identificação da logo da empresa, uma “borboleta estilizada”, podendo ser em alto relevo, baixo relevo ou vazada, e está presente nas tarraxas dos brincos, na parte interna dos anéis e contra argolas das correntes e pingentes.",
        dimensions: "med. 19 cm",
        gender: "Feminino",
        inventory_quantity: 15,
        sku: "551413",
        handle: "pulseira-olho-grego-folheada-ouro"
      }
    ];

    for (const product of products) {
      await medusa.admin.products.create({
        title: product.title,
        description: product.description,
        handle: product.handle,
        images: product.images,
        thumbnail: product.thumbnail,
        variants: [
          {
            title: "Padrão",
            sku: product.sku,
            prices: [
              {
                amount: product.price,
                currency_code: "brl"
              }
            ],
            inventory_quantity: product.inventory_quantity,
            manage_inventory: true
          }
        ],
        options: [],
        categories: [product.category],
        metadata: {
          material: product.material,
          finish: product.finish,
          dimensions: product.dimensions,
          gender: product.gender
        }
      });
    }

    console.log("Produtos importados com sucesso!");
  } catch (error) {
    console.error("Erro ao importar produtos:", error);
  }
})();
