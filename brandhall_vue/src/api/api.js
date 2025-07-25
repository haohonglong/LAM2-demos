LAM.run([jQuery], function($){
	'use strict';
	const System = this;

	const SERVER = System.SERVER;

	function request(R, func, error_func) {
		// $[R.method](SERVER + R.url, R.params || {}, func, R.dataType || "json");

		$.ajax({
			method: R.method,
			url: R.url,
			data: R.params,
			dataType: "json"
		  })
		.done(func)
		.fail(error_func);
	}

	const API = {
		"StockDate":{
			"getOne": SERVER+ "/StockDate/getOne",
			"index": SERVER+ "/StockDate/index"
		},
		"stockDetail":{
			"index": SERVER+ "/stockDetail/index",
			"delete": SERVER+ "/stockDetail/delete",
			"search": SERVER+ "/stockDetail/search",
			"show": SERVER+ "/stockDetail/show",
			"add": SERVER+ "/stockDetail/add"
		},
		"stock":{
			"index": SERVER+ "/stock/index",
			"search": SERVER+ "/stock/search",
			"show": SERVER+ "/stock/show",
			"add": SERVER+ "/stock/add",
			"edit": SERVER+ "/stock/edit",
			"feach": SERVER+ "/stock/feach",
			"getProgress": SERVER+ "/stock/getProgress",
			"delete": SERVER+ "/stock/delete",
			"setLevel": SERVER+ "/stock/setLevel"
		},
		"article":{
			"index": SERVER+ "/article/index",
			"search": SERVER+ "/article/search",
			"show": SERVER+ "/article/show",
			"add": SERVER+ "/article/add",
			"edit": SERVER+ "/article/edit",
			"delete": SERVER+ "/article/delete"
		},
		"mindmaps":{
			"index": SERVER+ "/mindmaps/index",
			"show": SERVER+ "/mindmaps/show",
			"add": SERVER+ "/mindmaps/add",
			"edit": SERVER+ "/mindmaps/edit",
			"editByKey": SERVER+ "/mindmaps/editByKey",
			"delete": SERVER+ "/mindmaps/delete"
		},
		"diary":{
			"list": SERVER+ "/diary/index",
			"add": SERVER+ "/diary/add",
			"edit": SERVER+ "/diary/edit",
			"search": SERVER+ "/diary/search",
			"delete": SERVER+ "/diary/delete"
		},
		"video2":{
			"list": SERVER+ "/video2/index",
			"add": SERVER+ "/video2/add",
			"edit": SERVER+ "/video2/edit",
			"search": SERVER+ "/video2/search",
			"delete": SERVER+ "/video2/delete"
		},
		"video":{
			"list": SERVER+ "/video/index",
			"add": SERVER+ "/video/add",
			"edit": SERVER+ "/video/edit",
			"search": SERVER+ "/video/search",
			"delete": SERVER+ "/video/delete"
		},
		"url":{
			"add": SERVER+ "/url/add",
			"edit": SERVER+ "/url/edit",
			"detail": SERVER+ "/url/show",
			"list": SERVER+ "/url/index",
			"search": SERVER+ "/url/search",
			"delete": SERVER+ "/url/delete"
		},
		"sorts": {
			"add": SERVER+ "/sorts/add",
			"edit": SERVER+ "/sorts/edit",
			"detail": SERVER+ "/sorts/show",
			"list": SERVER+ "/sorts/index",
			"search": SERVER+ "/sorts/search",
			"delete": SERVER+ "/sorts/delete"
		},
		"shop": {
			"add": SERVER+ "/shop/add",
			"edit": SERVER+ "/shop/edit",
			"index": SERVER+ "/shop/index",
			"delete": SERVER+ "/shop/delete"
		},
		"goods": {
			"add": SERVER+ "/goods/add",
			"edit": SERVER+ "/goods/edit",
			"detail": SERVER+ "/goods/show",
			"list": SERVER+ "/goods/index",
			"statistics": SERVER+ "/goods/statistics",
		},
		"site": {
			"login": SERVER+ "/site/login"
		},
		"unit": {
			"add": SERVER+ "/unit/add",
			"edit": SERVER+ "/unit/edit",
			"index": SERVER+ "/unit/index",
			"delete": SERVER+ "/unit/delete"
		},
		"goodsname": {
			"add": SERVER+ "/goodsname/add",
			"edit": SERVER+ "/goodsname/edit",
			"index": SERVER+ "/goodsname/index",
			"delete": SERVER+ "/goodsname/delete"
		},
		"bill": {
			"getOne": SERVER+ "/bill/getOne"
		}
	};

	

	const Api = {
		"StockDate": {
			getOne({ 
				stock_id
				,stock_date_at
			}, func){
				request({
					url: API.StockDate.getOne,
					method: 'post',
					params: { 
						stock_id
						,stock_date_at
					}
				}, func);
			},
			index(stock_id, func){
				request({
					url: API.StockDate.index,
					method: 'get',
					params: {stock_id}
				}, func);
			}
		},
		"stockDetail": {
			index({stock_id, size}, func){
				request({
					url: API.stockDetail.index,
					method: 'get',
					params: {stock_id, size}
				}, func);
			},
			delete(id, func){
				request({
					url: API.stockDetail.delete,
					method: 'get',
					params: { id }
				}, func);
			},
			add({ 
				stock_id
				,stock_price
				,stock_type
				,stock_deal_total
				,created_at
				,stock_detail_remark
				,open
				,close
				,lup
				,ldown
				,highest
				,lowest
				,average
				,change
				,amplitude
				,volume
				,amount
			}, func){
				request({
					url: API.stockDetail.add,
					method: 'post',
					params: { 
						stock_id
						,stock_price
						,stock_type
						,stock_deal_total
						,created_at
						,stock_detail_remark
						,open
						,close
						,lup
						,ldown
						,highest
						,lowest
						,average
						,change
						,amplitude
						,volume
						,amount
					}
				}, func);
			},
			search({ title }, func){
				request({
					url: API.stockDetail.search,
					method: 'post',
					params: { title }
				}, func);
			}
		},
		"stock": {
			setLevel({stock_id, level}, func){
				request({
					url: API.stock.setLevel,
					method: 'get',
					params: { stock_id, level }
				}, func);
			},
			delete(stock_id, func){
				request({
					url: API.stock.delete,
					method: 'get',
					params: { stock_id }
				}, func);
			},
			index(func){
				request({
					url: API.stock.index,
					method: 'get'
				}, func);
			},
			feach({stock_id, way}, func, error_func){
				request({
					url: API.stock.feach,
					method: 'get',
					params: { stock_id, way }
				}, func, error_func);
			},
			getProgress(func, error_func){
				request({
					url: API.stock.getProgress,
					method: 'get'
				}, func, error_func);
			},
			add({ stock_id, stock_code, stock_name, stock_remark }, func){
				request({
					url: API.stock.add,
					method: 'post',
					params: { stock_id, stock_code, stock_name, stock_remark }
				}, func);
			},
			edit({ stock_id, stock_code, stock_name, stock_cost, stock_remark }, func){
				request({
					url: API.stock.edit,
					method: 'post',
					params: { stock_id, stock_code, stock_name, stock_cost, stock_remark }
				}, func);
			},
			search({ key, value }, func){
				request({
					url: API.stock.search,
					method: 'get',
					params: { key, value }
				}, func);
			}
		},
		"article": {
			index(func){
				request({
					url: API.article.index,
					method: 'get'
				}, func);
			},
			add({ sid, title, content }, func){
				request({
					url: API.article.add,
					method: 'post',
					params: { sid, title, content }
				}, func);
			},
			search({ title }, func){
				request({
					url: API.article.search,
					method: 'post',
					params: { title }
				}, func);
			},
			edit({ id, sid, title, content }, func){
				request({
					url: API.article.edit,
					method: 'post',
					params: { id, sid, title, content }
				}, func);
			},
			delete(id, func){
				request({
					url: API.article.delete,
					method: 'get',
					params: { id }
				}, func);
			},
			show(id, func){
				request({
					url: API.article.show,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"mindmaps": {
			add({ key, name, thumbnail, content, remark }, func){
				request({
					url: API.mindmaps.add,
					method: 'post',
					params: { key, name, thumbnail, content, remark }
				}, func);
			},
			editByKey({ key, content }, func){
				request({
					url: API.mindmaps.editByKey,
					method: 'post',
					params: { key, content }
				}, func);
			},
			edit({ id, key, name, thumbnail, remark }, func){
				request({
					url: API.mindmaps.edit,
					method: 'post',
					params: { id, key, name, thumbnail, remark }
				}, func);
			},
			show({ key }, func){
				request({
					url: API.mindmaps.show,
					method: 'post',
					params: { key }
				}, func);
			},
			list(func){
				request({
					url: API.mindmaps.index,
					method: 'get'
				}, func);
			},
			delete(id, func){
				request({
					url: API.mindmaps.delete,
					method: 'get',
					params: { id }
				}, func);
			}

		},
		"diary": {
			getList(func){
				request({
					url: API.diary.list,
					method: 'get'
				}, func);
			},
			add({ title, content }, func){
				request({
					url: API.diary.add,
					method: 'post',
					params: { title, content }
				}, func);
			},
			edit({ id, title, content }, func){
				request({
					url: API.diary.edit,
					method: 'post',
					params: { id, title, content }
				}, func);
			},
			delete(id, func){
				request({
					url: API.diary.delete,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"video2": {
			getList(func){
				request({
					url: API.video2.list,
					method: 'get'
				}, func);
			},
			add({ src }, func){
				request({
					url: API.video2.add,
					method: 'post',
					params: { src }
				}, func);
			},
			edit({ id, src }, func){
				request({
					url: API.video2.edit,
					method: 'post',
					params: { id, src }
				}, func);
			},
			delete(id, func){
				request({
					url: API.video2.delete,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"video": {
			getList(func){
				request({
					url: API.video.list,
					method: 'get'
				}, func);
			},
			add({ title, source }, func){
				request({
					url: API.video.add,
					method: 'post',
					params: { title, source }
				}, func);
			},
			edit({ id, title, source }, func){
				request({
					url: API.video.edit,
					method: 'post',
					params: { id, title, source }
				}, func);
			},
			delete(id, func){
				request({
					url: API.video.delete,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"sorts": {
			get(func){
				request({
					url: API.sorts.list,
					method: 'get'
				}, func);
			},
			add({ name, pid, code }, func){
				request({
					url: API.sorts.add,
					method: 'post',
					params: { name, pid, code }
				}, func);
			},
			edit({ id, name, pid, code }, func){
				request({
					url: API.sorts.edit,
					method: 'post',
					params: { id, name, pid, code }
				}, func);
			},
			detail(id, func){
				request({
					url: API.sorts.detail,
					method: 'get',
					params: { id }
				}, func);
			},
			delete(id, func){
				request({
					url: API.sorts.delete,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"url": {
			add({ sid, name, url, info }, func) {
				request({
					url: API.url.add,
					method: 'post',
					params: { sid, name, url, info }
				}, func);
			},
			edit({ id, sid, name, url, info }, func) {
				request({
					url: API.url.edit,
					method: 'post',
					params: { id, sid, name, url, info }
				}, func);
			},
			detail(id, func) {
				request({
					url: API.url.detail,
					method: 'get',
					params: { id }
				}, func);
			},
			get(sid, func) {
				request({
					url: API.url.list,
					method: 'get',
					params: { sid }
				}, func);
			},
			search({ sid, name }, func) {
				request({
					url: API.url.search,
					method: 'get',
					params: { sid, name }
				}, func);
			},
			delete(id, func) {
				request({
					url: API.url.delete,
					method: 'get',
					params: { id }
				}, func);
			}
		},
		"goods": {
			get(func){
				request({
					url: API.goods.list,
					method: 'get'
				}, func);
			},
			statistics({ goodsname_id, start_date, end_date, G }, func){
				request({
					url: API.goods.statistics,
					method: 'post',
					params: { goodsname_id, start_date, end_date, G }
				}, func);
			},
			add({ 
				shop_id,
				bill_id,
				points,
				discount,
				create_at,
				codes,
				goodsname_ids,
				unit_ids,
				numbers,
				weights,
				single_prices,
				final_prices 
			}, func) {
				request({
					url: API.goods.add,
					method: 'post',
					params: { 
						shop_id,
						bill_id,
						points,
						discount,
						create_at,
						codes,
						goodsname_ids,
						unit_ids,
						numbers,
						weights,
						single_prices,
						final_prices 
					 }
				}, func);
			}
		},
		"shop": {
			add({ 
				name
			}, func) {
				request({
					url: API.shop.add,
					method: 'post',
					params: { name }
				}, func);
			},
			delete(id, func) {
				request({
					url: API.shop.delete,
					method: 'get',
					params: { id }
				}, func);
			},
			edit({ id, name }, func) {
				request({
					url: `${API.shop.edit}?id=${id}`,
					method: 'post',
					params: { name }
				}, func);
			},
			index(func) {
				request({
					url: API.shop.index,
					method: 'get'
				}, func);
			}
		},
		"site": {
			login({ 
				username,
				password
			}, func) {
				request({
					url: API.site.login,
					method: 'post',
					params: { username, password }
				}, func);
			}
		},
		"unit": {
			add({ 
				name
			}, func) {
				request({
					url: API.unit.add,
					method: 'post',
					params: { name }
				}, func);
			},
			delete(id, func) {
				request({
					url: API.unit.delete,
					method: 'get',
					params: { id }
				}, func);
			},
			edit({ id, name }, func) {
				request({
					url: `${API.unit.edit}?id=${id}`,
					method: 'post',
					params: { name }
				}, func);
			},
			index(func) {
				request({
					url: API.unit.index,
					method: 'get'
				}, func);
			}
		},
		"goodsname": {
			add({ 
				name
			}, func) {
				request({
					url: API.goodsname.add,
					method: 'post',
					params: { name }
				}, func);
			},
			delete(id, func) {
				request({
					url: API.goodsname.delete,
					method: 'get',
					params: { id }
				}, func);
			},
			edit({ id, name }, func) {
				request({
					url: `${API.goodsname.edit}?id=${id}`,
					method: 'post',
					params: { name }
				}, func);
			},
			index(func) {
				request({
					url: API.goodsname.index,
					method: 'get'
				}, func);
			}
		},
		"bill": {
			getOne(bill_id, func) {
				request({
					url: API.bill.getOne,
					method: 'get',
					params: bill_id 
				}, func);
			}
		}


	};

	System.export("Api", Api);

});

