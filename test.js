var pomeloClient = require('./lib/clientforserver');
//��ʾ���󷽷�
console.log(pomeloClient);
/*pomeloClient
init: [Function], ��ʼ������
initWebSocket: [Function],��ʼ������
disconnect: [Function],�ر�����
request: [Function],������� �лظ�
notify: [Function] }֪ͨ���� �޻ظ�
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
	pomeloClient.request('chat.entryHandler.entry', "����Ұѱ��ӵݸ���", function(data) {
		console.log("111111:"+data);
		//֪ͨ
		pomeloClient.notify('chat.entryHandler.entry', "��Ҫ�ɻ���", function(data) {
			console.log("===="+data);
		});
		//�ر�����
		//pomeloClient.disconnect();
	});
});
