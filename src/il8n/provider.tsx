import react, { Fragment, FC } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';


interface Props {
    children: Object,
    locale: typeof LOCALES.ENGLISH
}



const Provider: FC<Props> = ({ children, locale = LOCALES.ENGLISH }) => (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale + '']}
    >
        {children}
    </IntlProvider>

)

export default Provider;
