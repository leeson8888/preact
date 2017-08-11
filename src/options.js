/** Global options
 *	@public
 *	@namespace options {Object}
 */
 // 全局配置：扩展preact的功能，以兼容react
export default {

	/** If `true`, `prop` changes trigger synchronous component updates.
	 *	@name syncComponentUpdates
	 *	@type Boolean
	 *	@default true
	 */

  // 如果为true,同步更新组件，默认为true

	//syncComponentUpdates: true,

	/** Processes all created VNodes.
	 *	@param {VNode} vnode	A newly-created VNode to normalize/process
	 */
   //用于扩展VNode实例
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
  //组件挂载以后调用
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
  // Dom更新后调用
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
  // 组件卸载前立即调用
	// beforeUnmount(component) { }
};
