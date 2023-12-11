function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,pt', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

document.getElementById('translateButton').addEventListener('click', function () {
    // Execute a tradução quando o botão for clicado
    googleTranslateElementInit();
});