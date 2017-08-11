/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */

 /***
 * 自身属性的拷贝
 */
export function extend(obj, props) {
	for (let i in props) obj[i] = props[i];
	return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
 // 异步调用一个函数
export const defer = typeof Promise=='function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
