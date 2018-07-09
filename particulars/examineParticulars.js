$(function () {
   layui.use('laydate', function () {
       var laydate = layui.laydate;

       //执行一个laydate实例
       laydate.render({
           elem: '#test1' //指定元素
       });
        //日期时间选择器
        laydate.render({
            elem: '#test2',
            type: 'datetime'
        });
   });

})