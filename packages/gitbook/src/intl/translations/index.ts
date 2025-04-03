import type { CustomizationLocale } from '@gitbook/api';

import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { ja } from './ja';
import { nl } from './nl';
import { no } from './no';
import { pt_br } from './pt-br';
import type { TranslationLanguage } from './types';
import { zh } from './zh';
import { zh_tw } from './zh-tw';

export * from './types';

export const languages: {
    [key: string]: TranslationLanguage;
} & {
    [locale in CustomizationLocale]: TranslationLanguage;
} = {
    de,
    en,
    fr,
    es,
    zh,
    ja,
    nl,
    no,
    'pt-br': pt_br,
    'zh-tw': zh_tw,
};
