// Naptah Flutter Roadmap - Interactive Script
// نبتة - خارطة طريق فلاتر - سكريبت تفاعلي

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all task elements
    const tasks = document.querySelectorAll('.task[data-task-id]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Add click event to each task
    tasks.forEach(task => {
        task.addEventListener('click', function() {
            const taskId = this.getAttribute('data-task-id');
            const modalId = taskId + '-guide';
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                // Prevent body scroll when modal is open
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Add hover effect
        task.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-4px) scale(1.02)';
        });
        
        task.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Close modal when clicking on close button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                // Re-enable body scroll
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside of modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                this.style.display = 'none';
                // Re-enable body scroll
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
    
    // Smooth scroll animation for week cards
    const weeks = document.querySelectorAll('.week');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    weeks.forEach(week => {
        week.style.opacity = '0';
        week.style.transform = 'translateY(20px)';
        week.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(week);
    });
    
    // Add ripple effect to task cards
    tasks.forEach(task => {
        task.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    console.log('🌱 خارطة طريق نبتة فلاتر محمّلة بنجاح!');
    console.log('✅ ' + tasks.length + ' مهمة جاهزة للعمل');
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(16, 185, 129, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .task {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
