 <?php

include "wechat.class.php";

$options = array('token'=>'littlefreshboys', //填写你设定的key
 		'appid'=>'wxcc190ba360c1fac4', //填写高级调用功能的app id
 		'encodingaeskey'=>'dgHcsvFjMiQYdsHvCx7X8HzGcE50Wt2b3vad5pvJg7D',
 		'appsecret'=>'588fb22463d746004686ff90fbf69bba' //填写高级调用功能的密钥
 		);

$weObj = new Wechat($options);

$weObj->valid();

$type = $weObj->getRev()->getRevType();

switch($type) {
	case Wechat::MSGTYPE_TEXT:
		$weObj->text("hello, I'm wechat")->reply();
   		break;

   	case Wechat::MSGTYPE_EVENT:
  	 	break;

   	case Wechat::MSGTYPE_IMAGE:
   		break;

   	default:
   		$weObj->text("help info")->reply();
}