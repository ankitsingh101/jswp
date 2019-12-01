function empty(obj){
  for(var key in obj) {
   if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
}


function get_posts($args=null){
  var $defaults = { 
    	'numberposts'      : 5,
        'category'         : 0,
        'orderby'          : 'date',
        'order'            : 'DESC',
        'include'          : [],
        'exclude'          : [],
        'meta_key'         : '',
        'meta_value'       : '',
        'post_type'        : 'post',
        'suppress_filters' : true,
  };
}
get_posts();
