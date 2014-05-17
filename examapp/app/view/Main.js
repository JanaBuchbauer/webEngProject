Ext.define('ExamApp.view.Main', {
	extend: 'Ext.Carousel',
	xtype: 'main',
	
	requires: [
		'Ext.TitleBar',
		'ExamApp.view.ListView', 
		'ExamApp.view.VideoView'
	],
	
	config: {
		indicator: false,
		
		items: [
			{
				xtype: 'titlebar',
				cls: 'title',
				docked: 'top',
				title: 'TOP Tracks',
				
				items: [
					{
						cls: 'back',
						hidden: true,
						action: 'back',
						align: 'left',
						text: 'back'
					}
				]
			}, {
				itemId: 'listview',
				xtype: 'listview'
			}, {
				itemId: 'videoview',
				xtype: 'videoview'
			}
		]
	}
});
