/**
 * 判断需检测的值是否为 空字符串，null，undefined，NaN
 * @param {*} parameter
 */
function falseValueCheck(parameter) {
  return parameter !== 0 && Boolean(parameter) === false;
}

export {
  falseValueCheck
};
