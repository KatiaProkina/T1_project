# React + TypeScript + Vite

Что сделала из дополнительных пунктов: 


- pixel perfect: будет проверяться только тот размер экрана, который реализован в макетах, с помощью специального плагина - максимум 5 баллов

- адаптивность и мобильный вид: самостоятельно поддержать адаптивность макета для всех расширений экрана от указанного в макетах до 320px (самый маленький экран мобильного телефона) - максимум 5 баллов

- анимации: добавить указанные в макетах анимации - максимум 2 балла

- подключить storybook и заполнить его компонентами: не меньше 5 компонентов (документация https://storybook.js.org/) - максимум 5 баллов

- a11y: задано правильное дерево заголовков, используется семантическая вёрстка, используются атрибуты alt у картинок - максимум 4 балла

  

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
