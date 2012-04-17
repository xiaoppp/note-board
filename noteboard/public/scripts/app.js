// constant values
var localitemlist = [];
var isLoad = false;

$(function () {
    setInterval(function () {
        if (isLoad) {
            $('#loading').hide();
            isLoad = false;
        }
    }, 300);

    $('#loading').bind('click', function (e) {
        $('#loading').css('display', 'none');
    });

    $("#savebutton").bind('click', function (e) {
        var itemcollection = $('.item');

        for (var i = 0; i < itemcollection.length; i++) {
            $(itemcollection[i]).find('.ui-button').trigger("click");
        }
    });

    $('#option').change(function (e) {
        var value = $('#option')[0].value;

        if (value == '0') {
            var itemcollection = $('.item');

            for (var i = 0; i < itemcollection.length; i++) {
                $(itemcollection[i]).find('.expandLink').trigger("click");
            }
        }

        if (value == '1') {
            var itemcollection = $('.item');

            for (var i = 0; i < itemcollection.length; i++) {
                $(itemcollection[i]).find('.collapseLink').trigger("click");
            }
        }
    });

    // drag icon tooltip initlize
    $('#iconbar ul li').qtip({
        style: {
            name: 'dark',
            tip: true
        },
        content: 'You can drag this tile to the workspace below',
        position: {
            corner: {
                target: 'bottomRight',
                tooltip: 'bottomLeft'
            }
        },
        show: { event: 'mouseover', delay: 100, effect: { type: 'slide', length: 330} },
        hide: { event: 'mouseout', delay: 100, effect: { type: 'slide', length: 330} }
    });



    // select items by date
    $("#workspacedate").datepicker({
        onSelect: function (dateText, inst) {
            var c = dateText.split('/');
            var month = c[0];
            var day = c[1];
            var year = c[2];
            var days1 = year * 365 + month * 30 + day;

            $(".item").detach();
        }
    });

    // init the application
    $("#workspace").droppable({
        drop: function (e, ui) {

            var itemdata =
            {
                ID: null,
                Left: ui.offset.left,
                Top: ui.offset.top - 100,
                Content: null,
                Color: null,
                Day: null,
                IsShowExtention: null
            };
            var note = new Note(itemdata);
            note.Create();
        },
        scope: 'workspace'
    });

    // init the topbar icons
    $("#noteTile").draggable({
        helper: function () {
            flag = "note";
            return '<img id="new" alt="1" src="/images/topbar/note.png" />'
        },
        scope: 'workspace',
        revert: 'invalid',
        cursor: 'move'
    });

    // init the workspace data
    var date1 = currentday();
});

var LOG = '';
function debug(msg)
{
	LOG += '<br />' + msg;
	$('#debug').html(LOG);
}
//#region test
function debugB(msg)
{
	$('#debugB').html(msg);
}
//#endregion