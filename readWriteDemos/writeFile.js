var fs = require('fs');
fs.writeFile('../readWriteDemos/message.txt','这是第一行。\r\n    这是第二行。',function(err) {
	if (err) {
		console.log('写文件操作失败！');
	} else {
		console.log('写文件操作成功！');
	}
})