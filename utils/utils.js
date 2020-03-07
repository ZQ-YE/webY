var _utilsObj=function(){
    //身份证正则
    this.idcardReg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    //手机号正则
    this.mobileReg=/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
    //整数||小数正则
    this.numIntegerDecimalReg=/^[0-9]+([.]{1}[0-9]+){0,1}$/;
    //通过身份证号获取性别
    this.getSexByIdNOFun=function(IdNO){
        if (IdNO.length==18) {
            return IdNO.charAt(16)%2==0?"女":"男";
        }else if(IdNO.length==15){
            return IdNO.charAt(14)%2==0?"女":"男";
        }else{
            return "";
        }
    }
    //通过身份证号获取生日 YYYY-MM-DD
    this.getBirthdayByIdNOFun=function(IdNO){
        let birthday = "";
        if (IdNO.length==18) {
            birthday = IdNO.substr(6,8);
            return birthday.replace(/(.{4})(.{2})/,"$1-$2-");
        }else if(IdNO.length==15){
            birthday = "19"+IdNO.substr(6,6);
            return birthday.replace(/(.{4})(.{2})/,"$1-$2-");
        }else{
            return "";
        }
    }
    //  功能：根据身份证号获得出生日期
    //  参数：身份证号 psidno
    //  返回值：
    //  出生日期
    //----------------------------------------------------------
    this.GetBirthday=function(psidno) {
        var birthdayno, birthdaytemp
        if (psidno.length == 18) {
            birthdayno = psidno.substring(6, 14)
        } else if (psidno.length == 15) {
            birthdaytemp = psidno.substring(6, 12)
            birthdayno = "19" + birthdaytemp
        } else {
            //alert("错误的身份证号码，请核对！")
            return "";
        }
        var birthday = birthdayno.substring(0, 4) + "-" + birthdayno.substring(4, 6) + "-" + birthdayno.substring(6, 8)
        return birthday
    }
    //通过生日获取年龄 YYYY-MM-DD => * 岁
    this.getAgeByBirthdayFun=function(strAge){
        //var r=str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        var birArr = strAge.split("-");
        var birYear = birArr[0];
        var birMonth = birArr[1];
        var birDay = birArr[2];

        var d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1; //记得加1
        var nowDay = d.getDate();
        var returnAge;

        if (birArr == null) {
            return false
        };
        var dBir = new Date(birYear, birMonth - 1, birDay);
        if (dBir.getFullYear() == birYear && (dBir.getMonth() + 1) == birMonth && dBir.getDate() == birDay) {
            if (nowYear == birYear) {
                returnAge = 0;
            } else {
                var ageDiff = nowYear - birYear;
                if (ageDiff > 0) {
                    if (nowMonth == birMonth) {
                        var dayDiff = nowDay - birDay;
                        if (dayDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    } else {
                        var monthDiff = nowMonth - birMonth;
                        if (monthDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    }
                } else {
                    return  "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
                }
            }
            return returnAge;
        } else {
            return ("输入的日期格式错误！");
        }
    }
    //时间格式化 yyyy-MM-dd hh:mm:ss
    this.format = function(format){ 
        var o = { 
            "M+" : this.getMonth()+1, //month 
            "d+" : this.getDate(),    //day 
            "h+" : this.getHours(),   //hour 
            "m+" : this.getMinutes(), //minute 
            "s+" : this.getSeconds(), //second 
            "q+" : Math.floor((this.getMonth()+3)/3),  //quarter 
            "S" : this.getMilliseconds() //millisecond 
        } 
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1, 
        (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
        for(var k in o)if(new RegExp("("+ k +")").test(format)) 
            format = format.replace(RegExp.$1, 
            RegExp.$1.length==1 ? o[k] : 
                ("00"+ o[k]).substr((""+ o[k]).length)); 
        return format;
    }
    /**
     * 将数值四舍五入(保留2位小数)后格式化成金额形式
     *
     * param num 数值(Number或者String)
     * return 金额格式的字符串,如'1,234,567.45'
     * type String
     */
    this.formatCurrency=function(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num + '.' + cents);
    }
    /*
    * 参数说明：
    * s：要格式化的数字
    * n：保留几位小数
    * */
    this.fmoney=function(s, n) {    
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    }
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
    * */
    this.number_format=function(number, decimals, dec_point, thousands_sep, roundtag) {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        roundtag = roundtag || "ceil"; //"ceil","floor","round"
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {

                var k = Math.pow(10, prec);
                console.log();

                return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
            };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        var re = /(-?\d+)(\d{3})/;
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, "$1" + sep + "$2");
        }

        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }
    //移动到顶部
    this.toTop=function() {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    }
    //移动到底部
    this.toFooter=function() {
        $('html,body').animate({ scrollTop: $('footer').offset().top }, 800);
    }
    /*脱敏处理
        str: 传入字符串
        fixedLen: boolean 是否截取首个字符+**
        beginLen：开始位置
        endLen：结束位置  如果没有结束位置，则开始位置后的都截取替换
    */ 
    this.desensitization=function(str, fixedLen, beginLen, endLen){
        var len = str.length;
        if(!str) return;
        if(fixedLen){ return str.substr(0, 1)+"**";}
        var firstStr = str.substr(0, beginLen);
        var lastStr = '';
        var middleStr='';
        if(!!endLen){
            lastStr = str.substr(endLen);
            middleStr = str.substring(beginLen, len-Math.abs(endLen)).replace(/[\s\S]/ig, '*');
        }else{
            middleStr = str.substring(beginLen, len).replace(/[\s\S]/ig, '*');
        }
        tempStr = firstStr+middleStr+lastStr;
        return tempStr;
    }
    // 获取 url 参数值
    this.getUrlParam=function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r) return decodeURI(r[2]); return null; //返回参数值
    }
}