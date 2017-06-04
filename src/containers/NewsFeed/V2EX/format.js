export const pluralize = (time, label) => time + label

export const date = time => {
  const between = Math.round(new Date().getTime() / 1000) - time
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}
