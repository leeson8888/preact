import { extend } from './util';
import { h } from './h';

// 基于h,即createElement创建虚拟DOM
/**********与h的区别是：
h()的第一个参数是字符串或function
cloneElement的第一个参数是vnode,即ReactElement, 即虚拟DOM
*/
export function cloneElement(vnode, props) {
	return h(
		vnode.nodeName,
		// cloneElement创建的vnode会保留有旧元素的 props，也会集成新的 props。
		extend(extend({}, vnode.attributes), props),
		arguments.length>2 ? [].slice.call(arguments, 2) : vnode.children
	);
}
