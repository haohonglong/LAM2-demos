LAM.run([jQuery], function($){
	'use strict';
	const System = this;

	const SERVER = System.SERVER;

	const API = {
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
			"detail": "/shop/show",
			"list": "/shop/index",
		},
		"goods": {
			"add": "/goods/add",
			"edit": "/goods/edit",
			"detail": "/goods/show",
			"list": "/goods/index",
		},
		"site": {
			"login": "/site/login"
		}
	};

	function request(R, func) {
		$[R.method](SERVER + R.url, R.params || {}, func, R.dataType || "json");
	}

	const Api = {
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
			add({ name, pid }, func){
				request({
					url: API.sorts.add,
					method: 'post',
					params: { name, pid }
				}, func);
			},
			edit({ id, name, pid }, func){
				request({
					url: API.sorts.edit,
					method: 'post',
					params: { id, name, pid }
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
			add({ 
				shop_id,
				bill_id,
				discount,
				create_by,
				name,
				number,
				weight,
				single_price,
				final_price 
			}, func) {
				request({
					url: API.goods.add,
					method: 'post',
					params: { shop_id, bill_id, discount, create_by, name, number, weight, single_price, final_price }
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
			getList(func) {
				request({
					url: API.shop.list,
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
		}


	};

	System.export("Api", Api);

});

