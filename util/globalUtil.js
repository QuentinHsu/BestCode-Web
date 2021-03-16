// 公共工具函数

/**
 * 正则表达式 - test()
 * @param {*} regex 正则表达式
 * @param {String, Number} value 待测试的字符
 */
export function regExpTest(regex, value) {
  const reg = new RegExp(regex);
  return reg.test(value)
}
