var global_pid = "";
var global_url = "";
var storageData = localStorage.weiboData ? JSON.parse(localStorage.weiboData) : [];

$(document).ready(function(){

	$(".clicker").hover(
		function () {
			if (global_url != "") {
				$('.clicker').prop('src', global_url);
			}
		},
		function () {
			//
		}
	);

	$(".copyBtn").hover(
	  	function() {
			$(this).removeAttr('data-tooltip');
	  	},
	  	function () {
			$(this).blur();
	  	}
	);

	$(".copyBtn").click(function() {
		event.preventDefault();
		$(this).prev().select();
		var dataToCpy = $(this).prev().val();
		document.execCommand('copy');
		$(this).attr("data-tooltip", "复制成功");//data-tooltip="复制成功"
		document.getSelection().removeAllRanges();
	});

	$(".btn-size").click(function () {
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		if(global_pid != ""){
			changePicSize(global_pid);
		}
	});


	$(".clicker").click(function () {
		$('#input').trigger('click');
	});

	$(".dragger").on({
	        dragleave:function(e){
	            e.preventDefault();
		e.stopPropagation();
	        },
	        drop:function(e){
	            e.preventDefault();
		e.stopPropagation();
	        },
	        dragenter:function(e){
	            e.preventDefault();
		e.stopPropagation();
	        },
	        dragover:function(e){
	            e.preventDefault();
		e.stopPropagation();
	        }
	});

	$(".res").hover(
	  function () {
		$(this).select();
	  },
	  function () {
		$(this).blur();
	  }
	);

	function pid2url(pid, type) {
		function crc32(str) {
		  str = String(str);
		  var table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
		  if (typeof(crc) == 'undefined') {
			crc = 0;
		  }
		  var x = 0
			, y = 0;
		  crc = crc ^ (-1);
		  for (var i = 0, iTop = str.length; i < iTop; i++) {
			y = (crc ^ str.charCodeAt(i)) & 0xFF;
			x = '0x' + table.substr(y * 9, 8);
			crc = (crc >>> 8) ^ x;
		  }
		  return crc ^ (-1);
		}

		var url, zone, ext;
		if (typeof(type) == 'undefined') type = 'bmiddle';
		if (pid[9] == 'w') {
		  zone = (crc32(pid) & 3) + 1;
		  ext = (pid[21] == 'g') ? 'gif' : 'jpg';
		  url = 'http://ww' + zone + '.sinaimg.cn/' + type + '/' + pid + '.' + ext;
		} else {
		  zone = ((pid.substr(-2, 2), 16) & 0xf) + 1;
		  url = 'http://ss' + zone + '.sinaimg.cn/' + type + '/' + pid + '&690';
		}
		return url;
	}

	$('#input').change(function(){
        event.preventDefault();
		var filesToUpload = document.getElementById('input').files;
		var file = filesToUpload[0];
		//console.log(file);
		if(!/image\/\w+/.test(file.type) || file == "undefined"){
			swal("文件必须为图片！");
			return false;
		}
		previewAndUpload(file);
    });

	//HTML5 paste http://www.zhihu.com/question/20893119
	$("#res_img").on("paste",function(e){
		var oe = e.originalEvent;
		var clipboardData, items, item;
		if (oe && (clipboardData = oe.clipboardData) && (items = clipboardData.items)) {
			var b = false;
			for (var i = 0, l = items.length; i < l; i++) {
			  if((item = items[i]) && item.kind == 'file' && item.type.match(/^image\//i)) {
				b = true;
				console.log(item);
				previewAndUpload(item.getAsFile());
			  } else {
				swal("您粘贴的不是图片~");
				$('#res_img').val('');
			  }
			}
			if (b) return false;
		}
	});

	$(".dragger").on("drop",function(e){
		e.preventDefault(); //取消默认浏览器拖拽效果
		var fileList = e.originalEvent.dataTransfer.files; //获取文件对象
		//检测是否是拖拽文件到页面的操作
		if(fileList.length == 0){
			return false;
		}
		//检测文件是不是图片
		if(fileList[0].type.indexOf('image') === -1  || fileList[0] == "undefined"){
			swal("您拖的不是图片~");
			return false;
		}
		//拖拉图片到浏览器，可以实现预览功能
		var img = window.webkitURL.createObjectURL(fileList[0]);
		var file = fileList[0];
		previewAndUpload(file);
	});

	function changePicSize(pid) {
		var picSizeType = $(".btn-group").children(".active").prop("value");
		var callBackImg = pid2url(pid, picSizeType);
		$('#res_img').val(callBackImg);
		$('#res_html').val('<img src="'+ callBackImg +'"/>');
		$('#res_ubb').val('[IMG]'+ callBackImg +'[/IMG');
		$('#res_md').val('![]('+ callBackImg +')');
	}

	function fillInputBlank(pid) {
		var picSizeType = $(".btn-group").children(".active").prop("value");
		var callBackImg = pid2url(pid, picSizeType);
		global_url = callBackImg;
		$('#res_img').val(callBackImg);
		$('#res_html').val('<img src="'+ callBackImg +'"/>');
		$('#res_ubb').val('[IMG]'+ callBackImg +'[/IMG]');
		$('#res_md').val('![]('+ callBackImg +')');
		$(".loader-wrap").fadeOut("fast");
		$(".copyBtn").removeClass("disabled");

		//store upload image to localStorage
		storageData.push({
			date: (new Date()).getTime(),
			imgsrc: callBackImg
		});
		localStorage.weiboData = JSON.stringify(storageData);
	}

	function previewAndUpload(file) {
		$(".loader-wrap").show();
		var reader = new FileReader();
		var imgFile;
		reader.readAsDataURL(file);
		reader.onload = function(e){
			$('.clicker').prop('src', '');
			$('.clicker').css('background-image', 'url('+ this.result + ')');
			console.log(this.result);
			$('.clicker').css('background-position', 'center');
		};
		reader.onloadend = function(e) {
			imgFile = e.target;
			var base64 = imgFile.result.split(',')[1];
			var xhr = new XMLHttpRequest();
			var data = new FormData();
			data.append('b64_data', base64);
			xhr.onreadystatechange = function () {
			  if (xhr.readyState === 4) {
				if (xhr.status === 200 ) {
				  var resText = xhr.responseText;
				  var splitIndex, rs, pid;
				  try {
					splitIndex = resText.indexOf('{"');
					rs = JSON.parse(resText.substring(splitIndex));
					pid = rs.data.pics.pic_1.pid;
					global_pid = pid;
					fillInputBlank(pid);
					return true;
				  } catch (e) {
					console.log(e);
					alert("上传失败，请登录微博后再试~");
					chrome.tabs.create({url:'http://weibo.com/?topnav=1&mod=logo'});
					window.close();
					return;
				  }
				} else {
				  swal("图片上传失败...");
				}
			  }
			};
			xhr.open('POST', 'http://picupload.service.weibo.com/interface/pic_upload.php?&mime=image%2Fjpeg&data=base64&url=0&markpos=1&logo=&nick=0&marks=1&app=miniblog');
			xhr.send(data);
		};
	}
});
