$(function(){

    layui.use('laypage', function () {
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
            elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
            , count: 100 //数据总数，从服务端得到
            , theme: '#68b7e7'
            , groups:5
            , jump: function (obj) {
                console.log(obj)
            }
           
        });
    });
    $('.likeBtn').click(function () {
        console.log($(this).attr('name'))
       if ($(this).attr('name') == 1) {
          $('#yetTable').hide();
          $('#stayTable').show();
          $(this).attr('name', 2).val('已建档列表').siblings('.sup').hide();

       } else if ($(this).attr('name') == 2) {
            $('#yetTable').show();
            $('#stayTable').hide();
              $(this).attr('name', 1).val('待见档列表').siblings('.sup').show();
       }
    })

});