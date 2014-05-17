Ext.define('ExamApp.view.ListView', {
    extend: 'Ext.Container',
	
	xtype: 'listview',
 
    requires: [
		'ExamApp.model.Chart',
		'ExamApp.store.Charts',
		'Ext.dataview.DataView'
	],
 
    config: {
        title: 'Some Top Tracks',
		layout: 'fit',
		
		cls: 'listview',
		
		items: [
			{
				xtype: 'dataview',
				scrollable: {
					direction: 'vertical',
				},
				
				itemTpl: '<div style="padding-top:15px;padding-bottom:15px;clear:both;border-bottom: 1px solid #C2C2C2;"><div style="padding-bottom:3px;">{name} by {artist.name}</div><div style="padding-top:3px;">(Playcount: {playcount})</div></div>',
    
				store: 'Charts'
			}
		],
	}
});