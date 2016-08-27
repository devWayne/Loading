var instance;

class Loading {
    constructor(config) {
        this.config = config || {};
    }


    /**
     * 获取唯一的Loading实例
     * @method getInstance
     * @param config
     * @returns {*|Loading}
     */
    static getInstance(config) {
        return instance || (instance = new Loading(config));
    }

    /**
     * 显示提示
     *
     *      this.show();        //在整个窗口内显示loading
     *      this.show('.list'); //在某个节点内显示loading
     *
     * @method show
     * @param [target] {String|Node|HTMLElement} 需要显示在哪，默认在页面居中显示
     * @chainable
     */
    show(target) {
        target = target || this.config.target;
        this.fixed = !target;
        target = target || 'html';
        if (!this.$el) {
            this.$el = $('\
                <div class="loading">\
                    <div class="prompt-loading">\
                        <div class="loading-img loading-play"></div>\
                    </div>\
                </div>');
        }
        if (this.fixed) {
            this.$el.addClass('loading-fixed');
        } else {
            this.$el.removeClass('loading-fixed');
        }
        $(target).append(this.$el);
        this.$el.show();


        return this;
    }

    /**
     * 隐藏提示
     *
     *      this.hide();
     *
     * @method hide
     * @chainable
     */
    hide() {
        this.$el.hide();
        return this;
    }

    /**
     * 销毁
     *
     *      this.destroy();
     *
     * @method destroy
     */
    destroy() {
        this.$el.remove();

    }
}

module.exports = {
    Loading: Loading
};
