module.exports = {
  env: {  // browser, node 환경에서 동작하는 전역 개념들을 모두 코드 검사
    browser: true,
    node: true
  },
  extends: [  // 사용 가능한 규칙 세트
    // vue
    // 'plugin:vue/vue3-essential',  // Lv1
    'plugin:vue/vue3-strongly-recommended',  // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
    parser: 'babel-eslint'
  },
  rules: {  // 추가적인 코드 규칙 설정
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
}