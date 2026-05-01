// ============================================================
// IMPÉRIO LANCHES & PIZZARIA — App Principal
// ============================================================

// ── Categorias ──
const CATEGORIES = [
  { id: "todos",                  name: "Todos",            icon: "🏠" },
  { id: "massas",                 name: "Massas",           icon: "🌾" },
  { id: "pasteis-salgados",       name: "Pastéis Salgados", icon: "🥟" },
  { id: "pasteis-doces",          name: "Pastéis Doces",    icon: "🍫" },
  { id: "hamburgueres",           name: "Hambúrgueres",     icon: "🍔" },
  { id: "hamburgueres-artesanal", name: "Artesanal",        icon: "🔥" },
  { id: "tapioca",                name: "Tapioca",          icon: "🫓" },
  { id: "cuscuz",                 name: "Cuscuz",           icon: "🌽" },
  { id: "cachorro-quente",        name: "Cachorro-Quente",  icon: "🌭" },
  { id: "petiscos",               name: "Petiscos",         icon: "🍟" },
  { id: "pizzas",                 name: "Pizzas Salgadas",  icon: "🍕" },
  { id: "pizzas-doces",           name: "Pizzas Doces",     icon: "🍰" },
  { id: "milkshake",              name: "Milk Shake",       icon: "🥤" },
  { id: "sorvete",                name: "Sorvete",          icon: "🍦" },
  { id: "acai",                   name: "Açaí",             icon: "🫐" },
  { id: "bebidas",                name: "Bebidas",          icon: "🧃" },
  { id: "sucos",                  name: "Sucos",            icon: "🍊" },
  { id: "adicionais",             name: "Adicionais",       icon: "➕" },
];

// ── Modificadores reutilizáveis ──
const PIZZA_SIZES = [
  { name: "Média",   price: 0 },
  { name: "Grande",  price: 10 },
  { name: "Gigante", price: 20 },
];

const ACAI_CREMES = [
  "Açaí", "Avelã", "Cupuaçu", "Ninho", "Açaí com banana",
  "Ninho trufado", "Oreo", "Ovomaltine", "Tapioca",
].map(n => ({ name: n, price: 0 }));

const ACAI_COBERTURAS = [
  "Nenhuma", "Leite condensado", "Chocolate", "Morango",
].map(n => ({ name: n, price: 0 }));

const acaiModifiers = (qtd) => [
  { name: `Creme (escolha ${qtd})`, required: true,  options: ACAI_CREMES },
  { name: "Cobertura",              required: false, options: ACAI_COBERTURAS },
];

const pizzaModifier = { name: "Tamanho", required: true, options: PIZZA_SIZES };

const queijoCheddarModifier = {
  name: "Escolha o queijo", required: true,
  options: [{ name: "Catupiry", price: 0 }, { name: "Cheddar", price: 0 }],
};

const comQueijo = {
  name: "Com queijo?", required: false,
  options: [{ name: "Sem queijo", price: 0 }, { name: "Com queijo", price: 0 }],
};

// ── Cardápio completo ──
const MENU = [
  // MASSAS
  { id:1,  category:"massas", name:"Cebola e Salsa",      description:"Massa gourmet temperada com cebola e salsa fresca",                                     price:3,   image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",  badge:null,         modifiers:[] },
  { id:2,  category:"massas", name:"Bacon",               description:"Massa gourmet com bacon crocante",                                                       price:3,   image:"https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",  badge:null,         modifiers:[] },
  { id:3,  category:"massas", name:"Queijo",              description:"Massa gourmet sabor queijo",                                                             price:3,   image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",  badge:null,         modifiers:[] },

  // PASTÉIS SALGADOS
  { id:4,  category:"pasteis-salgados", name:"Três Queijos",                   description:"Queijo mussarela, queijo coalho e catupiry",                                                   price:7,   image:"https://images.unsplash.com/photo-1548340748-6af6f4c4e0b2?w=400&q=80", badge:"MAIS PEDIDO", modifiers:[] },
  { id:5,  category:"pasteis-salgados", name:"Frango com Queijo",              description:"Frango desfiado e queijo mussarela",                                                           price:8,   image:"https://images.unsplash.com/photo-1542834369-f10ebf06d3e5?w=400&q=80", badge:null,          modifiers:[] },
  { id:6,  category:"pasteis-salgados", name:"Pizza",                          description:"Queijo mussarela, presunto, tomate e orégano",                                                 price:8,   image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,         modifiers:[] },
  { id:7,  category:"pasteis-salgados", name:"Frango com Catupiry ou Cheddar", description:"Frango desfiado com catupiry ou cheddar",                                                      price:9,   image:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=400&q=80", badge:null,         modifiers:[queijoCheddarModifier] },
  { id:8,  category:"pasteis-salgados", name:"Frango com Bacon",               description:"Frango, queijo mussarela e bacon",                                                             price:9,   image:"https://images.unsplash.com/photo-1620374645498-af6bd680a0a9?w=400&q=80", badge:null,         modifiers:[] },
  { id:9,  category:"pasteis-salgados", name:"Carne com Catupiry ou Cheddar",  description:"Carne com catupiry ou cheddar",                                                               price:10,  image:"https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&q=80", badge:null,         modifiers:[queijoCheddarModifier] },
  { id:10, category:"pasteis-salgados", name:"Calabresa",                      description:"Calabresa e queijo mussarela",                                                                price:10,  image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", badge:null,         modifiers:[] },
  { id:11, category:"pasteis-salgados", name:"Carne com Queijo",               description:"Carne e queijo mussarela",                                                                    price:10,  image:"https://images.unsplash.com/photo-1619740455153-9df9e3de6c98?w=400&q=80", badge:null,         modifiers:[] },
  { id:12, category:"pasteis-salgados", name:"Carne de Sol na Nata",           description:"Carne na nata e queijo coalho",                                                               price:12,  image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", badge:"ESPECIAL",    modifiers:[] },
  { id:13, category:"pasteis-salgados", name:"Moda da Casa",                   description:"Frango, carne, calabresa, bacon e queijo mussarela",                                          price:13,  image:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80", badge:"RECOMENDADO", modifiers:[] },
  { id:14, category:"pasteis-salgados", name:"Sertanejo",                      description:"Carne desfiada, queijo coalho, coentro e cebola roxa",                                        price:13,  image:"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80", badge:"NOVO",        modifiers:[] },

  // PASTÉIS DOCES
  { id:15, category:"pasteis-doces", name:"Chocolate ao Leite",    description:"Chocolate ao leite. Com ou sem queijo.",   price:10, image:"https://images.unsplash.com/photo-1511381939415-e44cd37af4fa?w=400&q=80", badge:null,   modifiers:[comQueijo] },
  { id:16, category:"pasteis-doces", name:"Chocolate Meio Amargo", description:"Chocolate meio amargo. Com ou sem queijo.", price:10, image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80", badge:null,   modifiers:[comQueijo] },
  { id:17, category:"pasteis-doces", name:"Romeu e Julieta",       description:"Goiabada e queijo coalho",                  price:10, image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80", badge:null,   modifiers:[] },
  { id:18, category:"pasteis-doces", name:"Churros",               description:"Doce de leite, canela e açúcar",            price:10, image:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80", badge:"DOCE", modifiers:[] },

  // HAMBÚRGUERES
  { id:19, category:"hamburgueres", name:"X-Burg",                description:"Pão, hambúrguer, queijo e presunto",                                                                                          price:7,  image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", badge:null,         modifiers:[] },
  { id:20, category:"hamburgueres", name:"Bauru",                 description:"Pão, hambúrguer, alface, tomate, ovo, queijo e presunto",                                                                      price:8,  image:"https://images.unsplash.com/photo-1568901346375-23c9450f85934?w=400&q=80", badge:null,         modifiers:[] },
  { id:21, category:"hamburgueres", name:"X-Bacon",               description:"Pão, bacon, hambúrguer, ovo, queijo, presunto, alface e tomate",                                                               price:10, image:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80", badge:"MAIS PEDIDO", modifiers:[] },
  { id:22, category:"hamburgueres", name:"X-Calabresa",           description:"Pão, calabresa acebolada, hambúrguer, queijo mussarela, alface e tomate",                                                      price:10, image:"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400&q=80", badge:null,         modifiers:[] },
  { id:23, category:"hamburgueres", name:"X-Tudo",                description:"Pão, hambúrguer, ovo, bacon, salsicha, frango, presunto, queijo, alface e tomate",                                             price:12, image:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80", badge:"FAVORITO",   modifiers:[] },
  { id:24, category:"hamburgueres", name:"X-Frango com Catupiry", description:"Pão, frango, catupiry, ovo, alface e tomate",                                                                                  price:12, image:"https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80", badge:null,         modifiers:[] },
  { id:25, category:"hamburgueres", name:"X-Carne de Sol",        description:"Pão, carne de sol na nata, ovo, queijo, alface e tomate",                                                                      price:13, image:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80", badge:"ESPECIAL",   modifiers:[] },
  { id:26, category:"hamburgueres", name:"Moda da Casa",          description:"Pão, hambúrguer duplo, ovo, presunto duplo, queijo duplo, bacon, frango, salsicha, catupiry, alface e tomate",                  price:15, image:"https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80", badge:"PREMIUM",    modifiers:[] },

  // ARTESANAL
  { id:27, category:"hamburgueres-artesanal", name:"X-Cheddar",    description:"Pão brioche, hambúrguer artesanal (100g), cheddar, bacon, cebola roxa e molho especial",              price:18, image:"https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80", badge:"ARTESANAL", modifiers:[] },
  { id:28, category:"hamburgueres-artesanal", name:"Duplo Cheddar", description:"Pão brioche, dois hambúrgueres artesanais (100g cada), cheddar, bacon, cebola roxa e molho especial", price:22, image:"https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80", badge:"PREMIUM",   modifiers:[] },

  // TAPIOCA
  { id:29, category:"tapioca", name:"Carne de Sol com Catupiry", description:"Tapioca recheada com carne de sol e catupiry",              price:8, image:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80", badge:null, modifiers:[] },
  { id:30, category:"tapioca", name:"Carne de Sol com Queijo",   description:"Tapioca recheada com carne de sol e queijo",               price:8, image:"https://images.unsplash.com/photo-1617196034099-30df21e23fd9?w=400&q=80", badge:null, modifiers:[] },
  { id:31, category:"tapioca", name:"Frango com Catupiry",       description:"Tapioca recheada com frango e catupiry",                   price:8, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", badge:null, modifiers:[] },
  { id:32, category:"tapioca", name:"Frango com Queijo",         description:"Tapioca recheada com frango e queijo",                     price:8, image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80", badge:null, modifiers:[] },
  { id:33, category:"tapioca", name:"Carne de Sol na Nata",      description:"Tapioca recheada com carne de sol na nata",                price:9, image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",   badge:null, modifiers:[] },
  { id:34, category:"tapioca", name:"Sertaneja",                 description:"Tapioca recheada com carne de sol, queijo coalho e coentro",price:9, image:"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80", badge:null, modifiers:[] },

  // CUSCUZ
  { id:35, category:"cuscuz", name:"Carne de Sol com Queijo", description:"Cuscuz recheado com carne de sol e queijo",  price:8, image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80", badge:null, modifiers:[] },
  { id:36, category:"cuscuz", name:"Frango com Queijo",       description:"Cuscuz recheado com frango e queijo",        price:8, image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80", badge:null, modifiers:[] },
  { id:37, category:"cuscuz", name:"Calabresa",               description:"Cuscuz recheado com calabresa e queijo",     price:8, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", badge:null, modifiers:[] },
  { id:38, category:"cuscuz", name:"Carne de Sol na Nata",    description:"Cuscuz recheado com carne de sol na nata",   price:9, image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",   badge:null, modifiers:[] },

  // CACHORRO-QUENTE
  { id:39, category:"cachorro-quente", name:"Tradicional",   description:"Pão, carne moída, salsicha, frango, batata palha, milho, ervilha e queijo ralado",        price:7, image:"https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=400&q=80", badge:null,      modifiers:[] },
  { id:40, category:"cachorro-quente", name:"Carne na Nata", description:"Pão, carne de sol na nata, salsicha, milho, ervilha, batata palha e queijo ralado",        price:9, image:"https://images.unsplash.com/photo-1583033269500-75f6db4a2266?w=400&q=80", badge:"ESPECIAL", modifiers:[] },

  // PETISCOS
  { id:41, category:"petiscos", name:"Batata Frita P",                       description:"Porção pequena de batata frita crocante",                price:10, image:"imagem/batata.jpg", badge:null,          modifiers:[] },
  { id:42, category:"petiscos", name:"Batata Frita G",                       description:"Porção grande de batata frita crocante",                 price:14, image:"imagem/batata.jpg", badge:null,          modifiers:[] },
  { id:43, category:"petiscos", name:"Batata Frita com Bacon e Cheddar",     description:"Batata frita com bacon crocante e cheddar cremoso",       price:20, image:"imagem/batata-bacon-chadar.jpg", badge:"MAIS PEDIDA", modifiers:[] },
  { id:44, category:"petiscos", name:"Batata Frita com Calabresa e Cheddar", description:"Batata frita com calabresa acebolada e cheddar cremoso",  price:20, image:"imagem/batata-calabresa-chadar.jpg", badge:null,          modifiers:[] },

  // MILK SHAKE
  { id:45, category:"milkshake", name:"Milk Shake 300ml", description:"Milk shake cremoso 300ml com chantilly", price:13, image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", badge:"FAVORITO",
    modifiers:[{ name:"Sabor", required:true, options:[
      {name:"Morango",price:0},{name:"Chocolate",price:0},{name:"Ovomaltine",price:0},{name:"Chocomenta",price:0}
    ]}]
  },

  // SORVETE
  { id:46, category:"sorvete", name:"Sorvete 1 Bola", description:"Sorvete 1 bola", price:3, image:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80", badge:null,
    modifiers:[{ name:"Sabor", required:true, options:[
      {name:"Morango",price:0},{name:"Chocolate",price:0},{name:"Chocomenta",price:0}
    ]}]
  },

  // PIZZAS SALGADAS
  { id:47, category:"pizzas", name:"Pizza Calabresa",           description:"Calabresa, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                               price:30, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:48, category:"pizzas", name:"Pizza Frango com Bacon",    description:"Frango desfiado, cebola, bacon, queijo mussarela, orégano, azeitona e molho de tomate",                  price:30, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:49, category:"pizzas", name:"Pizza Frango com Milho",    description:"Frango desfiado, cebola, milho verde, queijo mussarela, orégano, azeitona e molho de tomate",            price:30, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:50, category:"pizzas", name:"Pizza Frango com Catupiry", description:"Frango desfiado, catupiry, cebola, queijo mussarela, orégano, azeitona e molho de tomate",               price:30, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:51, category:"pizzas", name:"Pizza Frango com Cheddar",  description:"Frango desfiado, cheddar, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                price:30, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:52, category:"pizzas", name:"Pizza Frango com Queijo",   description:"Frango desfiado, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                         price:30, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:53, category:"pizzas", name:"Pizza Moda da Casa",        description:"Carne de sol desfiada, frango, calabresa, cebola, queijo mussarela, orégano, azeitona e molho de tomate",price:40, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:"ESPECIAL", modifiers:[pizzaModifier] },
  { id:54, category:"pizzas", name:"Pizza Carne com Catupiry",  description:"Carne desfiada, catupiry, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                price:35, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:55, category:"pizzas", name:"Pizza Carne de Sol",        description:"Carne de sol desfiada, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                   price:35, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:56, category:"pizzas", name:"Pizza Carne com Cheddar",   description:"Carne desfiada, cheddar, cebola, queijo mussarela, orégano, azeitona e molho de tomate",                 price:35, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },
  { id:57, category:"pizzas", name:"Pizza Sertaneja",           description:"Carne de sol desfiada, cebola, queijo coalho, queijo mussarela, orégano, azeitona e molho de tomate",    price:35, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge:null,      modifiers:[pizzaModifier] },

  // PIZZAS DOCES
  { id:58, category:"pizzas-doces", name:"Pizza Chocolate com Confetes", description:"Chocolate ao leite e confetes",               price:30, image:"imagem/pizzachocolatecf.jpg", badge:null, modifiers:[pizzaModifier] },
  { id:59, category:"pizzas-doces", name:"Pizza Chocolate com Amendoim", description:"Chocolate ao leite com amendoim triturado",   price:30, image:"imagem/pizzachocolateam.jpg", badge:null, modifiers:[pizzaModifier] },
  { id:60, category:"pizzas-doces", name:"Pizza Dois Amores",            description:"Chocolate ao leite e chocolate branco",        price:30, image:"imagem/pizzadoisamores.jpg", badge:null, modifiers:[pizzaModifier] },
  { id:61, category:"pizzas-doces", name:"Pizza Churros",                description:"Doce de leite, canela e açúcar",               price:30, image:"imagem/pizzachurros.jpg", badge:null, modifiers:[pizzaModifier] },

  // AÇAÍ
  { id:62, category:"acai", name:"Açaí 250ml",  description:"5 acompanhamentos à escolha.",  price:10, image:"imagem/açai.jpg", badge:null,      modifiers:acaiModifiers(5)  },
  { id:63, category:"acai", name:"Açaí 350ml",  description:"6 acompanhamentos à escolha.",  price:12, image:"imagem/açai.jpg", badge:null,      modifiers:acaiModifiers(6)  },
  { id:64, category:"acai", name:"Açaí 500ml",  description:"8 acompanhamentos à escolha.",  price:16, image:"imagem/açai.jpg", badge:null,      modifiers:acaiModifiers(8)  },
  { id:65, category:"acai", name:"Açaí 1 Litro",description:"10 acompanhamentos à escolha.", price:28, image:"imagem/açai.jpg", badge:"FAMÍLIA", modifiers:acaiModifiers(10) },

  // BEBIDAS
  { id:66, category:"bebidas", name:"Água Mineral",         description:"Água mineral sem gás 500ml",  price:2,   image:"imagem/aguamineral.webp",  badge:null, modifiers:[] },
  { id:67, category:"bebidas", name:"Água com Gás",         description:"Água mineral com gás 500ml",  price:3,   image:"imagem/aguacomgas.webp",  badge:null, modifiers:[] },
  { id:68, category:"bebidas", name:"Refrigerante Mini",    description:"Refrigerante mini",            price:2.5, image:"imagem/minirefri.jpg", badge:null, modifiers:[] },
  { id:69, category:"bebidas", name:"Cerveja",              description:"Cerveja long neck",            price:5,   image:"https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",  badge:null, modifiers:[] },
  { id:70, category:"bebidas", name:"Guaraná Lata",         description:"Guaraná em lata 350ml",       price:5,   image:"imagem/guaranalata.jpg", badge:null, modifiers:[] },
  { id:71, category:"bebidas", name:"Fanta Laranja Lata",   description:"Fanta laranja em lata 350ml", price:5,   image:"imagem/fantalaranja.webp", badge:null, modifiers:[] },
  { id:72, category:"bebidas", name:"Fanta Uva Lata",       description:"Fanta uva em lata 350ml",     price:5,   image:"imagem/fantauva.webp", badge:null, modifiers:[] },
  { id:73, category:"bebidas", name:"Pepsi Lata",           description:"Pepsi em lata 350ml",         price:5,   image:"imagem/pepsilata.webp", badge:null, modifiers:[] },
  { id:74, category:"bebidas", name:"Coca-Cola Lata",       description:"Coca-Cola em lata 350ml",     price:5,   image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", badge:null,
    modifiers:[{ name:"Opção", required:true, options:[{name:"Original",price:0},{name:"Zero",price:0}] }]
  },
  { id:75, category:"bebidas", name:"Fanta Laranja 1L",     description:"Fanta laranja 1 litro",       price:8,   image:"imagem/fantalaranja.webp", badge:null, modifiers:[] },
  { id:76, category:"bebidas", name:"Pepsi 1L",             description:"Pepsi 1 litro",               price:8,   image:"imagem/pepsi.jpg", badge:null, modifiers:[] },
  { id:77, category:"bebidas", name:"Guaraná 1L",           description:"Guaraná 1 litro",             price:8,   image:"imagem/guarana.webp", badge:null, modifiers:[] },
  { id:78, category:"bebidas", name:"Coca-Cola Original 1L",description:"Coca-Cola original 1 litro",  price:10,  image:"imagem/cocacola.webp", badge:null, modifiers:[] },
  { id:79, category:"bebidas", name:"Energético",           description:"Energético",                  price:12,  image:"https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80", badge:null, modifiers:[] },

  // SUCOS
  { id:80, category:"sucos", name:"Suco Natural", description:"Sabores: Goiaba, Acerola, Cajá, Caju, Maracujá, Mangaba, Uva, Graviola, Morango, Abacaxi com hortelã", price:4, image:"imagem/suco.jpg", badge:null,
    modifiers:[
      { name:"Base", required:true, options:[
        {name:"Água",price:0},{name:"Leite",price:1},{name:"Litro na água",price:11},{name:"Litro no leite",price:16}
      ]},
      { name:"Sabor", required:true, options:[
        "Goiaba","Acerola","Cajá","Caju","Maracujá","Mangaba","Uva","Graviola","Morango","Abacaxi com hortelã",
      ].map(n => ({name:n,price:0}))}
    ]
  },

  // ADICIONAIS
  { id:81, category:"adicionais", name:"Vinagrete",             description:"Adicional de vinagrete",               price:2, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:82, category:"adicionais", name:"Ovo",                   description:"Adicional de ovo",                     price:2, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:83, category:"adicionais", name:"Catupiry (requeijão)",  description:"Adicional de catupiry tipo requeijão",  price:2, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:84, category:"adicionais", name:"Cheddar (requeijão)",   description:"Adicional de cheddar tipo requeijão",   price:2, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:85, category:"adicionais", name:"Queijo Coalho",         description:"Adicional de queijo coalho",            price:3, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:86, category:"adicionais", name:"Catupiry (original)",   description:"Adicional de catupiry original",        price:4, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
  { id:87, category:"adicionais", name:"Cheddar (original)",    description:"Adicional de cheddar original",         price:4, image:"imagem/adicional.jpg", badge:null, modifiers:[] },
];

// ── Configuração ──
const CONFIG = {
  whatsapp: "5584994994919",
  pix:      "84994994919",
  pixName:  "EMANUEL",
  pixCity:  "NATAL",
  delivery: 5.0,
  storeName:"Império Lanches",
};

const HORARIO = {
  abertura:       "07:00",
  fechamento:     "21:00",
  fechadoDomingo: true,
};

// ── Imagem fallback ──
const FALLBACK_IMG = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80";

// ============================================================
// ESTADO
// ============================================================
let cart              = [];
let currentCategory   = "todos";
let modalProduct      = null;
let modalQty          = 1;
let selectedModifiers = {};
let checkoutStep      = 1;
let lojaAberta        = true;
let searchDebounce    = null;
let revealObserver    = null;
let toastTimer        = null;
let lastFocusedElement = null; // para restaurar foco ao fechar modais

// ============================================================
// ATALHOS DOM
// ============================================================
const $ = (id) => document.getElementById(id);

const setText = (id, val) => {
  const el = $(id);
  if (el) el.textContent = val;
};

const setHTML = (id, val) => {
  const el = $(id);
  if (el) el.innerHTML = val;
};

// ============================================================
// UTILITÁRIOS
// ============================================================
const fmt = (v) => `R$ ${v.toFixed(2).replace(".", ",")}`;

/** Retorna o subtotal do carrinho (sem entrega) */
function getSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity, 0);
}

/** Retorna o total com entrega */
function getTotal() {
  return getSubtotal() + CONFIG.delivery;
}

/** Handler unificado de erro de imagem */
function handleImgError(img) {
  if (!img.dataset.retried) {
    img.dataset.retried = "1";
    img.src = FALLBACK_IMG;
  }
}

// ============================================================
// HORÁRIO DE FUNCIONAMENTO
// ============================================================
function verificarHorario() {
  const agora = new Date();
  const dia = agora.getDay();
  const minAtual = agora.getHours() * 60 + agora.getMinutes();
  const [hA, mA] = HORARIO.abertura.split(":").map(Number);
  const [hF, mF] = HORARIO.fechamento.split(":").map(Number);

  let aberto = minAtual >= hA * 60 + mA && minAtual < hF * 60 + mF;
  if (HORARIO.fechadoDomingo && dia === 0) aberto = false;

  lojaAberta = aberto;

  const badge = $("status-loja");
  if (!badge) return;

  badge.className = "status-badge " + (aberto ? "aberto" : "fechado");
  const label = badge.querySelector("#status-label");
  if (label) label.textContent = aberto ? "Aberto agora" : "Fechado";

  document.body.classList.toggle("loja-fechada", !aberto);
}

// ============================================================
// PRELOADER
// ============================================================
window.addEventListener("load", () => {
  const preloader = $("preloader");
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add("hide");
    setTimeout(() => preloader.remove(), 600);
  }, 1600);
});

// ============================================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================================
function initScrollReveal() {
  if (revealObserver) revealObserver.disconnect();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Sem animação se o usuário preferiu reduzir movimento
    document.querySelectorAll(".product-card").forEach(c => c.classList.add("revealed"));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      const grid = card.closest(".products-grid");
      let delay = 0;
      if (grid) {
        const idx = Array.from(grid.children).indexOf(card);
        delay = Math.min(idx * 40, 280);
      }
      setTimeout(() => card.classList.add("revealed"), delay);
      revealObserver.unobserve(card);
    });
  }, { threshold: 0.03, rootMargin: "0px 0px 30px 0px" });

  document.querySelectorAll(".product-card:not(.revealed)").forEach(c => revealObserver.observe(c));
}

// ============================================================
// SCROLL
// ============================================================
function handleScroll() {
  const header = $("header");
  const btt = $("backToTop");
  if (header) header.classList.toggle("scrolled", window.scrollY > 50);
  if (btt) btt.classList.toggle("visible", window.scrollY > 400);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  verificarHorario();
  setInterval(verificarHorario, 60_000);

  renderCategories();
  renderMenu();
  loadCart();

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Máscara de telefone com limpeza de erro
  const phoneInput = $("customerPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      let v = this.value.replace(/\D/g, "").slice(0, 11);
      if      (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
      else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
      else if (v.length > 0) v = `(${v}`;
      this.value = v;
      clearInputError(this);
    });
  }

  // Limpa erro em todos os campos do step 1 ao digitar
  document.querySelectorAll("#step1 input").forEach(input => {
    input.addEventListener("input", () => clearInputError(input));
  });

  // Enter na barra flutuante do carrinho
  const cartBar = $("cartBar");
  if (cartBar) {
    cartBar.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCart(); }
    });
  }

  // Esc fecha tudo
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // Scroll reveal inicial
  requestAnimationFrame(() => requestAnimationFrame(initScrollReveal));
});

// ============================================================
// CATEGORIAS
// ============================================================
function renderCategories() {
  const nav = $("categoryNav");
  if (!nav) return;
  nav.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-link${cat.id === currentCategory ? " active" : ""}"
            onclick="filterCategory('${cat.id}', this)"
            role="tab"
            aria-selected="${cat.id === currentCategory}">
      ${cat.icon} ${cat.name}
    </button>`
  ).join("");
}

function filterCategory(id, el) {
  currentCategory = id;

  document.querySelectorAll(".cat-link").forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-selected", "false");
  });
  if (el) {
    el.classList.add("active");
    el.setAttribute("aria-selected", "true");
  }

  // Limpa busca ao trocar de categoria
  const inp = $("searchInput");
  if (inp?.value) {
    inp.value = "";
    $("searchClear")?.classList.remove("visible");
  }

  renderMenu();

  // Scroll suave até a seção da categoria
  if (id !== "todos") {
    setTimeout(() => {
      const target = $(`cat-${id}`);
      if (target) {
        const headerH = $("header")?.offsetHeight || 175;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  }
}

function scrollToCategory(id) {
  const btn = document.querySelector(`.cat-link[onclick*="'${id}'"]`);
  if (btn) {
    filterCategory(id, btn);
  } else {
    currentCategory = id;
    renderMenu();
    setTimeout(() => {
      const target = $(`cat-${id}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

// ============================================================
// RENDERIZAÇÃO DO MENU
// ============================================================
const ORDERED_CATS = CATEGORIES.map(c => c.id).filter(id => id !== "todos");

function groupItems(items) {
  const grouped = {};
  items.forEach(i => (grouped[i.category] ??= []).push(i));
  return grouped;
}

function renderGrouped(grouped) {
  return ORDERED_CATS
    .filter(id => grouped[id])
    .map(catId => {
      const cat = CATEGORIES.find(c => c.id === catId);
      return `
        <section class="category-section" id="cat-${catId}">
          <div class="section-header">
            <div class="section-icon">${cat?.icon ?? "🍽️"}</div>
            <h2 class="section-title">${cat?.name ?? catId}</h2>
          </div>
          <div class="products-grid">
            ${grouped[catId].map(renderCard).join("")}
          </div>
        </section>`;
    }).join("");
}

function renderMenu() {
  const container = $("menuContainer");
  if (!container) return;

  const items = currentCategory === "todos"
    ? MENU
    : MENU.filter(i => i.category === currentCategory);

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-search">
        <div class="empty-search-icon">🔍</div>
        <h3>Nenhum item encontrado</h3>
        <p>Tente buscar por outro termo</p>
      </div>`;
    return;
  }

  container.innerHTML = renderGrouped(groupItems(items));
  requestAnimationFrame(initScrollReveal);
}

function renderCard(p) {
  const priceStr = fmt(p.price);
  const hasModifiers = p.modifiers?.some(m => m.required);
  const quickAddAttr = hasModifiers
    ? `onclick="event.stopPropagation(); openProductModal(${p.id})"`
    : `onclick="event.stopPropagation(); quickAdd(${p.id})"`;
  const quickAddIcon = hasModifiers ? "fa-ellipsis-h" : "fa-plus";

  return `
    <div class="product-card" onclick="openProductModal(${p.id})">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="handleImgError(this)">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <span class="product-price">${priceStr}</span>
          <button class="btn-add-quick" aria-label="Adicionar ${p.name}" ${quickAddAttr}>
            <i class="fas ${quickAddIcon}"></i>
          </button>
        </div>
      </div>
    </div>`;
}

// ============================================================
// BUSCA
// ============================================================
function searchMenu() {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(doSearch, 200);
}

function doSearch() {
  const query = $("searchInput")?.value.toLowerCase().trim() ?? "";
  const clearBtn = $("searchClear");
  if (clearBtn) clearBtn.classList.toggle("visible", query.length > 0);

  const container = $("menuContainer");
  if (!container) return;

  if (!query) { renderMenu(); return; }

  const filtered = MENU.filter(i =>
    i.name.toLowerCase().includes(query) ||
    i.description.toLowerCase().includes(query) ||
    i.category.toLowerCase().includes(query)
  );

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-search">
        <div class="empty-search-icon">🔍</div>
        <h3>Nenhum resultado para "${escapeHTML(query)}"</h3>
        <p>Tente buscar por outro termo</p>
      </div>`;
    return;
  }

  container.innerHTML = renderGrouped(groupItems(filtered));
  requestAnimationFrame(initScrollReveal);
}

function clearSearch() {
  const input = $("searchInput");
  if (input) input.value = "";
  $("searchClear")?.classList.remove("visible");
  renderMenu();
  input?.focus();
}

/** Escapa HTML para prevenir XSS na busca */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// VERIFICAÇÃO DE LOJA FECHADA
// ============================================================
function isClosed() {
  if (!lojaAberta) {
    showToast("Fechado 🔒", "Estamos fechados no momento. Volte em breve!", "warn");
    return true;
  }
  return false;
}

// ============================================================
// MODAL DO PRODUTO
// ============================================================
function openProductModal(productId) {
  if (isClosed()) return;

  const p = MENU.find(i => i.id === productId);
  if (!p) return;

  // Salva o elemento que tinha foco para restaurar depois
  lastFocusedElement = document.activeElement;

  modalProduct = p;
  modalQty = 1;
  selectedModifiers = {};

  const modal = $("productModal");
  if (!modal) return;

  // Preenche dados
  const img = $("modalImg");
  img.src = p.image;
  img.alt = p.name;
  img.onload = null;
  img.onerror = () => handleImgError(img);

  const badge = $("modalBadge");
  if (badge) {
    badge.textContent = p.badge ?? "";
    badge.style.display = p.badge ? "block" : "none";
  }

  const cat = CATEGORIES.find(c => c.id === p.category);
  setText("modalCategory", cat?.name ?? "");
  setText("modalTitle", p.name);
  setText("modalDescription", p.description);
  setText("modalQty", modalQty);

  renderModifiers(p);
  updateModalPrice();

  // Abre o modal
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  $("overlay")?.classList.add("active");
  document.body.style.overflow = "hidden";

  // Foco no modal
  setTimeout(() => modal.querySelector(".modal-close")?.focus(), 100);
}

function closeProductModal() {
  const modal = $("productModal");
  if (!modal?.classList.contains("active")) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  tryCloseOverlay();
  document.body.style.overflow = "";

  // Restaura foco
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

function renderModifiers(p) {
  const container = $("modalModifiers");
  if (!container) return;

  if (!p.modifiers?.length) { container.innerHTML = ""; return; }

  container.innerHTML = p.modifiers.map((mod, mi) => `
    <div class="modifier-group" id="modGroup-${mi}">
      <div class="modifier-title">
        ${mod.required
          ? '<i class="fas fa-asterisk" style="color:var(--primary);font-size:8px;vertical-align:middle"></i> '
          : ""}
        ${escapeHTML(mod.name)}
        ${mod.required
          ? '<span style="font-size:9px;color:var(--text-muted);font-weight:400"> (obrigatório)</span>'
          : ""}
      </div>
      <div class="modifier-options">
        ${mod.options.map((opt, oi) => `
          <label class="modifier-option">
            <input type="radio" name="mod-${mi}" value="${oi}"
                   onchange="selectModifier(${mi},${oi},'${opt.name.replace(/'/g,"\\'")}',${opt.price})">
            <div class="option-content">
              <span class="option-name">${escapeHTML(opt.name)}</span>
              ${opt.price > 0 ? `<span class="option-price">+${fmt(opt.price)}</span>` : ""}
            </div>
          </label>`).join("")}
      </div>
    </div>`).join("");
}

function selectModifier(mi, oi, name, price) {
  selectedModifiers[mi] = [{ oi, name, price }];

  // Atualiza visual
  document.querySelectorAll(`input[name="mod-${mi}"]`).forEach((inp, idx) => {
    inp.closest(".modifier-option")?.classList.toggle("selected", idx === oi);
  });

  updateModalPrice();
}

function updateModalQty(delta) {
  modalQty = Math.max(1, Math.min(99, modalQty + delta));
  setText("modalQty", modalQty);
  updateModalPrice();
}

function updateModalPrice() {
  if (!modalProduct) return;
  const modTotal = calcModsTotal();
  const unit = modalProduct.price + modTotal;
  const total = unit * modalQty;
  setText("modalPrice", fmt(unit));
  setText("modalTotal", fmt(total));
}

function calcModsTotal() {
  return Object.values(selectedModifiers)
    .flat()
    .reduce((sum, m) => sum + m.price, 0);
}

function addToCartFromModal() {
  if (!modalProduct) return;

  // Valida modificadores obrigatórios
  for (let mi = 0; mi < modalProduct.modifiers.length; mi++) {
    const mod = modalProduct.modifiers[mi];
    if (mod.required && !selectedModifiers[mi]?.length) {
      showToast("Atenção ⚠️", `Selecione uma opção em: ${mod.name}`, "warn");
      $(`modGroup-${mi}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
  }

  const modsList = Object.values(selectedModifiers).flat().map(m => m.name);
  const modsTotal = calcModsTotal();
  const key = `${modalProduct.id}||${modsList.join(",")}`;
  const existing = cart.find(i => `${i.productId}||${i.modifiers.join(",")}` === key);

  if (existing) {
    existing.quantity += modalQty;
  } else {
    cart.push({
      productId:      modalProduct.id,
      name:           modalProduct.name,
      price:          modalProduct.price,
      image:          modalProduct.image,
      quantity:       modalQty,
      modifiers:      modsList,
      modifiersTotal: modsTotal,
    });
  }

  saveCart();
  updateCartUI();
  closeProductModal();
  showToast("Adicionado! 🎉", `${modalProduct.name} adicionado ao carrinho`);
}

// ============================================================
// ADIÇÃO RÁPIDA
// ============================================================
function quickAdd(productId) {
  if (isClosed()) return;

  const p = MENU.find(i => i.id === productId);
  if (!p) return;

  // Se tem modificador obrigatório, abre o modal
  if (p.modifiers?.some(m => m.required)) {
    openProductModal(productId);
    return;
  }

  const key = `${p.id}||`;
  const existing = cart.find(i => `${i.productId}||${i.modifiers.join(",")}` === key);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      productId:      p.id,
      name:           p.name,
      price:          p.price,
      image:          p.image,
      quantity:       1,
      modifiers:      [],
      modifiersTotal: 0,
    });
  }

  saveCart();
  updateCartUI();
  showToast("Adicionado! 🎉", `${p.name} adicionado ao carrinho`);
}

// ============================================================
// CARRINHO — UI
// ============================================================
function updateCartUI() {
  const totalQty = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = getSubtotal();
  const total = getTotal();

  // Badge no header
  const badge = $("cartBadge");
  if (badge) {
    badge.textContent = totalQty;
    // Animação pop
    badge.classList.remove("pop");
    void badge.offsetWidth; // forçar reflow
    badge.classList.add("pop");
  }

  // Barra flutuante
  setText("cartBarQty", totalQty);
  setText("cartBarTotal", fmt(total));
  const bar = $("cartBar");
  if (bar) bar.style.display = totalQty > 0 ? "flex" : "none";

  // Corpo da sidebar
  const empty  = $("cartEmpty");
  const items  = $("cartItems");
  const footer = $("cartFooter");

  if (!cart.length) {
    if (empty)  empty.style.display  = "block";
    if (items)  items.innerHTML      = "";
    if (footer) footer.style.display = "none";
  } else {
    if (empty) empty.style.display = "none";
    if (items) items.innerHTML = cart.map((item, idx) => renderCartItem(item, idx)).join("");
    if (footer) footer.style.display = "block";
  }

  setText("cartSubtotal", fmt(subtotal));
  setText("cartTotal", fmt(total));
}

function renderCartItem(item, idx) {
  const unitPrice = item.price + item.modifiersTotal;
  const totalPrice = unitPrice * item.quantity;
  const modsHTML = item.modifiers.length
    ? `<div class="cart-item-modifiers">${escapeHTML(item.modifiers.join(", "))}</div>`
    : "";

  return `
    <div class="cart-item">
      <img src="${item.image}" alt="${escapeHTML(item.name)}" class="cart-item-image"
           loading="lazy" onerror="handleImgError(this)">
      <div class="cart-item-info">
        <div class="cart-item-name">${escapeHTML(item.name)}</div>
        ${modsHTML}
        <div class="cart-item-price">${fmt(totalPrice)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" aria-label="Diminuir" onclick="changeQty(${idx},-1)">
            <i class="fas fa-minus"></i>
          </button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="qty-btn" aria-label="Aumentar" onclick="changeQty(${idx},1)">
            <i class="fas fa-plus"></i>
          </button>
          <button class="cart-item-remove" aria-label="Remover" onclick="removeItem(${idx})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function removeItem(idx) {
  if (!cart[idx]) return;
  const name = cart[idx].name;
  cart.splice(idx, 1);
  saveCart();
  updateCartUI();
  showToast("Removido 🗑️", `${name} removido do carrinho`);
}

function clearCart() {
  if (!cart.length) return;
  if (!confirm("Deseja limpar todos os itens da sacola?")) return;
  cart = [];
  saveCart();
  updateCartUI();
  showToast("Limpo 🗑️", "Todos os itens foram removidos");
}

// ============================================================
// CARRINHO — Persistência
// ============================================================
const CART_KEY = "imperio_cart_v2";

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  catch (e) { /* silencioso — storage cheio ou privado */ }
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validação básica dos dados salvos
      if (Array.isArray(parsed)) {
        cart = parsed.filter(item =>
          item && typeof item.productId === "number" &&
          typeof item.quantity === "number" && item.quantity > 0
        );
      }
    }
  } catch { cart = []; }
  updateCartUI();
}

// ============================================================
// CARRINHO — Toggle sidebar
// ============================================================
function toggleCart() {
  const sidebar = $("cartSidebar");
  const overlay = $("overlay");
  if (!sidebar) return;

  const isOpen = sidebar.classList.contains("active");

  if (isOpen) {
    sidebar.classList.remove("active");
    sidebar.setAttribute("aria-hidden", "true");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    lastFocusedElement = document.activeElement;
    sidebar.classList.add("active");
    sidebar.setAttribute("aria-hidden", "false");
    overlay?.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => sidebar.querySelector(".btn-close")?.focus(), 100);
  }
}

// ============================================================
// CHECKOUT
// ============================================================
function openCheckout() {
  if (!cart.length) {
    showToast("Carrinho vazio 🛒", "Adicione itens antes de finalizar", "warn");
    return;
  }
  if (isClosed()) return;

  // Fecha sidebar se aberta
  $("cartSidebar")?.classList.remove("active");
  $("cartSidebar")?.setAttribute("aria-hidden", "true");

  checkoutStep = 1;
  syncSteps();

  const modal = $("checkoutModal");
  modal?.classList.add("active");
  modal?.setAttribute("aria-hidden", "false");
  $("overlay")?.classList.add("active");
  document.body.style.overflow = "hidden";

  // Foco no primeiro campo
  setTimeout(() => $("customerName")?.focus(), 300);
}

function closeCheckout() {
  const modal = $("checkoutModal");
  if (!modal?.classList.contains("active")) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  tryCloseOverlay();
  document.body.style.overflow = "";
}

function goToStep(step) {
  // Valida step atual antes de avançar
  if (step > checkoutStep) {
    if (checkoutStep === 1 && !validateStep1()) return;
    if (checkoutStep === 2) { /* sem validação extra */ }
  }

  checkoutStep = step;
  syncSteps();

  if (step === 2) {
    updatePaymentValues();
    togglePaymentView();
    generatePix();
  }
  if (step === 3) {
    buildReview();
  }

  // Scroll do modal para o topo
  const body = document.querySelector(".checkout-body");
  if (body) body.scrollTop = 0;
}

function syncSteps() {
  document.querySelectorAll(".checkout-steps .step").forEach((el, i) => {
    const num = i + 1;
    el.classList.toggle("active", num === checkoutStep);
    el.classList.toggle("completed", num < checkoutStep);
  });
  document.querySelectorAll(".step-line").forEach((el, i) => {
    el.classList.toggle("completed", i + 1 < checkoutStep);
  });
  document.querySelectorAll(".checkout-step").forEach((el, i) => {
    el.classList.toggle("active", i + 1 === checkoutStep);
  });
}

// ============================================================
// VALIDAÇÃO DO STEP 1
// ============================================================
function getInputVal(id) {
  return $(id)?.value?.trim() ?? "";
}

function markInputError(id) {
  const input = $(id);
  if (input) {
    input.classList.add("input-error");
    input.focus();
  }
}

function clearInputError(input) {
  input?.classList.remove("input-error");
}

function validateStep1() {
  // Limpa erros anteriores
  document.querySelectorAll("#step1 .input-error").forEach(el => el.classList.remove("input-error"));

  const name  = getInputVal("customerName");
  const phone = getInputVal("customerPhone").replace(/\D/g, "");
  const str   = getInputVal("customerStreet");
  const num   = getInputVal("customerNumber");
  const neigh = getInputVal("customerNeighborhood");

  if (!name) {
    markInputError("customerName");
    showToast("Campo obrigatório ⚠️", "Informe seu nome completo", "warn");
    return false;
  }
  if (phone.length < 10 || phone.length > 11) {
    markInputError("customerPhone");
    showToast("Telefone inválido ⚠️", "Informe um WhatsApp válido com DDD", "warn");
    return false;
  }
  if (!str) {
    markInputError("customerStreet");
    showToast("Endereço incompleto ⚠️", "Informe o nome da rua", "warn");
    return false;
  }
  if (!num) {
    markInputError("customerNumber");
    showToast("Endereço incompleto ⚠️", "Informe o número", "warn");
    return false;
  }
  if (!neigh) {
    markInputError("customerNeighborhood");
    showToast("Endereço incompleto ⚠️", "Informe o bairro", "warn");
    return false;
  }

  return true;
}

// ============================================================
// PAGAMENTO — Step 2
// ============================================================
function getSelectedPayment() {
  return document.querySelector('input[name="payment"]:checked')?.value ?? "pix";
}

function togglePaymentView() {
  const type = getSelectedPayment();
  const pixSec  = $("pixSection");
  const cashSec = $("cashSection");
  if (pixSec)  pixSec.style.display  = type === "pix"      ? "block" : "none";
  if (cashSec) cashSec.style.display = type === "dinheiro" ? "block" : "none";
}

function toggleChangeField() {
  const val = document.querySelector('input[name="change"]:checked')?.value;
  $("changeField").style.display = val === "yes" ? "block" : "none";
}

function updatePaymentValues() {
  const v = fmt(getTotal());
  ["paymentTotalDisplay", "pixCardValue", "cartaoCardValue", "dinheiroCardValue"]
    .forEach(id => setText(id, v));
}

// ============================================================
// PIX — Geração
// ============================================================
function generatePix() {
  const total = getTotal();
  const fmtVal = fmt(total);

  setText("pixAmount", fmtVal);
  setText("pixKeyValue", fmtVal);

  const payload = buildPixPayload(CONFIG.pix, CONFIG.pixName, CONFIG.pixCity, total);
  const codeEl = $("pixCode");
  if (codeEl) codeEl.value = payload;

  // Gera QR Code via API
  const qrImg = $("pixQR");
  const loading = $("pixLoading");
  if (!qrImg || !loading) return;

  loading.style.display = "flex";
  loading.innerHTML = '<div class="spinner"></div><span>Gerando código...</span>';
  qrImg.style.display = "none";
  qrImg.removeAttribute("src");

  const encoded = encodeURIComponent(payload);
  const primary = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&ecc=M&margin=8&data=${encoded}`;
  const fallback = `https://quickchart.io/qr?size=200&margin=2&text=${encoded}`;

  qrImg.onload = () => {
    loading.style.display = "none";
    qrImg.style.display = "block";
  };

  qrImg.onerror = () => {
    qrImg.onerror = () => {
      loading.innerHTML = '<span style="color:var(--text-muted);font-size:11px;text-align:center">Use o código<br>Copia e Cola abaixo</span>';
    };
    qrImg.src = fallback;
  };

  qrImg.src = primary;
}

function buildPixPayload(chave, nome, cidade, valor) {
  // Normaliza chave
  let key = chave.replace(/\D/g, "");
  if (!key.startsWith("55")) key = "55" + key;
  key = "+" + key;

  // Remove acentos e caracteres especiais (máx 25 chars)
  const clean = (s) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
     .replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().trim().slice(0, 25);

  // Função auxiliar TLV
  const tlv = (id, val) =>
    String(id).padStart(2, "0") + String(val.length).padStart(2, "0") + val;

  // Merchant Account Information (PIX)
  const mai = tlv("00", "br.gov.bcb.pix") + tlv("01", key);

  // Payload completo
  const payload =
    tlv("00", "01") +
    tlv("01", "12") +
    tlv("26", mai) +
    tlv("52", "0000") +
    tlv("53", "986") +
    tlv("54", valor.toFixed(2)) +
    tlv("58", "BR") +
    tlv("59", clean(nome)) +
    tlv("60", clean(cidade)) +
    tlv("62", tlv("05", "***")) +
    "6304";

  return payload + crc16ccitt(payload);
}

function crc16ccitt(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

// ============================================================
// CLIPBOARD
// ============================================================
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback para navegadores mais antigos
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;pointer-events:none;left:-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); return true; }
    catch { return false; }
    finally { ta.remove(); }
  }
}

async function copyPixCode() {
  const val = $("pixCode")?.value;
  if (!val) return;
  const ok = await copyToClipboard(val);
  showToast(ok ? "Copiado! ✅" : "Erro ao copiar", ok ? "Código PIX copiado" : "Tente novamente");
}

async function copyPixKey() {
  const val = $("pixKey")?.value;
  if (!val) return;
  const ok = await copyToClipboard(val);
  showToast(ok ? "Copiado! ✅" : "Erro ao copiar", ok ? "Chave PIX copiada" : "Tente novamente");
}

// ============================================================
// REVISÃO DO PEDIDO — Step 3
// ============================================================
function buildReview() {
  const subtotal = getSubtotal();
  const total = getTotal();

  // Itens
  setHTML("reviewItems", cart.map(i => {
    const unitPrice = i.price + i.modifiersTotal;
    const lineTotal = unitPrice * i.quantity;
    const modsStr = i.modifiers.length ? ` _(${escapeHTML(i.modifiers.join(", "))})_` : "";
    return `<div class="review-item">
      <span>${i.quantity}x ${escapeHTML(i.name)}${modsStr}</span>
      <span>${fmt(lineTotal)}</span>
    </div>`;
  }).join(""));

  // Cliente
  setHTML("reviewCustomer", `${escapeHTML(getInputVal("customerName"))}<br>${escapeHTML(getInputVal("customerPhone"))}`);

  // Endereço
  const addr = `${escapeHTML(getInputVal("customerStreet"))}, ${escapeHTML(getInputVal("customerNumber"))} — ${escapeHTML(getInputVal("customerNeighborhood"))}`;
  const comp = getInputVal("customerComplement");
  setHTML("reviewAddress", addr + (comp ? `<br>${escapeHTML(comp)}` : ""));

  // Pagamento
  const payLabels = { pix: "PIX ✅", cartao: "Cartão 💳", dinheiro: "Dinheiro 💵" };
  setHTML("reviewPayment", payLabels[getSelectedPayment()] ?? getSelectedPayment());

  // Totais
  setText("reviewSubtotal", fmt(subtotal));
  setText("reviewDelivery", fmt(CONFIG.delivery));
  setText("reviewTotal", fmt(total));
}

// ============================================================
// ENVIAR PEDIDO VIA WHATSAPP
// ============================================================
function sendToWhatsApp() {
  const name      = getInputVal("customerName");
  const phone     = getInputVal("customerPhone");
  const street    = getInputVal("customerStreet");
  const number    = getInputVal("customerNumber");
  const neigh     = getInputVal("customerNeighborhood");
  const comp      = getInputVal("customerComplement");
  const pay       = getSelectedPayment();
  const change    = document.querySelector('input[name="change"]:checked')?.value ?? "no";
  const changeAmt = getInputVal("changeAmount");

  const subtotal = getSubtotal();
  const total    = getTotal();

  // Monta a mensagem
  let msg = `👑 *${CONFIG.storeName.toUpperCase()}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🛒 *NOVO PEDIDO*\n\n`;
  msg += `*ITENS:*\n`;

  cart.forEach(i => {
    const unitPrice = i.price + i.modifiersTotal;
    msg += `  • ${i.quantity}x ${i.name}`;
    if (i.modifiers.length) msg += ` _(${i.modifiers.join(", ")})_`;
    msg += ` — ${fmt(unitPrice * i.quantity)}\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 Subtotal: ${fmt(subtotal)}\n`;
  msg += `🛵 Entrega: ${fmt(CONFIG.delivery)}\n`;
  msg += `*💵 TOTAL: ${fmt(total)}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `*👤 CLIENTE:*\n  ${name}\n  ${phone}\n\n`;

  msg += `*📍 ENDEREÇO:*\n  ${street}, ${number} — ${neigh}\n`;
  if (comp) msg += `  ${comp}\n`;

  const payLabels = { pix: "PIX", cartao: "Cartão", dinheiro: "Dinheiro" };
  msg += `\n*💳 PAGAMENTO:* ${payLabels[pay] ?? pay}\n`;

  if (pay === "dinheiro" && change === "yes" && changeAmt) {
    msg += `  Troco para: ${changeAmt}\n`;
  }
  if (pay === "pix") {
    msg += `  _Valor PIX: ${fmt(total)}_\n`;
  }

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Pedido em: ${new Date().toLocaleString("pt-BR")}_`;

  // Abre WhatsApp
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");

  // Limpa estado
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  showToast("Pedido enviado! 🎉", "Aguarde a confirmação pelo WhatsApp");
}

// ============================================================
// TOAST
// ============================================================
function showToast(title, message, type = "success") {
  const toast = $("toast");
  if (!toast) return;

  const icon = toast.querySelector(".toast-icon");
  if (icon) {
    icon.className = "toast-icon" + (type === "warn" ? " warn" : "");
    icon.innerHTML = type === "warn"
      ? '<i class="fas fa-exclamation-circle"></i>'
      : '<i class="fas fa-check-circle"></i>';
  }

  setText("toastTitle", title);
  setText("toastMessage", message);
  toast.setAttribute("aria-hidden", "false");

  // Garante visível
  toast.classList.remove("show");
  void toast.offsetWidth; // reflow
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    toast.setAttribute("aria-hidden", "true");
  }, 3200);
}

// ============================================================
// OVERLAY E FECHAMENTO GERAL
// ============================================================
function tryCloseOverlay() {
  const anyOpen =
    $("productModal")?.classList.contains("active") ||
    $("checkoutModal")?.classList.contains("active") ||
    $("cartSidebar")?.classList.contains("active");
  if (!anyOpen) {
    $("overlay")?.classList.remove("active");
  }
}

function closeAll() {
  // Fecha na ordem: modais > sidebar > overlay
  if ($("productModal")?.classList.contains("active")) {
    closeProductModal();
    return;
  }
  if ($("checkoutModal")?.classList.contains("active")) {
    closeCheckout();
    return;
  }
  if ($("cartSidebar")?.classList.contains("active")) {
    toggleCart();
    return;
  }
  $("overlay")?.classList.remove("active");
}