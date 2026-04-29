/* ============================================
   IMPÉRIO LANCHES - PREMIUM DELIVERY SYSTEM
   Sistema Completo com Cardápio Real
   PIX: 84994994919 | WhatsApp: 5584994994919
   ============================================ */
(function() {
    // 1. Defina seus horários aqui
    const horario = {
        abertura: "07:00",
        fechamento: "21:00",
        fechadoDomingo: true
    };

    function validarLoja() {
        const agora = new Date();
        const diaSemana = agora.getDay();
        const horaAtual = agora.getHours() * 60 + agora.getMinutes();

        // Converte horários para minutos para comparar
        const [hA, mA] = horario.abertura.split(':').map(Number);
        const [hF, mF] = horario.fechamento.split(':').map(Number);
        const minAbre = hA * 60 + mA;
        const minFecha = hF * 60 + mF;

        // Lógica de status
        let aberto = (horaAtual >= minAbre && horaAtual < minFecha);
        if (horario.fechadoDomingo && diaSemana === 0) aberto = false;

        // 2. Atualiza o HTML que você enviou
        const container = document.getElementById('status-loja');
        const label = document.getElementById('label');
        
        if (aberto) {
            container.classList.remove('fechado');
            container.classList.add('aberto');
            label.innerText = "Aberto agora";
        } else {
            container.classList.remove('aberto');
            container.classList.add('fechado');
            label.innerText = "Fechado no momento";
        }

        // 3. Bloqueia ou Libera TODOS os botões da página
        const botoes = document.querySelectorAll('button, .btn, a[href*="whatsapp"]');
        botoes.forEach(btn => {
            if (!aberto) {
                btn.style.pointerEvents = "none"; 
                btn.style.filter = "grayscale(1)";
                btn.style.opacity = "0.5";
                if(btn.tagName === "BUTTON") btn.disabled = true;
            } else {
                btn.style.pointerEvents = "auto";
                btn.style.filter = "none";
                btn.style.opacity = "1";
                if(btn.tagName === "BUTTON") btn.disabled = false;
            }
        });
    }

    // Executa e define intervalo de 30 segundos
    validarLoja();
    setInterval(validarLoja, 1000);
})();

const CONFIG = {
    pix: "84994994919",
    pixName: "IMPERIO LANCHES",
    pixCity: "NATAL",
    whatsapp: "5584994994919",
    delivery: 5.00,
    minOrder: 0
};

// ============================================
// CARDÁPIO COMPLETO COM IMAGENS REAIS
// ============================================
const MENU = [
    /* ===========================
       MASSAS GOURMET
       =========================== */
    {
        id: 1,
        category: "massas",
        name: "Cebola e Salsa",
        description: "Massa gourmet temperada com cebola e salsa fresca",
        price: 3.00,
        image: "https://img.icons8.com/color/200/pasta.png",
        badge: null,
        modifiers: []
    },
    {
        id: 2,
        category: "massas",
        name: "Bacon",
        description: "Massa gourmet com bacon crocante",
        price: 3.00,
        image: "https://img.icons8.com/color/200/pasta.png",
        badge: null,
        modifiers: []
    },
    {
        id: 3,
        category: "massas",
        name: "Queijo",
        description: "Massa gourmet sabor queijo",
        price: 3.00,
        image: "https://img.icons8.com/color/200/pasta.png",
        badge: null,
        modifiers: []
    },

    /* ===========================
       PASTÉIS SALGADOS
       =========================== */
    {
        id: 4,
        category: "pasteis-salgados",
        name: "Três Queijos",
        description: "Queijo mussarela, queijo coalho e catupiry",
        price: 7.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: "MAIS PEDIDO",
        modifiers: []
    },
    {
        id: 5,
        category: "pasteis-salgados",
        name: "Frango com Queijo",
        description: "Frango desfiado e queijo mussarela",
        price: 8.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: []
    },
    {
        id: 6,
        category: "pasteis-salgados",
        name: "Pizza",
        description: "Queijo mussarela, presunto, tomate e orégano",
        price: 8.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: []
    },
    {
        id: 7,
        category: "pasteis-salgados",
        name: "Frango com Catupiry ou Cheddar",
        description: "Frango desfiado com catupiry ou cheddar",
        price: 9.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o queijo",
                required: true,
                options: [
                    { name: "Catupiry", price: 0 },
                    { name: "Cheddar", price: 0 }
                ]
            }
        ]
    },
    {
        id: 8,
        category: "pasteis-salgados",
        name: "Frango com Bacon",
        description: "Frango, queijo mussarela e bacon",
        price: 9.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: []
    },
    {
        id: 9,
        category: "pasteis-salgados",
        name: "Carne com Catupiry ou Cheddar",
        description: "Carne com catupiry ou cheddar",
        price: 10.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o queijo",
                required: true,
                options: [
                    { name: "Catupiry", price: 0 },
                    { name: "Cheddar", price: 0 }
                ]
            }
        ]
    },
    {
        id: 10,
        category: "pasteis-salgados",
        name: "Calabresa",
        description: "Calabresa e queijo mussarela",
        price: 10.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: []
    },
    {
        id: 11,
        category: "pasteis-salgados",
        name: "Carne com Queijo",
        description: "Carne e queijo mussarela",
        price: 10.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: null,
        modifiers: []
    },
    {
        id: 12,
        category: "pasteis-salgados",
        name: "Carne de Sol na Nata",
        description: "Carne na nata e queijo coalho",
        price: 12.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: "ESPECIAL",
        modifiers: []
    },
    {
        id: 13,
        category: "pasteis-salgados",
        name: "Moda da Casa",
        description: "Frango, carne, calabresa, bacon e queijo mussarela",
        price: 13.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: "RECOMENDADO",
        modifiers: []
    },
    {
        id: 14,
        category: "pasteis-salgados",
        name: "Sertanejo",
        description: "Carne desfiada, queijo coalho, coentro e cebola roxa",
        price: 13.00,
        image: "https://img.icons8.com/color/200/empanada.png",
        badge: "NOVO",
        modifiers: []
    },

    /* ===========================
       PASTÉIS DOCES
       =========================== */
    {
        id: 15,
        category: "pasteis-doces",
        name: "Chocolate ao Leite",
        description: "Doce de leite, canela e açúcar. Com ou sem queijo.",
        price: 10.00,
        image: "https://img.icons8.com/color/200/waffle.png",
        badge: null,
        modifiers: [
            {
                name: "Com queijo?",
                required: false,
                options: [
                    { name: "Sem queijo", price: 0 },
                    { name: "Com queijo", price: 0 }
                ]
            }
        ]
    },
    {
        id: 16,
        category: "pasteis-doces",
        name: "Chocolate Meio Amargo",
        description: "Doce de leite, canela e açúcar. Com ou sem queijo.",
        price: 10.00,
        image: "https://img.icons8.com/color/200/waffle.png",
        badge: null,
        modifiers: [
            {
                name: "Com queijo?",
                required: false,
                options: [
                    { name: "Sem queijo", price: 0 },
                    { name: "Com queijo", price: 0 }
                ]
            }
        ]
    },
    {
        id: 17,
        category: "pasteis-doces",
        name: "Romeu e Julieta",
        description: "Goiabada e queijo coalho",
        price: 10.00,
        image: "https://img.icons8.com/color/200/waffle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 18,
        category: "pasteis-doces",
        name: "Churros",
        description: "Doce de leite, canela e açúcar",
        price: 10.00,
        image: "https://img.icons8.com/color/200/churros.png",
        badge: "DOCE",
        modifiers: []
    },

    /* ===========================
       HAMBÚRGUERES
       =========================== */
    {
        id: 19,
        category: "hamburgueres",
        name: "X-Burg",
        description: "Pão, hambúrguer, queijo e presunto",
        price: 7.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: null,
        modifiers: []
    },
    {
        id: 20,
        category: "hamburgueres",
        name: "Bauru",
        description: "Pão, hambúrguer, alface, tomate, ovo, queijo e presunto",
        price: 8.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: null,
        modifiers: []
    },
    {
        id: 21,
        category: "hamburgueres",
        name: "X-Bacon",
        description: "Pão, bacon, hambúrguer, ovo, queijo, presunto, alface e tomate",
        price: 10.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: "MAIS PEDIDO",
        modifiers: []
    },
    {
        id: 22,
        category: "hamburgueres",
        name: "X-Calabresa",
        description: "Pão, calabresa acebolada, hambúrguer, queijo mussarela, alface e tomate",
        price: 10.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: null,
        modifiers: []
    },
    {
        id: 23,
        category: "hamburgueres",
        name: "X-Tudo",
        description: "Pão, hambúrguer, ovo, bacon, salsicha, frango, presunto, queijo, alface e tomate",
        price: 12.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: "FAVORITO",
        modifiers: []
    },
    {
        id: 24,
        category: "hamburgueres",
        name: "X-Frango com Catupiry",
        description: "Pão, frango, catupiry, ovo, alface e tomate",
        price: 12.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: null,
        modifiers: []
    },
    {
        id: 25,
        category: "hamburgueres",
        name: "X-Carne de Sol",
        description: "Pão, carne de sol na nata, ovo, queijo, alface e tomate",
        price: 13.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: "ESPECIAL",
        modifiers: []
    },
    {
        id: 26,
        category: "hamburgueres",
        name: "Moda da Casa",
        description: "Pão, hambúrguer duplo, ovo, presunto duplo, queijo duplo, bacon, frango, salsicha, catupiry, alface e tomate",
        price: 15.00,
        image: "https://img.icons8.com/color/200/hamburger.png",
        badge: "PREMIUM",
        modifiers: []
    },

    /* ===========================
       HAMBÚRGUER ARTESANAL
       =========================== */
    {
        id: 27,
        category: "hamburgueres-artesanal",
        name: "X-Cheddar Artesanal",
        description: "Pão brioche, um hambúrguer artesanal (100g), queijo cheddar, bacon, cebola roxa, molho especial",
        price: 18.00,
        image: "https://img.icons8.com/color/200/cheeseburger.png",
        badge: "ARTESANAL",
        modifiers: []
    },
    {
        id: 28,
        category: "hamburgueres-artesanal",
        name: "Duplo Cheddar",
        description: "Pão brioche, dois hambúrgueres artesanais (100g cada), queijo cheddar, bacon, cebola roxa, molho especial",
        price: 22.00,
        image: "https://img.icons8.com/color/200/cheeseburger.png",
        badge: "PREMIUM",
        modifiers: []
    },

    /* ===========================
       TAPIOCA RECHEADA
       =========================== */
    {
        id: 29,
        category: "tapioca",
        name: "Carne de Sol com Catupiry",
        description: "Tapioca recheada com carne de sol e catupiry",
        price: 8.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },
    {
        id: 30,
        category: "tapioca",
        name: "Carne de Sol com Queijo",
        description: "Tapioca recheada com carne de sol e queijo",
        price: 8.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },
    {
        id: 31,
        category: "tapioca",
        name: "Frango com Catupiry",
        description: "Tapioca recheada com frango e catupiry",
        price: 8.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },
    {
        id: 32,
        category: "tapioca",
        name: "Frango com Queijo",
        description: "Tapioca recheada com frango e queijo",
        price: 8.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },
    {
        id: 33,
        category: "tapioca",
        name: "Carne de Sol na Nata",
        description: "Tapioca recheada com carne de sol na nata",
        price: 9.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },
    {
        id: 34,
        category: "tapioca",
        name: "Sertaneja",
        description: "Tapioca recheada com carne de sol, queijo coalho e coentro",
        price: 9.00,
        image: "https://img.icons8.com/color/200/taco.png",
        badge: null,
        modifiers: []
    },

    /* ===========================
       CUSCUZ RECHEADO
       =========================== */
    {
        id: 35,
        category: "cuscuz",
        name: "Carne de Sol com Queijo",
        description: "Cuscuz recheado com carne de sol e queijo",
        price: 8.00,
        image: "https://img.icons8.com/color/200/bread.png",
        badge: null,
        modifiers: []
    },
    {
        id: 36,
        category: "cuscuz",
        name: "Frango com Queijo",
        description: "Cuscuz recheado com frango e queijo",
        price: 8.00,
        image: "https://img.icons8.com/color/200/bread.png",
        badge: null,
        modifiers: []
    },
    {
        id: 37,
        category: "cuscuz",
        name: "Calabresa",
        description: "Cuscuz recheado com calabresa e queijo",
        price: 8.00,
        image: "https://img.icons8.com/color/200/bread.png",
        badge: null,
        modifiers: []
    },
    {
        id: 38,
        category: "cuscuz",
        name: "Carne de Sol na Nata",
        description: "Cuscuz recheado com carne de sol na nata",
        price: 9.00,
        image: "https://img.icons8.com/color/200/bread.png",
        badge: null,
        modifiers: []
    },

    /* ===========================
       CACHORRO QUENTE
       =========================== */
    {
        id: 39,
        category: "cachorro-quente",
        name: "Tradicional",
        description: "Pão, carne moída, salsicha, frango, batata palha, milho, ervilha e queijo ralado",
        price: 7.00,
        image: "https://img.icons8.com/color/200/hot-dog.png",
        badge: null,
        modifiers: []
    },
    {
        id: 40,
        category: "cachorro-quente",
        name: "Carne na Nata",
        description: "Pão, carne de sol na nata, salsicha, milho, ervilha, batata palha e queijo ralado",
        price: 9.00,
        image: "https://img.icons8.com/color/200/hot-dog.png",
        badge: "ESPECIAL",
        modifiers: []
    },

    /* ===========================
       PETISCOS
       =========================== */
    {
        id: 41,
        category: "petiscos",
        name: "Batata Frita P",
        description: "Porção pequena de batata frita crocante",
        price: 10.00,
        image: "https://img.icons8.com/color/200/french-fries.png",
        badge: null,
        modifiers: []
    },
    {
        id: 42,
        category: "petiscos",
        name: "Batata Frita G",
        description: "Porção grande de batata frita crocante",
        price: 14.00,
        image: "https://img.icons8.com/color/200/french-fries.png",
        badge: null,
        modifiers: []
    },
    {
        id: 43,
        category: "petiscos",
        name: "Batata Frita com Bacon e Cheddar",
        description: "Batata frita com bacon crocante e cheddar cremoso",
        price: 20.00,
        image: "https://img.icons8.com/color/200/french-fries.png",
        badge: "MAIS PEDIDA",
        modifiers: []
    },
    {
        id: 44,
        category: "petiscos",
        name: "Batata Frita com Calabresa e Cheddar",
        description: "Batata frita com calabresa acebolada e cheddar cremoso",
        price: 20.00,
        image: "https://img.icons8.com/color/200/french-fries.png",
        badge: null,
        modifiers: []
    },

    /* ===========================
       MILK SHAKE
       =========================== */
    {
        id: 45,
        category: "milkshake",
        name: "Milk Shake 300ml",
        description: "Milk shake cremoso 300ml. Sabores: Morango, Chocolate, Ovomaltine, Chocomenta",
        price: 13.00,
        image: "https://img.icons8.com/color/200/milkshake.png",
        badge: "FAVORITO",
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Morango", price: 0 },
                    { name: "Chocolate", price: 0 },
                    { name: "Ovomaltine", price: 0 },
                    { name: "Chocomenta", price: 0 }
                ]
            },
            {
                name: "Com chantilly?",
                required: false,
                options: [
                    { name: "Sem chantilly", price: 0 },
                    { name: "Com chantilly", price: 2.00 }
                ]
            }
        ]
    },

    /* ===========================
       SORVETE
       =========================== */
    {
        id: 46,
        category: "sorvete",
        name: "Sorvete 1 Bola",
        description: "Sorvete 1 bola. Sabores: Morango, Chocolate, Chocomenta",
        price: 3.00,
        image: "https://img.icons8.com/color/200/ice-cream-scoop.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Morango", price: 0 },
                    { name: "Chocolate", price: 0 },
                    { name: "Chocomenta", price: 0 }
                ]
            }
        ]
    },

    /* ===========================
       PIZZAS
       =========================== */
    {
        id: 47,
        category: "pizzas",
        name: "Pizza Calabresa",
        description: "Calabresa, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: "MAIS PEDIDA",
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 48,
        category: "pizzas",
        name: "Pizza Frango com Bacon",
        description: "Frango desfiado, cebola, bacon, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 49,
        category: "pizzas",
        name: "Pizza Frango com Milho",
        description: "Frango desfiado, cebola, milho, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 50,
        category: "pizzas",
        name: "Pizza Frango com Catupiry",
        description: "Frango desfiado, cebola, catupiry, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 51,
        category: "pizzas",
        name: "Pizza Frango com Cheddar",
        description: "Frango desfiado, cebola, cheddar, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 52,
        category: "pizzas",
        name: "Pizza Frango com Queijo",
        description: "Frango desfiado, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 30.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 53,
        category: "pizzas",
        name: "Pizza Moda da Casa",
        description: "Carne de sol desfiada, frango, calabresa, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 40.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: "PREMIUM",
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 54,
        category: "pizzas",
        name: "Pizza Carne com Catupiry",
        description: "Carne de sol desfiada, catupiry, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 35.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 55,
        category: "pizzas",
        name: "Pizza Carne de Sol",
        description: "Carne de sol desfiada, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 35.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 56,
        category: "pizzas",
        name: "Pizza Carne com Cheddar",
        description: "Carne de sol desfiada, cheddar, cebola, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 35.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 57,
        category: "pizzas",
        name: "Pizza Sertaneja",
        description: "Carne de sol desfiada, cebola, queijo coalho, queijo mussarela, orégano, azeitona, molho de tomate",
        price: 35.00,
        image: "https://img.icons8.com/color/200/pizza.png",
        badge: "REGIONAL",
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },

    /* ===========================
       PIZZAS DOCES
       =========================== */
    {
        id: 58,
        category: "pizzas-doces",
        name: "Pizza Chocolate com Confetes",
        description: "Chocolate ao leite e confetes",
        price: 30.00,
        image: "https://img.icons8.com/color/200/cake.png",
        badge: "DOCE",
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 59,
        category: "pizzas-doces",
        name: "Pizza Chocolate ao Leite e Confetes",
        description: "Chocolate ao leite e confetes",
        price: 30.00,
        image: "https://img.icons8.com/color/200/cake.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 60,
        category: "pizzas-doces",
        name: "Pizza Chocolate com Amendoim Triturado",
        description: "Chocolate ao leite e amendoim triturado",
        price: 30.00,
        image: "https://img.icons8.com/color/200/cake.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 61,
        category: "pizzas-doces",
        name: "Pizza Dois Amores",
        description: "Chocolate ao leite e chocolate branco",
        price: 30.00,
        image: "https://img.icons8.com/color/200/cake.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },
    {
        id: 62,
        category: "pizzas-doces",
        name: "Pizza Churros",
        description: "Doce de leite, canela e açúcar",
        price: 30.00,
        image: "https://img.icons8.com/color/200/churros.png",
        badge: "DOCE",
        modifiers: [
            {
                name: "Escolha o tamanho",
                required: true,
                options: [
                    { name: "Média (M)", price: 0 },
                    { name: "Grande (G)", price: 10.00 },
                    { name: "Gigante (GG)", price: 20.00 }
                ]
            }
        ]
    },

    /* ===========================
       AÇAÍ
       =========================== */
    {
        id: 63,
        category: "acai",
        name: "Açaí 250ml",
        description: "Acompanha 5 acompanhamentos à escolha",
        price: 10.00,
        image: "https://img.icons8.com/color/200/ice-cream-cup.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha até 5 acompanhamentos",
                required: false,
                maxSelections: 5,
                options: [
                    { name: "Açaí", price: 0 },
                    { name: "Avelã", price: 0 },
                    { name: "Cupuaçu", price: 0 },
                    { name: "Ninho", price: 0 },
                    { name: "Açaí com banana", price: 0 },
                    { name: "Ninho trufado", price: 0 },
                    { name: "Oreo", price: 0 },
                    { name: "Ovomaltine", price: 0 },
                    { name: "Tapioca", price: 0 }
                ]
            }
        ]
    },
    {
        id: 64,
        category: "acai",
        name: "Açaí 350ml",
        description: "Acompanha 6 acompanhamentos à escolha",
        price: 12.00,
        image: "https://img.icons8.com/color/200/ice-cream-cup.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha até 6 acompanhamentos",
                required: false,
                maxSelections: 6,
                options: [
                    { name: "Açaí", price: 0 },
                    { name: "Avelã", price: 0 },
                    { name: "Cupuaçu", price: 0 },
                    { name: "Ninho", price: 0 },
                    { name: "Açaí com banana", price: 0 },
                    { name: "Ninho trufado", price: 0 },
                    { name: "Oreo", price: 0 },
                    { name: "Ovomaltine", price: 0 },
                    { name: "Tapioca", price: 0 }
                ]
            }
        ]
    },
    {
        id: 65,
        category: "acai",
        name: "Açaí 500ml",
        description: "Acompanha 8 acompanhamentos à escolha",
        price: 16.00,
        image: "https://img.icons8.com/color/200/ice-cream-cup.png",
        badge: "MAIS PEDIDO",
        modifiers: [
            {
                name: "Escolha até 8 acompanhamentos",
                required: false,
                maxSelections: 8,
                options: [
                    { name: "Açaí", price: 0 },
                    { name: "Avelã", price: 0 },
                    { name: "Cupuaçu", price: 0 },
                    { name: "Ninho", price: 0 },
                    { name: "Açaí com banana", price: 0 },
                    { name: "Ninho trufado", price: 0 },
                    { name: "Oreo", price: 0 },
                    { name: "Ovomaltine", price: 0 },
                    { name: "Tapioca", price: 0 }
                ]
            }
        ]
    },
    {
        id: 66,
        category: "acai",
        name: "Açaí 1L",
        description: "Acompanha 10 acompanhamentos à escolha",
        price: 28.00,
        image: "https://img.icons8.com/color/200/ice-cream-cup.png",
        badge: "FAMÍLIA",
        modifiers: [
            {
                name: "Escolha até 10 acompanhamentos",
                required: false,
                maxSelections: 10,
                options: [
                    { name: "Açaí", price: 0 },
                    { name: "Avelã", price: 0 },
                    { name: "Cupuaçu", price: 0 },
                    { name: "Ninho", price: 0 },
                    { name: "Açaí com banana", price: 0 },
                    { name: "Ninho trufado", price: 0 },
                    { name: "Oreo", price: 0 },
                    { name: "Ovomaltine", price: 0 },
                    { name: "Tapioca", price: 0 }
                ]
            }
        ]
    },

    /* ===========================
       BEBIDAS
       =========================== */
    {
        id: 67,
        category: "bebidas",
        name: "Água Mineral",
        description: "Água mineral sem gás",
        price: 2.00,
        image: "https://img.icons8.com/color/200/water-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 68,
        category: "bebidas",
        name: "Água com Gás",
        description: "Água mineral com gás",
        price: 3.00,
        image: "https://img.icons8.com/color/200/water-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 69,
        category: "bebidas",
        name: "Refrigerante Mini",
        description: "Refrigerante lata mini 200ml",
        price: 2.50,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: null,
        modifiers: []
    },
    {
        id: 70,
        category: "bebidas",
        name: "Cerveja",
        description: "Cerveja long neck 355ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/beer-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 71,
        category: "bebidas",
        name: "Guaraná Lata",
        description: "Guaraná Antarctica lata 350ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: null,
        modifiers: []
    },
    {
        id: 72,
        category: "bebidas",
        name: "Fanta Laranja Lata",
        description: "Fanta laranja lata 350ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: null,
        modifiers: []
    },
    {
        id: 73,
        category: "bebidas",
        name: "Fanta Uva Lata",
        description: "Fanta uva lata 350ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: null,
        modifiers: []
    },
    {
        id: 74,
        category: "bebidas",
        name: "Pepsi Lata",
        description: "Pepsi lata 350ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: null,
        modifiers: []
    },
    {
        id: 75,
        category: "bebidas",
        name: "Coca-Cola Lata (Zero/Original)",
        description: "Coca-Cola lata 350ml",
        price: 5.00,
        image: "https://img.icons8.com/color/200/soda-can.png",
        badge: "MAIS VENDIDA",
        modifiers: [
            {
                name: "Escolha o tipo",
                required: true,
                options: [
                    { name: "Original", price: 0 },
                    { name: "Zero", price: 0 }
                ]
            }
        ]
    },
    {
        id: 76,
        category: "bebidas",
        name: "Fanta Laranja 1L",
        description: "Fanta laranja garrafa 1L",
        price: 8.00,
        image: "https://img.icons8.com/color/200/soda-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 77,
        category: "bebidas",
        name: "Pepsi 1L",
        description: "Pepsi garrafa 1L",
        price: 8.00,
        image: "https://img.icons8.com/color/200/soda-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 78,
        category: "bebidas",
        name: "Guaraná 1L",
        description: "Guaraná Antarctica garrafa 1L",
        price: 8.00,
        image: "https://img.icons8.com/color/200/soda-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 79,
        category: "bebidas",
        name: "Coca-Cola Original 1L",
        description: "Coca-Cola garrafa 1L",
        price: 10.00,
        image: "https://img.icons8.com/color/200/soda-bottle.png",
        badge: null,
        modifiers: []
    },
    {
        id: 80,
        category: "bebidas",
        name: "Energético",
        description: "Bebida energética 250ml",
        price: 12.00,
        image: "https://img.icons8.com/color/200/energy-drink.png",
        badge: null,
        modifiers: []
    },

    /* ===========================
       SUCOS
       =========================== */
    {
        id: 81,
        category: "sucos",
        name: "Suco de Água",
        description: "Suco natural na água",
        price: 4.00,
        image: "https://img.icons8.com/color/200/juice.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Goiaba", price: 0 },
                    { name: "Acerola", price: 0 },
                    { name: "Cajá", price: 0 },
                    { name: "Caju", price: 0 },
                    { name: "Maracujá", price: 0 },
                    { name: "Mangaba", price: 0 },
                    { name: "Uva", price: 0 },
                    { name: "Graviola", price: 0 },
                    { name: "Morango", price: 0 },
                    { name: "Abacaxi com hortelã", price: 0 }
                ]
            }
        ]
    },
    {
        id: 82,
        category: "sucos",
        name: "Suco de Leite",
        description: "Suco natural no leite",
        price: 5.00,
        image: "https://img.icons8.com/color/200/juice.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Goiaba", price: 0 },
                    { name: "Acerola", price: 0 },
                    { name: "Cajá", price: 0 },
                    { name: "Caju", price: 0 },
                    { name: "Maracujá", price: 0 },
                    { name: "Mangaba", price: 0 },
                    { name: "Uva", price: 0 },
                    { name: "Graviola", price: 0 },
                    { name: "Morango", price: 0 },
                    { name: "Abacaxi com hortelã", price: 0 }
                ]
            }
        ]
    },
    {
        id: 83,
        category: "sucos",
        name: "Litro na Água",
        description: "Suco natural 1L na água",
        price: 15.00,
        image: "https://img.icons8.com/color/200/juice.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Goiaba", price: 0 },
                    { name: "Acerola", price: 0 },
                    { name: "Cajá", price: 0 },
                    { name: "Caju", price: 0 },
                    { name: "Maracujá", price: 0 },
                    { name: "Mangaba", price: 0 },
                    { name: "Uva", price: 0 },
                    { name: "Graviola", price: 0 },
                    { name: "Morango", price: 0 },
                    { name: "Abacaxi com hortelã", price: 0 }
                ]
            }
        ]
    },
    {
        id: 84,
        category: "sucos",
        name: "Litro no Leite",
        description: "Suco natural 1L no leite",
        price: 20.00,
        image: "https://img.icons8.com/color/200/juice.png",
        badge: null,
        modifiers: [
            {
                name: "Escolha o sabor",
                required: true,
                options: [
                    { name: "Goiaba", price: 0 },
                    { name: "Acerola", price: 0 },
                    { name: "Cajá", price: 0 },
                    { name: "Caju", price: 0 },
                    { name: "Maracujá", price: 0 },
                    { name: "Mangaba", price: 0 },
                    { name: "Uva", price: 0 },
                    { name: "Graviola", price: 0 },
                    { name: "Morango", price: 0 },
                    { name: "Abacaxi com hortelã", price: 0 }
                ]
            }
        ]
    }
];

// ============================================
// CATEGORIAS DO CARDÁPIO
// ============================================
const CATEGORIES = [
    { id: "todos", name: "Todos", icon: "🍽️" },
    { id: "massas", name: "Massas Gourmet", icon: "🍝" },
    { id: "pasteis-salgados", name: "Pastéis Salgados", icon: "🥟" },
    { id: "pasteis-doces", name: "Pastéis Doces", icon: "🍫" },
    { id: "hamburgueres", name: "Hambúrgueres", icon: "🍔" },
    { id: "hamburgueres-artesanal", name: "Artesanal", icon: "👨‍🍳" },
    { id: "tapioca", name: "Tapioca", icon: "🫓" },
    { id: "cuscuz", name: "Cuscuz", icon: "🍚" },
    { id: "cachorro-quente", name: "Hot Dog", icon: "🌭" },
    { id: "petiscos", name: "Petiscos", icon: "🍟" },
    { id: "milkshake", name: "Milk Shake", icon: "🥤" },
    { id: "sorvete", name: "Sorvete", icon: "🍦" },
    { id: "pizzas", name: "Pizzas", icon: "🍕" },
    { id: "pizzas-doces", name: "Pizzas Doces", icon: "🍫" },
    { id: "acai", name: "Açaí", icon: "🫐" },
    { id: "bebidas", name: "Bebidas", icon: "🥤" },
    { id: "sucos", name: "Sucos", icon: "🧃" }
];

// ============================================
// ESTADO DO SISTEMA
// ============================================
let cart = [];
let currentCategory = "todos";
let modalProduct = null;
let modalQty = 1;
let selectedModifiers = {};
let checkoutStep = 1;

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2000);

    // Renderizar categorias
    renderCategories();

    // Renderizar menu
    renderMenu();

    // Scroll events
    window.addEventListener('scroll', handleScroll);

    // Carregar carrinho salvo
    loadCart();

    // Phone mask
    const phoneInput = document.getElementById('customerPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }
});

// ============================================
// SCROLL HANDLER
// ============================================
function handleScroll() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// RENDER CATEGORIES
// ============================================
function renderCategories() {
    const nav = document.getElementById('categoryNav');
    nav.innerHTML = CATEGORIES.map(cat => `
        <button class="cat-link ${cat.id === currentCategory ? 'active' : ''}" 
                onclick="filterCategory('${cat.id}', this)">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
}

// ============================================
// FILTER CATEGORY
// ============================================
function filterCategory(categoryId, element) {
    currentCategory = categoryId;
    
    document.querySelectorAll('.cat-link').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    
    renderMenu();
    
    if (categoryId !== 'todos') {
        const section = document.getElementById(`category-${categoryId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ============================================
// RENDER MENU
// ============================================
function renderMenu() {
    const container = document.getElementById('menuContainer');
    
    const filtered = currentCategory === 'todos' 
        ? MENU 
        : MENU.filter(item => item.category === currentCategory);

    // Group by category
    const grouped = filtered.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    container.innerHTML = Object.keys(grouped).map(categoryId => {
        const category = CATEGORIES.find(c => c.id === categoryId);
        const items = grouped[categoryId];

        return `
            <section class="category-section" id="category-${categoryId}">
                <div class="section-header">
                    <div class="section-icon">${category?.icon || '🍽️'}</div>
                    <h2 class="section-title">${category?.name || categoryId}</h2>
                </div>
                <div class="products-grid">
                    ${items.map(item => renderProductCard(item)).join('')}
                </div>
            </section>
        `;
    }).join('');
}

// ============================================
// PRODUCT CARD
// ============================================
function renderProductCard(product) {
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add-quick" onclick="event.stopPropagation(); quickAdd(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// SEARCH
// ============================================
function searchMenu() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchClear = document.getElementById('searchClear');
    
    searchClear.classList.toggle('visible', query.length > 0);

    const filtered = MENU.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    const container = document.getElementById('menuContainer');
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 64px; margin-bottom: 16px; opacity: 0.3;">🔍</div>
                <h3 style="font-size: 20px; margin-bottom: 8px;">Nenhum produto encontrado</h3>
                <p style="color: var(--text-secondary);">Tente buscar por outro termo</p>
            </div>
        `;
        return;
    }

    // Group by category
    const grouped = filtered.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    container.innerHTML = Object.keys(grouped).map(categoryId => {
        const category = CATEGORIES.find(c => c.id === categoryId);
        const items = grouped[categoryId];

        return `
            <section class="category-section">
                <div class="section-header">
                    <div class="section-icon">${category?.icon || '🍽️'}</div>
                    <h2 class="section-title">${category?.name || categoryId}</h2>
                </div>
                <div class="products-grid">
                    ${items.map(item => renderProductCard(item)).join('')}
                </div>
            </section>
        `;
    }).join('');
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchClear').classList.remove('visible');
    searchMenu();
}

// ============================================
// QUICK ADD
// ============================================
function quickAdd(productId) {
    const product = MENU.find(p => p.id === productId);
    if (!product) return;

    // If product has modifiers, open modal
    if (product.modifiers && product.modifiers.length > 0) {
        openProductModal(productId);
        return;
    }

    // Add directly to cart
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            modifiers: [],
            modifiersTotal: 0
        });
    }

    saveCart();
    updateCartUI();
    showToast('Adicionado!', `${product.name} foi adicionado ao carrinho`);
}

// ============================================
// PRODUCT MODAL
// ============================================
function openProductModal(productId) {
    const product = MENU.find(p => p.id === productId);
    if (!product) return;

    modalProduct = product;
    modalQty = 1;
    selectedModifiers = {};

    // Set modal content
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalBadge').textContent = product.badge || '';
    document.getElementById('modalBadge').style.display = product.badge ? 'block' : 'none';
    document.getElementById('modalCategory').textContent = CATEGORIES.find(c => c.id === product.category)?.name || '';
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalQty').textContent = modalQty;

    // Render modifiers
    renderModifiers(product);

    // Update price
    updateModalPrice();

    // Show modal
    document.getElementById('productModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderModifiers(product) {
    const container = document.getElementById('modalModifiers');
    
    if (!product.modifiers || product.modifiers.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = product.modifiers.map((modifier, modIndex) => `
        <div class="modifier-group">
            <div class="modifier-title">
                ${modifier.required ? '<i class="fas fa-asterisk" style="color: var(--primary); font-size: 10px;"></i>' : ''}
                ${modifier.name}
                ${modifier.maxSelections ? `(Máx: ${modifier.maxSelections})` : ''}
            </div>
            <div class="modifier-options">
                ${modifier.options.map((option, optIndex) => `
                    <label class="modifier-option" onclick="selectModifier(${modIndex}, ${optIndex}, '${option.name}', ${option.price})">
                        <input type="${modifier.maxSelections ? 'checkbox' : 'radio'}" 
                               name="modifier-${modIndex}" 
                               value="${option.name}">
                        <div class="option-content">
                            <span class="option-name">${option.name}</span>
                            ${option.price > 0 ? `<span class="option-price">+ R$ ${option.price.toFixed(2).replace('.', ',')}</span>` : ''}
                        </div>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function selectModifier(modIndex, optIndex, optionName, optionPrice) {
    const product = modalProduct;
    const modifier = product.modifiers[modIndex];
    const option = modifier.options[optIndex];

    if (!selectedModifiers[modIndex]) {
        selectedModifiers[modIndex] = [];
    }

    if (modifier.maxSelections) {
        // Checkbox - multiple selection
        const existing = selectedModifiers[modIndex].find(m => m.optionIndex === optIndex);
        if (existing) {
            selectedModifiers[modIndex] = selectedModifiers[modIndex].filter(m => m.optionIndex !== optIndex);
        } else {
            if (selectedModifiers[modIndex].length >= modifier.maxSelections) {
                showToast('Limite atingido', `Você só pode selecionar até ${modifier.maxSelections} opções`);
                return;
            }
            selectedModifiers[modIndex].push({
                optionIndex: optIndex,
                name: optionName,
                price: optionPrice
            });
        }
    } else {
        // Radio - single selection
        selectedModifiers[modIndex] = [{
            optionIndex: optIndex,
            name: optionName,
            price: optionPrice
        }];
    }

    // Update UI
    document.querySelectorAll(`input[name="modifier-${modIndex}"]`).forEach((input, idx) => {
        input.parentElement.classList.toggle('selected', idx === optIndex);
    });

    updateModalPrice();
}

function updateModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    document.getElementById('modalQty').textContent = modalQty;
    updateModalPrice();
}

function updateModalPrice() {
    const modifiersTotal = Object.values(selectedModifiers).flat().reduce((sum, mod) => sum + mod.price, 0);
    const total = (modalProduct.price + modifiersTotal) * modalQty;

    document.getElementById('modalPrice').textContent = `R$ ${(modalProduct.price + modifiersTotal).toFixed(2).replace('.', ',')}`;
    document.getElementById('modalTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function addToCartFromModal() {
    if (!modalProduct) return;

    // Validate required modifiers
    for (const modifier of modalProduct.modifiers) {
        const modIndex = modalProduct.modifiers.indexOf(modifier);
        if (modifier.required && (!selectedModifiers[modIndex] || selectedModifiers[modIndex].length === 0)) {
            showToast('Atenção', `Por favor, selecione: ${modifier.name}`);
            return;
        }
    }

    const modifiersTotal = Object.values(selectedModifiers).flat().reduce((sum, mod) => sum + mod.price, 0);
    const modifiersList = Object.values(selectedModifiers).flat().map(m => m.name);

    const existingItem = cart.find(item => 
        item.productId === modalProduct.id && 
        JSON.stringify(item.modifiers) === JSON.stringify(modifiersList)
    );

    if (existingItem) {
        existingItem.quantity += modalQty;
    } else {
        cart.push({
            productId: modalProduct.id,
            name: modalProduct.name,
            price: modalProduct.price,
            image: modalProduct.image,
            quantity: modalQty,
            modifiers: modifiersList,
            modifiersTotal: modifiersTotal
        });
    }

    saveCart();
    updateCartUI();
    closeProductModal();
    showToast('Adicionado!', `${modalProduct.name} foi adicionado ao carrinho`);
}

// ============================================
// CART FUNCTIONS
// ============================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartBar = document.getElementById('cartBar');
    const cartBarQty = document.getElementById('cartBarQty');
    const cartBarTotal = document.getElementById('cartBarTotal');
    const cartBody = document.getElementById('cartBody');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity, 0);
    const total = subtotal + CONFIG.delivery;

    // Update badge
    cartBadge.textContent = totalItems;
    cartBarQty.textContent = totalItems;
    cartBarTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Show/hide cart bar
    cartBar.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.innerHTML = '';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    ${item.modifiers.length > 0 ? `
                        <div class="cart-item-modifiers">${item.modifiers.join(', ')}</div>
                    ` : ''}
                    <div class="cart-item-price">R$ ${((item.price + item.modifiersTotal) * item.quantity).toFixed(2).replace('.', ',')}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
    }

    // Update totals
    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function updateCartQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm('Deseja realmente limpar seu carrinho?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showToast('Carrinho limpo', 'Todos os itens foram removidos');
    }
}

function saveCart() {
    localStorage.setItem('imperio_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('imperio_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
    if (cart.length === 0) {
        showToast('Carrinho vazio', 'Adicione itens antes de finalizar');
        return;
    }

    toggleCart();
    checkoutStep = 1;
    updateCheckoutSteps();
    document.getElementById('checkoutModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function goToStep(step) {
    // Validate current step
    if (step > checkoutStep) {
        if (checkoutStep === 1 && !validateStep1()) return;
    }

    checkoutStep = step;
    updateCheckoutSteps();

    if (step === 2) {
        generatePix();
    }

    if (step === 3) {
        populateReview();
    }
}

function updateCheckoutSteps() {
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.toggle('active', stepNum === checkoutStep);
        step.classList.toggle('completed', stepNum < checkoutStep);
    });

    document.querySelectorAll('.step-line').forEach((line, index) => {
        line.classList.toggle('completed', index + 1 < checkoutStep);
    });

    // Update step content
    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 === checkoutStep);
    });
}

function validateStep1() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const street = document.getElementById('customerStreet').value.trim();
    const number = document.getElementById('customerNumber').value.trim();
    const neighborhood = document.getElementById('customerNeighborhood').value.trim();

    if (!name) {
        showToast('Campo obrigatório', 'Por favor, informe seu nome');
        return false;
    }

    if (phone.length < 14) {
        showToast('Telefone inválido', 'Por favor, informe um telefone válido');
        return false;
    }

    if (!street || !number || !neighborhood) {
        showToast('Endereço incompleto', 'Por favor, preencha todo o endereço');
        return false;
    }

    return true;
}

function togglePaymentView() {
    const paymentType = document.querySelector('input[name="payment"]:checked').value;
    document.getElementById('pixSection').style.display = paymentType === 'pix' ? 'block' : 'none';
    document.getElementById('cashSection').style.display = paymentType === 'dinheiro' ? 'block' : 'none';
}

function toggleChangeField() {
    const needsChange = document.querySelector('input[name="change"]:checked').value;
    document.getElementById('changeField').style.display = needsChange === 'yes' ? 'block' : 'none';
}

function generatePix() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity, 0);
    const total = subtotal + CONFIG.delivery;

    document.getElementById('pixAmount').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('pixKeyValue').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Generate PIX payload
    const payload = generatePixPayload(CONFIG.pix, CONFIG.pixName, CONFIG.pixCity, total);
    document.getElementById('pixCode').value = payload;

    // Generate QR Code
    const qrImg = document.getElementById('pixQR');
    const loading = document.getElementById('pixLoading');
    
    loading.classList.remove('hidden');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(payload)}&margin=10&color=32-BCAD&bgcolor=ffffff`;
    
    qrImg.onload = () => {
        loading.classList.add('hidden');
    };
}

function generatePixPayload(key, name, city, amount) {
    const tlv = (id, value) => {
        const idStr = id.toString().padStart(2, '0');
        const valueStr = value.toString();
        const length = valueStr.length.toString().padStart(2, '0');
        return idStr + length + valueStr;
    };

    const clean = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().substring(0, 25);

    let payload = '';
    payload += tlv('00', '01'); // Payload Format Indicator
    payload += tlv('01', '12'); // Point of Initiation (12 = dynamic)

    // Merchant Account Information
    let mai = '';
    mai += tlv('00', 'br.gov.bcb.pix');
    mai += tlv('01', key);
    payload += tlv('26', mai);

    payload += tlv('52', '0000'); // Merchant Category Code
    payload += tlv('53', '986'); // Transaction Currency (BRL)
    
    if (amount > 0) {
        payload += tlv('54', amount.toFixed(2)); // Transaction Amount
    }

    payload += tlv('58', 'BR'); // Country Code
    payload += tlv('59', clean(name)); // Merchant Name
    payload += tlv('60', clean(city)); // Merchant City
    payload += tlv('62', tlv('05', '***')); // Additional Data Field

    payload += '6304'; // CRC ID

    // Calculate CRC16
    payload += crc16(payload);

    return payload;
}

function crc16(buffer) {
    let crc = 0xFFFF;
    for (let i = 0; i < buffer.length; i++) {
        crc ^= buffer.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc <<= 1;
            }
            crc &= 0xFFFF;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function copyPixCode() {
    const input = document.getElementById('pixCode');
    input.select();
    document.execCommand('copy');
    showToast('Copiado!', 'Código PIX copiado para a área de transferência');
}

function copyPixKey() {
    const input = document.getElementById('pixKey');
    input.select();
    document.execCommand('copy');
    showToast('Copiado!', 'Chave PIX copiada para a área de transferência');
}

function populateReview() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity, 0);
    const total = subtotal + CONFIG.delivery;

    // Items
    document.getElementById('reviewItems').innerHTML = cart.map(item => `
        <div class="review-item">
            <span>${item.quantity}x ${item.name} ${item.modifiers.length > 0 ? `(${item.modifiers.join(', ')})` : ''}</span>
            <span>R$ ${((item.price + item.modifiersTotal) * item.quantity).toFixed(2).replace('.', ',')}</span>
        </div>
    `).join('');

    // Customer
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    document.getElementById('reviewCustomer').innerHTML = `${name}<br>${phone}`;

    // Address
    const street = document.getElementById('customerStreet').value;
    const number = document.getElementById('customerNumber').value;
    const neighborhood = document.getElementById('customerNeighborhood').value;
    const complement = document.getElementById('customerComplement').value;
    document.getElementById('reviewAddress').innerHTML = `${street}, ${number} - ${neighborhood}${complement ? `<br>${complement}` : ''}`;

    // Payment
    const paymentType = document.querySelector('input[name="payment"]:checked').value;
    const paymentLabels = { pix: 'PIX', cartao: 'Cartão', dinheiro: 'Dinheiro' };
    document.getElementById('reviewPayment').innerHTML = paymentLabels[paymentType];

    // Totals
    document.getElementById('reviewSubtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('reviewDelivery').textContent = `R$ ${CONFIG.delivery.toFixed(2).replace('.', ',')}`;
    document.getElementById('reviewTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// ============================================
// SEND TO WHATSAPP
// ============================================
function sendToWhatsApp() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const street = document.getElementById('customerStreet').value.trim();
    const number = document.getElementById('customerNumber').value.trim();
    const neighborhood = document.getElementById('customerNeighborhood').value.trim();
    const complement = document.getElementById('customerComplement').value.trim();
    const paymentType = document.querySelector('input[name="payment"]:checked').value;
    const needsChange = document.querySelector('input[name="change"]:checked')?.value;
    const changeAmount = document.getElementById('changeAmount')?.value;

    const subtotal = cart.reduce((sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity, 0);
    const total = subtotal + CONFIG.delivery;

    let message = `🏰 *IMPÉRIO LANCHES E PIZZARIA*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📋 *NOVO PEDIDO*\n\n`;

    // Items
    message += `*🛒 ITENS:*\n`;
    cart.forEach(item => {
        message += `  ${item.quantity}x ${item.name}`;
        if (item.modifiers.length > 0) {
            message += ` (${item.modifiers.join(', ')})`;
        }
        message += ` - R$ ${((item.price + item.modifiersTotal) * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    message += `🛵 *Entrega:* R$ ${CONFIG.delivery.toFixed(2).replace('.', ',')}\n`;
    message += `*💵 TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    // Customer
    message += `*👤 CLIENTE:*\n`;
    message += `  Nome: ${name}\n`;
    message += `  Tel: ${phone}\n\n`;

    // Address
    message += `*📍 ENDEREÇO:*\n`;
    message += `  ${street}, ${number} - ${neighborhood}\n`;
    if (complement) {
        message += `  ${complement}\n`;
    }

    // Payment
    const paymentLabels = { pix: 'PIX', cartao: 'Cartão', dinheiro: 'Dinheiro' };
    message += `\n*💳 PAGAMENTO:* ${paymentLabels[paymentType]}\n`;

    if (paymentType === 'dinheiro' && needsChange === 'yes' && changeAmount) {
        message += `  Troco para: ${changeAmount}\n`;
    }

    if (paymentType === 'pix') {
        message += `  _Valor: R$ ${total.toFixed(2).replace('.', ',')}_\n`;
    }

    message += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Pedido feito pelo site • ${new Date().toLocaleString('pt-BR')}_`;

    // Open WhatsApp
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // Clear cart and close
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckout();

    // Show success
    document.getElementById('successOverlay')?.classList.add('on');
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(title, message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMessage').textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// ============================================
// CLOSE ALL
// ============================================
function closeAll() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('productModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAll();
    }
});

// Scroll to category
function scrollToCategory(categoryId) {
    filterCategory(categoryId, document.querySelector(`.cat-link[onclick*="${categoryId}"]`));
}