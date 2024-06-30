module.exports = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  organizeImportsSkipDestructiveCodeActions: true,
  printWidth: 100, //一行的字符数，如果超过会进行换行，
  tabWidth: 2, // 一个 tab 代表几个空格数
  useTabs: false, //是否使用 tab 进行缩进
  singleQuote: true, // 字符串是否使用单引号
  semi: false, // 行尾是否使用分号
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true // 对象大括号直接是否有空格
}
