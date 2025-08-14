import { en } from './en';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';
import { Translation } from './types';

export type Language = 'en' | 'zh-CN' | 'zh-TW';

export const translations: Record<Language, Translation> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

export const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'zh-CN' as Language, name: 'Simplified Chinese', nativeName: '简体中文' },
  { code: 'zh-TW' as Language, name: 'Traditional Chinese', nativeName: '繁體中文' },
];

export { en, zhCN, zhTW };
export type { Translation };
