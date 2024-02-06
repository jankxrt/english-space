const content1 = document.getElementById('content-1')
const content2 = document.getElementById('content-2')
const content3 = document.getElementById('content-3')
const content4 = document.getElementById('content-4')

const domBody = document.body

content2.style.display = 'none';
content3.style.display = 'none';
content4.style.display = 'none';

clickCounter = 0

domBody.addEventListener('click', function() {
    clickCounter++;
    console.log(clickCounter);

    let currentContent, nextContent;

    if (clickCounter == 1) {
        currentContent = content1;
        nextContent = content2;
    } else if (clickCounter == 2) {
        currentContent = content2;
        nextContent = content3;
    } else if (clickCounter == 3) {
        currentContent = content3;
        nextContent = content4;
    }

    if (currentContent) {
        currentContent.classList.add('fade-out');

        // Wait for the fade-out animation to finish before hiding
        setTimeout(() => {
            currentContent.style.display = 'none';
            if (nextContent) nextContent.style.display = 'block';
            // Remove the class so it doesn't affect the next time it becomes visible
            currentContent.classList.remove('fade-out');
        }, 500); // Match the duration of the CSS transition
    }
});
