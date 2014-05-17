Ext.define('ExamApp.view.Kombi', {
	extend: 'Ext.tab.Panel',
  
	xtype: 'kombi',
  
	requires: [
		'Ext.TitleBar', 
		'ExamApp.view.Main',
	],

	config: {
		fullscreen: true,
		scrollable: 'vertical', 
		tabBarPosition: 'bottom',
		
		items: [ 
			{
				title: 'Trackcharts',
				iconCls: 'star',
				
				xtype: 'main',
				itemId: 'main'
			}, {
				title: 'Info',
				iconCls: 'info',
				
				items: [
					{
					docked: 'top',
					xtype: 'titlebar',
					title: 'Info'
					}, {
					xtype: 'panel',
					html: '<p>Jana Buchbauer</p> <br> <p>jana_buchbauer@yahoo.de</p>',
					style: 'fontFamily=Verdana; fontSize=18; '
					}
				]
			}
		]
	}
});