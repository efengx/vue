let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'shop';
    window.document.title = title;
};

export default util;