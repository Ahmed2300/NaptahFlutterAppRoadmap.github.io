document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        task.addEventListener('click', () => {
            const taskId = task.dataset.taskId;
            const modal = document.getElementById(`${taskId}-guide`);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
