
// workspace
function Workspace() {
    var self = this;

    this.init = function () {
    }
}

// item
function Note() {
    var self = this;
    var id = '';
    var day = '';

    this.Create = function (newnote) {

        if (newnote == null) {
            id = currentsecond();
            day = currentday();
        }
        else {
            id = newnote.ID;
        }

        var data = { id: id };

        var _$item = $("#notetemplate").tmpl(data);

        var _$extention = _$item.find('.extention');
        var _$expandlink = _$item.find('.expandLink');
        var _$collapselink = _$item.find('.collapseLink');
        var _$removelink = _$item.find('.removeLink');
        var _$savebutton = _$item.find('.ui-button');
        var _$confirmmessage = _$item.find('.confirmMessage');

        _$item.find('.handle').css("cursor", "move");

        //        if (newnote != null) {
        //            _$extention.css("display", "none");
        //            // item tooltip
        //            _$item.find('.handle').qtip({
        //                style: {
        //                    name: 'dark',
        //                    tip: true
        //                },
        //                content: $("#itemtooltiptemplate").tmpl(newnote),
        //                position: { corner: { target: 'topRight', tooltip: 'bottomLeft'} },
        //                show: { event: 'mouseover', delay: 100, effect: { type: 'slide', length: 330} },
        //                hide: { event: 'mouseout', delay: 100, effect: { type: 'slide', length: 330} }
        //            });
        //        }

        _$expandlink.bind(
							'click',
							function (e) {
							    _$extention.show(1000);
							    _$collapselink.css("display", "block");
							    _$expandlink.css("display", "none");
							});

        _$collapselink.bind(
							'click',
							function (e) {
							    _$extention.hide(1000);
							    _$collapselink.css("display", "none");
							    _$expandlink.css("display", "block");
							});

        _$removelink.bind(
							'click',
							function (e) {
							    var item = $("#" + id).detach();
							    socket.emit('delete message', id);
							});

        _$savebutton.bind(
        'click',
        function (e) {
            var _$content = _$item.find('.contentTxt')[0].value;

            var id = _$item[0].id;
            var left = _$item[0].offsetLeft;
            var top = _$item[0].offsetTop;
            var color = _$item[0].style.background.toString();

            var data = { ID: id, Left: left, Top: top, Content: _$content, Color: color, Day: day };
            var jsondata = JSON2.stringify(data);

            var url = '/note/save';

            //send this message to webserver
            socket.emit('save message', jsondata, function (status) {
                if (status) {
                    _$confirmmessage.text('save message ok');
                }
                else {
                    _$confirmmessage.text('save failed');
                }

                setTimeout(function () {
                    _$confirmmessage.text('');
                }, 1000);
            });

            // we can also use ajax to post this data and then broadcast
            //            $.ajax({
            //                url: "/note/save",
            //                data: jsondata1,
            //                type: "POST",
            //                processData: true,
            //                timeout: 10000,
            //                dataType: "json",
            //                success: function (retvalue, status) {
            //                    alert(retvalue);
            //                },
            //                error: function (e) {
            //                    alert('404');
            //                }
            //            });
        });

        // Make the item draggable
        _$item.draggable(
							{
							    helper: 'original',
							    handle: _$item.find('.handle'),
							    cursor: 'move'
							}
						);
        return _$item;
    }

    this.Append = function (note, _$item) {
        _$item.css(
						{
						    position: 'absolute',
						    left: note.Left + 'px',
						    top: note.Top + 'px',
						    background: note.Color
						}
					);

		_$item.find(".extention .contentTxt")[0].value = note.Content;

        // put this item in local item list
        localitemlist.push(note.ID);
        $('#workspace').append(_$item);
    }
}

//function Task() {
//    var self = this;
//    var id = "";


//    this.Create = function (newtask) {
//        if (newtask == null)
//            id = currentsecond();
//        else
//            id = newtask.id;

//        var data = { id: id };
//        var _$item = $("#tasktemplate").tmpl(data);

//        var _$extention = _$item.find('.extention');
//        var _$expandlink = _$item.find('.expandLink');
//        var _$collapselink = _$item.find('.collapseLink');
//        var _$removelink = _$item.find('.removeLink');
//        var _$savebutton = _$item.find('.ui-button');
//        var _$datepicker = _$item.find('.datepicker');

//        _$item.find('.handle').css("cursor", "move");

//        if (newtask != null) {
//            _$extention.css("display", "none");
//            // item tooltip
//            //            _$item.find('.handle').qtip({
//            //                style: {
//            //                    name: 'dark',
//            //                    tip: true
//            //                },
//            //                content: $("#itemtooltiptemplate").tmpl(newtask),
//            //                position: { corner: { target: 'topRight', tooltip: 'bottomLeft'} },
//            //                show: { event: 'mouseover', delay: 100, effect: { type: 'slide', length: 330} },
//            //                hide: { event: 'mouseout', delay: 100, effect: { type: 'slide', length: 330} }
//            //            });
//        }

//        _$datepicker.datepicker({
//            inline: true
//        });
//        _$expandlink.bind(
//							'click',
//							function (e) {
//							    _$extention.show(1000);
//							    _$collapselink.css("display", "block");
//							    _$expandlink.css("display", "none");
//							}
//						);

//        _$collapselink.bind(
//							'click',
//							function (e) {
//							    _$extention.hide(1000);
//							    _$collapselink.css("display", "none");
//							    _$expandlink.css("display", "block");
//							}
//						);

//        _$removelink.bind(
//							'click',
//							function (e) {
//							    var item = $("#" + id).detach();
//							}
//						);

//        _$savebutton.bind(
//        'click',
//        function (e) {
//            var id = _$item[0].id;
//            var day = currentday();

//            var left = _$item[0].offsetLeft;
//            var top = _$item[0].offsetTop;
//            var color = _$item[0].style.background;

//            var _$name = _$item.find(".extention .nameTxt")[0].value;
//            var _$desc = _$item.find(".extention .descriptionTxt")[0].value;
//            var _$date = _$item.find(".extention .datepicker")[0].value;
//            var _$check = _$item.find(".extention .taskCheck")[0].check;

//            var pushdata = { Id: id, Day: day, Title: _$name, ExpiredDate: _$date, Description: _$desc, Top: top, Left: left, Color: color };
//            var jsondata = JSON2.stringify(pushdata);

//            alert(jsondata);

//            var url = "SubmitDataHandler.ashx";
//            $.ajax({
//                url: url,
//                data: jsondata,
//                type: "POST",
//                processData: true,
//                timeout: 10000,
//                success: function (ttt, status) {
//                    alert('123');
//                },
//                error: function (e) {
//                    alert('444');
//                }
//            });
//        });

//        //Make the item draggable
//        _$item.draggable(
//							{
//							    helper: 'original',
//							    handle: _$item.find('.handle'),
//							    cursor: 'move'
//							}
//						);

//        return _$item;
//    }

//    this.Append = function (task, _$item) {
//        _$item.css(
//						{
//						    position: 'absolute',
//						    left: task.Left + 'px',
//						    top: task.Top + 'px',
//                            background: task.Color
//						}
//					);

//        _$item.find(".extention .nameTxt")[0].value = task.Title;
//        _$item.find(".extention .descriptionTxt")[0].value = task.Description;
//        _$item.find(".extention .datepicker")[0].value = task.ExpiredDate;
//        //_$item.find(".extention .taskCheck")[0].check = task.check;

//        $('#workspace').append(_$item);
//    }
//}

