const quoteInput = document.getElementById('quote-input');
const quoteText = document.getElementById('quote-text');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('download-btn');
const decreaseFont = document.getElementById('decrease-font');
const increaseFont = document.getElementById('increase-font');
const mobileBtn = document.getElementById('mobile-size');
const profileBtn = document.getElementById('profile-size');
const desktopBtn = document.getElementById('desktop-size');
const container = document.querySelector('.container');
const fontSizeValue = document.getElementById('font-size-value');

let fontSize = 1;

const keywords = {
    'const': '#569cd6',
    'let': '#569cd6',
    'var': '#569cd6',
    'function': '#569cd6',
    'return': '#C586C0',
    'if': '#C586C0',
    'else': '#C586C0',
    'for': '#C586C0',
    'while': '#C586C0',
    'do': '#C586C0',
    'import': '#C586C0',
    'from': '#C586C0',
    'class': '#569cd6',
    'console': '#569cd6',
    'new': '#569cd6',
    'this': '#569cd6',
    'true': '#569cd6',
    'false': '#569cd6',
    'null': '#569cd6',
    'undefined': '#569cd6',
    'Object': '#4EC9B0',
    'Array': '#4EC9B0',
    'String': '#4EC9B0',
    'Number': '#4EC9B0',
    'Boolean': '#4EC9B0',
    'Promise': '#4EC9B0',
    'Math': '#4EC9B0',
    'Date': '#4EC9B0',
    'JSON': '#4EC9B0',
    'RegExp': '#4EC9B0',
    'Map': '#4EC9B0',
    'Set': '#4EC9B0'
};

const functionColor = '#dcdcaa';
const stringColor = '#ce9178';
const defaultColor = '#d4d4d4';
const punctuationColor = '#d4d4d4';
const operatorColor = '#d4d4d4';
const numberColor = '#b5cea8';
const commentColor = '#6A9955';

function syntaxHighlight(text) {
    let html = '';
    let inString = false;
    let currentWord = '';
    let inComment = false;
    let inMultilineComment = false;
    
    const lines = text.split('\n');
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const nextChar = line[i + 1];
            
            // Handle comments
            if (!inString && !inComment && !inMultilineComment && char === '/' && nextChar === '/') {
                if (currentWord) {
                    html += getColoredSpan(currentWord, text);
                    currentWord = '';
                }
                html += `<span style="color: ${commentColor}; text-shadow: 0 0 10px rgba(106, 153, 85, 0.7);">//${line.slice(i + 2)}</span>`;
                break;
            }
            
            if (!inString && !inComment && !inMultilineComment && char === '/' && nextChar === '*') {
                if (currentWord) {
                    html += getColoredSpan(currentWord, text);
                    currentWord = '';
                }
                inMultilineComment = true;
                html += `<span style="color: ${commentColor}; text-shadow: 0 0 10px rgba(106, 153, 85, 0.7);">/*`;
                i++;
                continue;
            }
            
            if (inMultilineComment && char === '*' && nextChar === '/') {
                html += `*/</span>`;
                inMultilineComment = false;
                i++;
                continue;
            }
            
            if (inMultilineComment) {
                html += char;
                continue;
            }
            
            if (char === '"' || char === "'") {
                if (!inString) {
                    if (currentWord) {
                        html += getColoredSpan(currentWord, text);
                        currentWord = '';
                    }
                    inString = true;
                    html += `<span style="color: ${stringColor}; text-shadow: 0 0 10px rgba(206, 145, 120, 0.7);">${char}`;
                } else {
                    html += `${char}</span>`;
                    inString = false;
                }
                continue;
            }
            
            if (inString) {
                html += char;
                continue;
            }

            if (/[0-9]/.test(char) && !/[a-zA-Z_$]/.test(currentWord)) {
                if (currentWord) {
                    html += getColoredSpan(currentWord, text);
                    currentWord = '';
                }
                html += `<span style="color: ${numberColor}; text-shadow: 0 0 10px rgba(181, 206, 168, 0.7);">${char}</span>`;
                continue;
            }
            
            if (/[a-zA-Z_$]/.test(char)) {
                currentWord += char;
            } else {
                if (currentWord) {
                    html += getColoredSpan(currentWord, text);
                    currentWord = '';
                }
                if (char === '{' || char === '}') {
                    html += `<span style="color: #ffd700; text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);">${char}</span>`;
                } else if (char === '(' || char === ')' || char === '[' || char === ']') {
                    html += `<span style="color: #ff79c6; text-shadow: 0 0 10px rgba(255, 121, 198, 0.7);">${char}</span>`;
                } else if (char === '.' || char === ';' || char === ',') {
                    html += `<span style="color: ${punctuationColor}; text-shadow: 0 0 10px rgba(212, 212, 212, 0.7);">${char}</span>`;
                } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '=' || char === '>' || char === '<') {
                    html += `<span style="color: #ff79c6; text-shadow: 0 0 10px rgba(255, 121, 198, 0.7);">${char}</span>`;
                } else {
                    html += char;
                }
            }
        }
        
        if (currentWord) {
            html += getColoredSpan(currentWord, text);
            currentWord = '';
        }
        
        if (lineIndex < lines.length - 1) {
            html += '\n';
        }
    }
    
    return html;
}

function getColoredSpan(word, fullText) {
    if (keywords[word]) {
        return `<span style="color: ${keywords[word]}; text-shadow: 0 0 10px rgba(86, 156, 214, 0.7);">${word}</span>`;
    } else if (word.length > 0 && fullText.charAt(fullText.indexOf(word) + word.length) === '(') {
        return `<span style="color: ${functionColor}; text-shadow: 0 0 10px rgba(220, 220, 170, 0.7);">${word}</span>`;
    } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(word)) {
        return `<span style="color: #9CDCFE; text-shadow: 0 0 10px rgba(156, 220, 254, 0.7);">${word}</span>`;
    }
    return `<span style="color: ${defaultColor}; text-shadow: 0 0 10px rgba(212, 212, 212, 0.7);">${word}</span>`;
}

// Update quote text as user types
quoteInput.addEventListener('input', (e) => {
    const text = e.target.value;
    quoteText.innerHTML = syntaxHighlight(text);
});

// Trigger initial syntax highlighting
quoteText.innerHTML = syntaxHighlight(quoteInput.value);

// Handle font size changes
decreaseFont.addEventListener('click', () => {
    if (fontSize > 0.5) {
        fontSize -= 0.1;
        updateFontSize();
    }
});

increaseFont.addEventListener('click', () => {
    if (fontSize < 4) {
        fontSize += 0.1;
        updateFontSize();
    }
});

function updateFontSize() {
    fontSize = Math.round(fontSize * 10) / 10;
    quoteText.style.fontSize = `${fontSize}rem`;
    fontSizeValue.textContent = fontSize;
}

// Handle image upload
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.style.backgroundImage = `url(${e.target.result})`;
            preview.style.backgroundSize = 'cover';
            preview.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});

// Handle download
downloadBtn.addEventListener('click', () => {
    html2canvas(document.querySelector('.container'), {
        useCORS: true,
        scale: 2
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'code-quote.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

// Handle aspect ratio changes
mobileBtn.addEventListener('click', () => {
    container.style.width = '450px';
    container.style.height = '800px';  // 9:16 ratio
});

profileBtn.addEventListener('click', () => {
    container.style.width = '625px';
    container.style.height = '625px';  // 1:1 ratio
});

desktopBtn.addEventListener('click', () => {
    container.style.width = '800px';
    container.style.height = '450px';  // 16:9 ratio
});