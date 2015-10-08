let Util = {
    hasClass: (ele,cls) => {
        let tmp = ele.className.split(' ');
        return tmp.indexOf(cls) !== -1;
    },
    addClass: (ele,cls) => {
        if (!this.hasClass(ele,cls)) {
            ele.className += ` ${cls}`;
        }
    },
    removeClass: (ele,cls) => {
        let tmp = ele.className.split(' ');
        let index = tmp.indexOf(cls);
        if(this.hasClass(ele,cls)){
            tmp.splice(index, 1);
            ele.className = tmp.join(' ');
        }
    }
};
export default Util;