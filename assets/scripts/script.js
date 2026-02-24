document.addEventListener('DOMContentLoaded', () => {
// Сохраненяем hover на li во 2 блоке main + добавляем класса .hovered
    const items = document.querySelectorAll('.service-text-mini li');
    items.forEach(li => {
        li.addEventListener('mouseenter', () => {
            li.classList.add('hovered');
        });
    });

// Отменяем подсветку при клике вне любого li во 2 блоке main
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.service-text-mini li')) {
            document.querySelectorAll('.service-text-mini li').forEach(li => {
                li.classList.remove('hovered');
            });
        }
    });

// Затемняем хедер при скролле страницы
    const nav = document.querySelector('.header__nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

// Код для всплывающей панели поиска при клике на лупу
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('search');
    const clearButton = document.getElementById('clearButton');

    if (searchToggle && searchContainer && searchInput && clearButton) {
        searchToggle.addEventListener('click', (event) => {
            event.preventDefault();
            if (searchContainer.classList.contains('show')) {
                closeSearch();
            } else {
                searchContainer.classList.add('show');
            }
        });

        const closeSearch = () => {
            searchContainer.classList.remove('show');
            searchInput.value = '';
            clearButton.style.display = 'none';
        };

        searchInput.addEventListener('input', () => {
            clearButton.style.display = searchInput.value.length > 0 ? 'inline' : 'none';
        });

        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            clearButton.style.display = 'none';
            searchInput.focus();
        });

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                closeSearch();
            }
        });

        document.addEventListener('click', (event) => {
            if (!searchContainer.contains(event.target) && !searchToggle.contains(event.target)) {
                closeSearch();
            }
        });
    }

// Код для всплывающего бургера на мобилкке
    const burger = document.querySelector("#burger");
    const popup = document.getElementById("popup");
    const body = document.body;

    const menu = document.getElementById("menu").cloneNode(1);

    burger.addEventListener("click", burgerHandler);

    function burgerHandler(e) {
        e.preventDefault();

        popup.classList.toggle("open");
        burger.classList.toggle("active");
        body.classList.toggle("noscroll");
        renderPopup();
    }

    const renderPopup = () => {
    popup.appendChild(menu);
    }

    const links = Array.from(menu.children);

    links.forEach((link) => {
        link.addEventListener("click", closeOnClick);
    });

    const closeOnClick = () => {
        popup.classList.remove("open");
        burger.classList.remove("active");
        body.classList.remove("noscroll");
    }
});