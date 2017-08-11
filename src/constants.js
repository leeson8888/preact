// render modes
// 各种渲染模式
export const NO_RENDER = 0; //不渲染
export const SYNC_RENDER = 1; //同步渲染即render
export const FORCE_RENDER = 2;//强制渲染,相当react:forceUdate
export const ASYNC_RENDER = 3; //异步渲染


export const ATTR_KEY = '__preactattr_'; // 添加属性

// DOM properties that should NOT have "px" added when numeric
//正则表达式：非精确的尺寸
export const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
