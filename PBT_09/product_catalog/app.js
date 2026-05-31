const products = [
    { id: 1, name: 'iPhone 16', price: 25990000, category: 'phone', image: 'https://placehold.co/200', rating: 4.5, inStock: true },
    { id: 2, name: 'Samsung S24', price: 22990000, category: 'phone', image: 'https://placehold.co/200', rating: 4.4, inStock: true },
    { id: 3, name: 'Pixel 9', price: 19990000, category: 'phone', image: 'https://placehold.co/200', rating: 4.6, inStock: true },
    { id: 4, name: 'MacBook Pro', price: 45990000, category: 'laptop', image: 'https://placehold.co/200', rating: 4.8, inStock: true },
    { id: 5, name: 'Dell XPS 15', price: 35990000, category: 'laptop', image: 'https://placehold.co/200', rating: 4.7, inStock: true },
    { id: 6, name: 'ThinkPad X1', price: 32990000, category: 'laptop', image: 'https://placehold.co/200', rating: 4.5, inStock: false },
    { id: 7, name: 'iPad Air', price: 16990000, category: 'tablet', image: 'https://placehold.co/200', rating: 4.6, inStock: true },
    { id: 8, name: 'Xiaomi Pad 6', price: 7990000, category: 'tablet', image: 'https://placehold.co/200', rating: 4.2, inStock: true },
    { id: 9, name: 'Galaxy Tab S9', price: 18990000, category: 'tablet', image: 'https://placehold.co/200', rating: 4.3, inStock: true },
    { id: 10, name: 'AirPods Pro', price: 6990000, category: 'accessory', image: 'https://placehold.co/200', rating: 4.3, inStock: true },
    { id: 11, name: 'Galaxy Buds', price: 3490000, category: 'accessory', image: 'https://placehold.co/200', rating: 4.1, inStock: true },
    { id: 12, name: 'Magic Mouse', price: 2490000, category: 'accessory', image: 'https://placehold.co/200', rating: 4.0, inStock: false }
];

let state = {
    keyword: '',
    category: 'all',
    sort: 'default',
    cartCount: 0
};

const app = document.createElement('main');
document.body.appendChild(app);

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function buildLayout() {
    const header = document.createElement('header');
    header.className = 'app-header';

    const title = document.createElement('h1');
    title.textContent = 'ShopTLU Catalog';

    const actions = document.createElement('section');
    actions.innerHTML = '<button id="darkToggle">Dark mode</button> <strong>🛒 <span id="cartBadge">0</span></strong>';
    header.append(title, actions);

    const controls = document.createElement('section');
    controls.className = 'controls';

    const search = document.createElement('input');
    search.id = 'searchInput';
    search.placeholder = 'Tìm sản phẩm...';

    const sort = document.createElement('select');
    sort.id = 'sortSelect';
    sort.innerHTML = `
        <option value="default">Sắp xếp</option>
        <option value="priceAsc">Giá tăng</option>
        <option value="priceDesc">Giá giảm</option>
        <option value="nameAsc">Tên A-Z</option>
        <option value="ratingDesc">Đánh giá cao nhất</option>
    `;

    const categories = document.createElement('section');
    categories.className = 'category-buttons';
    ['all', 'phone', 'laptop', 'tablet', 'accessory'].forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category;
        btn.dataset.category = category;
        if (category === 'all') btn.classList.add('active');
        categories.appendChild(btn);
    });

    controls.append(search, sort, categories);

    const grid = document.createElement('section');
    grid.id = 'productGrid';
    grid.className = 'product-grid';

    const modal = document.createElement('section');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.innerHTML = '<article class="modal-content" id="modalContent"></article>';

    app.append(header, controls, grid, modal);
}

function getFilteredProducts() {
    let result = products.filter(product => product.name.toLowerCase().includes(state.keyword.toLowerCase()));

    if (state.category !== 'all') {
        result = result.filter(product => product.category === state.category);
    }

    if (state.sort === 'priceAsc') result.sort((a, b) => a.price - b.price);
    if (state.sort === 'priceDesc') result.sort((a, b) => b.price - a.price);
    if (state.sort === 'nameAsc') result.sort((a, b) => a.name.localeCompare(b.name));
    if (state.sort === 'ratingDesc') result.sort((a, b) => b.rating - a.rating);

    return result;
}

function createCard(product) {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = product.id;

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const meta = document.createElement('p');
    meta.textContent = `${product.category} • ⭐ ${product.rating}`;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatPrice(product.price);

    const stock = document.createElement('p');
    stock.textContent = product.inStock ? 'Còn hàng' : 'Hết hàng';

    const cartBtn = document.createElement('button');
    cartBtn.textContent = 'Thêm giỏ';
    cartBtn.className = 'add-cart';
    cartBtn.disabled = !product.inStock;

    card.append(img, name, meta, price, stock, cartBtn);
    return card;
}

function renderProducts() {
    const grid = document.querySelector('#productGrid');
    grid.textContent = '';
    getFilteredProducts().forEach(product => grid.appendChild(createCard(product)));
}

function openModal(product) {
    const modal = document.querySelector('#modal');
    const modalContent = document.querySelector('#modalContent');
    modalContent.textContent = '';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-modal';
    closeBtn.textContent = 'Đóng';

    const title = document.createElement('h2');
    title.textContent = product.name;

    const info = document.createElement('p');
    info.textContent = `Danh mục: ${product.category}. Giá: ${formatPrice(product.price)}. Đánh giá: ${product.rating}.`;

    modalContent.append(closeBtn, title, info);
    modal.classList.add('open');
}

function bindEvents() {
    document.querySelector('#searchInput').addEventListener('input', (event) => {
        state.keyword = event.target.value;
        renderProducts();
    });

    document.querySelector('#sortSelect').addEventListener('change', (event) => {
        state.sort = event.target.value;
        renderProducts();
    });

    document.querySelector('.category-buttons').addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;
        document.querySelectorAll('.category-buttons button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        state.category = event.target.dataset.category;
        renderProducts();
    });

    document.querySelector('#productGrid').addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;
        const product = products.find(item => item.id === Number(card.dataset.id));

        if (event.target.classList.contains('add-cart')) {
            event.stopPropagation();
            state.cartCount++;
            document.querySelector('#cartBadge').textContent = state.cartCount;
            return;
        }

        openModal(product);
    });

    document.querySelector('#modal').addEventListener('click', (event) => {
        if (event.target.id === 'modal' || event.target.classList.contains('close-modal')) {
            document.querySelector('#modal').classList.remove('open');
        }
    });

    document.querySelector('#darkToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

buildLayout();
bindEvents();
renderProducts();
