LAM.run([jQuery], function($){
	'use strict';
	const System = this;

	const SERVER = System.SERVER;

	function request(R, func) {
		$[R.method](SERVER + R.url, R.params || {}, func, R.dataType || "json");
	}

	const API = {
		"StockDate":{
			"getOne": "/StockDate/getOne"
		},
		"stockDetail":{
			"index": "/stockDetail/index",
			"delete": "/stockDetail/delete",
			"search": "/stockDetail/search",
			"show": "/stockDetail/show",
			"add": "/stockDetail/add"
		},
		"stock":{
			"index": "/stock/index",
			"search": "/stock/search",
			"show": "/stock/show",
			"add": "/stock/add",
			"feach": "/stock/feach"
		},
		"article":{
			"index": "/article/index",
			"search": "/article/search",
			"show": "/article/show",
			"add": "/article/add",
			"edit": "/article/edit",
			"delete": "/article/delete"
		},
		"mindmaps":{
			"index": "/mindmaps/index",
			"show": "/mindmaps/show",
			"add": "/mindmaps/add",
			"edit": "/mindmaps/edit",
			"editByKey": "/mindmaps/editByKey",
			"delete": "/mindmaps/delete"
		},
		"diary":{
			"list": "/diary/index",
			"add": "/diary/add",
			"edit": "/diary/edit",
			"search": "/diary/search",
			"delete": "/diary/delete"
		},
		"video2":{
			"list": "/video2/index",
			"add": "/video2/add",
			"edit": "/video2/edit",
			"search": "/video2/search",
			"delete": "/video2/delete"
		},
		"video":{
			"list": "/video/index",
			"add": "/video/add",
			"edit": "/video/edit",
			"search": "/video/search",
			"delete": "/video/delete"
		},
		"url":{
			"add": "/url/add",
			"edit": "/url/edit",
			"detail": "/url/show",
			"list": "/url/index",
			"search": "/url/search",
			"delete": "/url/delete"
		},
		"sorts": {
			"add": "/sorts/add",
			"edit": "/sorts/edit",
			"detail": "/sorts/show",
			"list": "/sorts/index",
			"search": "/sorts/search",
			"delete": "/sorts/delete"
		},
		"shop": {
			"add": "/shop/add",
			"edit": "/shop/edit",
			"index": "/shop/index",
			"delete": "/shop/delete"
		},
		"goods": {
			"add": "/goods/add",
			"edit": "/goods/edit",
			"detail": "/goods/show",
			"list": "/goods/index",
			"statistics": "/goods/statistics",
		},
		"site": {
			"login": "/site/login"
		},
		"unit": {
			"add": "/unit/add",
			"edit": "/unit/edit",
			"index": "/unit/index",
			"delete": "/unit/delete"
		},
		"goodsname": {
			"add": "/goodsname/add",
			"edit": "/goodsname/edit",
			"index": "/goodsname/index",
			"delete": "/goodsname/delete"
		},
		"bill": {
			"getOne": "/bill/getOne"
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
			}
		},
		"stockDetail": {
			index(stock_id, func){
				request({
					url: API.stockDetail.index,
					method: 'get',
					params: { stock_id }
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
				,hight
				,low
				,average
				,change
				,amplitude
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
						,hight
						,low
						,average
						,change
						,amplitude
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
			index(func){
				request({
					url: API.stock.index,
					method: 'get'
				}, func);
			},
			feach(stock_id, func){
				request({
					url: API.stock.feach,
					method: 'get',
					params: { stock_id }
				}, func);
			},
			add({ stock_id, stock_name, stock_remark }, func){
				request({
					url: API.stock.add,
					method: 'post',
					params: { stock_id, stock_name, stock_remark }
				}, func);
			},
			search({ title }, func){
				request({
					url: API.stock.search,
					method: 'post',
					params: { title }
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

