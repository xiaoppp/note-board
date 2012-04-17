
// workspace
var Workspace = function () {
    var self = this;

    this.init = function () {
    }
}

// Note item
function Note(note) {
    this.itemdata = note;
    this.id = note.ID;
    this.day = note.Day;
    this.left = note.Left;
    this.top = note.Top;
    this.content = note.Content;
    this.color = note.Color;
    this.isShowExtention = note.IsShowExtention;
    

    if (this.id == null) 
        this.id = currentsecond();
    else //whether to save this item to localitemlist, if drag, do not save, else save
        saveItemToLocal(this.itemdata);

    if (this.day == null) {
        this.day = currentday();
    }

    if (this.isShowExtention == null)
        this.isShowExtention = true;

    this._item = null;
    this._extention = null;
    this._expandlink = null;
    this._collapselink = null;
    this._removelink = null;
    this._savebutton = null;
    this._confirmmessage = null;

    this.Create = function () {

        var data = { id: this.id };

        this._item = $("#notetemplate").tmpl(data);

        this._extention = this._item.find('.extention');
        this._expandlink = this._item.find('.expandLink');
        this._collapselink = this._item.find('.collapseLink');
        this._removelink = this._item.find('.removeLink');
        this._savebutton = this._item.find('.ui-button');
        this._confirmmessage = this._item.find('.confirmMessage');

        // whether show extention
        if (this.isShowExtention) {
            this._extention.css("display", "block");
            this._collapselink.css("display", "block");
            this._expandlink.css("display", "none");
        }
        else {
            this._extention.css("display", "none");
            this._collapselink.css("display", "none");
            this._expandlink.css("display", "block");
        }


        this._item.find('.handle').css("cursor", "move");

        this._expandlink.bind(
							'click',
							$.proxy(function (e) {
							    this._extention.show(1000);
							    this._collapselink.css("display", "block");
							    this._expandlink.css("display", "none");
							    this.isShowExtention = true;
							}, this));

        this._collapselink.bind(
							'click',
							$.proxy(function (e) {
							    this._extention.hide(1000);
							    this._collapselink.css("display", "none");
							    this._expandlink.css("display", "block");
							    this.isShowExtention = false;
							}, this));

        this._removelink.bind(
							'click',
							$.proxy(function (e) {
							    var item = $("#" + this.id).detach();
							    socket.emit('delete message', this.id);
							}, this));

        this._savebutton.bind(
        'click',
        $.proxy(
        function (e) {
            this.id = this._item[0].id;
            this.left = this._item[0].offsetLeft;
            this.top = this._item[0].offsetTop;
            this.color = this._item[0].style.background.toString();
            this.content = this._item.find('.contentTxt')[0].value;

            this.itemdata =
            {
                ID: this.id,
                Left: this.left,
                Top: this.top,
                Content: this.content,
                Color: this.color,
                Day: this.day,
                IsShowExtention: this.isShowExtention
            };

            saveItemToLocal(this.itemdata);

            var url = '/note/save';

            //send this message to webserver
            socket.emit('save message', this.itemdata, $.proxy(function (status) {
                if (status) {
                    this._confirmmessage.text('save message ok');
                }
                else {
                    this._confirmmessage.text('save failed');
                }

                setTimeout($.proxy(function () {
                    this._confirmmessage.text('');
                }, this), 1000);
            }, this));
        }, this));

        // Make the item draggable
        this._item.draggable(
							{
							    helper: 'original',
							    handle: this._item.find('.handle'),
							    cursor: 'move'
							}
						);

        this._item.css(
						{
						    position: 'absolute',
						    left: this.left + 'px',
						    top: this.top + 'px',
						    background: this.color
						}
					);
        this._item.find(".extention .contentTxt")[0].value = note.Content;
        $('#workspace').append(this._item);
    };
}
