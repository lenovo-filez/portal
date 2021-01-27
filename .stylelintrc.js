module.exports = {
  extends: ['stylelint-config-prettier'],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': [
      true,
      { ignoreFontFamilies: ['icomoon', 'D-DINCondensed-Bold-cus'] },
    ],
  },
}
