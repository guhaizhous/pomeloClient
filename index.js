var pomeloClient = require('./lib/clientforserver');
//��ʾ���󷽷�
console.log(pomeloClient);
/*pomeloClient
init: [Function],
initWebSocket: [Function],
disconnect: [Function],
request: [Function],
notify: [Function] }
*/


var params ={
	host:"127.0.0.1", 
	port: 3010, 
	log: true
	};

//��ʼ������
pomeloClient.init(params,function(err){
	console.log(err._events.open);
	//��������
	pomeloClient.request('chat.entryHandler.entry', "dddddddddd", function(data) {
		console.log("111111:"+data);
		//֪ͨ
		pomeloClient.notify('chat.entryHandler.entry', "dddddddddd", function(data) {
			console.log("===="+data);
		});
		//�ر�����
		//pomeloClient.disconnect();
	});
});
