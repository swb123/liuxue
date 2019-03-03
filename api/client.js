import request from '@/utils/request'
const group_name = 'shop'
export default {
  searchItems(type,page, size, searchMap) {
    return request({
      url: `/${group_name}/item/search/${page}/${size}/${type}`,
      method: 'post',
      data: searchMap
    })
  },
  findItemById(id) {
    return request({
      url: `/${group_name}/item/${id}`,
      method: 'get'
    })
  },
    //加入购物车
   addCart(pojo){
      return request({
        url: `/${group_name}/shopcart/addIncart`,
        method:'post',
        data:pojo
      })
    },
  //获得用户s所有订单列表
  getOrderListByUserId(){
	  return request({
		  url:`/${group_name}/order/getOrderList`,
		  method:`get`,
	  })
  },
//根据订单状态获得相应的订单信息
	getOrderByState(statue){
		return request({
			url:`/${group_name}/order/getOrderByState/${statue}`,
			method:`get`,
		})
	},

  //删除订单,orderid
  deleteOrder(id){
	  return request({
		  url:`/${group_name}/order/deleteOrder/${id}`,
		  method:`delete`
	  })
  },
  //删除购物车中的商品,itemId
  deleteOrderInCart(id){
	return request({
		url:`/${group_name}/shopcart/deleteOrderInCart/${id}`,
		method:`delete`
	})
},
  //确认收货，修改订单状态
  confirmReceive(id){
	return request({
		url:`/${group_name}/order/confirmReceive/${id}`,
		method:`put`
	})
  },
  //确定付款，修改订单状态
  pay(id){
	return request({
		url:`/${group_name}/order/pay/${id}`,
		method:`put`
	})
  },
  //结算购物车，下单
  settleAccounts(data){
	return request({
		url:`/${group_name}/order/settleAccounts`,
		method:`post`
	})
  },
  searchGoods(data){
	return request({
		url:`/${group_name}/item/searchGoods`,
		method:`post`
	})
  },
  //orderlist
  //获得用户的订单详情
  searchOrder(page, size, searchMap) {
    return request({
      url: `/${group_name}/order/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  //获得用户的购物车详情，需要id
  searchCart(page, size, searchMap) {
    return request({
      url: `/${group_name}/shopcart/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },

 
  
}