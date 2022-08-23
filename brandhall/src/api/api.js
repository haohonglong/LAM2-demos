var Api = LAM.run([jQuery], function($){
	'use strict';
	const System = this;

	const SERVER = System.SERVER;

	return {
		"sorts": {
			get(func){
				$.get(SERVER + '/sorts/index',{}, func, 'json');
			},
			add({ name, pid }, func){
				$.post(SERVER + '/sorts/add',{ name, pid }, func, 'json');
			},
			edit({ id, name, pid }, func){
				$.post(SERVER + '/sorts/edit',{ id, name, pid }, func, 'json');
			},
			detail(id, func){
				$.post(SERVER + '/sorts/show',{ id }, func, 'json');
			},
			delete(id, func){
				$.get(SERVER + '/sorts/delete',{ id }, func, 'json');
			}
		},
		"url": {
			add({ sid, name, url, info }, func) {
				$.post(SERVER + '/url/add',{
					sid,
					name,
					url,
					info
				}, func, 'json');
			},
			edit({ id, sid, name, url, info }, func) {
				$.post(SERVER + '/url/edit',{
					id,
					sid,
					name,
					url,
					info
				}, func, 'json');
			},
			detail(id, func) {
				$.get(SERVER + '/url/show',{ id }, func, 'json');
			},
			get(sid, func) {
				$.get(SERVER + '/url/index',{ sid }, func, 'json');
			},
			search({ sid, name }, func) {
				$.get(SERVER + '/url/search',{
					sid,
					name
				}, func, 'json');
			},
			delete(id, func) {
				$.get(SERVER + '/url/delete',{ id }, func, 'json');
			}
		}
	};

});