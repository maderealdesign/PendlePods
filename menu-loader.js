
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch the decoupled menu
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
            
            // 2. Active Link Highlighting Logic
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    // Highlight the current page link
                    link.classList.remove('text-gray-600', 'text-gray-700');
                    link.classList.add('text-brand-primary', 'font-bold');
                    
                    // Dropdown Rule: If active link is inside a dropdown, highlight the parent 'Services' trigger
                    const parentDropdownBtn = link.closest('.group')?.querySelector('button');
                    if (parentDropdownBtn) {
                        parentDropdownBtn.classList.remove('text-gray-600');
                        parentDropdownBtn.classList.add('text-brand-primary', 'font-bold');
                    }
                }
            });

            // 3. Re-attach Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            if (btn && menu) {
                btn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }

            // 4. Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            if(navbar) {
                if (window.scrollY > 10) navbar.classList.add('shadow-md'); // initial check
                
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 10) {
                        navbar.classList.add('shadow-md');
                    } else {
                        navbar.classList.remove('shadow-md');
                    }
                });
            }
        })
        .catch(error => console.error('Error loading menu.html:', error));
        
    // 5. Global Footer Year Update
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
