Ext.define('ExamApp.controller.Main', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			mainView: 'main',
			listView: 'listview',
			videoView: 'videoview',
			idTxt: 'videoview textfield[name=artist]',
			btnBack: 'main button[action=back]',
			listClick: 'listview dataview'
		},
		
		control: {
			'btnBack': {
				tap: 'onBackBtnTap'
			},
			
			'listClick': {
				itemtap: 'onListClick'
			},
			
			'mainView': {
				activeitemchange: 'onCarouselChange'
			}
		},
		
		stores: [
			'ExamApp.store.Charts',
			'ExamApp.store.Videos'
		]
	},
	
	onCarouselChange: function(carousel, newVal, oldVal) {
		if(newVal.getItemId() == "listview") {
			Ext.getCmp('videopanel').setHtml('')
			this.getBtnBack().hide();
			this.getVideoView().disable();
			Ext.ComponentQuery.query('titlebar')[0].setTitle('TOP Tracks');
		} else {
			this.getBtnBack().show();
		}
	},
	
	onBackBtnTap: function() {
		Ext.getCmp('videopanel').setHtml('')
		this.getMainView().setActiveItem(0);
	},
	
	onListClick: function(view, index, item, e) {
		var rec = view.getStore().getAt(index);
		this.getVideoView().setRecord(rec);
		
		var songTitle = rec.data.name;
		Ext.ComponentQuery.query('titlebar')[0].setTitle(songTitle);
		
		var artistName = rec.data.artist.name;
		Ext.getCmp('artist').setValue(artistName);
		
		var searchST = songTitle.toLowerCase().replace(/ /g, "+");//console.log(searchST);
		
		var searchArtist = artistName.toLowerCase().replace(/ /g, "+");
		
		var searchString = searchST + "+" + searchArtist;
		
		var proxyUrl = "https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&key=AIzaSyCGtSM4q-vyQnccXg0D-Syil3yeJ685PlM&q=" + searchString;
		
		var store =  Ext.getStore('videostore');
		store.getProxy().setUrl(proxyUrl);
		
		store.load({
			callback: function(records, operations, success) {
				if (success = true) {
					var ytVideoID = records[0].data.videoId;
					
					var ytLink = "http://www.youtube.com/embed/" + ytVideoID;
					var newHtml = "<iframe width='560' height='315' src='" + ytLink + "' frameborder='0' allowfullscreen></iframe>";
					Ext.getCmp('videopanel').setHtml(newHtml);
				} else {
					Ext.Msg.alert('Error', 'Something went wrong!', Ext.emptyFn);
					console.log("error");
				}
			},
			
			scope: this
		});
		
		this.getMainView().setActiveItem(1);
	}
});