
## 設定内容
- 下記はymlファイルで管理
タイトルやカテゴリはコンテンツの前にyml形式で記述
```
[conf]
title: タイトル
category: カテゴリ名
tag:
    - タグ1
    - タグ2
[/conf]
[content]
## 記事本文
[/content]
```

## オリジナル記法

- 青枠囲み
```mb
:::info{title=xxx}
内容
:::
```

- オレンジ枠囲み
```mb
:::memo{title=xxx}
内容
:::
```

- 赤枠囲み
```mb
:::alert{title=xxx}
内容
:::
```

- 黒枠
```md
:::wrap
内容
:::
```

- アンダーライン
```md
:m[内容]
```
