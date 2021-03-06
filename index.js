module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-empty': [2, 'always'],
    'subject-case': [2, 'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'pascal-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always',
      [ 'Fix', 'Update', 'New', 'Breaking', 'Docs', 'Build', 'Upgrade', 'Chore' ]
    ]
  }
};
