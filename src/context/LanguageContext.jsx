import { createContext, useContext, useEffect, useState } from 'react';

// Site language: Korean by default, toggleable to English.
// Translatable strings are objects of the form { ko: '...', en: '...' };
// pass them through t() which falls back to plain strings unchanged.

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        try {
            const saved = localStorage.getItem('daisy-lang');
            return saved === 'en' ? 'en' : 'ko';
        } catch {
            return 'ko';
        }
    });

    useEffect(() => {
        document.documentElement.lang = lang;
        try {
            localStorage.setItem('daisy-lang', lang);
        } catch {
            // storage unavailable (private mode etc.) — ignore
        }
    }, [lang]);

    const t = (value) =>
        value && typeof value === 'object' && ('ko' in value || 'en' in value)
            ? (value[lang] ?? value.ko ?? value.en)
            : value;

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
