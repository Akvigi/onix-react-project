import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import ua from './ua';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
	ua: {translation: ua},
	en: {translation: en},
};

export const appLocales = Object.keys(resources);

i18n.use(LanguageDetector).use(initReactI18next).init({
	resources,
	detection: {
		order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
		caches: ['localStorage', 'cookie'],
		lookupQuerystring: 'lng',
		lookupCookie: 'i18next',
		lookupLocalStorage: 'i18nextLng',
		lookupFromPathIndex: 0,
		lookupFromSubdomainIndex: 0,
		fallbackLng: 'en',
	},
	fallbackLng: appLocales,
	react: {
		useSuspense: true,
	},
});

export default i18n;
