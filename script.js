document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');

            // Update Nav UI
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Section Visibility
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // JavaScript Demo Interaction
    const demoBtn = document.getElementById('demoBtn');
    const resetBtn = document.getElementById('resetBtn');
    const demoText = document.getElementById('demoText');
    let clickCount = 0;

    const updateDemo = () => {
        demoText.innerText = clickCount === 0 
            ? "Master the DOM through interaction."
            : `You've clicked the button ${clickCount} ${clickCount === 1 ? 'time' : 'times'}!`;
        
        if (clickCount >= 5) {
            demoText.innerText += " You're a natural coder! 🚀";
            demoBtn.style.backgroundColor = '#4caf50';
            demoBtn.style.color = '#fff';
        } else {
            demoBtn.style.backgroundColor = '';
            demoBtn.style.color = '';
        }
    };

    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            clickCount++;
            updateDemo();
            demoBtn.style.transform = 'scale(0.95)';
            setTimeout(() => demoBtn.style.transform = 'scale(1)', 100);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            clickCount = 0;
            updateDemo();
        });
    }


    // Initialize Tooltips or other micro-interactions if needed
    console.log("WebDev Academy initialized successfully.");
});
