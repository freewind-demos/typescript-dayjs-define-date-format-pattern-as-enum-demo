TypeScript Dayjs Define Date Format Pattern as Consts Demo
========================================================

格式化日期时，通常需要定义格式，但由于变量名不能包含`/`及`-`等字符，只能定义成类似：

```
const YYYYMMDD_slash = 'YYYY-MM-DD`;
```

由于JavaScript变量名可以包含部分unicode，所以可以找到与`/`或`-`相似的unicode:
- `ⲻ` : https://www.compart.com/en/unicode/U+2CBB
- `Ⳇ` : https://www.compart.com/en/unicode/U+2CC6

然后定义：

```
enum DateFormatPattern {
  MⳆDⳆYYYY = 'M/D/YYYY',
  MMⳆDDⳆYYYY = 'MM/DD/YYYY',
  YYYYⲻMMⲻDD = 'YYYY-MM-DD',
}
```

有一个地方需要验证，nodejs下正常运行，但不知道webpack是否能正常处理。

相关demo:
1. 变量名可以用哪些unicode: https://github.com/freewind-demos/typescript-unicode-function-name-demo
2. 使用object+type来定义: https://github.com/freewind-demos/typescript-dayjs-define-date-format-pattern-as-consts-demo

```
npm install
npm run demo
```
