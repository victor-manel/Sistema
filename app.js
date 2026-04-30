// ============================================================
// HORÁRIO DE FUNCIONAMENTO
// ============================================================
(function () {
  const horario = {
    abertura: "07:00",
    fechamento: "21:00",
    fechadoDomingo: true,
  };

  function validarLoja() {
    const agora = new Date();
    const diaSemana = agora.getDay();
    const horaAtual = agora.getHours() * 60 + agora.getMinutes();

    const [hA, mA] = horario.abertura.split(":").map(Number);
    const [hF, mF] = horario.fechamento.split(":").map(Number);
    const minAbre = hA * 60 + mA;
    const minFecha = hF * 60 + mF;

    let aberto = horaAtual >= minAbre && horaAtual < minFecha;
    if (horario.fechadoDomingo && diaSemana === 0) aberto = false;

    const container = document.getElementById("status-loja");
    const label = document.getElementById("label");

    if (container && label) {
      if (aberto) {
        container.classList.remove("fechado");
        container.classList.add("aberto");
        label.innerText = "Aberto agora";
      } else {
        container.classList.remove("aberto");
        container.classList.add("fechado");
        label.innerText = "Fechado no momento";
      }
    }

    const botoes = document.querySelectorAll('button, .btn, a[href*="whatsapp"]');
    botoes.forEach((btn) => {
      if (!aberto) {
        btn.style.pointerEvents = "none";
        btn.style.filter = "grayscale(1)";
        btn.style.opacity = "0.5";
        if (btn.tagName === "BUTTON") btn.disabled = true;
      } else {
        btn.style.pointerEvents = "auto";
        btn.style.filter = "none";
        btn.style.opacity = "1";
        if (btn.tagName === "BUTTON") btn.disabled = false;
      }
    });
  }

  validarLoja();
  setInterval(validarLoja, 1000);
})();

// ============================================================
// CONFIGURAÇÕES
// ============================================================
const CONFIG = {
  pix: "5584994994919",
  pixName: "IMPERIO LANCHES",
  pixCity: "NATAL",
  whatsapp: "5584994994919",
  delivery: 5.0,
  minOrder: 0,
};

// ============================================================
// CARDÁPIO
// ============================================================
const MENU = [
  {
    id: 1,
    category: "massas",
    name: "Cebola e Salsa",
    description: "Massa gourmet temperada com cebola e salsa fresca",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 2,
    category: "massas",
    name: "Bacon",
    description: "Massa gourmet com bacon crocante",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 3,
    category: "massas",
    name: "Queijo",
    description: "Massa gourmet sabor queijo",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 4,
    category: "pasteis-salgados",
    name: "Três Queijos",
    description: "Queijo mussarela, queijo coalho e catupiry",
    price: 7.0,
    image: "https://images.unsplash.com/photo-1548340748-6af6f4c4e0b2?w=400&q=80",
    badge: "MAIS PEDIDO",
    modifiers: [],
  },
  {
    id: 5,
    category: "pasteis-salgados",
    name: "Frango com Queijo",
    description: "Frango desfiado e queijo mussarela",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1542834369-f10ebf06d3e5?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 6,
    category: "pasteis-salgados",
    name: "Pizza",
    description: "Queijo mussarela, presunto, tomate e orégano",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 7,
    category: "pasteis-salgados",
    name: "Frango com Catupiry ou Cheddar",
    description: "Frango desfiado com catupiry ou cheddar",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=400&q=80",
    badge: null,
    modifiers: [
      {
        name: "Escolha o queijo",
        required: true,
        options: [
          { name: "Catupiry", price: 0 },
          { name: "Cheddar", price: 0 },
        ],
      },
    ],
  },
  {
    id: 8,
    category: "pasteis-salgados",
    name: "Frango com Bacon",
    description: "Frango, queijo mussarela e bacon",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1620374645498-af6bd680a0a9?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 9,
    category: "pasteis-salgados",
    name: "Carne com Catupiry ou Cheddar",
    description: "Carne com catupiry ou cheddar",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&q=80",
    badge: null,
    modifiers: [
      {
        name: "Escolha o queijo",
        required: true,
        options: [
          { name: "Catupiry", price: 0 },
          { name: "Cheddar", price: 0 },
        ],
      },
    ],
  },
  {
    id: 10,
    category: "pasteis-salgados",
    name: "Calabresa",
    description: "Calabresa e queijo mussarela",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 11,
    category: "pasteis-salgados",
    name: "Carne com Queijo",
    description: "Carne e queijo mussarela",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1619740455153-9df9e3de6c98?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 12,
    category: "pasteis-salgados",
    name: "Carne de Sol na Nata",
    description: "Carne na nata e queijo coalho",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    badge: "ESPECIAL",
    modifiers: [],
  },
  {
    id: 13,
    category: "pasteis-salgados",
    name: "Moda da Casa",
    description: "Frango, carne, calabresa, bacon e queijo mussarela",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80",
    badge: "RECOMENDADO",
    modifiers: [],
  },
  {
    id: 14,
    category: "pasteis-salgados",
    name: "Sertanejo",
    description: "Carne desfiada, queijo coalho, coentro e cebola roxa",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80",
    badge: "NOVO",
    modifiers: [],
  },
  {
    id: 15,
    category: "pasteis-doces",
    name: "Chocolate ao Leite",
    description: "Doce de leite, canela e açúcar. Com ou sem queijo.",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1511381939415-e44cd37af4fa?w=400&q=80",
    badge: null,
    modifiers: [
      {
        name: "Com queijo?",
        required: false,
        options: [
          { name: "Sem queijo", price: 0 },
          { name: "Com queijo", price: 0 },
        ],
      },
    ],
  },
  {
    id: 16,
    category: "pasteis-doces",
    name: "Chocolate Meio Amargo",
    description: "Doce de leite, canela e açúcar. Com ou sem queijo.",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    badge: null,
    modifiers: [
      {
        name: "Com queijo?",
        required: false,
        options: [
          { name: "Sem queijo", price: 0 },
          { name: "Com queijo", price: 0 },
        ],
      },
    ],
  },
  {
    id: 17,
    category: "pasteis-doces",
    name: "Romeu e Julieta",
    description: "Goiabada e queijo coalho",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 18,
    category: "pasteis-doces",
    name: "Churros",
    description: "Doce de leite, canela e açúcar",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80",
    badge: "DOCE",
    modifiers: [],
  },
  {
    id: 19,
    category: "hamburgueres",
    name: "X-Burg",
    description: "Pão, hambúrguer, queijo e presunto",
    price: 7.0,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 20,
    category: "hamburgueres",
    name: "Bauru",
    description: "Pão, hambúrguer, alface, tomate, ovo, queijo e presunto",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 21,
    category: "hamburgueres",
    name: "X-Bacon",
    description: "Pão, bacon, hambúrguer, ovo, queijo, presunto, alface e tomate",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
    badge: "MAIS PEDIDO",
    modifiers: [],
  },
  {
    id: 22,
    category: "hamburgueres",
    name: "X-Calabresa",
    description: "Pão, calabresa acebolada, hambúrguer, queijo mussarela, alface e tomate",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 23,
    category: "hamburgueres",
    name: "X-Tudo",
    description: "Pão, hambúrguer, ovo, bacon, salsicha, frango, presunto, queijo, alface e tomate",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
    badge: "FAVORITO",
    modifiers: [],
  },
  {
    id: 24,
    category: "hamburgueres",
    name: "X-Frango com Catupiry",
    description: "Pão, frango, catupiry, ovo, alface e tomate",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 25,
    category: "hamburgueres",
    name: "X-Carne de Sol",
    description: "Pão, carne de sol na nata, ovo, queijo, alface e tomate",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    badge: "ESPECIAL",
    modifiers: [],
  },
  {
    id: 26,
    category: "hamburgueres",
    name: "Moda da Casa",
    description: "Pão, hambúrguer duplo, ovo, presunto duplo, queijo duplo, bacon, frango, salsicha, catupiry, alface e tomate",
    price: 15.0,
    image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
    badge: "PREMIUM",
    modifiers: [],
  },
  {
    id: 27,
    category: "hamburgueres-artesanal",
    name: "X-Cheddar Artesanal",
    description: "Pão brioche, um hambúrguer artesanal (100g), queijo cheddar, bacon, cebola roxa, molho especial",
    price: 18.0,
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80",
    badge: "ARTESANAL",
    modifiers: [],
  },
  {
    id: 28,
    category: "hamburgueres-artesanal",
    name: "Duplo Cheddar",
    description: "Pão brioche, dois hambúrgueres artesanais (100g cada), queijo cheddar, bacon, cebola roxa, molho especial",
    price: 22.0,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80",
    badge: "PREMIUM",
    modifiers: [],
  },
  {
    id: 29,
    category: "tapioca",
    name: "Carne de Sol com Catupiry",
    description: "Tapioca recheada com carne de sol e catupiry",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 30,
    category: "tapioca",
    name: "Carne de Sol com Queijo",
    description: "Tapioca recheada com carne de sol e queijo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1617196034099-30df21e23fd9?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 31,
    category: "tapioca",
    name: "Frango com Catupiry",
    description: "Tapioca recheada com frango e catupiry",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 32,
    category: "tapioca",
    name: "Frango com Queijo",
    description: "Tapioca recheada com frango e queijo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 33,
    category: "tapioca",
    name: "Carne de Sol na Nata",
    description: "Tapioca recheada com carne de sol na nata",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 34,
    category: "tapioca",
    name: "Sertaneja",
    description: "Tapioca recheada com carne de sol, queijo coalho e coentro",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 35,
    category: "cuscuz",
    name: "Carne de Sol com Queijo",
    description: "Cuscuz recheado com carne de sol e queijo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 36,
    category: "cuscuz",
    name: "Frango com Queijo",
    description: "Cuscuz recheado com frango e queijo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 37,
    category: "cuscuz",
    name: "Calabresa",
    description: "Cuscuz recheado com calabresa e queijo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 38,
    category: "cuscuz",
    name: "Carne de Sol na Nata",
    description: "Cuscuz recheado com carne de sol na nata",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 39,
    category: "cachorro-quente",
    name: "Tradicional",
    description: "Pão, carne moída, salsicha, frango, batata palha, milho, ervilha e queijo ralado",
    price: 7.0,
    image: "https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 40,
    category: "cachorro-quente",
    name: "Carne na Nata",
    description: "Pão, carne de sol na nata, salsicha, milho, ervilha, batata palha e queijo ralado",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1583033269500-75f6db4a2266?w=400&q=80",
    badge: "ESPECIAL",
    modifiers: [],
  },
  {
    id: 41,
    category: "petiscos",
    name: "Batata Frita P",
    description: "Porção pequena de batata frita crocante",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 42,
    category: "petiscos",
    name: "Batata Frita G",
    description: "Porção grande de batata frita crocante",
    price: 14.0,
    image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 43,
    category: "petiscos",
    name: "Batata Frita com Bacon e Cheddar",
    description: "Batata frita com bacon crocante e cheddar cremoso",
    price: 20.0,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80",
    badge: "MAIS PEDIDA",
    modifiers: [],
  },
  {
    id: 44,
    category: "petiscos",
    name: "Batata Frita com Calabresa e Cheddar",
    description: "Batata frita com calabresa acebolada e cheddar cremoso",
    price: 20.0,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    badge: null,
    modifiers: [],
  },
  {
    id: 45,
    category: "milkshake",
    name: "Milk Shake 300ml",
    description: "Milk shake cremoso 300ml. Sabores: Morango, Chocolate, Ovomaltine, Chocomenta",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
    badge: "FAVORITO",
    modifiers: [
      {
        name: "Escolha o sabor",
        required: true,
        options: [
          { name: "Morango", price: 0 },
          { name: "Chocolate", price: 0 },
          { name: "Ovomaltine", price: 0 },
          { name: "Chocomenta", price: 0 },
        ],
      },
      {
        name: "Com chantilly?",
        required: false,
        options: [
          { name: "Sem chantilly", price: 0 },
          { name: "Com chantilly", price: 2.0 },
        ],
      },
    ],
  },
  {
    id: 46,
    category: "sorvete",
    name: "Sorvete 1 Bola",
    description: "Sorvete 1 bola. Sabores: Morango, Chocolate, Chocomenta",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
    badge: null,
    modifiers: [
      {
        name: "Escolha o sabor",
        required: true,
        options: [
          { name: "Morango", price: 0 },
          { name: "Chocolate", price: 0 },
          { name: "Chocomenta", price: 0 },
        ],
      },
    ],
  },
];

// ============================================================
// CATEGORIAS
// ============================================================
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
  { id: "sucos", name: "Sucos", icon: "🧃" },
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let cart = [];
let currentCategory = "todos";
let modalProduct = null;
let modalQty = 1;
let selectedModifiers = {};
let checkoutStep = 1;

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.classList.add("hidden");
  }, 2000);

  renderCategories();
  renderMenu();
  window.addEventListener("scroll", handleScroll);
  loadCart();

  const phoneInput = document.getElementById("customerPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      e.target.value = value;
    });
  }
});

// ============================================================
// SCROLL
// ============================================================
function handleScroll() {
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");
  if (header) header.classList.toggle("scrolled", window.scrollY > 50);
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// CATEGORIAS
// ============================================================
function renderCategories() {
  const nav = document.getElementById("categoryNav");
  if (!nav) return;
  nav.innerHTML = CATEGORIES.map(
    (cat) => `
    <button class="cat-link ${cat.id === currentCategory ? "active" : ""}"
            onclick="filterCategory('${cat.id}', this)">
      ${cat.icon} ${cat.name}
    </button>
  `
  ).join("");
}

function filterCategory(categoryId, element) {
  currentCategory = categoryId;
  document.querySelectorAll(".cat-link").forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
  renderMenu();
  if (categoryId !== "todos") {
    setTimeout(() => {
      const section = document.getElementById(`category-${categoryId}`);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

// ============================================================
// MENU
// ============================================================
function renderMenu() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  const filtered =
    currentCategory === "todos"
      ? MENU
      : MENU.filter((item) => item.category === currentCategory);

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  container.innerHTML = Object.keys(grouped)
    .map((categoryId) => {
      const category = CATEGORIES.find((c) => c.id === categoryId);
      const items = grouped[categoryId];
      return `
      <section class="category-section" id="category-${categoryId}">
        <div class="section-header">
          <div class="section-icon">${category?.icon || "🍽️"}</div>
          <h2 class="section-title">${category?.name || categoryId}</h2>
        </div>
        <div class="products-grid">
          ${items.map((item) => renderProductCard(item)).join("")}
        </div>
      </section>
    `;
    })
    .join("");
}

function renderProductCard(product) {
  return `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">R$ ${product.price.toFixed(2).replace(".", ",")}</span>
          <button class="btn-add-quick" onclick="event.stopPropagation(); quickAdd(${product.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// BUSCA
// ============================================================
function searchMenu() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const searchClear = document.getElementById("searchClear");
  if (searchClear) searchClear.classList.toggle("visible", query.length > 0);

  const filtered = MENU.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );

  const container = document.getElementById("menuContainer");
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:60px 20px;">
        <div style="font-size:64px;margin-bottom:16px;opacity:0.3;">🔍</div>
        <h3 style="font-size:20px;margin-bottom:8px;">Nenhum produto encontrado</h3>
        <p style="color:var(--text-secondary);">Tente buscar por outro termo</p>
      </div>`;
    return;
  }

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  container.innerHTML = Object.keys(grouped)
    .map((categoryId) => {
      const category = CATEGORIES.find((c) => c.id === categoryId);
      return `
      <section class="category-section">
        <div class="section-header">
          <div class="section-icon">${category?.icon || "🍽️"}</div>
          <h2 class="section-title">${category?.name || categoryId}</h2>
        </div>
        <div class="products-grid">
          ${grouped[categoryId].map((item) => renderProductCard(item)).join("")}
        </div>
      </section>`;
    })
    .join("");
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  const searchClear = document.getElementById("searchClear");
  if (searchClear) searchClear.classList.remove("visible");
  searchMenu();
}

// ============================================================
// MODAL DE PRODUTO
// ============================================================
function quickAdd(productId) {
  const product = MENU.find((p) => p.id === productId);
  if (!product) return;
  if (product.modifiers && product.modifiers.length > 0) {
    openProductModal(productId);
    return;
  }
  const existingItem = cart.find((item) => item.productId === productId);
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
      modifiersTotal: 0,
    });
  }
  saveCart();
  updateCartUI();
  showToast("Adicionado!", `${product.name} foi adicionado ao carrinho`);
}

function openProductModal(productId) {
  const product = MENU.find((p) => p.id === productId);
  if (!product) return;

  modalProduct = product;
  modalQty = 1;
  selectedModifiers = {};

  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalBadge").textContent = product.badge || "";
  document.getElementById("modalBadge").style.display = product.badge ? "block" : "none";
  document.getElementById("modalCategory").textContent =
    CATEGORIES.find((c) => c.id === product.category)?.name || "";
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalQty").textContent = modalQty;

  renderModifiers(product);
  updateModalPrice();

  document.getElementById("productModal").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function renderModifiers(product) {
  const container = document.getElementById("modalModifiers");
  if (!product.modifiers || product.modifiers.length === 0) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = product.modifiers
    .map(
      (modifier, modIndex) => `
    <div class="modifier-group">
      <div class="modifier-title">
        ${modifier.required ? '<i class="fas fa-asterisk" style="color:var(--primary);font-size:10px;"></i>' : ""}
        ${modifier.name}
        ${modifier.maxSelections ? `(Máx: ${modifier.maxSelections})` : ""}
      </div>
      <div class="modifier-options">
        ${modifier.options
          .map(
            (option, optIndex) => `
          <label class="modifier-option" onclick="selectModifier(${modIndex},${optIndex},'${option.name}',${option.price})">
            <input type="${modifier.maxSelections ? "checkbox" : "radio"}"
                   name="modifier-${modIndex}" value="${option.name}">
            <div class="option-content">
              <span class="option-name">${option.name}</span>
              ${option.price > 0 ? `<span class="option-price">+ R$ ${option.price.toFixed(2).replace(".", ",")}</span>` : ""}
            </div>
          </label>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("");
}

function selectModifier(modIndex, optIndex, optionName, optionPrice) {
  const modifier = modalProduct.modifiers[modIndex];
  if (!selectedModifiers[modIndex]) selectedModifiers[modIndex] = [];

  if (modifier.maxSelections) {
    const existing = selectedModifiers[modIndex].find((m) => m.optionIndex === optIndex);
    if (existing) {
      selectedModifiers[modIndex] = selectedModifiers[modIndex].filter(
        (m) => m.optionIndex !== optIndex
      );
    } else {
      if (selectedModifiers[modIndex].length >= modifier.maxSelections) {
        showToast("Limite atingido", `Máximo de ${modifier.maxSelections} opções`);
        return;
      }
      selectedModifiers[modIndex].push({ optionIndex: optIndex, name: optionName, price: optionPrice });
    }
  } else {
    selectedModifiers[modIndex] = [{ optionIndex: optIndex, name: optionName, price: optionPrice }];
  }

  document.querySelectorAll(`input[name="modifier-${modIndex}"]`).forEach((input, idx) => {
    input.parentElement.classList.toggle("selected", idx === optIndex);
  });

  updateModalPrice();
}

function updateModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById("modalQty").textContent = modalQty;
  updateModalPrice();
}

function updateModalPrice() {
  const modifiersTotal = Object.values(selectedModifiers)
    .flat()
    .reduce((sum, mod) => sum + mod.price, 0);
  const unitPrice = modalProduct.price + modifiersTotal;
  const total = unitPrice * modalQty;
  document.getElementById("modalPrice").textContent = `R$ ${unitPrice.toFixed(2).replace(".", ",")}`;
  document.getElementById("modalTotal").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function addToCartFromModal() {
  if (!modalProduct) return;

  for (const modifier of modalProduct.modifiers) {
    const modIndex = modalProduct.modifiers.indexOf(modifier);
    if (modifier.required && (!selectedModifiers[modIndex] || selectedModifiers[modIndex].length === 0)) {
      showToast("Atenção", `Por favor, selecione: ${modifier.name}`);
      return;
    }
  }

  const modifiersTotal = Object.values(selectedModifiers)
    .flat()
    .reduce((sum, mod) => sum + mod.price, 0);
  const modifiersList = Object.values(selectedModifiers)
    .flat()
    .map((m) => m.name);

  const existingItem = cart.find(
    (item) =>
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
      modifiersTotal,
    });
  }

  saveCart();
  updateCartUI();
  closeProductModal();
  showToast("Adicionado!", `${modalProduct.name} foi adicionado ao carrinho`);
}

// ============================================================
// CARRINHO
// ============================================================
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity,
    0
  );
  const total = subtotal + CONFIG.delivery;

  const fmt = (v) => `R$ ${v.toFixed(2).replace(".", ",")}`;

  // Badge e barra flutuante
  const cartBadge = document.getElementById("cartBadge");
  const cartBar = document.getElementById("cartBar");
  const cartBarQty = document.getElementById("cartBarQty");
  const cartBarTotal = document.getElementById("cartBarTotal");

  if (cartBadge) cartBadge.textContent = totalItems;
  if (cartBarQty) cartBarQty.textContent = totalItems;
  if (cartBarTotal) cartBarTotal.textContent = fmt(total);
  if (cartBar) cartBar.style.display = totalItems > 0 ? "flex" : "none";

  // Itens
  const cartEmpty = document.getElementById("cartEmpty");
  const cartItems = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");

  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = "block";
    if (cartItems) cartItems.innerHTML = "";
    if (cartFooter) cartFooter.style.display = "none";
  } else {
    if (cartEmpty) cartEmpty.style.display = "none";
    if (cartItems)
      cartItems.innerHTML = cart
        .map(
          (item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            ${item.modifiers.length > 0 ? `<div class="cart-item-modifiers">${item.modifiers.join(", ")}</div>` : ""}
            <div class="cart-item-price">${fmt((item.price + item.modifiersTotal) * item.quantity)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateCartQuantity(${index},-1)"><i class="fas fa-minus"></i></button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${index},1)"><i class="fas fa-plus"></i></button>
              <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>`
        )
        .join("");
    if (cartFooter) cartFooter.style.display = "block";
  }

  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");
  if (cartSubtotal) cartSubtotal.textContent = fmt(subtotal);
  if (cartTotal) cartTotal.textContent = fmt(total);
}

function updateCartQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
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
  if (confirm("Deseja realmente limpar seu carrinho?")) {
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Carrinho limpo", "Todos os itens foram removidos");
  }
}

function saveCart() {
  localStorage.setItem("imperio_cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("imperio_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch {
      cart = [];
    }
    updateCartUI();
  }
}

// ============================================================
// CHECKOUT
// ============================================================
function openCheckout() {
  if (cart.length === 0) {
    showToast("Carrinho vazio", "Adicione itens antes de finalizar");
    return;
  }
  toggleCart();
  checkoutStep = 1;
  updateCheckoutSteps();
  document.getElementById("checkoutModal").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function goToStep(step) {
  if (step > checkoutStep && checkoutStep === 1 && !validateStep1()) return;
  checkoutStep = step;
  updateCheckoutSteps();
  if (step === 2) {
    updatePaymentValues();
    generatePix();
  }
  if (step === 3) populateReview();
}

function updateCheckoutSteps() {
  document.querySelectorAll(".step").forEach((step, index) => {
    step.classList.toggle("active", index + 1 === checkoutStep);
    step.classList.toggle("completed", index + 1 < checkoutStep);
  });
  document.querySelectorAll(".step-line").forEach((line, index) => {
    line.classList.toggle("completed", index + 1 < checkoutStep);
  });
  document.querySelectorAll(".checkout-step").forEach((step, index) => {
    step.classList.toggle("active", index + 1 === checkoutStep);
  });
}

function validateStep1() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const street = document.getElementById("customerStreet").value.trim();
  const number = document.getElementById("customerNumber").value.trim();
  const neighborhood = document.getElementById("customerNeighborhood").value.trim();

  if (!name) { showToast("Campo obrigatório", "Informe seu nome"); return false; }
  if (phone.length < 14) { showToast("Telefone inválido", "Informe um telefone válido"); return false; }
  if (!street || !number || !neighborhood) { showToast("Endereço incompleto", "Preencha todo o endereço"); return false; }
  return true;
}

function togglePaymentView() {
  const paymentType = document.querySelector('input[name="payment"]:checked').value;
  document.getElementById("pixSection").style.display = paymentType === "pix" ? "block" : "none";
  document.getElementById("cashSection").style.display = paymentType === "dinheiro" ? "block" : "none";
}

function toggleChangeField() {
  const needsChange = document.querySelector('input[name="change"]:checked').value;
  document.getElementById("changeField").style.display = needsChange === "yes" ? "block" : "none";
}

// ============================================================
// VALORES NAS FORMAS DE PAGAMENTO
// ============================================================
function updatePaymentValues() {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity,
    0
  );
  const total = subtotal + CONFIG.delivery;
  const formatted = `R$ ${total.toFixed(2).replace(".", ",")}`;

  const ids = ["paymentTotalDisplay", "pixCardValue", "cartaoCardValue", "dinheiroCardValue"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = formatted;
  });
}

// ============================================================
// GERAÇÃO DO PIX
// ============================================================
function generatePix() {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity,
    0
  );
  const total = subtotal + CONFIG.delivery;
  const fmt = `R$ ${total.toFixed(2).replace(".", ",")}`;

  // Atualiza valores na tela
  const elAmount = document.getElementById("pixAmount");
  const elKeyValue = document.getElementById("pixKeyValue");
  if (elAmount) elAmount.textContent = fmt;
  if (elKeyValue) elKeyValue.textContent = fmt;

  // Gera o payload
  const payload = buildPixPayload(
    CONFIG.pix,
    CONFIG.pixName,
    CONFIG.pixCity,
    total
  );

  console.log("Payload PIX gerado:", payload); // Para debug

  // Coloca no campo de texto
  const pixInput = document.getElementById("pixCode");
  if (pixInput) pixInput.value = payload;

  // Gera QR Code
  const qrImg = document.getElementById("pixQR");
  const loading = document.getElementById("pixLoading");

  if (qrImg && loading) {
    loading.style.display = "flex";
    qrImg.style.display = "none";

    // Limpa src antigo para forçar reload
    qrImg.src = "";

    const qrUrl =
      "https://api.qrserver.com/v1/create-qr-code/?" +
      "size=220x220" +
      "&ecc=M" +
      "&margin=10" +
      "&data=" +
      encodeURIComponent(payload);

    qrImg.onload = () => {
      loading.style.display = "none";
      qrImg.style.display = "block";
    };

    qrImg.onerror = () => {
      // Fallback com segunda API
      const fallbackUrl =
        "https://quickchart.io/qr?" +
        "size=220" +
        "&margin=2" +
        "&text=" +
        encodeURIComponent(payload);

      qrImg.onerror = () => {
        loading.style.display = "none";
        loading.innerHTML =
          "<span style='color:red;font-size:13px;'>Erro ao gerar QR Code.<br>Use o código Copia e Cola.</span>";
      };

      qrImg.src = fallbackUrl;
    };

    qrImg.src = qrUrl;
  }
}

// ============================================================
// PAYLOAD PIX — padrão Banco Central do Brasil
// ============================================================
function buildPixPayload(chavePix, nome, cidade, valor) {
  // Telefone brasileiro: precisa do +55 na frente
  // Ex: 84994994919 → +5584994994919
  let chave = chavePix.replace(/\D/g, ""); // Remove tudo que não for número
  if (chave.length === 11 || chave.length === 10) {
    // Telefone celular ou fixo brasileiro sem DDI
    chave = "+55" + chave;
  } else if (chave.length === 13 && chave.startsWith("55")) {
    // Já tem DDI mas sem o +
    chave = "+" + chave;
  }
  // Se já começar com +55, mantém como está

  // Limpa nome e cidade (sem acento, maiúsculo, max 25 chars)
  const limpar = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^a-zA-Z0-9 ]/g, "")  // Remove caracteres especiais
      .toUpperCase()
      .substring(0, 25)
      .trim();

  const nomeLimpo = limpar(nome);
  const cidadeLimpa = limpar(cidade);

  // Função TLV: ID (2 dígitos) + tamanho (2 dígitos) + valor
  const f = (id, v) => {
    const s = String(v);
    return (
      String(id).padStart(2, "0") +
      String(s.length).padStart(2, "0") +
      s
    );
  };

  // Campo 26 — Merchant Account Info
  // Subcampo 00: GUI do PIX
  // Subcampo 01: chave PIX
  const gui = "br.gov.bcb.pix";
  const mai = f("00", gui) + f("01", chave);

  // Campo 62 — Additional Data Field
  // Subcampo 05: txid (identificador da transação)
  const txid = f("05", "***");

  // Monta o payload sem o CRC ainda
  let payload =
    f("00", "01")            + // Payload Format Indicator
    f("01", "12")            + // Point of Initiation (12 = com valor fixo)
    f("26", mai)             + // Merchant Account Info
    f("52", "0000")          + // Merchant Category Code
    f("53", "986")           + // Transaction Currency (986 = BRL)
    f("54", valor.toFixed(2))+ // Transaction Amount (ex: "25.00")
    f("58", "BR")            + // Country Code
    f("59", nomeLimpo)       + // Merchant Name
    f("60", cidadeLimpa)     + // Merchant City
    f("62", txid)            + // Additional Data
    "6304";                    // CRC ID (sem o valor ainda)

  // Calcula e adiciona o CRC16-CCITT
  payload += calcCRC16(payload);

  return payload;
}

// ============================================================
// CRC16-CCITT — algoritmo exigido pelo Banco Central
// ============================================================
function calcCRC16(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

// ============================================================
// COPIAR PIX
// ============================================================
async function copyPixCode() {
  const input = document.getElementById("pixCode");
  if (!input || !input.value) {
    showToast("Erro", "Código PIX não gerado ainda");
    return;
  }
  try {
    await navigator.clipboard.writeText(input.value);
    showToast("Copiado! ✅", "Código PIX copiado com sucesso");
  } catch {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast("Copiado! ✅", "Código PIX copiado");
  }
}

async function copyPixKey() {
  const input = document.getElementById("pixKey");
  if (!input) return;
  try {
    await navigator.clipboard.writeText(input.value);
    showToast("Copiado! ✅", "Chave PIX copiada com sucesso");
  } catch {
    input.select();
    document.execCommand("copy");
    showToast("Copiado! ✅", "Chave PIX copiada");
  }
}

// ============================================================
// REVISÃO DO PEDIDO
// ============================================================
function populateReview() {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity,
    0
  );
  const total = subtotal + CONFIG.delivery;
  const fmt = (v) => `R$ ${v.toFixed(2).replace(".", ",")}`;

  const reviewItems = document.getElementById("reviewItems");
  if (reviewItems)
    reviewItems.innerHTML = cart
      .map(
        (item) => `
      <div class="review-item">
        <span>${item.quantity}x ${item.name}${item.modifiers.length > 0 ? ` (${item.modifiers.join(", ")})` : ""}</span>
        <span>${fmt((item.price + item.modifiersTotal) * item.quantity)}</span>
      </div>`
      )
      .join("");

  const name = document.getElementById("customerName")?.value || "";
  const phone = document.getElementById("customerPhone")?.value || "";
  const reviewCustomer = document.getElementById("reviewCustomer");
  if (reviewCustomer) reviewCustomer.innerHTML = `${name}<br>${phone}`;

  const street = document.getElementById("customerStreet")?.value || "";
  const number = document.getElementById("customerNumber")?.value || "";
  const neighborhood = document.getElementById("customerNeighborhood")?.value || "";
  const complement = document.getElementById("customerComplement")?.value || "";
  const reviewAddress = document.getElementById("reviewAddress");
  if (reviewAddress)
    reviewAddress.innerHTML = `${street}, ${number} - ${neighborhood}${complement ? `<br>${complement}` : ""}`;

  const paymentType = document.querySelector('input[name="payment"]:checked')?.value || "pix";
  const paymentLabels = { pix: "PIX ✅", cartao: "Cartão 💳", dinheiro: "Dinheiro 💵" };
  const reviewPayment = document.getElementById("reviewPayment");
  if (reviewPayment) reviewPayment.innerHTML = paymentLabels[paymentType] || paymentType;

  const elSub = document.getElementById("reviewSubtotal");
  const elDel = document.getElementById("reviewDelivery");
  const elTot = document.getElementById("reviewTotal");
  if (elSub) elSub.textContent = fmt(subtotal);
  if (elDel) elDel.textContent = fmt(CONFIG.delivery);
  if (elTot) elTot.textContent = fmt(total);
}

// ============================================================
// ENVIO WHATSAPP
// ============================================================
function sendToWhatsApp() {
  const name = document.getElementById("customerName")?.value.trim() || "";
  const phone = document.getElementById("customerPhone")?.value.trim() || "";
  const street = document.getElementById("customerStreet")?.value.trim() || "";
  const number = document.getElementById("customerNumber")?.value.trim() || "";
  const neighborhood = document.getElementById("customerNeighborhood")?.value.trim() || "";
  const complement = document.getElementById("customerComplement")?.value.trim() || "";
  const paymentType = document.querySelector('input[name="payment"]:checked')?.value || "pix";
  const needsChange = document.querySelector('input[name="change"]:checked')?.value;
  const changeAmount = document.getElementById("changeAmount")?.value || "";

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price + item.modifiersTotal) * item.quantity,
    0
  );
  const total = subtotal + CONFIG.delivery;
  const fmt = (v) => `R$ ${v.toFixed(2).replace(".", ",")}`;

  let msg = `🏰 *IMPÉRIO LANCHES E PIZZARIA*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 *NOVO PEDIDO*\n\n`;
  msg += `*🛒 ITENS:*\n`;

  cart.forEach((item) => {
    msg += `  ${item.quantity}x ${item.name}`;
    if (item.modifiers.length > 0) msg += ` (${item.modifiers.join(", ")})`;
    msg += ` - ${fmt((item.price + item.modifiersTotal) * item.quantity)}\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Subtotal:* ${fmt(subtotal)}\n`;
  msg += `🛵 *Entrega:* ${fmt(CONFIG.delivery)}\n`;
  msg += `*💵 TOTAL: ${fmt(total)}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `*👤 CLIENTE:*\n  Nome: ${name}\n  Tel: ${phone}\n\n`;
  msg += `*📍 ENDEREÇO:*\n  ${street}, ${number} - ${neighborhood}\n`;
  if (complement) msg += `  ${complement}\n`;

  const paymentLabels = { pix: "PIX", cartao: "Cartão", dinheiro: "Dinheiro" };
  msg += `\n*💳 PAGAMENTO:* ${paymentLabels[paymentType] || paymentType}\n`;
  if (paymentType === "dinheiro" && needsChange === "yes" && changeAmount)
    msg += `  Troco para: ${changeAmount}\n`;
  if (paymentType === "pix")
    msg += `  _Valor exato: ${fmt(total)}_\n`;

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Pedido via site • ${new Date().toLocaleString("pt-BR")}_`;

  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");

  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
}

// ============================================================
// TOAST
// ============================================================
function showToast(title, message) {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");
  if (!toast) return;
  if (toastTitle) toastTitle.textContent = title;
  if (toastMessage) toastMessage.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// ============================================================
// FECHAR TUDO
// ============================================================
function closeAll() {
  ["cartSidebar", "checkoutModal", "productModal"].forEach((id) => {
    document.getElementById(id)?.classList.remove("active");
  });
  document.getElementById("overlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

function scrollToCategory(categoryId) {
  const btn = document.querySelector(`.cat-link[onclick*="${categoryId}"]`);
  if (btn) filterCategory(categoryId, btn);
}