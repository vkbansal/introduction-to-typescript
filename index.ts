import Reveal from 'reveal.js';
import { highlight, addLanguage } from 'illuminate-js';
import { tsx } from 'illuminate-js/lib/languages/tsx';

import 'reveal.js/css/reveal.css';
import './styles.less';
import 'illuminate-js/themes/tomorrow.css';

addLanguage('ts', tsx);
addLanguage('tsx', tsx);

Reveal.initialize({
    width: '100%',
    height: '100%',
    margin: 0,
    minScale: 1,
    maxScale: 1,
    history: true
});

const code = Array.from(document.querySelectorAll('pre code'));

code.forEach(block => {
    const lang = block.getAttribute('data-lang');

    let text = block.innerHTML;

    if (lang) {
        text = highlight(text, lang);
        text = text.replace(/&amp;lt;/g, '&lt;').replace(/&amp;gt;/g, '&gt;');
        block.innerHTML = text;
    }
});
