const flavors = [
  { id: 'choco-classico', name: 'Choco clássico', description: 'massa amanteigada + gotas belgas', price: 12.9, category: 'queridinhos', tone: 'tone-orange', tag: 'queridinho' },
  { id: 'red-velvet', name: 'Red velvet', description: 'cacau, chocolate branco + cream cheese', price: 14.9, category: 'queridinhos', tone: 'tone-pink', tag: 'queridinho' },
  { id: 'pistache-sal', name: 'Pistache & sal', description: 'pistache torrado + flor de sal', price: 16.9, category: 'queridinhos', tone: 'tone-sage', tag: 'novo' },
  { id: 'triplo-choco', name: 'Triplo chocolate', description: 'cacau intenso + 3 chocolates', price: 15.9, category: 'chocolate', tone: 'tone-purple', tag: 'intenso' },
  { id: 'caramelo-flor', name: 'Caramelo flor de sal', description: 'caramelo cremoso + sal marinho', price: 14.9, category: 'queridinhos', tone: 'tone-yellow', tag: 'queridinho' },
  { id: 'limão-merengue', name: 'Limão merengue', description: 'limão siciliano + merengue tostado', price: 13.9, category: 'frutados', tone: 'tone-yellow', tag: 'fresco' },
  { id: 'red-bloom', name: 'Frutas vermelhas', description: 'framboesa, cranberry + chocolate branco', price: 15.9, category: 'frutados', tone: 'tone-pink', tag: 'novo' },
  { id: 'doce-leite', name: 'Doce de leite', description: 'massa baunilha + coração cremoso', price: 13.9, category: 'queridinhos', tone: 'tone-orange', tag: 'queridinho' },
  { id: 'matcha-branco', name: 'Matcha branco', description: 'matcha suave + chocolate branco', price: 15.9, category: 'queridinhos', tone: 'tone-sage', tag: 'novo' },
  { id: 'cafe-nibs', name: 'Café & nibs', description: 'café coado + nibs de cacau', price: 14.9, category: 'chocolate', tone: 'tone-purple', tag: 'intenso' },
  { id: 'coco-queimado', name: 'Coco queimado', description: 'coco tostado + caramelo salgado', price: 13.9, category: 'frutados', tone: 'tone-yellow', tag: 'fresco' },
  { id: 'banoffee', name: 'Banoffee', description: 'banana, canela + toffee', price: 14.9, category: 'frutados', tone: 'tone-orange', tag: 'queridinho' },
  { id: 'brownie', name: 'Brownie', description: 'cacau 70% + gotas derretidas', price: 14.9, category: 'chocolate', tone: 'tone-purple', tag: 'intenso' },
  { id: 'laranja-choco', name: 'Laranja & chocolate', description: 'laranja confitada + cacau', price: 14.9, category: 'frutados', tone: 'tone-orange', tag: 'fresco' },
  { id: 'macadamia', name: 'Macadâmia branca', description: 'macadâmia crocante + baunilha', price: 16.9, category: 'queridinhos', tone: 'tone-yellow', tag: 'novo' },
  { id: 'morango-cereja', name: 'Morango & cereja', description: 'geleia artesanal + chocolate branco', price: 15.9, category: 'frutados', tone: 'tone-pink', tag: 'fresco' },
  { id: 'aveia-passas', name: 'Aveia & passas', description: 'aveia tostada + canela', price: 12.9, category: 'sem açúcar', tone: 'tone-sage', tag: 'leve' },
  { id: 'amendoim', name: 'Amendoim salgado', description: 'pasta de amendoim + flor de sal', price: 13.9, category: 'sem açúcar', tone: 'tone-yellow', tag: 'leve' },
  { id: 'tahine', name: 'Tahine & gergelim', description: 'tahine cremoso + gergelim tostado', price: 14.9, category: 'sem açúcar', tone: 'tone-sage', tag: 'leve' },
  { id: 'cacau-nibs', name: 'Cacau & nibs', description: 'cacau 70% + nibs crocantes', price: 14.9, category: 'sem açúcar', tone: 'tone-purple', tag: 'leve' },
  { id: 'maracuja', name: 'Maracujá cremoso', description: 'curd de maracujá + chocolate branco', price: 15.9, category: 'frutados', tone: 'tone-yellow', tag: 'fresco' },
  { id: 'canela-roll', name: 'Canela roll', description: 'açúcar mascavo + canela + glacê', price: 13.9, category: 'queridinhos', tone: 'tone-orange', tag: 'queridinho' },
  { id: 'menta-choco', name: 'Menta & choco', description: 'menta fresca + chocolate amargo', price: 14.9, category: 'chocolate', tone: 'tone-sage', tag: 'intenso' },
  { id: 'caju-caramelo', name: 'Caju & caramelo', description: 'castanha de caju + caramelo', price: 15.9, category: 'queridinhos', tone: 'tone-orange', tag: 'novo' }
];

const state = { filter: 'todos', search: '', cart: JSON.parse(localStorage.getItem('cookieira-cart') || '{}') };
const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const byId = id => document.getElementById(id);

function productVisual(flavor, compact = false) {
  return `<div class="product-visual ${flavor.tone}${compact ? ' cart-item-visual' : ''}"><span class="product-cookie" aria-hidden="true"></span></div>`;
}

function renderCatalog() {
  const grid = byId('catalogGrid');
  const search = state.search.toLocaleLowerCase('pt-BR');
  const visible = flavors.filter(flavor => {
    const matchesFilter = state.filter === 'todos' || flavor.category === state.filter;
    const matchesSearch = !search || `${flavor.name} ${flavor.description} ${flavor.category}`.toLocaleLowerCase('pt-BR').includes(search);
    return matchesFilter && matchesSearch;
  });
  byId('emptyState').hidden = visible.length > 0;
  grid.innerHTML = visible.map(flavor => `
    <article class="product-card">
      ${productVisual(flavor)}
      <span class="card-tag">${flavor.tag}</span>
      <button class="favorite-button" type="button" aria-label="Favoritar ${flavor.name}">♡</button>
      <div class="product-info">
        <h3 class="product-name">${flavor.name}</h3>
        <p class="product-description">${flavor.description}</p>
        <div class="product-bottom"><strong class="product-price">${money(flavor.price)}</strong><button class="product-add" type="button" data-add="${flavor.id}" aria-label="Adicionar ${flavor.name}">+</button></div>
      </div>
    </article>`).join('');
}

function cartEntries() {
  return Object.entries(state.cart).map(([id, quantity]) => ({ flavor: flavors.find(flavor => flavor.id === id), quantity })).filter(item => item.flavor && item.quantity > 0);
}

function saveCart() {
  localStorage.setItem('cookieira-cart', JSON.stringify(state.cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
  byId('cartCount').textContent = count;
  byId('cartCount').setAttribute('aria-label', `${count} item${count === 1 ? '' : 's'} no carrinho`);
}

function renderCart() {
  const entries = cartEntries();
  const items = byId('cartItems');
  byId('cartEmpty').style.display = entries.length ? 'none' : 'flex';
  byId('cartSummary').hidden = !entries.length;
  items.innerHTML = entries.map(({ flavor, quantity }) => `
    <div class="cart-item">
      ${productVisual(flavor, true)}
      <div class="cart-item-info"><h3>${flavor.name}</h3><p>${money(flavor.price)} por unidade</p><div class="quantity-controls"><button type="button" data-decrease="${flavor.id}" aria-label="Diminuir quantidade">−</button><span>${quantity}</span><button type="button" data-increase="${flavor.id}" aria-label="Aumentar quantidade">+</button></div></div>
      <strong class="cart-item-price">${money(flavor.price * quantity)}</strong>
    </div>`).join('');
  const subtotal = entries.reduce((sum, { flavor, quantity }) => sum + flavor.price * quantity, 0);
  byId('cartSubtotal').textContent = money(subtotal);
}

function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCart();
  const flavor = flavors.find(item => item.id === id);
  showToast(`${flavor.name} entrou no carrinho`);
}

function changeQuantity(id, amount) {
  state.cart[id] = (state.cart[id] || 0) + amount;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart();
}

function openCart() {
  byId('cartDrawer').classList.add('open');
  byId('cartDrawer').setAttribute('aria-hidden', 'false');
  byId('drawerBackdrop').classList.add('open');
  document.body.classList.add('drawer-open');
}

function closeCart() {
  byId('cartDrawer').classList.remove('open');
  byId('cartDrawer').setAttribute('aria-hidden', 'true');
  byId('drawerBackdrop').classList.remove('open');
  document.body.classList.remove('drawer-open');
}

function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
}

async function searchOpenFoodFacts(term) {
  const status = byId('apiStatus');
  const results = byId('apiResults');
  const button = byId('apiSearchButton');
  const cleanTerm = term.trim();
  if (!cleanTerm) {
    status.textContent = 'Digite um ingrediente ou produto para começar.';
    results.innerHTML = '<div class="api-placeholder"><span>⌕</span><p>qual cookie você<br />quer investigar?</p></div>';
    return;
  }
  button.disabled = true;
  button.textContent = 'buscando...';
  status.textContent = `Consultando produtos reais para “${cleanTerm}”...`;
  results.innerHTML = '<div class="api-placeholder"><span>◌</span><p>abrindo o forno<br />da internet...</p></div>';
  const endpoint = `https://world.openfoodfacts.org/api/v2/search?search_terms=${encodeURIComponent(cleanTerm)}&fields=product_name,brands,categories,nutriscore_grade,image_front_small_url&page_size=4`;
  try {
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('API indisponível');
    const data = await response.json();
    const products = Array.isArray(data.products) ? data.products.filter(product => product.product_name).slice(0, 4) : [];
    if (!products.length) {
      status.textContent = 'A busca terminou, mas nenhum produto apareceu.';
      results.innerHTML = '<div class="api-placeholder"><span>⌁</span><p>nenhum resultado por aqui.<br />tente outro termo.</p></div>';
      return;
    }
    status.textContent = `${products.length} descoberta${products.length > 1 ? 's' : ''} encontrada${products.length > 1 ? 's' : ''} na base aberta.`;
    results.innerHTML = products.map(product => {
      const name = escapeHTML(product.product_name);
      const brand = escapeHTML(product.brands || 'marca não informada');
      const categories = escapeHTML((product.categories || 'categoria não informada').split(',').slice(0, 2).join(', '));
      const grade = escapeHTML((product.nutriscore_grade || '—').toUpperCase());
      const image = product.image_front_small_url ? `<img src="${escapeHTML(product.image_front_small_url)}" alt="" loading="lazy" />` : '<span>◒</span>';
      return `<article class="api-result-card"><div class="api-thumb">${image}</div><div><p class="api-result-name">${name}</p><p class="api-result-meta">${brand} · ${categories}</p></div><div class="api-result-grade"><strong>${grade}</strong>nutriscore</div></article>`;
    }).join('');
  } catch (error) {
    status.textContent = 'Não conseguimos alcançar a base agora.';
    results.innerHTML = '<div class="api-placeholder"><span>☁</span><p>o radar tirou uma pausa.<br />tente novamente em instantes.</p></div>';
  } finally {
    button.disabled = false;
    button.innerHTML = 'buscar <span aria-hidden="true">↗</span>';
  }
}

function init() {
  renderCatalog();
  renderCart();
  updateCartCount();
  byId('catalogSearch').addEventListener('input', event => { state.search = event.target.value; renderCatalog(); });
  byId('filterList').addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    state.filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(item => item.classList.toggle('active', item === button));
    renderCatalog();
  });
  byId('catalogGrid').addEventListener('click', event => {
    const add = event.target.closest('[data-add]');
    if (add) addToCart(add.dataset.add);
    const favorite = event.target.closest('.favorite-button');
    if (favorite) { favorite.classList.toggle('saved'); favorite.textContent = favorite.classList.contains('saved') ? '♥' : '♡'; }
  });
  byId('cartItems').addEventListener('click', event => {
    const increase = event.target.closest('[data-increase]');
    const decrease = event.target.closest('[data-decrease]');
    if (increase) changeQuantity(increase.dataset.increase, 1);
    if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  });
  byId('cartTrigger').addEventListener('click', openCart);
  byId('closeDrawer').addEventListener('click', closeCart);
  byId('drawerBackdrop').addEventListener('click', closeCart);
  byId('goToCatalog').addEventListener('click', closeCart);
  byId('checkoutButton').addEventListener('click', () => showToast('Checkout demonstrativo — seu pedido está salvo!'));
  byId('apiSearchButton').addEventListener('click', () => searchOpenFoodFacts(byId('apiTerm').value));
  byId('apiTerm').addEventListener('keydown', event => { if (event.key === 'Enter') searchOpenFoodFacts(event.target.value); });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement.tagName !== 'INPUT') { event.preventDefault(); byId('catalogSearch').focus(); }
    if (event.key === 'Escape') closeCart();
  });
}

document.addEventListener('DOMContentLoaded', init);