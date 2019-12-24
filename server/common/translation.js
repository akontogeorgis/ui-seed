import translation from '../data/translation_EN.json';

// eslint-disable-next-line import/prefer-default-export
export const getTranslation = (req) => {

    if (process.env.NODE_ENV === 'development') return { err: false, result: translation };

    const err = 'getTranslation: There are not translation.';

    return { err: !req.translation && err, result: req.translation };
};
