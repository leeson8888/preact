import { VNode } from './vnode';
import options from './options';

//stack: h函数的剩余参数数组，从第3个开始,即 h(nodeName, attributes,1,2) =>[2,1]
const stack = [];

const EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *	@see http://jasonformat.com/wtf-is-jsx
 *	@public
 */

 /**  司徒正美 的解读
* nodeName相当于react的type
* attributes相当于react的props
* 这是preact早期设计不周，这个标新立异导致它在兼容官方react要走许多弯路
*/
//h(): 将JSX 转化成 虚拟 DOM elements ==》等同于：React.createElement
export function h(nodeName, attributes) {
	let children = EMPTY_CHILDREN, lastSimple, child, simple, i;
	/*************获取剩余参数,相当于：************
	h(nodeName, attributes,...rest){
	  stack = rest;
		//or
		for(let el of rest){
			stack.push(el);
		}
	}*/
	for (i=arguments.length; i-- > 2; ) {
		stack.push(arguments[i]);
	}

  /***
	 如果没有传入第三个参数,即children不存在，则将attributes.children作为children
	*/
	if (attributes && attributes.children!=null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	/******************************
	如果children存在,递归遍历children
	*/
	while (stack.length) {
		// pop删除数组最后一个元素，返回删除的元素。如果数组为空，返回undefined
		if ((child = stack.pop()) && child.pop!==undefined) {
			for (i=child.length; i--; ) stack.push(child[i]);
		}
		else {
			if (typeof child==='boolean') child = null;

			/***
			nodeName 为function,simple = >false,否则为true
			并将child 转为string，如果不是string,simple为false
			*/
			if ((simple = typeof nodeName!=='function')) {
				if (child==null) child = '';
				else if (typeof child==='number') child = String(child);
				else if (typeof child!=='string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length-1] += child;
			}
			else if (children===EMPTY_CHILDREN) {
				children = [child];
			}
			else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	let p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes==null ? undefined : attributes;
	p.key = attributes==null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	// 将h() 创建的虚拟DOM传入options.vnode(),便于后续扩展
	if (options.vnode!==undefined) options.vnode(p);
  //返回创建的虚拟DOM
	return p;
}
