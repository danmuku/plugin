 <?php

include "wechat.class.php";

$options = array('token'=>'littlefreshboys', //填写你设定的key
 		'appid'=>'wxce6838b261a9f625', //填写高级调用功能的app id
 		'encodingaeskey'=>'encodingaeskey',
 		'debug' => true ,
 		'appsecret'=>'d4624c36b6795d1d99dcf0547af5443d' //填写高级调用功能的密钥
 		);

$weObj = new Wechat($options);
$ret = $weObj->valid();
if (!$ret) {
    var_dump($ret);
    exit;
}

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