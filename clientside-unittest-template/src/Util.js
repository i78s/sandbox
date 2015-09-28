let Util = {
    hasClass: function(ele,cls) {
        if(!ele.className){
            return null;
        }
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    },
    addClass: function(ele,cls) {
        if (!this.hasClass(ele,cls)) {
            ele.className += ` ${cls}`;
        }
    },
    removeClass: function(ele,cls) {
        if (this.hasClass(ele,cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s+|$)');
            ele.className = ele.className.replace(reg,' ');
        }
    }
};
export default Util;