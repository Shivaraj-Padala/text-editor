const copyContainer = document.getElementById('copy-container');
const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
    if (navigator) {
        navigator.clipboard.writeText(copyContainer.innerText);
    } else {
        console.error('navigator not supported');
    }
})

const quill = new Quill('#editor', {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['link'],
        ],  
    },
    placeholder: 'Write your text here 😅',
    theme: 'snow'
});

quill.on('editor-change', () => {
    copyContainer.innerText = quill.getSemanticHTML()
})